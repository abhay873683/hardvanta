// Looks up an Indian 6-digit PIN code using the free India Post API
// (no API key required). Returns the area/city/state, or an error.
//
// Returns one of:
//   { ok: true,  area, city, state }
//   { ok: false, error }

export async function lookupPincode(pin) {
  const code = String(pin).trim();

  // Indian PIN codes are exactly 6 digits and never start with 0.
  if (!/^[1-9][0-9]{5}$/.test(code)) {
    return { ok: false, error: "Enter a valid 6-digit PIN code." };
  }

  try {
    const res = await fetch(`https://api.postalpincode.in/pincode/${code}`);
    const data = await res.json();
    const result = Array.isArray(data) ? data[0] : null;

    if (!result || result.Status !== "Success" || !result.PostOffice?.length) {
      return { ok: false, error: "Wrong PIN code — not found in India." };
    }

    const po = result.PostOffice[0];
    return {
      ok: true,
      area: po.Name, // locality / post office name
      city: po.District,
      state: po.State,
    };
  } catch {
    return { ok: false, error: "Couldn't verify PIN code. Check your connection." };
  }
}
