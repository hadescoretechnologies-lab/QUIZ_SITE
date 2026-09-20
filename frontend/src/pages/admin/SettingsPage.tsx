import { useState, useEffect } from 'react';
import {
  Save,
  Shield,
  CheckCircle2,
  RefreshCw,
  Lock,
  Eye,
  EyeOff,
  UserCheck,
  Clock,
  Award,
  Sparkles,
  Cpu,
  Key,
  AlertCircle,
} from 'lucide-react';
import { AdminLayout } from '@/components/layout/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/useToast';
import supabase, { isSupabaseConfigured } from '@/lib/supabase';
import {
  fetchQuizConfig,
  saveQuizConfig,
  testGeminiApiKey,
  type QuizEngineConfig,
} from '@/services/quizService';

export default function AdminSettingsPage() {
  // Quiz Rules & Parameters (Applies to All Domains)
  const [questionsPerQuizStr, setQuestionsPerQuizStr] = useState<string>('10');
  const [passingQuestionsStr, setPassingQuestionsStr] = useState<string>('5');
  const [quizTimerStr, setQuizTimerStr] = useState<string>('15');
  const [maxAttemptsStr, setMaxAttemptsStr] = useState<string>('1');

  // Gemini AI Engine & API Key
  const [geminiKeyStr, setGeminiKeyStr] = useState<string>('');
  const [maskedKeyStr, setMaskedKeyStr] = useState<string>('');
  const [showGeminiKey, setShowGeminiKey] = useState<boolean>(false);
  const [testingGemini, setTestingGemini] = useState<boolean>(false);
  const [testResult, setTestResult] = useState<{ success: boolean; model?: string; message?: string; error?: string } | null>(null);

  // Admin Account & Password Change
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [updatingPassword, setUpdatingPassword] = useState(false);
  const [showAdminPass, setShowAdminPass] = useState(false);

  const [saving, setSaving] = useState(false);
  const [configLoading, setConfigLoading] = useState(true);

  useEffect(() => {
    async function loadConfig() {
      try {
        const conf = await fetchQuizConfig();
        if (conf) {
          const qCount = conf.questions_per_quiz || 10;
          setQuestionsPerQuizStr(String(qCount));
          const pCount = conf.passing_questions_count || Math.ceil(((conf.passing_percentage || 50) / 100) * qCount);
          setPassingQuestionsStr(String(pCount));
          setQuizTimerStr(String(conf.quiz_timer_minutes || 15));
          setMaxAttemptsStr(String(conf.max_attempts || 1));
          if (conf.gemini_api_key_masked) {
            setMaskedKeyStr(conf.gemini_api_key_masked);
          }
          if (conf.gemini_api_key) {
            setGeminiKeyStr(conf.gemini_api_key);
          }
        }
      } catch (err) {
        console.warn('Config load note:', err);
      } finally {
        setConfigLoading(false);
      }
    }
    loadConfig();
  }, []);

  // Calculate parsed numerical numbers safely
  const parsedQuestionsCount = Math.max(1, Math.min(100, parseInt(questionsPerQuizStr, 10) || 10));
  const parsedPassingCount = Math.max(1, Math.min(parsedQuestionsCount, parseInt(passingQuestionsStr, 10) || 5));
  const parsedTimerMinutes = Math.max(1, Math.min(180, parseInt(quizTimerStr, 10) || 15));
  const parsedMaxAttempts = Math.max(1, Math.min(50, parseInt(maxAttemptsStr, 10) || 1));
  const currentPassingPercentage = Math.round((parsedPassingCount / parsedQuestionsCount) * 100);

  const handleTestGemini = async () => {
    setTestingGemini(true);
    setTestResult(null);
    try {
      const keyToTest = geminiKeyStr.trim() || undefined;
      const res = await testGeminiApiKey(keyToTest);
      setTestResult(res);
      if (res.success) {
        toast({
          title: 'Gemini AI Operational 🟢',
          description: res.message || 'API key validated successfully with Google Gemini.',
          variant: 'success',
        });
      } else {
        toast({
          title: 'Gemini Test Failed 🔴',
          description: res.error || 'Invalid API key or network error.',
          variant: 'destructive',
        });
      }
    } catch (err: any) {
      setTestResult({ success: false, error: err.message });
      toast({
        title: 'Gemini Test Error',
        description: err.message || 'Failed to communicate with test endpoint.',
        variant: 'destructive',
      });
    } finally {
      setTestingGemini(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const qCount = parsedQuestionsCount;
      const pCount = Math.min(qCount, parsedPassingCount);
      const timerMins = parsedTimerMinutes;
      const attemptsLimit = parsedMaxAttempts;
      const calculatedPercentage = Math.round((pCount / qCount) * 100);

      // Sanitize inputs
      setQuestionsPerQuizStr(String(qCount));
      setPassingQuestionsStr(String(pCount));
      setQuizTimerStr(String(timerMins));
      setMaxAttemptsStr(String(attemptsLimit));

      const payload: Partial<QuizEngineConfig> = {
        questions_per_quiz: qCount,
        passing_questions_count: pCount,
        passing_percentage: calculatedPercentage,
        quiz_timer_minutes: timerMins,
        max_attempts: attemptsLimit,
        ...(geminiKeyStr.trim() ? { gemini_api_key: geminiKeyStr.trim() } : {}),
      };

      await saveQuizConfig(payload);

      if (geminiKeyStr.trim()) {
        setMaskedKeyStr(`••••••••••••${geminiKeyStr.trim().slice(-4)}`);
      }

      toast({
        title: 'Settings Saved & Synced Globally',
        description: `Updated all domains: ${qCount} Questions per quiz, ${pCount}/${qCount} Correct to Pass (${calculatedPercentage}%), ${timerMins} mins timer, ${attemptsLimit} Attempt(s) per email.`,
        variant: 'success',
      });
    } catch (err: any) {
      toast({
        title: 'Save Error',
        description: err.message || 'Failed to save settings.',
        variant: 'destructive',
      });
    } finally {
      setSaving(false);
    }
  };

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPassword || newPassword.length < 6) {
      toast({
        title: 'Password Too Short',
        description: 'New password must be at least 6 characters long.',
        variant: 'destructive',
      });
      return;
    }

    if (newPassword !== confirmPassword) {
      toast({
        title: 'Password Mismatch',
        description: 'New password and confirm password do not match.',
        variant: 'destructive',
      });
      return;
    }

    setUpdatingPassword(true);
    try {
      if (isSupabaseConfigured) {
        const { error } = await supabase.auth.updateUser({ password: newPassword });
        if (error) throw error;
      }
      // Update local storage admin credentials as fallback
      localStorage.setItem('hadescore_admin_pass', newPassword);

      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');

      toast({
        title: 'Admin Password Updated',
        description: 'Your administrator account password has been updated securely.',
        variant: 'success',
      });
    } catch (err: any) {
      toast({
        title: 'Password Update Failed',
        description: err.message || 'Could not update admin password.',
        variant: 'destructive',
      });
    } finally {
      setUpdatingPassword(false);
    }
  };

  return (
    <AdminLayout
      title="Platform Settings & Quiz Rules"
      subtitle="Configure global question counts, passing marks, and attempt limits across all assessment domains"
      actions={
        <Button
          onClick={handleSave}
          disabled={saving}
          className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl gap-2 h-9 text-xs font-semibold shadow-2xs"
        >
          {saving ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Save className="w-3.5 h-3.5" />}
          Save All Settings
        </Button>
      }
    >
      <div className="space-y-6 max-w-4xl">

        {/* 1. SECTION 1: GLOBAL QUIZ & ASSESSMENT RULES */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-[0_1px_3px_0_rgba(0,0,0,0.02)] overflow-hidden">
          <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Global Quiz & Assessment Rules</h3>
                <p className="text-xs text-slate-400">Settings below apply automatically across ALL assessment domains</p>
              </div>
            </div>
            <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/60">
              All Domains Sync
            </span>
          </div>

          <div className="p-5 sm:p-6 space-y-6 text-xs">
            {/* Form Fields Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {/* Question Count Per Quiz */}
              <div className="space-y-2">
                <Label className="text-slate-800 text-xs font-bold flex items-center justify-between">
                  <span>Questions Per Quiz</span>
                  <span className="text-[10px] text-emerald-600 font-normal">All Domains</span>
                </Label>
                <div className="relative">
                  <Input
                    type="number"
                    min={1}
                    max={100}
                    value={questionsPerQuizStr}
                    onChange={(e) => setQuestionsPerQuizStr(e.target.value)}
                    className="rounded-xl border-slate-200 text-sm font-semibold h-10 pl-3 pr-12 text-slate-900 focus-visible:border-emerald-500"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs font-medium">
                    Questions
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 leading-tight">
                  Total questions served in 1 test session.
                </p>
              </div>

              {/* Passing Question Requirement */}
              <div className="space-y-2">
                <Label className="text-slate-800 text-xs font-bold flex items-center justify-between">
                  <span>Passing Score Needed</span>
                  <span className="text-[10px] text-emerald-600 font-semibold">{currentPassingPercentage}%</span>
                </Label>
                <div className="relative">
                  <Input
                    type="number"
                    min={1}
                    max={parsedQuestionsCount}
                    value={passingQuestionsStr}
                    onChange={(e) => setPassingQuestionsStr(e.target.value)}
                    className="rounded-xl border-slate-200 text-sm font-semibold h-10 pl-3 pr-14 text-slate-900 focus-visible:border-emerald-500"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs font-medium">
                    / {parsedQuestionsCount} Correct
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 leading-tight">
                  Minimum correct answers to PASS.
                </p>
              </div>

              {/* Standard Quiz Duration */}
              <div className="space-y-2">
                <Label className="text-slate-800 text-xs font-bold flex items-center justify-between">
                  <span>Test Timer Limit</span>
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                </Label>
                <div className="relative">
                  <Input
                    type="number"
                    min={1}
                    max={180}
                    value={quizTimerStr}
                    onChange={(e) => setQuizTimerStr(e.target.value)}
                    className="rounded-xl border-slate-200 text-sm font-semibold h-10 pl-3 pr-14 text-slate-900 focus-visible:border-emerald-500"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs font-medium">
                    Minutes
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 leading-tight">
                  Countdown duration per test.
                </p>
              </div>

              {/* Strict Attempt Limit per Email */}
              <div className="space-y-2">
                <Label className="text-slate-800 text-xs font-bold flex items-center justify-between">
                  <span>Attempts Per Email</span>
                  <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
                </Label>
                <div className="relative">
                  <Input
                    type="number"
                    min={1}
                    max={50}
                    value={maxAttemptsStr}
                    onChange={(e) => setMaxAttemptsStr(e.target.value)}
                    className="rounded-xl border-slate-200 text-sm font-semibold h-10 pl-3 pr-14 text-slate-900 focus-visible:border-emerald-500"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs font-medium">
                    Attempt(s)
                  </span>
                </div>
                <p className="text-[11px] text-emerald-700 font-medium leading-tight">
                  {parsedMaxAttempts === 1 ? '🔒 1 Attempt Per Email ID (Locked)' : `${parsedMaxAttempts} attempts allowed per email`}
                </p>
              </div>
            </div>

            {/* Live Summary Banner */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <div>
                  <div className="font-semibold text-slate-900 text-xs">
                    Current Global Rule Summary:
                  </div>
                  <div className="text-[11px] text-slate-600 mt-0.5">
                    Each test serves <strong>{parsedQuestionsCount} questions</strong> ({parsedTimerMinutes} mins timer). Student must score at least <strong>{parsedPassingCount} out of {parsedQuestionsCount} correct ({currentPassingPercentage}%)</strong> to Pass. Candidates get <strong>{parsedMaxAttempts} attempt max per email ID</strong>.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: GOOGLE GEMINI AI & AUTO-GENERATION ENGINE */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-[0_1px_3px_0_rgba(0,0,0,0.02)] overflow-hidden">
          <div className="p-5 sm:p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-violet-50 border border-violet-200/80 flex items-center justify-center text-violet-600 shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-slate-900 text-sm">Google Gemini AI & Auto-Generation Engine</h3>
                </div>
                <p className="text-xs text-slate-400">Configure AI model connectivity, background refills, and custom domain question synthesis</p>
              </div>
            </div>

            <div>
              {maskedKeyStr || geminiKeyStr.trim() ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Gemini AI Active
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  Dynamic Fallback Active
                </span>
              )}
            </div>
          </div>

          <div className="p-5 sm:p-6 space-y-5 text-xs">
            {/* API Key Input and Test Action */}
            <div className="space-y-2">
              <Label className="text-slate-700 font-semibold flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Key className="w-3.5 h-3.5 text-violet-500" />
                  Google Gemini API Key
                </span>
                {maskedKeyStr && (
                  <span className="text-[11px] text-slate-400 font-normal">
                    Configured: <code className="text-violet-600 font-mono font-semibold">{maskedKeyStr}</code>
                  </span>
                )}
              </Label>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                <div className="relative flex-1">
                  <Input
                    type={showGeminiKey ? 'text' : 'password'}
                    placeholder={maskedKeyStr ? 'Enter new key to replace existing' : 'Enter Google Gemini API Key (AIzaSy...)'}
                    value={geminiKeyStr}
                    onChange={(e) => setGeminiKeyStr(e.target.value)}
                    className="rounded-xl border-slate-200 h-10 text-xs font-mono pr-10 focus-visible:border-violet-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowGeminiKey(!showGeminiKey)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    {showGeminiKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                <Button
                  type="button"
                  onClick={handleTestGemini}
                  disabled={testingGemini}
                  className="bg-violet-600 hover:bg-violet-700 text-white rounded-xl gap-2 h-10 px-4 text-xs font-semibold shrink-0"
                >
                  {testingGemini ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Cpu className="w-3.5 h-3.5" />}
                  Test Connection
                </Button>
              </div>
              <p className="text-[11px] text-slate-400 leading-tight">
                Used to generate 30 high-rigor domain questions with detailed explanations. Leave blank to use our built-in dynamic engineering generator.
              </p>
            </div>

            {/* Live Test Results Alert */}
            {testResult && (
              <div className={`p-3.5 rounded-xl border flex items-start gap-2.5 ${
                testResult.success
                  ? 'bg-emerald-50/80 border-emerald-200 text-emerald-900'
                  : 'bg-rose-50/80 border-rose-200 text-rose-900'
              }`}>
                {testResult.success ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                )}
                <div className="space-y-0.5">
                  <div className="font-semibold text-xs">
                    {testResult.success ? 'Gemini AI Connectivity Verified' : 'Gemini AI Connection Failed'}
                  </div>
                  <div className="text-[11px] opacity-90">
                    {testResult.message || testResult.error}
                    {testResult.model && ` (Model: ${testResult.model})`}
                  </div>
                </div>
              </div>
            )}

            {/* Architecture Explanatory Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                <div className="font-semibold text-slate-800 text-xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  Autonomous Refill
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Scheduled job runs every 15 minutes. If any domain falls below 30 questions, questions are generated automatically.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                <div className="font-semibold text-slate-800 text-xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Zero-Downtime Fallback
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  If the Gemini API key is unset or hits Google rate limits, our built-in technical synthesizer provides 30 questions instantly without errors.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                <div className="font-semibold text-slate-800 text-xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-violet-500" />
                  Any Custom Domain
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  When candidates type custom domains (like "IoT", "Robotics", "Embedded"), questions are generated exclusively for that topic.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. SECTION 3: ADMIN ACCOUNT SECURITY & PASSWORD CHANGE */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-[0_1px_3px_0_rgba(0,0,0,0.02)] overflow-hidden">
          <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center text-slate-700 shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm">Administrator Password & Security</h3>
              <p className="text-xs text-slate-400">Update your admin login password and portal access security</p>
            </div>
          </div>

          <form onSubmit={handlePasswordChange} className="p-5 sm:p-6 space-y-4 text-xs">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label className="text-slate-700 font-semibold">New Admin Password</Label>
                <div className="relative">
                  <Input
                    type={showAdminPass ? 'text' : 'password'}
                    placeholder="Minimum 6 characters"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="rounded-xl border-slate-200 h-9 text-xs pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowAdminPass(!showAdminPass)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    {showAdminPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="space-y-1.5">
                <Label className="text-slate-700 font-semibold">Confirm New Password</Label>
                <Input
                  type={showAdminPass ? 'text' : 'password'}
                  placeholder="Re-enter new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="rounded-xl border-slate-200 h-9 text-xs"
                />
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <Button
                type="submit"
                disabled={updatingPassword || !newPassword}
                className="bg-slate-900 hover:bg-slate-800 text-white rounded-xl gap-2 h-9 text-xs font-semibold"
              >
                {updatingPassword ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Shield className="w-3.5 h-3.5" />}
                Update Password
              </Button>
            </div>
          </form>
        </div>

        {/* Bottom Save Action */}
        <div className="flex justify-end pt-2">
          <Button
            onClick={handleSave}
            disabled={saving}
            className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl gap-2 h-10 px-6 text-xs font-semibold shadow-xs"
          >
            {saving ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            Save All Settings
          </Button>
        </div>
      </div>
    </AdminLayout>
  );
}
