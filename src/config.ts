// Centralized settings for the event landing page.
// Update these values to match the real event details.

// Date & time of the training (local time of the attendee's browser).
// Format: new Date(year, monthIndex(0-11), day, hour, minute)
export const EVENT_DATE = new Date(2026, 9, 30, 21, 0, 0);

export const EVENT_DATE_LABEL = "Vendredi 30 Octobre";
export const EVENT_TIME_LABEL = "21h00";

// Replace with the real Google Meet link before going live.
export const GOOGLE_MEET_LINK = "https://meet.google.com/iby-xoxc-xsi";

export const QR_CODE_URL = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&margin=10&color=0f172a&bgcolor=ffffff&data=${encodeURIComponent(
  GOOGLE_MEET_LINK
)}`;
