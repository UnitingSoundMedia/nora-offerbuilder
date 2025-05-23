
import jsPDF from "jspdf";
import "jspdf-autotable";

export default function generateOfferPDF(client, services, total) {
  const doc = new jsPDF();

  doc.setTextColor(0, 168, 185);
  doc.setFontSize(18);
  doc.text("NORA - Angebotsübersicht", 14, 20);

  // Begrüßungstext
  doc.setTextColor(0);
  doc.setFontSize(12);
  doc.text(
    `Kunde: ${client}`,
    14,
    30
  );

  doc.setFontSize(11);
  doc.text(
    "Vielen Dank fuer Ihre Anfrage. Anbei finden Sie unser individuelles Angebot",
    14,
    40
  );
  doc.text(
    "basierend auf Ihrer Auswahl. Bei Fragen oder Wuenschen stehe ich Ihnen jederzeit",
    14,
    46
  );
  doc.text(
    "gern zur Verfuegung.",
    14,
    52
  );
  doc.text("Herzliche Gruesse - NORA", 14, 60);

  // Tabelle
  const rows = services.map((s) => [s.name, s.price + " EUR"]);

  doc.autoTable({
    startY: 70,
    head: [["Leistung", "Preis (EUR)"]],
    body: rows,
    foot: [["Gesamtpreis", `${total} EUR`]],
    theme: "grid",
    styles: {
      font: "helvetica",
      fontSize: 11,
    },
    headStyles: {
      fillColor: [0, 168, 185],
      textColor: 255,
    },
  });

  doc.save("nora_angebot.pdf");
}
