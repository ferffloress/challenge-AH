import { useState } from "react";
import { compute } from "./utils/compute";
import "./App.css";

export default function App() {
  const [raw, setRaw] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    if (/^\d*$/.test(value)) {
      setRaw(value);
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
    const number = Number(raw);
    const result = compute(number);
    setOutput(String(result));
    setError("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleCompute();
  };

  return (
    <main
      style={{
        maxWidth: "520px",
        width: "90%",
        margin: "0 auto",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <h1 style={{ fontSize: 24, marginBottom: 16, marginTop: 0 }}>Challenge AyHungry</h1>
      <h2 style={{ fontSize: 20, marginBottom: 12 }}>Consigna</h2>
      <div style={{ marginBottom: 16 }}>
        <p>¿Puedes descubrir la regla que transforma el input en el output?</p>
        <p>Input → Output</p>
        <ul>
          <li>82 → 68</li>
          <li>111 → 3</li>
          <li>999 → 243</li>
          <li>101 → 2</li>
          <li>1234 → 30</li>
        </ul>
      </div>

      <h2 style={{ fontSize: 20, marginBottom: 12, marginTop: 30 }}>
        Programa aplicando la lógica del ejercicio
      </h2>
      <label
        htmlFor="numero"
        style={{ display: "block", fontWeight: 700, marginBottom: 8 }}
      >
        Número (entero):
      </label>

      <div
        style={{
          display: "flex",
          gap: "0.75rem",
          alignItems: "center",
          marginBottom: 12,
        }}
      >
        <input
          id="numero"
          type="text"
          inputMode="numeric"
          placeholder="Ej: 1234"
          value={raw}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          style={{
            flex: 1,
            padding: "10px 12px",
            borderRadius: 8,
            border: "1px solid #cbd5e1",
            outline: "none",
            boxSizing: "border-box",
          }}
        />

        <button
          onClick={handleCompute}
          style={{
            padding: "10px 14px",
            borderRadius: 8,
            border: "1px solid #0ea5e9",
            background: "#0ea5e9",
            color: "white",
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
        >
          Calcular
        </button>
      </div>

      <div style={{ minHeight: "25px", marginTop: 10 }}>
        {error && <p style={{ color: "#b91c1c", margin: 0 }}>{error}</p>}
      </div>

      <section style={{ marginTop: 24 }}>
        <h2 style={{ fontSize: 16, marginBottom: 8 }}>Output:</h2>
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

      <footer
        style={{
          marginTop: "3rem",
          paddingTop: "1rem",
          borderTop: "1px solid #e5e7eb",
          textAlign: "center",
        }}
      >
        <p style={{ margin: 0, fontWeight: 500 }}>
          Te invito a ver el código de la resolución en{" "}
          <a
            href="https://github.com/ferffloress/challenge-AH"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          😊
        </p>
      </footer>
    </main>
  );
}
