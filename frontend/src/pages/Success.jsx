import { Link } from "react-router-dom";
import { MessageCircle, Mail, CheckCircle2, ArrowLeft } from "lucide-react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { OWNER_EMAIL, WHATSAPP_LINK } from "../config";

export default function Success() {
  return (
    <div className="min-h-screen flex flex-col bg-white" data-testid="success-page">
      <Nav />

      <main className="flex-1 grid-bg">
        <div className="max-w-3xl mx-auto px-5 md:px-10 py-20 md:py-28 text-center">
          <div className="inline-flex items-center gap-2 bg-[#00FF66] border-[3px] border-black px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest">
            <CheckCircle2 size={14} strokeWidth={3} /> Submitted
          </div>

          <h1
            className="font-display uppercase text-5xl sm:text-6xl md:text-7xl leading-[0.92] mt-6"
            data-testid="success-headline"
          >
            Profile{" "}
            <span className="bg-[#FFD600] px-2 border-4 border-black inline-block">
              received.
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-zinc-700 max-w-xl mx-auto leading-relaxed">
            We’ll review your project and email your detailed report within{" "}
            <span className="bg-black text-white px-1.5">48 hours</span>.
            <br />
            <span className="text-zinc-500 font-mono text-sm">
              Check your spam folder too — recruiters sometimes hide there.
            </span>
          </p>

          <div className="brut-card p-6 md:p-8 mt-10 text-left bg-[#F4F4F5]">
            <div className="font-mono text-xs uppercase tracking-widest text-zinc-500">
              Want faster review?
            </div>
            <h2 className="font-display text-2xl md:text-3xl mt-2 uppercase">
              Ping us on WhatsApp.
            </h2>
            <p className="mt-3 text-zinc-700">
              Drop a “Hi” with your name and we’ll prioritise your review.
              Same human. Real reply.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="btn-brut btn-brut-green flex-1 justify-center"
                data-testid="success-whatsapp-button"
              >
                <MessageCircle size={20} strokeWidth={3} /> Get Result on WhatsApp
              </a>
              <a
                href={`mailto:${OWNER_EMAIL}`}
                className="btn-brut btn-brut-white flex-1 justify-center"
                data-testid="success-email-button"
              >
                <Mail size={20} strokeWidth={3} /> Email Us
              </a>
            </div>
          </div>

          <Link
            to="/"
            className="inline-flex items-center gap-2 mt-10 font-mono text-sm font-bold uppercase tracking-widest hover:underline"
            data-testid="success-home-link"
          >
            <ArrowLeft size={16} strokeWidth={3} /> Back to home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
