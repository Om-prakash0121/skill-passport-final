import { Link } from "react-router-dom";
import {
  AlertTriangle,
  Send,
  ScanLine,
  FileCheck2,
  Rocket,
  Check,
  X,
  ArrowRight,
  Sparkles,
  Star,
} from "lucide-react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Pill = ({ children, color = "bg-[#FFD600]" }) => (
  <span
    className={`inline-block ${color} border-[3px] border-black px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest`}
  >
    {children}
  </span>
);

export default function Landing() {
  return (
    <div className="bg-white text-black" data-testid="landing-page">
      <Nav />

      {/* ──────────── HERO ──────────── */}
      <section className="relative border-b-4 border-black overflow-hidden">
        <div className="grid-bg absolute inset-0 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-5 md:px-10 py-16 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <Pill>For Frontend Devs · 18–26</Pill>
            <h1 className="font-display uppercase text-5xl sm:text-6xl md:text-7xl lg:text-[88px] leading-[0.92] mt-5">
              Stop applying{" "}
              <span className="bg-[#FFD600] px-2 border-4 border-black inline-block">
                blindly.
              </span>
              <br />
              Know if you’re{" "}
              <span className="text-[#FF331F]">job-ready.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg md:text-xl text-zinc-700 leading-relaxed">
              <span className="font-bold text-black">
                Project banaya, par confidence nahi?
              </span>{" "}
              Get your project, GitHub & resume reviewed by real
              experts — receive a brutal{" "}
              <span className="underline decoration-[#FF331F] decoration-4 underline-offset-4">
                job-readiness score
              </span>{" "}
              in 48 hours.
            </p>

            <div className="mt-9 flex flex-wrap gap-4 items-center">
              <Link
                to="/apply"
                className="btn-brut"
                data-testid="hero-cta-apply-button"
              >
                Get My Project Reviewed <ArrowRight size={20} strokeWidth={3} />
              </Link>
              <a
                href="#sample-report"
                className="btn-brut btn-brut-white"
                data-testid="hero-cta-sample-button"
              >
                See Sample Report
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4 font-mono text-xs uppercase tracking-widest text-zinc-600">
              <span className="flex items-center gap-1">
                <Check size={16} strokeWidth={3} className="text-[#FF331F]" />
                No course
              </span>
              <span className="flex items-center gap-1">
                <Check size={16} strokeWidth={3} className="text-[#FF331F]" />
                No fluff
              </span>
              <span className="flex items-center gap-1">
                <Check size={16} strokeWidth={3} className="text-[#FF331F]" />
                Only real feedback
              </span>
            </div>
          </div>

          {/* Right side — brutalist STAMP card */}
          <div className="lg:col-span-5 relative">
            <div className="brut-card p-8 relative">
              <div className="flex items-center justify-between font-mono text-xs uppercase tracking-widest">
                <span>Passport_No</span>
                <span className="text-[#FF331F]">#SPP-2026</span>
              </div>
              <div className="mt-4 font-mono text-xs text-zinc-500">
                {">"} candidate_status
              </div>
              <div className="font-display text-5xl md:text-6xl mt-1">
                NEEDS<br />WORK.
              </div>

              <div className="mt-6 grid grid-cols-3 gap-2 font-mono text-xs">
                <div className="border-[3px] border-black p-2">
                  <div className="text-zinc-500">CODE</div>
                  <div className="text-xl font-bold">72</div>
                </div>
                <div className="border-[3px] border-black bg-[#FFD600] p-2">
                  <div>UI/UX</div>
                  <div className="text-xl font-bold">81</div>
                </div>
                <div className="border-[3px] border-black p-2">
                  <div className="text-zinc-500">LOGIC</div>
                  <div className="text-xl font-bold">54</div>
                </div>
              </div>

              <div className="mt-6 border-t-[3px] border-black pt-4 font-mono text-sm">
                <div className="text-zinc-500">FINAL_SCORE</div>
                <div className="font-display text-7xl leading-none">
                  68<span className="text-2xl text-zinc-400">/100</span>
                </div>
              </div>

              {/* Stamp */}
              <div className="absolute -top-6 -right-6 stamp-wobble">
                <div className="border-4 border-[#FF331F] text-[#FF331F] font-display uppercase px-4 py-2 rounded-full bg-white">
                  <div className="text-[10px] tracking-widest">Reviewed by</div>
                  <div className="text-lg leading-none">SKILL/PROOF</div>
                </div>
              </div>
            </div>

            <div className="mt-5 font-mono text-xs text-zinc-600 flex items-center gap-2">
              <Sparkles size={14} strokeWidth={3} />
              <span>Real format. Real feedback. Real numbers.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────── MARQUEE ──────────── */}
      <div className="border-b-4 border-black bg-black text-white py-3 overflow-hidden">
        <div className="marquee-track font-display uppercase text-2xl md:text-3xl tracking-tight">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="flex">
              {[
                "Skill Proof Passport",
                "Brutal Reviews",
                "Skill Proof Passport",
                "48 Hours",
                "Skill Proof Passport",
                "Real Scores",
                "Skill Proof Passport",
                "No Fluff",
              ].map((t, j) => (
                <span key={j} className="px-8 flex items-center gap-8">
                  {t}
                  <Star size={18} className="text-[#FFD600]" strokeWidth={3} />
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ──────────── PAIN ──────────── */}
      <section
        className="border-b-4 border-black bg-[#F4F4F5] py-20 md:py-28"
        data-testid="pain-section"
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <Pill color="bg-[#FF331F] text-white">The Real Problem</Pill>
          <h2 className="font-display uppercase text-4xl sm:text-5xl md:text-6xl mt-5 max-w-3xl leading-none">
            Sab kuch kiya, phir bhi{" "}
            <span className="bg-black text-white px-2">no reply?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              {
                t: "Applied to 50+ jobs, zero replies?",
                d: "Aapka resume ATS bots ke paas atak raha hai. Recruiter ne aapki line bhi nahi padhi.",
              },
              {
                t: "Project bana hai, par confidence nahi?",
                d: "You finished the YouTube clone tutorial. Now you’re stuck wondering — is it actually good?",
              },
              {
                t: "Interview tak baat hi nahi pohchti?",
                d: "Problem effort ka nahi hai. Problem proof ka hai. Recruiters can’t see what you can do.",
              },
            ].map((p, i) => (
              <div
                key={i}
                className="brut-card p-7 bg-black text-white"
                data-testid={`pain-card-${i}`}
              >
                <AlertTriangle
                  size={32}
                  strokeWidth={3}
                  className="text-[#FFD600]"
                />
                <h3 className="font-display text-2xl mt-4 leading-tight uppercase">
                  {p.t}
                </h3>
                <p className="mt-3 text-zinc-300 leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 border-l-8 border-[#FF331F] pl-6 max-w-2xl">
            <p className="font-display text-2xl md:text-3xl leading-tight">
              The problem is NOT your effort.<br />
              The problem is{" "}
              <span className="bg-[#FFD600] px-2">lack of proof.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ──────────── SOLUTION ──────────── */}
      <section
        className="border-b-4 border-black bg-white py-20 md:py-28 relative overflow-hidden"
        data-testid="solution-section"
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <Pill>The Fix</Pill>
            <h2 className="font-display uppercase text-4xl sm:text-5xl md:text-6xl leading-none mt-5">
              We don’t teach.<br />
              We{" "}
              <span className="text-[#FF331F]">prove</span> you.
            </h2>
            <p className="mt-6 text-lg text-zinc-700 leading-relaxed max-w-md">
              Get your code, GitHub, and resume audited by senior frontend
              engineers. Walk away knowing exactly what to fix — and what your
              real job-readiness score is.
            </p>
          </div>

          <div className="md:col-span-7 space-y-4">
            {[
              {
                k: "01",
                t: "Verify your project quality",
                d: "Senior devs review your code structure, components, state, and Git hygiene.",
                bg: "bg-white",
              },
              {
                k: "02",
                t: "Identify real skill gaps",
                d: "Pinpoint the exact reason recruiters are skipping you — and how to fix it fast.",
                bg: "bg-[#FFD600]",
              },
              {
                k: "03",
                t: "Understand what recruiters see",
                d: "Your resume + GitHub from a hiring manager’s POV. Honest. Specific. Actionable.",
                bg: "bg-white",
              },
            ].map((step, i) => (
              <div
                key={i}
                className={`brut-card ${step.bg} p-6 flex items-start gap-5`}
                data-testid={`solution-step-${i}`}
              >
                <div className="font-display text-5xl md:text-6xl text-[#FF331F] leading-none">
                  {step.k}
                </div>
                <div>
                  <h3 className="font-display text-xl uppercase">{step.t}</h3>
                  <p className="text-zinc-700 mt-1">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────── HOW IT WORKS ──────────── */}
      <section
        className="border-b-4 border-black bg-black text-white py-20 md:py-28"
        data-testid="how-section"
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <Pill color="bg-[#FFD600]">Process</Pill>
          <h2 className="font-display uppercase text-4xl sm:text-5xl md:text-6xl mt-5 leading-none">
            How it works.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-12">
            {[
              {
                i: Send,
                t: "Submit",
                d: "Drop your GitHub, project link & resume.",
              },
              {
                i: ScanLine,
                t: "Review",
                d: "We audit code, UI, structure & resume.",
              },
              {
                i: FileCheck2,
                t: "Report",
                d: "Detailed PDF with score & action items.",
              },
              {
                i: Rocket,
                t: "Apply",
                d: "Apply with confidence. Land interviews.",
              },
            ].map((s, i) => {
              const Icon = s.i;
              return (
                <div
                  key={i}
                  className="border-4 border-white p-6 bg-black hover:bg-[#FF331F] transition-colors"
                  data-testid={`how-step-${i}`}
                >
                  <div className="font-mono text-xs text-zinc-400">
                    STEP_0{i + 1}
                  </div>
                  <Icon
                    size={36}
                    strokeWidth={2.5}
                    className="mt-3 text-[#FFD600]"
                  />
                  <h3 className="font-display text-2xl mt-3 uppercase">
                    {s.t}
                  </h3>
                  <p className="mt-2 text-zinc-300 text-sm leading-relaxed">
                    {s.d}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ──────────── SAMPLE REPORT ──────────── */}
      <section
        id="sample-report"
        className="border-b-4 border-black bg-[#F4F4F5] py-20 md:py-28"
        data-testid="sample-report-section"
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <Pill color="bg-[#00FF66]">Sample Report</Pill>
            <h2 className="font-display uppercase text-4xl sm:text-5xl md:text-6xl mt-5 leading-none">
              This is the report you get.
            </h2>
            <p className="mt-6 text-lg text-zinc-700 leading-relaxed">
              No vague advice. No “keep learning bro.” You get a printable PDF
              that looks exactly like this — with your real numbers, real
              gaps, real fixes.
            </p>
            <Link
              to="/apply"
              className="btn-brut mt-8"
              data-testid="sample-report-cta-button"
            >
              Want your report like this? <ArrowRight size={20} strokeWidth={3} />
            </Link>
          </div>

          <div className="lg:col-span-7">
            <div className="brut-card p-0 overflow-hidden">
              {/* Window chrome */}
              <div className="flex items-center justify-between bg-black text-white px-4 py-2 border-b-4 border-black font-mono text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF331F]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFD600]" />
                  <div className="w-3 h-3 rounded-full bg-[#00FF66]" />
                </div>
                <div>skill-proof-report.pdf</div>
                <div>v1.2</div>
              </div>

              <div className="p-6 md:p-8 font-mono text-sm bg-white">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-zinc-500 text-xs">
                      CANDIDATE_REPORT
                    </div>
                    <div className="font-display text-2xl md:text-3xl mt-1">
                      Project Audit Report
                    </div>
                  </div>
                  <div className="border-4 border-[#FF331F] text-[#FF331F] px-3 py-2 text-right">
                    <div className="text-[10px]">FINAL</div>
                    <div className="font-display text-4xl leading-none">
                      68
                    </div>
                    <div className="text-[10px]">/100</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
                  {[
                    ["UI Quality", 81, "bg-[#00FF66]"],
                    ["Code Logic", 72, "bg-[#FFD600]"],
                    ["Structure", 54, "bg-[#FF331F] text-white"],
                    ["Git Hygiene", 64, "bg-[#FFD600]"],
                  ].map(([k, v, c], i) => (
                    <div key={i} className={`border-[3px] border-black p-3 ${c}`}>
                      <div className="text-[10px] uppercase">{k}</div>
                      <div className="font-display text-2xl leading-none mt-1">
                        {v}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="border-[3px] border-black p-4 bg-[#F4F4F5]">
                    <div className="text-[11px] text-zinc-500 uppercase">
                      Strengths_
                    </div>
                    <ul className="mt-2 space-y-1">
                      <li className="flex gap-2">
                        <Check
                          size={16}
                          strokeWidth={3}
                          className="text-[#00FF66] mt-0.5 flex-shrink-0"
                        />
                        Clean responsive UI
                      </li>
                      <li className="flex gap-2">
                        <Check
                          size={16}
                          strokeWidth={3}
                          className="text-[#00FF66] mt-0.5 flex-shrink-0"
                        />
                        Working business logic
                      </li>
                    </ul>
                  </div>
                  <div className="border-[3px] border-black p-4 bg-[#F4F4F5]">
                    <div className="text-[11px] text-zinc-500 uppercase">
                      Weakness_
                    </div>
                    <ul className="mt-2 space-y-1">
                      <li className="flex gap-2">
                        <X
                          size={16}
                          strokeWidth={3}
                          className="text-[#FF331F] mt-0.5 flex-shrink-0"
                        />
                        No state management
                      </li>
                      <li className="flex gap-2">
                        <X
                          size={16}
                          strokeWidth={3}
                          className="text-[#FF331F] mt-0.5 flex-shrink-0"
                        />
                        Poor folder structure
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-5 border-t-[3px] border-black pt-4">
                  <div className="text-[11px] text-zinc-500 uppercase">
                    Recommended_Next_Step
                  </div>
                  <p className="mt-1 text-[13px] leading-relaxed">
                    {">"} Improve state handling, restructure your folders,
                    write reusable components, and tighten your Git history.
                    Target score: 85+.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────── PRICING ──────────── */}
      <section
        className="border-b-4 border-black bg-white py-20 md:py-28"
        data-testid="pricing-section"
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="text-center max-w-2xl mx-auto">
            <Pill color="bg-[#FF331F] text-white">Pricing</Pill>
            <h2 className="font-display uppercase text-4xl sm:text-5xl md:text-6xl mt-5 leading-none">
              Start with your first review.
            </h2>
            <p className="mt-4 text-zinc-600">
              Pay only after you submit. We confirm what works for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 items-stretch">
            {/* Free */}
            <div
              className="brut-card p-7 flex flex-col"
              data-testid="pricing-free"
            >
              <div className="font-mono text-xs uppercase tracking-widest text-zinc-500">
                Free
              </div>
              <div className="font-display text-5xl mt-2">₹0</div>
              <div className="text-zinc-600 mt-1">Just to test the waters</div>
              <ul className="mt-6 space-y-3 flex-1">
                {[
                  "Submit profile + project",
                  "Basic feedback (delayed)",
                  "1 line strength + 1 weakness",
                ].map((f) => (
                  <li key={f} className="flex gap-2">
                    <Check
                      size={18}
                      strokeWidth={3}
                      className="text-[#FF331F] mt-0.5 flex-shrink-0"
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/apply"
                className="btn-brut btn-brut-white mt-7 w-full"
                data-testid="pricing-free-cta"
              >
                Submit Free
              </Link>
            </div>

            {/* ₹299 — highlighted */}
            <div
              className="brut-card bg-[#FFD600] p-7 flex flex-col md:-translate-y-6 relative"
              data-testid="pricing-299"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white border-4 border-black px-3 py-1 font-mono text-[11px] uppercase tracking-widest">
                Most Popular
              </div>
              <div className="font-mono text-xs uppercase tracking-widest">
                Standard
              </div>
              <div className="font-display text-5xl mt-2">₹299</div>
              <div className="mt-1">Resume + project feedback</div>
              <ul className="mt-6 space-y-3 flex-1">
                {[
                  "Full project audit",
                  "Resume review with fixes",
                  "Detailed feedback PDF",
                  "48-hour turnaround",
                ].map((f) => (
                  <li key={f} className="flex gap-2">
                    <Check
                      size={18}
                      strokeWidth={3}
                      className="text-black mt-0.5 flex-shrink-0"
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/apply"
                className="btn-brut mt-7 w-full"
                data-testid="pricing-299-cta"
              >
                Get Standard Review
              </Link>
            </div>

            {/* ₹999 */}
            <div
              className="brut-card bg-black text-white p-7 flex flex-col"
              data-testid="pricing-999"
            >
              <div className="font-mono text-xs uppercase tracking-widest text-[#FFD600]">
                Pro
              </div>
              <div className="font-display text-5xl mt-2">₹999</div>
              <div className="text-zinc-300 mt-1">
                Full review + job-readiness score
              </div>
              <ul className="mt-6 space-y-3 flex-1">
                {[
                  "Everything in Standard",
                  "Job-readiness score (0–100)",
                  "60-min 1:1 call",
                  "Personal improvement roadmap",
                ].map((f) => (
                  <li key={f} className="flex gap-2">
                    <Check
                      size={18}
                      strokeWidth={3}
                      className="text-[#00FF66] mt-0.5 flex-shrink-0"
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/apply"
                className="btn-brut btn-brut-yellow mt-7 w-full"
                data-testid="pricing-999-cta"
              >
                Go Pro
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────── FINAL CTA ──────────── */}
      <section
        className="stripes-yellow py-2 border-b-4 border-black"
        aria-hidden="true"
      />
      <section
        className="bg-[#FF331F] text-white py-24 md:py-32 border-b-4 border-black relative overflow-hidden"
        data-testid="final-cta-section"
      >
        <div className="max-w-5xl mx-auto px-5 md:px-10 text-center">
          <h2 className="font-display uppercase text-5xl sm:text-6xl md:text-8xl leading-[0.9]">
            Stop guessing.<br />
            <span className="text-black">Start improving.</span>
          </h2>
          <p className="mt-7 text-lg md:text-xl max-w-2xl mx-auto">
            48 hours from now, you could be holding a brutally honest report
            with your real score. Or you could be sending one more ignored
            resume.
          </p>
          <Link
            to="/apply"
            className="btn-brut btn-brut-black mt-10 text-lg"
            data-testid="final-cta-button"
          >
            Submit My Project → 
          </Link>
          <div className="mt-6 font-mono text-xs uppercase tracking-widest text-white/80">
            48-hour turnaround · No spam · Real humans review
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
