import { useState, useEffect } from 'react';
import { AdminLayout } from '@/components/layout/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/useToast';
import supabase, { isSupabaseConfigured } from '@/lib/supabase';
import {
  fetchQuizConfig,
  saveQuizConfig,
  type QuizEngineConfig,
} from '@/services/quizService';

// Clean StepperInput with scrolling buttons moved beside the number to prevent overlapping suffixes
interface StepperInputProps {
  value: string;
  onChange: (val: string) => void;
  min: number;
  max: number;
  suffix: string;
}

function StepperInput({ value, onChange, min, max, suffix }: StepperInputProps) {
  const numVal = parseInt(value, 10) || min;

  const handleStep = (delta: number) => {
    const next = Math.max(min, Math.min(max, numVal + delta));
    onChange(String(next));
  };

  return (
    <div className="flex items-center justify-between rounded-lg border border-slate-200 bg-white h-9 px-2.5 focus-within:border-slate-400 focus-within:ring-1 focus-within:ring-slate-400 transition-all">
      {/* Number input and dedicated stepper ("scrolling button") */}
      <div className="flex items-center gap-1.5 shrink-0">
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          value={value}
          onChange={(e) => {
            const clean = e.target.value.replace(/[^0-9]/g, '');
            onChange(clean);
          }}
          onBlur={() => {
            const parsed = parseInt(value, 10);
            if (isNaN(parsed) || parsed < min) {
              onChange(String(min));
            } else if (parsed > max) {
              onChange(String(max));
            }
          }}
          onKeyDown={(e) => {
            if (e.key === 'ArrowUp') {
              e.preventDefault();
              handleStep(1);
            } else if (e.key === 'ArrowDown') {
              e.preventDefault();
              handleStep(-1);
            }
          }}
          className="w-10 text-sm font-semibold text-slate-900 bg-transparent outline-none text-left"
        />
        {/* Dedicated Up/Down Scrolling Button - moved beside number so it never hides the suffix! */}
        <div className="flex flex-col h-6 w-4 border border-slate-200 rounded divide-y divide-slate-200 overflow-hidden bg-slate-50 shrink-0 select-none">
          <button
            type="button"
            onClick={() => handleStep(1)}
            disabled={numVal >= max}
            className="flex-1 flex items-center justify-center hover:bg-slate-200 disabled:opacity-30 disabled:hover:bg-slate-50 text-slate-600 text-[7px] leading-none transition-colors"
            title="Increase"
          >
            ▲
          </button>
          <button
            type="button"
            onClick={() => handleStep(-1)}
            disabled={numVal <= min}
            className="flex-1 flex items-center justify-center hover:bg-slate-200 disabled:opacity-30 disabled:hover:bg-slate-50 text-slate-600 text-[7px] leading-none transition-colors"
            title="Decrease"
          >
            ▼
          </button>
        </div>
      </div>

      {/* Suffix Label on the right - completely clear, NEVER obscured! */}
      <span className="text-slate-400 text-xs font-medium select-none truncate ml-2 text-right">
        {suffix}
      </span>
    </div>
  );
}

