// src/App.tsx
import { useState } from "react";

// ⬇️ Acá definís la lógica de transformación
function compute(n: number): number {
  // TODO: reemplazar por tu propia lógica
  return n;
}

export default function App() {
  const [raw, setRaw] = useState<string>("");       // lo que escribe el usuario
  const [output, setOutput] = useState<string>(""); // resultado a mostrar
  const [error, setError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value.trim();
    // Solo permitimos vacío o números enteros
    if (/^\d*$/.test(v)) {
      setRaw(v);
      setError("");
    } else {
      setError("Ingresá solo números enteros (0-9).");
    }
  };

  const handleCompute = () => {
    if (raw === "") {
      setOutput("");
      setError("Primero ingresá un número.");
      return;
    }
    const n = Number(raw);
    const result = compute(n);
    setOutput(String(result));
    setError("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleCompute();
  };

  return (
    <main style={{ maxWidth: 520, margin: "3rem auto", fontFamily: "system-ui, sans-serif" }}>
      <h1 style={{ fontSize: 24, marginBottom: 16 }}>Challenge AH — Demo input/output</h1>

      <label htmlFor="numero" style={{ display: "block", fontWeight: 600, marginBottom: 8 }}>
        Número (entero):
      </label>
      <input
        id="numero"
        type="text"
        inputMode="numeric"
        placeholder="Ej: 1234"
        value={raw}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        style={{
          width: "100%",
          padding: "10px 12px",
          borderRadius: 8,
          border: "1px solid #cbd5e1",
          outline: "none",
        }}
      />

      <button
        onClick={handleCompute}
        style={{
          marginTop: 12,
          padding: "10px 14px",
          borderRadius: 8,
          border: "1px solid #0ea5e9",
          background: "#0ea5e9",
          color: "white",
          cursor: "pointer",
        }}
      >
        Calcular
      </button>

      {error && (
        <p style={{ color: "#b91c1c", marginTop: 10 }}>{error}</p>
      )}

      <section style={{ marginTop: 24 }}>
        <h2 style={{ fontSize: 18, marginBottom: 8 }}>Output</h2>
        <div
          style={{
            border: "1px solid #e5e7eb",
            borderRadius: 8,
            padding: 12,
            minHeight: 48,
            background: "#f8fafc",
            whiteSpace: "pre-wrap",
          }}
        >
          {output || "—"}
        </div>
      </section>
    </main>
  );
}