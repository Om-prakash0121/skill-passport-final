// ───────────────────────────────────────────────────────────────
// SKILL PROOF PASSPORT — CONFIG
// ───────────────────────────────────────────────────────────────
// 👉 PASTE YOUR GOOGLE FORM "EMBED" URL BELOW (ends with /viewform?embedded=true)
//    How to get it:
//      1. Open your Google Form → click "Send" → choose the < > (embed) icon
//      2. Copy the src URL from the <iframe ... src="HERE">
//      3. Replace the placeholder below with that URL
//
// Submissions will be collected automatically in your linked Google Sheet
// and a copy will be emailed to omprakashbehera625@gmail.com (configure
// in Google Form → Responses → ⋮ → "Get email notifications for new responses").

export const GOOGLE_FORM_EMBED_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeREPLACE_WITH_YOUR_FORM_ID/viewform?embedded=true";

export const WHATSAPP_NUMBER = "918260345793"; // country code + number, no '+'
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi! I just submitted the Skill Proof Passport form. When will I get my review?"
)}`;

export const OWNER_EMAIL = "omprakashbehera625@gmail.com";