export default function AdminSettingsPage() {
  // Quiz Rules & Parameters (Applies to All Domains)
  const [questionsPerQuizStr, setQuestionsPerQuizStr] = useState<string>('10');
  const [passingQuestionsStr, setPassingQuestionsStr] = useState<string>('5');
  const [quizTimerStr, setQuizTimerStr] = useState<string>('15');
  const [maxAttemptsStr, setMaxAttemptsStr] = useState<string>('1');

  // Dynamic Webinar & WhatsApp Community Links
  const [webinarUrlStr, setWebinarUrlStr] = useState<string>('');
  const [webinarDateStr, setWebinarDateStr] = useState<string>('');
  const [webinarTimeStr, setWebinarTimeStr] = useState<string>('');
  const [whatsappUrlStr, setWhatsappUrlStr] = useState<string>('https://chat.whatsapp.com/E3OZRJip3Gx1y0XXNmKXvo');
  const [skillAssessmentUrlStr, setSkillAssessmentUrlStr] = useState<string>('https://script.google.com/macros/s/AKfycbx9AllwqUCMUYyGDoAMbjTEr4k0tL84STi_LPogc23RJfiUJNyhDEpbyRPHOwjXrK0/exec');

  // Admin Account & Password Change
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [updatingPassword, setUpdatingPassword] = useState(false);
  const [showAdminPass, setShowAdminPass] = useState(false);

  const [saving, setSaving] = useState(false);
  const [, setConfigLoading] = useState(true);

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
          if (conf.webinar_url !== undefined) {
            setWebinarUrlStr(conf.webinar_url || '');
          }
          if (conf.webinar_date !== undefined) {
            setWebinarDateStr(conf.webinar_date || '');
          }
          if (conf.webinar_time !== undefined) {
            setWebinarTimeStr(conf.webinar_time || '');
          }
          if (conf.whatsapp_community_url) {
            setWhatsappUrlStr(conf.whatsapp_community_url);
          }
          if (conf.skill_assessment_url) {
            setSkillAssessmentUrlStr(conf.skill_assessment_url);
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
        webinar_url: webinarUrlStr.trim(),
        webinar_date: webinarDateStr.trim(),
        webinar_time: webinarTimeStr.trim(),
        whatsapp_community_url: whatsappUrlStr.trim() || 'https://chat.whatsapp.com/E3OZRJip3Gx1y0XXNmKXvo',
        skill_assessment_url: skillAssessmentUrlStr.trim() || 'https://script.google.com/macros/s/AKfycbx9AllwqUCMUYyGDoAMbjTEr4k0tL84STi_LPogc23RJfiUJNyhDEpbyRPHOwjXrK0/exec',
      };

      await saveQuizConfig(payload);

      toast({
        title: 'Settings Saved',
        description: `Updated: ${qCount} Questions per quiz, ${pCount}/${qCount} Correct to Pass (${calculatedPercentage}%), ${timerMins} mins timer, ${attemptsLimit} Attempt(s) per email.`,
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

      setNewPassword('');
      setConfirmPassword('');

      toast({
        title: 'Password Updated',
        description: 'Administrator account password has been updated securely.',
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
    <AdminLayout title="Settings">
      <div className="space-y-6 max-w-4xl">

        {/* SECTION 1: ASSESSMENT RULES & PARAMETERS */}
        <div className="bg-white rounded-xl border border-slate-200/80 shadow-2xs overflow-hidden">
          <div className="p-5 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Question Count Per Quiz */}
              <div className="space-y-1.5">
                <Label className="text-slate-700 text-xs font-semibold">
                  Questions Per Quiz
                </Label>
                <StepperInput
                  value={questionsPerQuizStr}
                  onChange={setQuestionsPerQuizStr}
                  min={1}
                  max={100}
                  suffix="Questions"
                />
              </div>

              {/* Passing Question Requirement */}
              <div className="space-y-1.5">
                <Label className="text-slate-700 text-xs font-semibold">
                  Passing Score Needed
                </Label>
                <StepperInput
                  value={passingQuestionsStr}
                  onChange={setPassingQuestionsStr}
                  min={1}
                  max={parsedQuestionsCount}
                  suffix={`/ ${parsedQuestionsCount} Correct`}
                />
              </div>

              {/* Standard Quiz Duration */}
              <div className="space-y-1.5">
                <Label className="text-slate-700 text-xs font-semibold">
                  Test Timer Limit
                </Label>
                <StepperInput
                  value={quizTimerStr}
                  onChange={setQuizTimerStr}
                  min={1}
                  max={180}
                  suffix="Minutes"
                />
              </div>

              {/* Strict Attempt Limit per Email */}
              <div className="space-y-1.5">
                <Label className="text-slate-700 text-xs font-semibold">
                  Attempts Per Email
                </Label>
                <StepperInput
                  value={maxAttemptsStr}
                  onChange={setMaxAttemptsStr}
                  min={1}
                  max={50}
                  suffix="Attempt(s)"
                />
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: LIVE WEBINAR & WHATSAPP COMMUNITY LINKS */}
        <div className="bg-white rounded-xl border border-slate-200/80 shadow-2xs overflow-hidden">
          <div className="p-5 text-xs">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Webinar URL */}
              <div className="space-y-1.5">
                <Label className="text-slate-700 text-xs font-semibold flex items-center justify-between">
                  <span>Webinar Link</span>
                  {webinarUrlStr.trim() ? (
                    <a
                      href={webinarUrlStr.trim()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] text-emerald-600 hover:text-emerald-700 font-semibold underline underline-offset-2"
                    >
                      Visit ↗
                    </a>
                  ) : (
                    <span className="text-[10px] text-slate-400 font-normal">Not Set</span>
                  )}
                </Label>
                <Input
                  type="url"
                  placeholder="https://meet.google.com/..."
                  value={webinarUrlStr}
                  onChange={(e) => setWebinarUrlStr(e.target.value)}
                  className="rounded-lg border-slate-200 text-xs font-mono h-9 text-slate-900 focus-visible:border-slate-400"
                  id="admin-webinar-url-input"
                />
              </div>

              {/* Webinar Date */}
              <div className="space-y-1.5">
                <Label className="text-slate-700 text-xs font-semibold flex items-center justify-between">
                  <span>Webinar Date</span>
                  {webinarDateStr.trim() ? (
                    <span className="text-[10px] text-slate-600 font-semibold">{webinarDateStr.trim()}</span>
                  ) : (
                    <span className="text-[10px] text-slate-400 font-normal">Today</span>
                  )}
                </Label>
                <Input
                  type="date"
                  value={webinarDateStr}
                  onChange={(e) => setWebinarDateStr(e.target.value)}
                  className="rounded-lg border-slate-200 text-xs font-mono h-9 text-slate-900 focus-visible:border-slate-400"
                  id="admin-webinar-date-input"
                />
              </div>

              {/* Webinar Start Time */}
              <div className="space-y-1.5">
                <Label className="text-slate-700 text-xs font-semibold flex items-center justify-between">
                  <span>Webinar Start Time</span>
                  {webinarTimeStr.trim() ? (
                    <span className="text-[10px] text-slate-600 font-semibold">{webinarTimeStr.trim()}</span>
                  ) : (
                    <span className="text-[10px] text-slate-400 font-normal">Auto</span>
                  )}
                </Label>
                <Input
                  type="text"
                  placeholder="e.g. 18:00 or 6:00 PM"
                  value={webinarTimeStr}
                  onChange={(e) => setWebinarTimeStr(e.target.value)}
                  className="rounded-lg border-slate-200 text-xs font-mono h-9 text-slate-900 focus-visible:border-slate-400"
                  id="admin-webinar-time-input"
                />
              </div>

              {/* WhatsApp Community URL */}
              <div className="space-y-1.5">
                <Label className="text-slate-700 text-xs font-semibold flex items-center justify-between">
                  <span>WhatsApp Link</span>
                  {whatsappUrlStr.trim() ? (
                    <a
                      href={whatsappUrlStr.trim()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] text-emerald-600 hover:text-emerald-700 font-semibold underline underline-offset-2"
                    >
                      Visit ↗
                    </a>
                  ) : (
                    <span className="text-[10px] text-slate-400 font-normal">Not Set</span>
                  )}
                </Label>
                <Input
                  type="url"
                  placeholder="https://chat.whatsapp.com/..."
                  value={whatsappUrlStr}
                  onChange={(e) => setWhatsappUrlStr(e.target.value)}
                  className="rounded-lg border-slate-200 text-xs font-mono h-9 text-slate-900 focus-visible:border-slate-400"
                  id="admin-whatsapp-url-input"
                />
              </div>

              {/* Skill Assessment URL */}
              <div className="space-y-1.5 md:col-span-2">
                <Label className="text-slate-700 text-xs font-semibold flex items-center justify-between">
                  <span>Skill Assessment Link (Take Skill Assessment Now Button)</span>
                  {skillAssessmentUrlStr.trim() ? (
                    <a
                      href={skillAssessmentUrlStr.trim()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] text-emerald-600 hover:text-emerald-700 font-semibold underline underline-offset-2"
                    >
                      Visit ↗
                    </a>
                  ) : (
                    <span className="text-[10px] text-slate-400 font-normal">Not Set</span>
                  )}
                </Label>
                <Input
                  type="url"
                  placeholder="https://script.google.com/macros/s/..."
                  value={skillAssessmentUrlStr}
                  onChange={(e) => setSkillAssessmentUrlStr(e.target.value)}
                  className="rounded-lg border-slate-200 text-xs font-mono h-9 text-slate-900 focus-visible:border-slate-400"
                  id="admin-skill-assessment-url-input"
                />
              </div>
            </div>
          </div>
        </div>


        {/* SECTION 4: ADMIN PASSWORD CHANGE (Heading removed per request) */}
        <div className="bg-white rounded-xl border border-slate-200/80 shadow-2xs overflow-hidden">
          <form onSubmit={handlePasswordChange} className="p-5 space-y-4 text-xs">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label className="text-slate-700 font-semibold">New Admin Password</Label>
                <div className="relative">
                  <Input
                    type={showAdminPass ? 'text' : 'password'}
                    placeholder="Minimum 6 characters"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="rounded-lg border-slate-200 h-9 text-xs pr-14"
                  />
                  <button
                    type="button"
                    onClick={() => setShowAdminPass(!showAdminPass)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 text-xs font-medium px-1.5 py-0.5"
                  >
                    {showAdminPass ? 'Hide' : 'Show'}
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
                  className="rounded-lg border-slate-200 h-9 text-xs"
                />
              </div>
            </div>

            <div className="pt-1 flex justify-end">
              <Button
                type="submit"
                disabled={updatingPassword || !newPassword}
                className="bg-slate-900 hover:bg-slate-800 text-white rounded-lg h-9 px-4 text-xs font-semibold"
              >
                {updatingPassword ? 'Updating...' : 'Update Password'}
              </Button>
            </div>
          </form>
        </div>

        {/* Single Primary Save All Settings Action */}
        <div className="flex justify-end pt-2 pb-6">
          <Button
            onClick={handleSave}
            disabled={saving}
            className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg h-10 px-6 text-xs font-semibold shadow-xs"
          >
            {saving ? 'Saving...' : 'Save All Settings'}
          </Button>
        </div>
      </div>
    </AdminLayout>
  );
}
