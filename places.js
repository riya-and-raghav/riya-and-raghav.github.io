/*
 * =====================================================
 *  TRAVEL MAP — PLACES LIST
 * =====================================================
 *
 *  HOW TO ADD A PLANNED PLACE:
 *  ───────────────────────────
 *  {
 *    name:   "Place Name",
 *    coords: [latitude, longitude],        // right-click Google Maps → copy lat,lng
 *    status: "planned",
 *    note:   "Short one-liner for sidebar",
 *    detail: "Longer description that shows on the map popup when you click the marker.",
 *  },
 *
 *  HOW TO ADD A VISITED PLACE:
 *  ───────────────────────────
 *  {
 *    name:   "Place Name",
 *    coords: [latitude, longitude],
 *    status: "visited",
 *    note:   "Short one-liner for sidebar",
 *    detail: "What happened there, how it went, the vibe, etc.",
 *    album:  "https://photos.google.com/share/your-album-link-here",
 *  },
 *
 * =====================================================
 */

const PLACES = [

  // ── PLANNED ────────────────────────────────────────

  {
    name:   "Goa",
    coords: [15.2993, 74.124],
    status: "planned",
    note:   "A craved trip after London",
    detail: "Been talking about this one since London. Overdue.",
  },

  {
    name:   "Montenegro",
    coords: [42.4304, 19.2594],
    status: "planned",
    note:   "Kotor & the coast",
    detail: "Neither of us can point to it on a map. Going anyway.",
  },

  {
    name:   "Milford Sound (Piopiotahi)",
    coords: [-44.6414, 167.8975],
    status: "planned",
    note:   "Fiordland National Park, NZ",
    detail: "Bottom of the world. Water falling off rocks. Sold.",
  },

  {
    name:   "Shey Phoksundo National Park",
    coords: [29.2167, 82.9333],
    status: "planned",
    note:   "Nepal trek",
    detail: "3,600m. Thin air, thinner patience. Worth it for the lake.",
  },

  {
    name:   "Surat",
    coords: [21.1702, 72.8311],
    status: "planned",
    note:   "He lives here",
    detail: "The fafda better be worth the trip.",
  },

  {
    name:   "Bangalore",
    coords: [12.9716, 77.5946],
    status: "planned",
    note:   "Good Excuse",
    detail: "Perfect weather, criminal traffic.",
  },

  // ── VISITED ────────────────────────────────────────
  // Add visited places here! Example:
  //
  // {
  //   name:   "SomePlace",
  //   coords: [lat, lng],
  //   status: "visited",
  //   note:   "Short sidebar text",
  //   detail: "What went down. The good, the chaotic, the biryani.",
  //   album:  "https://photos.google.com/share/your-link",
  // },

];
