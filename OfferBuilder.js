import React, { useState } from "react";

const services = [
  { name: "Strategie-Workshop", price: 320 },
  { name: "Marketingstrategie (individuell)", price: 690 },
  { name: "Videodreh vor Ort (1 Tag)", price: 650 },
  { name: "Videoschnitt & Postproduktion", price: 480 },
  { name: "Social-Media-Optimierung", price: 290 },
  { name: "Content-Paket S (2 Videos)", price: 900 },
  { name: "Content-Paket M (4 Videos)", price: 1700 },
  { name: "Content-Paket L (6+ Videos)", price: 2500 },
];

export default function OfferBuilder() {
  const [client, setClient] = useState("");
  const [selected, setSelected] = useState([]);

  const toggleService = (name) => {
    setSelected((prev) =>
      prev.includes(name) ? prev.filter((s) => s !== name) : [...prev, name]
    );
  };

  const total = selected.reduce(
    (acc, name) => acc + (services.find((s) => s.name === name)?.price || 0),
    0
  );

  return (
    <div style={{ padding: "2rem", maxWidth: "700px", margin: "0 auto" }}>
      <h2>Angebotserstellung – NORA</h2>
      <label>Kundenname:</label>
      <input
        type="text"
        value={client}
        onChange={(e) => setClient(e.target.value)}
        placeholder="z. B. Müller GmbH"
        style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
      />

      <label>Leistungen:</label>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
        {services.map((service) => (
          <button
            key={service.name}
            onClick={() => toggleService(service.name)}
            style={{
              padding: "0.5rem 1rem",
              background: selected.includes(service.name) ? "#00a8b9" : "#eee",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            {service.name} – {service.price} €
          </button>
        ))}
      </div>

      <div style={{ marginTop: "1rem" }}>
        <strong>Gesamtpreis: {total.toLocaleString("de-DE")} €</strong>
      </div>
    </div>
  );
}
