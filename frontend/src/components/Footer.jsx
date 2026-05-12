import { OWNER_EMAIL, WHATSAPP_LINK } from "../config";

export default function Footer() {
  return (
    <footer
      className="border-t-4 border-black bg-black text-white"
      data-testid="site-footer"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="font-display text-2xl tracking-tighter">
            SKILL<span className="text-[#FF331F]">/</span>PROOF PASSPORT
          </div>
          <p className="font-mono text-xs text-zinc-400 mt-1">
            Brutal feedback. Honest scores. No fluff.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 font-mono text-sm">
          <a
            href={`mailto:${OWNER_EMAIL}`}
            className="hover:text-[#FFD600] underline underline-offset-4"
            data-testid="footer-email-link"
          >
            {OWNER_EMAIL}
          </a>
          <span className="text-zinc-600">/</span>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#00FF66] underline underline-offset-4"
            data-testid="footer-whatsapp-link"
          >
            WhatsApp
          </a>
        </div>
      </div>
      <div className="border-t border-zinc-800 py-4 text-center font-mono text-xs text-zinc-500">
        © {new Date().getFullYear()} Skill Proof Passport — Built for honest devs.
      </div>
    </footer>
  );
}
