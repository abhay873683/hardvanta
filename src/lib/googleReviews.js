// Fetches the store's Google Business reviews via the Places API (New).
//
// Setup (one time):
//   1. console.cloud.google.com → enable "Places API (New)".
//   2. Create an API key (APIs & Services → Credentials), restrict it to the
//      Places API. Put it in .env.local as GOOGLE_PLACES_API_KEY.
//   3. Find your business Place ID:
//      https://developers.google.com/maps/documentation/places/web-service/place-id
//      Put it in .env.local as GOOGLE_PLACE_ID.
//
// Until both are set, getGoogleReviews() returns SAMPLE_REVIEWS so the UI works.

const PLACES_ENDPOINT = "https://places.googleapis.com/v1/places";

const SAMPLE_REVIEWS = {
  rating: 4.7,
  total: 128,
  sample: true,
  reviews: [
    {
      author: "Aman Verma",
      photo: null,
      rating: 5,
      text: "Ordered an Arduino starter kit and ESP32 — genuine parts, well packed, delivered in 3 days. Will buy again.",
      relativeTime: "2 weeks ago",
    },
    {
      author: "Priya Nair",
      photo: null,
      rating: 5,
      text: "Great prices on sensors and the support team helped me pick the right motor driver for my project.",
      relativeTime: "a month ago",
    },
    {
      author: "Rohit Sharma",
      photo: null,
      rating: 4,
      text: "Good quality components. Packaging could be a little better but everything worked perfectly.",
      relativeTime: "a month ago",
    },
  ],
};

export async function getGoogleReviews() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) return SAMPLE_REVIEWS;

  try {
    const res = await fetch(`${PLACES_ENDPOINT}/${placeId}`, {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask":
          "rating,userRatingCount,reviews.rating,reviews.text,reviews.authorAttribution,reviews.relativePublishingTimeDescription",
      },
      // Cache for 1 hour so we don't hit the API on every request.
      next: { revalidate: 3600 },
    });

    if (!res.ok) return SAMPLE_REVIEWS;

    const data = await res.json();
    const reviews = (data.reviews ?? []).map((r) => ({
      author: r.authorAttribution?.displayName ?? "Google user",
      photo: r.authorAttribution?.photoUri ?? null,
      rating: r.rating ?? 0,
      text: r.text?.text ?? "",
      relativeTime: r.relativePublishingTimeDescription ?? "",
    }));

    if (reviews.length === 0) return SAMPLE_REVIEWS;

    return {
      rating: data.rating ?? 0,
      total: data.userRatingCount ?? reviews.length,
      sample: false,
      reviews,
    };
  } catch {
    return SAMPLE_REVIEWS;
  }
}
