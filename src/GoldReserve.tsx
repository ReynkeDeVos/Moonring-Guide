export const minimumGoldReserve=1000;
export const formattedGoldReserve=minimumGoldReserve.toLocaleString('de-DE');

export function GoldReserve(){
 return <aside class="gold-reserve" aria-label="Empfohlene Goldreserve">
  <p>Immer zurücklegen: <strong>mindestens {formattedGoldReserve} Gold</strong></p>
  <p class="small-note">Unsere Faustregel ab den ersten Einkäufen: nach Ausrüstungskäufen als Versorgungsgold übrig lassen. Bei Bedarf für Heilung, Nahrung und Munition nutzen, danach wieder auffüllen. Lange Expeditionen brauchen zusätzlich mehr Vorräte.</p>
 </aside>;
}
