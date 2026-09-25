import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Search,
  Download,
  Trash2,
  AlertCircle,
  Eye,
  Building,
  GraduationCap,
  MapPin,
  Calendar,
  User,
  Mail,
  Phone,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  X,
  Sparkles,
  Send,
  CheckCircle2,
  Clock,
  ExternalLink,
  Flame,
  Award,
  Layers,
  FileSpreadsheet,
  Check,
} from 'lucide-react';
import { AdminLayout } from '@/components/layout/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AdminTableSkeleton } from '@/components/admin/AdminTableSkeleton';
import { AdminEmptyState } from '@/components/admin/AdminEmptyState';
import { getStudentDomainDisplay } from '@/lib/domainHelper';
import {
  listStudents,
  exportStudentsCSV,
  deleteStudent,
  deleteAllStudents,
  getLocalStudents,
} from '@/services/studentService';
import { subscribeToDataChanges } from '@/lib/sync';
import supabase, { isSupabaseConfigured } from '@/lib/supabase';
import { formatDate, formatRelativeTime } from '@/lib/analytics';
import { toast } from '@/hooks/useToast';
import type { Student, StudentFilters, LeadStatus } from '@/types';

// Milestone Funnel Tabs
type FunnelTab = 'all' | 'webinar_enrolled' | 'quiz_pending';

