"use client";

// Last-resort boundary for errors thrown in the root layout itself.
// Must render its own <html>/<body>.
export default function GlobalError({ error, reset }) {
  return (
    <html lang="en">
      <body
        style={{
          display: "flex",
          minHeight: "100vh",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          textAlign: "center",
          padding: "1rem",
        }}
      >
        <h1 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#0a1b3d" }}>
          Something went wrong
        </h1>
        <p style={{ marginTop: "0.5rem", color: "#64748b" }}>
          Please refresh the page to continue.
        </p>
        <button
          onClick={() => reset()}
          style={{
            marginTop: "1.5rem",
            borderRadius: "0.5rem",
            background: "#2545d3",
            color: "#fff",
            padding: "0.75rem 1.5rem",
            fontWeight: 600,
            border: "none",
            cursor: "pointer",
          }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
