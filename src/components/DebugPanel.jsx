import React, { useState } from "react";

const DebugPanel = ({ data = {}, title = "Debug Panel" }) => {
  const [open, setOpen] = useState(false);

  if (process.env.NODE_ENV === "production") {
    return null;
  }

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: open ? "350px" : "auto",
        maxHeight: "400px",
        zIndex: 9999,
        background: "#111827",
        color: "#fff",
        borderRadius: "10px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
        overflow: "hidden",
        fontFamily: "monospace",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          border: "none",
          background: "#1f2937",
          color: "#fff",
          padding: "10px 14px",
          cursor: "pointer",
          textAlign: "left",
          fontWeight: "bold",
        }}
      >
        {open ? "▼" : "▶"} {title}
      </button>

      {open && (
        <pre
          style={{
            margin: 0,
            padding: "15px",
            fontSize: "12px",
            overflow: "auto",
            maxHeight: "340px",
          }}
        >
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
};

export default DebugPanel;