import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Mail, MessageCircle } from "lucide-react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { GOOGLE_FORM_EMBED_URL, OWNER_EMAIL, WHATSAPP_LINK } from "../config";

export default function Apply() {
  const isPlaceholder = GOOGLE_FORM_EMBED_URL.includes("REPLACE_WITH_YOUR_FORM_ID");

  return (
    <div className="bg-[#F4F4F5] min-h-screen flex flex-col" data-testid="apply-page">
      <Nav />

      <main className="flex-1 max-w-6xl w-full mx-auto px-5 md:px-10 py-12 md:py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-widest hover:underline"
          data-testid="apply-back-link"
        >
          <ArrowLeft size={16} strokeWidth={3} /> Back home
        </Link>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <aside className="lg:col-span-4 lg:sticky lg:top-24">
            <span className="inline-block bg-[#FFD600] border-[3px] border-black px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest">
              Step 01 — Submit
            </span>
            <h1 className="font-display uppercase text-4xl md:text-5xl mt-4 leading-none">
              Get your project reviewed.
            </h1>
            <p className="mt-5 text-zinc-700 leading-relaxed">
              Fill the form on the right. We’ll review your GitHub, project,
              and resume — and email your report within{" "}
              <span className="bg-black text-white px-1.5">48 hours</span>.
            </p>

            <div className="brut-card p-5 mt-7 bg-white">
              <div className="font-mono text-xs uppercase tracking-widest text-zinc-500">
                What you need ready
              </div>
              <ul className="mt-3 space-y-2 text-sm">
                <li>→ GitHub profile link</li>
                <li>→ Best project (live link or repo)</li>
                <li>→ Resume (Google Drive share link)</li>
                <li>→ 5 minutes of honesty</li>
              </ul>
            </div>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="btn-brut btn-brut-green w-full"
                data-testid="apply-whatsapp-link"
              >
                <MessageCircle size={18} strokeWidth={3} /> Faster? Message on WhatsApp
              </a>
              <a
                href={`mailto:${OWNER_EMAIL}`}
                className="font-mono text-xs text-zinc-600 hover:text-black underline underline-offset-4"
                data-testid="apply-email-link"
              >
                <Mail size={12} className="inline mr-1" />
                {OWNER_EMAIL}
              </a>
            </div>
          </aside>

          <section className="lg:col-span-8">
            <div className="brut-card bg-white overflow-hidden">
              {/* Window chrome */}
              <div className="flex items-center justify-between bg-black text-white px-4 py-2 border-b-4 border-black font-mono text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF331F]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFD600]" />
                  <div className="w-3 h-3 rounded-full bg-[#00FF66]" />
                </div>
                <div>skill-proof — application_form</div>
                <a
                  href={GOOGLE_FORM_EMBED_URL.replace("?embedded=true", "")}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#FFD600] flex items-center gap-1"
                  data-testid="apply-open-form-newtab"
                >
                  open <ExternalLink size={12} />
                </a>
              </div>

              {isPlaceholder ? (
                <div className="p-8" data-testid="apply-placeholder-warning">
                  <div className="border-4 border-[#FF331F] bg-[#FFD600] p-6">
                    <div className="font-display text-2xl uppercase">
                      Google Form not connected yet
                    </div>
                    <p className="mt-3 text-sm leading-relaxed">
                      Open{" "}
                      <code className="font-mono bg-black text-white px-1.5 py-0.5">
                        /app/frontend/src/config.js
                      </code>{" "}
                      and replace{" "}
                      <code className="font-mono bg-white border-2 border-black px-1.5 py-0.5">
                        GOOGLE_FORM_EMBED_URL
                      </code>{" "}
                      with the embed URL from your Google Form
                      (Send → &lt;/&gt; embed icon → copy the{" "}
                      <code className="font-mono">src</code>).
                    </p>
                    <p className="mt-3 text-sm">
                      Recommended Google Form fields (PRD):
                    </p>
                    <ol className="mt-2 list-decimal list-inside text-sm space-y-1 font-mono">
                      <li>Full Name</li>
                      <li>Email</li>
                      <li>Phone Number</li>
                      <li>Current Status (Student / Graduate)</li>
                      <li>Skills</li>
                      <li>GitHub Profile Link</li>
                      <li>Best Project Link</li>
                      <li>Resume Link (Google Drive)</li>
                      <li>How many jobs have you applied to?</li>
                      <li>What is your biggest struggle right now?</li>
                      <li>Do you feel confident about your project? (Yes/No/Not sure)</li>
                      <li>Would you pay for a detailed review? (Yes/No)</li>
                      <li>If yes, how much? (₹299 / ₹999 / More)</li>
                    </ol>
                  </div>
                </div>
              ) : (
                <iframe
                  title="Skill Proof Passport — Application Form"
                  src={GOOGLE_FORM_EMBED_URL}
                  width="100%"
                  height="1400"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  data-testid="apply-google-form-iframe"
                >
                  Loading…
                </iframe>
              )}

              <div className="border-t-4 border-black bg-[#F4F4F5] px-5 py-3 flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
                <span className="text-zinc-600">
                  After submitting in the form, you’ll be redirected by Google. You
                  can also confirm with us directly:
                </span>
                <Link
                  to="/success"
                  className="bg-black text-white px-3 py-1.5 hover:bg-[#FF331F]"
                  data-testid="apply-i-submitted-link"
                >
                  I’ve submitted →
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