export default function AdminStudentsPage() {
  const [searchParams] = useSearchParams();
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(searchParams.get('domain') || searchParams.get('search') || '');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [funnelTab, setFunnelTab] = useState<FunnelTab>('all');
  
  // Modals state
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [deleteStudentConfirm, setDeleteStudentConfirm] = useState<Student | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [confirmDeleteAllModal, setConfirmDeleteAllModal] = useState(false);
  const [deletingAll, setDeletingAll] = useState(false);
  const [exporting, setExporting] = useState(false);

  const initialLoadedRef = useRef(false);

  // Load students data
  const load = useCallback(async (isSilent = false) => {
    if (!isSilent && !initialLoadedRef.current) {
      setLoading(true);
    }
    try {
      if (!isSupabaseConfigured) {
        const local = getLocalStudents();
        setStudents(local);
        return;
      }
      const result = await listStudents({}, 1, 300);
      if (result && result.data) {
        setStudents(result.data as Student[]);
      }
    } catch {
      const local = getLocalStudents();
      setStudents(local);
    } finally {
      initialLoadedRef.current = true;
      if (!isSilent) {
        setLoading(false);
      }
    }
  }, []);

  useEffect(() => {
    load(false);
    const unsubscribe = subscribeToDataChanges(() => load(true));
    return () => unsubscribe();
  }, [load]);

  // Handle URL query parameters if passed from dashboard
  useEffect(() => {
    const domainQuery = searchParams.get('domain');
    if (domainQuery) {
      setSearch(domainQuery);
    }
  }, [searchParams]);

  // Determine conversion milestone for a student (simplified without stage numbers)
  const getCandidateStage = (student: Student) => {
    const lead = student.lead;
    const hasQuiz = Boolean(
      lead?.has_completed_quiz ||
      student.quiz_result ||
      lead?.quiz_correct_answers !== undefined
    );
    if (lead?.has_registered_bootcamp) {
      return {
        label: 'Webinar Enrolled',
        badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      };
    }
    if (lead?.has_viewed_report) {
      return {
        label: 'Report Viewed',
        badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
      };
    }
    if (hasQuiz) {
      return {
        label: 'Quiz Completed',
        badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      };
    }
    return {
      label: 'Registered',
      badgeColor: 'bg-slate-100 text-slate-600 border-slate-200',
    };
  };

  // 1-Click WhatsApp Helper
  const openWhatsApp = (student: Student) => {
    const rawMobile = student.mobile?.replace(/[^0-9]/g, '').slice(-10);
    if (!rawMobile) {
      toast({
        title: 'Mobile number missing',
        description: 'Candidate does not have a valid mobile number.',
        variant: 'destructive',
      });
      return;
    }
    const domain = getStudentDomainDisplay(student).name;
    const name = student.full_name?.split(' ')[0] || 'Candidate';
    const text = encodeURIComponent(
      `Hi ${name}! Greetings from HADESCORE. We noticed your interest in the ${domain} assessment. Would you like details on our upcoming live masterclass and career tracks?`
    );
    window.open(`https://wa.me/91${rawMobile}?text=${text}`, '_blank');
  };

  // Funnel counts calculation
  const funnelCounts = useMemo(() => {
    let webinarEnrolled = 0;
    let quizPending = 0;

    students.forEach((s) => {
      const hasQuiz = Boolean(s.lead?.has_completed_quiz || s.quiz_result || s.lead?.quiz_correct_answers !== undefined);
      if (s.lead?.has_registered_bootcamp) webinarEnrolled++;
      if (!hasQuiz) quizPending++;
    });

    return {
      all: students.length,
      webinar_enrolled: webinarEnrolled,
      quiz_pending: quizPending,
    };
  }, [students]);

  // Filter students based on search, funnel tab, and selected calendar date
  const filteredStudents = useMemo(() => {
    let list = [...students];

    // Funnel Tab filter
    if (funnelTab === 'webinar_enrolled') {
      list = list.filter((s) => Boolean(s.lead?.has_registered_bootcamp));
    } else if (funnelTab === 'quiz_pending') {
      list = list.filter((s) => !s.lead?.has_completed_quiz && !s.quiz_result && s.lead?.quiz_correct_answers === undefined);
    }

    // Search filter
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (s) =>
          s.full_name?.toLowerCase().includes(q) ||
          s.email?.toLowerCase().includes(q) ||
          s.college?.toLowerCase().includes(q) ||
          s.branch?.toLowerCase().includes(q) ||
          s.mobile?.includes(q) ||
          getStudentDomainDisplay(s).name.toLowerCase().includes(q)
      );
    }

    // Calendar Date filter
    if (selectedDate) {
      list = list.filter((s) => {
        if (!s.created_at) return false;
        try {
          return new Date(s.created_at).toISOString().slice(0, 10) === selectedDate;
        } catch {
          return false;
        }
      });
    }

    // Sort newest first
    return list.sort((a, b) => new Date(b.created_at || 0).getTime() - new Date(a.created_at || 0).getTime());
  }, [students, funnelTab, search, selectedDate]);

  // Export updated Excel CSV
  const handleExport = async () => {
    setExporting(true);
    try {
      const csv = await exportStudentsCSV({ search: search || undefined }, students);
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      const timeStr = new Date().toTimeString().slice(0, 8).replace(/:/g, '');
      a.download = `hadescore_candidates_${new Date().toISOString().slice(0, 10)}_${timeStr}.csv`;
      a.click();
      toast({
        title: 'Excel / CSV Export Ready',
        description: 'Updated candidate dataset downloaded successfully.',
        variant: 'success',
      });
    } catch {
      toast({
        title: 'Export Failed',
        description: 'Could not generate CSV export. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setExporting(false);
    }
  };

  // Delete single student
  const handleDeleteStudent = async (studentId: string) => {
    setDeletingId(studentId);
    try {
      await deleteStudent(studentId);
      setStudents((prev) => prev.filter((s) => s.id !== studentId));
      if (selectedStudent?.id === studentId) setSelectedStudent(null);
      setDeleteStudentConfirm(null);
      toast({
        title: 'Candidate Deleted',
        description: 'Record has been removed permanently from students and leads directory.',
        variant: 'success',
      });
    } catch (err: any) {
      toast({
        title: 'Delete Failed',
        description: err.message || 'Could not delete record.',
        variant: 'destructive',
      });
    } finally {
      setDeletingId(null);
    }
  };

  // Delete all students
  const handleDeleteAll = async () => {
    setDeletingAll(true);
    try {
      const ids = students.map((s) => s.id);
      await deleteAllStudents(ids);
      setStudents([]);
      setSelectedStudent(null);
      setConfirmDeleteAllModal(false);
      toast({
        title: 'All Records Cleared',
        description: 'Directory has been reset successfully.',
        variant: 'success',
      });
    } catch (err: any) {
      toast({
        title: 'Action Failed',
        description: err.message || 'Could not delete all students.',
        variant: 'destructive',
      });
    } finally {
      setDeletingAll(false);
    }
  };

  return (
    <AdminLayout
      title="Leads"
      subtitle="Directory of candidate assessments, domains and conversion milestones"
      actions={
        <div className="flex items-center gap-2">
          {/* Download Complete Excel / CSV */}
          <Button
            size="sm"
            onClick={handleExport}
            disabled={exporting || students.length === 0}
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-sm shadow-emerald-600/20"
          >
            <Download className="w-3.5 h-3.5" />
            {exporting ? 'Generating Excel...' : 'Export Excel / CSV'}
          </Button>

          {/* Delete All Records Button */}
          {students.length > 0 && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => setConfirmDeleteAllModal(true)}
              className="border-rose-200 text-rose-600 hover:bg-rose-50 hover:border-rose-300 font-medium text-xs flex items-center gap-1.5"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear Directory</span>
            </Button>
          )}
        </div>
      }
    >
      {/* ── Top Bar: Funnel Filter Tabs ──────────────────────────────── */}
      <div className="bg-white rounded-xl border border-slate-200/80 p-1.5 shadow-2xs mb-3">
        <div className="flex items-center gap-1 overflow-x-auto scrollbar-none">
          {[
            { id: 'all', label: 'All Candidates', count: funnelCounts.all },
            { id: 'webinar_enrolled', label: 'Webinar Enrolled', count: funnelCounts.webinar_enrolled },
            { id: 'quiz_pending', label: 'Quiz Pending', count: funnelCounts.quiz_pending },
          ].map((tab) => {
            const isActive = funnelTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setFunnelTab(tab.id as FunnelTab)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Controls Bar: Clean Search & Date Filters ─────────────────── */}
      <div className="bg-white rounded-xl border border-slate-200/80 p-2.5 shadow-2xs mb-3">
        <div className="flex flex-col sm:flex-row gap-2.5 items-center justify-between">
          {/* Search Box with ample padding so icon and placeholder never overlap */}
          <div className="relative w-full sm:max-w-md flex items-center">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search candidate, mobile, domain..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-8 h-9 text-xs rounded-lg bg-slate-50/80 border border-slate-200/80 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-1 focus:ring-slate-400 transition-colors"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5 rounded-full"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Simple Clean Date Picker */}
          <div className="flex items-center gap-1.5 bg-slate-100/80 px-2.5 py-1 rounded-lg border border-slate-200/60 self-start sm:self-auto">
            <span className="text-[11px] font-medium text-slate-500">Date:</span>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="bg-white text-slate-700 text-xs rounded px-2 py-0.5 border border-slate-200 shadow-2xs focus:outline-none focus:ring-1 focus:ring-slate-400 font-mono"
            />
            {selectedDate && (
              <button
                onClick={() => setSelectedDate('')}
                title="Clear date filter"
                className="p-0.5 text-slate-400 hover:text-slate-600 rounded"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ── Main Compact Table (Guaranteed 100% Desktop Fit) ───────────── */}
      <div className="bg-white rounded-xl border border-slate-200/80 shadow-2xs overflow-hidden">
        <div className="w-full max-h-[calc(100vh-275px)] min-h-[420px] overflow-y-auto overflow-x-auto scrollbar-thin">
          <table className="w-full text-left border-collapse table-fixed min-w-[750px] xl:min-w-full">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-[11px] font-semibold text-slate-600 uppercase tracking-wider sticky top-0 z-20 shadow-2xs">
                <th className="px-3.5 py-2.5 w-[25%]">Candidate</th>
                <th className="px-3 py-2.5 w-[20%]">Contact & WhatsApp</th>
                <th className="px-3 py-2.5 w-[22%]">Domain</th>
                <th className="px-3 py-2.5 w-[15%]">Quiz Score</th>
                <th className="px-3 py-2.5 w-[12%]">Milestone</th>
                <th className="px-3 py-2.5 text-right w-[6%]">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              {loading ? (
                <tr>
                  <td colSpan={6} className="p-0">
                    <AdminTableSkeleton rows={6} columns={6} />
                  </td>
                </tr>
              ) : filteredStudents.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-12">
                    <AdminEmptyState
                      title="No candidates found"
                      description={
                        search
                          ? `No candidates match "${search}". Try adjusting your search query.`
                          : selectedDate
                          ? `No candidates registered on ${selectedDate}.`
                          : 'No candidates match your selected filters.'
                      }
                      actionLabel="Reset Filters"
                      onAction={() => {
                        setSearch('');
                        setSelectedDate('');
                        setFunnelTab('all');
                      }}
                    />
                  </td>
                </tr>
              ) : (
                filteredStudents.map((student) => {
                  const domainInfo = getStudentDomainDisplay(student);
                  const stage = getCandidateStage(student);
                  const lead = student.lead;
                  const quizResult = student.quiz_result;

                  // Compute quiz score metrics
                  const hasQuiz = Boolean(lead?.has_completed_quiz || quizResult || lead?.quiz_correct_answers !== undefined);
                  const correctAnswers = quizResult?.correct_answers ?? lead?.quiz_correct_answers;
                  const totalQuestions = quizResult?.total_questions ?? lead?.quiz_total_questions ?? 10;
                  
                  let displayPercentage: number | null = null;
                  if (quizResult?.percentage !== undefined && quizResult?.percentage !== null) {
                    displayPercentage = Number(quizResult.percentage);
                  } else if (lead?.quiz_percentage !== undefined && lead?.quiz_percentage !== null) {
                    displayPercentage = Number(lead.quiz_percentage);
                  } else if (correctAnswers !== undefined && correctAnswers !== null && totalQuestions > 0) {
                    displayPercentage = Math.round((Number(correctAnswers) / Number(totalQuestions)) * 100);
                  } else if (hasQuiz) {
                    displayPercentage = 0;
                  }

                  return (
                    <tr
                      key={student.id}
                      className="hover:bg-slate-50/80 transition-colors duration-150"
                    >
                      {/* 1. Candidate Name (Email removed from table UI, kept in Excel CSV) */}
                      <td className="px-3.5 py-2.5">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className="w-7 h-7 rounded-lg bg-slate-100 text-slate-700 border border-slate-200 flex items-center justify-center font-bold text-xs shrink-0">
                            {student.full_name?.charAt(0)?.toUpperCase() || 'C'}
                          </div>
                          <p className="font-semibold text-slate-900 text-xs truncate" title={student.full_name || 'Anonymous Candidate'}>
                            {student.full_name || 'Anonymous Candidate'}
                          </p>
                        </div>
                      </td>

                      {/* 2. Contact & Clean WhatsApp Button */}
                      <td className="px-3 py-2.5 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-slate-700 font-medium text-[11px] shrink-0">
                            {student.mobile ? `+91 ${student.mobile}` : '—'}
                          </span>
                          {student.mobile && (
                            <button
                              onClick={() => openWhatsApp(student)}
                              className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 transition-colors shrink-0"
                              title="Direct WhatsApp Chat"
                            >
                              WhatsApp
                            </button>
                          )}
                        </div>
                      </td>

                      {/* 3. Domain (College removed from table UI, kept in Excel CSV) */}
                      <td className="px-3 py-2.5">
                        <span
                          className="inline-block px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200/80 truncate max-w-full"
                          title={domainInfo.name}
                        >
                          {domainInfo.name}
                        </span>
                      </td>

                      {/* 4. Quiz Score (Pure percentage, handles 0%, never shows "Done") */}
                      <td className="px-3 py-2.5 whitespace-nowrap">
                        {displayPercentage !== null ? (
                          <div className="flex items-center gap-1.5">
                            <span
                              className={`px-1.5 py-0.5 rounded text-[11px] font-bold border ${
                                displayPercentage >= 80
                                  ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                                  : displayPercentage >= 50
                                  ? 'bg-amber-50 text-amber-700 border-amber-200'
                                  : 'bg-rose-50 text-rose-700 border-rose-200'
                              }`}
                            >
                              {displayPercentage}%
                            </span>
                            {correctAnswers !== undefined && correctAnswers !== null && (
                              <span className="text-[11px] text-slate-500 font-mono font-medium">
                                {correctAnswers}/{totalQuestions}
                              </span>
                            )}
                          </div>
                        ) : (
                          <span className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-400 border border-slate-200 text-[10px] font-medium">
                            Pending
                          </span>
                        )}
                      </td>

                      {/* 5. Milestone */}
                      <td className="px-3 py-2.5 whitespace-nowrap">
                        <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold border ${stage.badgeColor}`}>
                          {stage.label}
                        </span>
                      </td>

                      {/* 6. Actions */}
                      <td className="px-3 py-2.5 text-right whitespace-nowrap">
                        <div className="flex items-center justify-end gap-1">
                          <button
                            onClick={() => setSelectedStudent(student)}
                            className="p-1 rounded text-slate-400 hover:text-emerald-700 hover:bg-emerald-50 transition-colors"
                            title="View Details"
                          >
                            <Eye className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => setDeleteStudentConfirm(student)}
                            disabled={deletingId === student.id}
                            className="p-1 rounded text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors disabled:opacity-50"
                            title="Delete Record"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── View Full Candidate Profile Modal ───────────────────────── */}
      {selectedStudent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 relative space-y-5">
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-100 text-emerald-800 border border-emerald-200/80 flex items-center justify-center font-bold text-lg shadow-2xs">
                  {selectedStudent.full_name?.charAt(0)?.toUpperCase() || 'C'}
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    {selectedStudent.full_name}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    ID: {selectedStudent.id} • Registered: {formatDate(selectedStudent.created_at)}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedStudent(null)}
                className="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Section 1: Academic & Demographic Profile */}
            <div>
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-indigo-500" />
                <span>Academic & Demographic Details</span>
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-slate-50/70 p-3.5 rounded-xl border border-slate-200/60 text-xs">
                <div>
                  <span className="text-slate-400 block text-[11px]">College / University</span>
                  <strong className="text-slate-800 font-semibold">{selectedStudent.college || '—'}</strong>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Branch / Degree</span>
                  <strong className="text-slate-800 font-semibold">{selectedStudent.branch || '—'}</strong>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Academic Year</span>
                  <strong className="text-slate-800 font-semibold">{selectedStudent.academic_year || '—'}</strong>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">State & City</span>
                  <strong className="text-slate-800 font-semibold">
                    {selectedStudent.city ? `${selectedStudent.city}, ` : ''}{selectedStudent.state || '—'}
                  </strong>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Graduation Year</span>
                  <strong className="text-slate-800 font-semibold">{selectedStudent.graduation_year || '—'}</strong>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">LinkedIn Profile</span>
                  {selectedStudent.linkedin_url ? (
                    <a
                      href={selectedStudent.linkedin_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-600 hover:underline font-medium inline-flex items-center gap-1"
                    >
                      <span>View Profile</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  ) : (
                    <span className="text-slate-400">—</span>
                  )}
                </div>
              </div>
            </div>

            {/* Modal Section 2: Technical Assessment & Quiz Results */}
            <div>
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-emerald-500" />
                <span>Technical Assessment & Quiz Metrics</span>
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50/70 p-3.5 rounded-xl border border-slate-200/60 text-xs">
                <div>
                  <span className="text-slate-400 block text-[11px]">Selected Domain</span>
                  <strong className="text-slate-800 font-semibold flex items-center gap-1 mt-0.5">
                    <span>{getStudentDomainDisplay(selectedStudent).icon}</span>
                    <span>{getStudentDomainDisplay(selectedStudent).name}</span>
                  </strong>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Quiz Attempt</span>
                  <strong className="text-slate-800 font-semibold">
                    {selectedStudent.lead?.has_completed_quiz || selectedStudent.quiz_result
                      ? 'Completed'
                      : 'Not Attempted / Pending'}
                  </strong>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Score Obtained</span>
                  <strong className="text-slate-800 font-semibold">
                    {selectedStudent.quiz_result?.percentage !== undefined
                      ? `${selectedStudent.quiz_result.percentage}% (${selectedStudent.quiz_result.correct_answers || 0}/${selectedStudent.quiz_result.total_questions || 10})`
                      : selectedStudent.lead?.quiz_correct_answers !== undefined
                      ? `${selectedStudent.lead.quiz_percentage || 0}% (${selectedStudent.lead.quiz_correct_answers}/${selectedStudent.lead.quiz_total_questions || 10})`
                      : '—'}
                  </strong>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Skill Assessment Level</span>
                  <strong className="text-slate-800 font-semibold">
                    {selectedStudent.quiz_result?.skill_level || (selectedStudent.lead?.lead_score ?? 0 >= 80 ? 'Advanced' : 'Standard')}
                  </strong>
                </div>
              </div>
            </div>

            {/* Modal Section 3: Conversion & Marketing Intelligence */}
            <div>
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-purple-500" />
                <span>Lead & Conversion Journey</span>
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-slate-50/70 p-3.5 rounded-xl border border-slate-200/60 text-xs">
                <div>
                  <span className="text-slate-400 block text-[11px]">Conversion Milestone</span>
                  <strong className="text-slate-800 font-semibold">{getCandidateStage(selectedStudent).label}</strong>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Lead Status & Score</span>
                  <strong className="text-slate-800 font-semibold">
                    {selectedStudent.lead?.lead_status || 'NURTURE'} ({Math.min(100, Math.max(0, Number(selectedStudent.lead?.lead_score) || 0))}/100)
                  </strong>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Webinar Enrolled</span>
                  <strong className="text-slate-800 font-semibold">
                    {selectedStudent.lead?.has_registered_bootcamp ? 'Yes (Enrolled)' : 'No'}
                  </strong>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">WhatsApp Opt-in</span>
                  <strong className="text-slate-800 font-semibold">
                    {selectedStudent.whatsapp_opt_in ? 'Yes (Opted In)' : 'No'}
                  </strong>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Campaign / Referral</span>
                  <strong className="text-slate-800 font-semibold">
                    {selectedStudent.utm_campaign || selectedStudent.referral_code || selectedStudent.utm_source || 'Direct'}
                  </strong>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Last Activity</span>
                  <strong className="text-slate-800 font-semibold">
                    {selectedStudent.lead?.last_activity_at
                      ? formatRelativeTime(selectedStudent.lead.last_activity_at)
                      : '—'}
                  </strong>
                </div>
              </div>
              {selectedStudent.lead?.qualification_reason && (
                <p className="mt-2 text-[11px] text-slate-500 bg-amber-50/60 p-2.5 rounded-lg border border-amber-100">
                  <span className="font-bold text-amber-800">Qualification Note: </span>
                  {selectedStudent.lead.qualification_reason}
                </p>
              )}
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-between pt-3 border-t border-slate-100">
              <div className="flex items-center gap-2">
                {selectedStudent.mobile && (
                  <Button
                    size="sm"
                    onClick={() => openWhatsApp(selectedStudent)}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center gap-1.5 shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>WhatsApp Candidate</span>
                  </Button>
                )}
                {selectedStudent.mobile && (
                  <a
                    href={`tel:${selectedStudent.mobile}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-slate-400" />
                    <span>Call</span>
                  </a>
                )}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelectedStudent(null)}
                className="text-xs"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* ── Single Student Delete Confirmation Modal ─────────────────── */}
      {deleteStudentConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xl max-w-md w-full p-6 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 border border-rose-100 flex items-center justify-center">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">Delete Candidate Record?</h3>
              <p className="text-xs text-slate-500 mt-1">
                Are you sure you want to permanently delete{' '}
                <strong className="text-slate-800">{deleteStudentConfirm.full_name}</strong>? All associated quiz attempts, lead scores, and reports will be removed.
              </p>
            </div>
            <div className="flex items-center justify-end gap-2 pt-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setDeleteStudentConfirm(null)}
                disabled={Boolean(deletingId)}
                className="text-xs"
              >
                Cancel
              </Button>
              <Button
                size="sm"
                onClick={() => handleDeleteStudent(deleteStudentConfirm.id)}
                disabled={Boolean(deletingId)}
                className="bg-rose-600 hover:bg-rose-700 text-white font-semibold text-xs"
              >
                {deletingId ? 'Deleting...' : 'Confirm Delete'}
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* ── Delete All Confirmation Modal ────────────────────────────── */}
      {confirmDeleteAllModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xl max-w-md w-full p-6 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-700 border border-rose-200 flex items-center justify-center">
              <Trash2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">Clear Entire Candidate Directory?</h3>
              <p className="text-xs text-slate-500 mt-1">
                This will permanently delete all <strong className="text-slate-900">{students.length} candidates</strong> from both Students and Leads database. This action cannot be undone.
              </p>
            </div>
            <div className="flex items-center justify-end gap-2 pt-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setConfirmDeleteAllModal(false)}
                disabled={deletingAll}
                className="text-xs"
              >
                Cancel
              </Button>
              <Button
                size="sm"
                onClick={handleDeleteAll}
                disabled={deletingAll}
                className="bg-rose-600 hover:bg-rose-700 text-white font-semibold text-xs"
              >
                {deletingAll ? 'Clearing All...' : 'Yes, Delete All'}
              </Button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
