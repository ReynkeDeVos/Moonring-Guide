import { equipment, shoppingSteps } from './data';
import type { BuildId } from './data';

export function GearGuide({build}:{build:BuildId}) {
 return <>
  <h2>Ein Teil nach dem anderen, sobald es passt.</h2>
  <p>Du beginnst mit <strong>Dagger, Cap, Cotton Tunic und Leggings</strong>. Diese vier Teile wiegen zusammen <strong>14</strong> bei <strong>40</strong> Kapazität mit END 0. Behalte sie, bis ein einzelner Austausch sinnvoll und bezahlbar ist.</p>
  <section class="supplies">
   <h3>Vor jedem Kauf: Versorgungsgold zurücklegen</h3>
   <p>Heilung, Nahrung und bei Fernwaffen passende Munition zuerst einplanen. Nur das übrige Gold ist dein Ausrüstungsbudget. Ein neues Teil kaufen, dann neu vergleichen; du musst die Liste nicht in einem Einkauf abarbeiten.</p>
   <p>{build==='wolf'?'Beispiel mit Basispreisen: 1.500 Gold − 400 für zwei fehlende Heiltränke = 1.100. Wenn Nahrung und Munition schon reichen und STR 5 erreicht ist, passen Shortsword (1.000) und Buckler (100); Gloves oder Leder müssen warten.':'Beispiel mit Basispreisen: 1.500 Gold − 400 für zwei fehlende Heiltränke − 200 für 20 Pfeile = 900. Das reicht noch nicht für Shortbow (1.000): mit vorhandener Ausrüstung weitergehen, statt die Versorgung für den Bogen auszugeben.'} Fehlt weitere Versorgung, bleibt entsprechend weniger übrig.</p>
   <ul>
    <li><strong>Potion of Healing</strong> · Basis 200. Hauptstadt, Wintersholl, Hearthaven, Harrowdus, Red Grove. Barrow-Linn hat keinen Apothecary.</li>
    <li><strong>Arrows / Bolts</strong> · Basis 10 pro Stück. Nur für die tatsächlich benutzte Fernwaffe kaufen.</li>
    <li><strong>Sera-leaf Oil</strong> · Basis 200, Harrowdus/Red Grove; heilt Rot. <strong>Water</strong> · Basis 100, Apothecary; kann Feuer löschen.</li>
   </ul>
  </section>
  <h3>Darf ich eine Zwischenstufe überspringen?</h3>
  <p><strong>Ja.</strong> Weder Waffen noch Rüstung verlangen, dass du das kleinere Teil vorher gekauft hast. Wenn Stat-Anforderung, freie Hände, Gesamtlast und Restgold passen, darfst du direkt die höhere Stufe nehmen. Einen schon vorhandenen brauchbaren Gegenstand weiter benutzen ist ebenso richtig. Beute spart den Kauf.</p>
  <p>{build==='wolf'?'Slam bringt STR 5 für Shortsword, Hurl danach STR 10 für Sword. Du darfst Dagger → Sword gehen. Musst du vorher mit STR 5 kämpfen und ist Dagger zu schwach, ist Shortsword der sofort nutzbare Kauf.':'Gash bringt PER 5 für Shortbow, Feast danach PER 10 für Longbow. Du darfst direkt Longbow nehmen. Der Preis von 5.000 darf dir aber nicht das Geld für Pfeile und Heilung nehmen; Shortbow weiter nutzen ist ein sinnvoller Zwischenstand.'}</p>
  <p>Mehr Gewicht kostet auch unter der Lastgrenze Beweglichkeit und Dodge. Stealth-Abzüge stehen zusätzlich am jeweiligen Teil. Mehr Schutz kann diese Nachteile wert sein; das neue Teil muss nicht jeden Wert verbessern.</p>
  <details class="help-details">
  <summary>Gewicht, Dodge, Stealth und die Vorschau verstehen</summary>
  <p>Im Laden und Inventar zeigt die Charakteranzeige eine <strong>Vorschau des Austauschs</strong>. Das Markieren allein legt das Teil noch nicht an und kauft es nicht. Die Vergleichswerte zeigen, was mit dem ausgewählten Teil im passenden Slot passieren würde.</p>
  <ul class="gear-rules">
   <li><strong>Anlegbar:</strong> Die tatsächlichen STR-, PER-, END-, FIN- und INT-Anforderungen sowie freie Hände entscheiden. Greatsword braucht zwei Hände und lässt keinen Schild zu. Lifesight gibt END 5, Blind Leap END 10, Retribution END 15; die angezeigten Attribute zählen, nicht allein dein Level.</li>
   <li><strong>Last und Dodge:</strong> Mehr ausgerüstetes Gewicht verlangsamt Bewegung und senkt darüber Dodge, auch unter der Kapazität. Über der Kapazität wird die Belastung noch ungünstiger. Die Grenze ist keine Anlegesperre; für diesen Anfängerweg bleiben wir darunter und möglichst mit Reserve.</li>
   <li><strong>Stealth:</strong> Manche Teile haben eigene Abzüge, unabhängig vom Gewicht. Leather Armour, Heater Shield und Mace haben jeweils −1; zusammen addiert sich das. Woolen Cloak gibt +1, wiegt aber 4. Ein schwereres Teil mit mehr Schutz verbessert deshalb nicht alle Werte.</li>
   <li><strong>Abwägen:</strong> Mehr Rüstung oder Blockchance gegen weniger Dodge, Beweglichkeit und gegebenenfalls Stealth vergleichen. Für Nahkampf kann das sinnvoll sein; beim Abstandhalten lieber leicht bleiben. Ein roter Vergleichswert allein bedeutet keinen Fehlkauf.</li>
  </ul>
  </details>
  <details class="help-details">
   <summary>So rechnest du die neue Last</summary>
   <p><strong>Neue Last = aktuelle Last − altes Teil + neues Teil.</strong> Ein Austausch im selben Slot ersetzt das alte Teil. Nahkampf- und Fernkampfwaffe liegen dagegen in verschiedenen Slots und zählen beide. Normales Inventar wird hier nicht addiert; alte Ausrüstung darf dort bleiben.</p>
   <p>Kapazität = 40 + 75 × END / 35. END 0 / 5 / 10 / 15 entspricht 40 / 50,71 / 61,43 / 72,14. Das Spiel rundet die Lastanzeige auf; knapp unter der Grenze die tatsächlichen Tooltips prüfen. Als Empfehlung freie Last für später gefundene nützliche Teile behalten.</p>
   <p>Beispiel Wolf: Sword + Startkleidung + Buckler = 32. Leather Armour ersetzt Cotton Tunic: 32 − 8 + 15 = 39. Bei END 5 passt das; ein ganzes Lederset ist dafür nicht nötig.</p>
  </details>
  <h3>Dein sparsamer Einkaufsweg</h3>
  <p>Das ist unsere Priorität für {build==='wolf'?'Wolf & Schild':'Lady & Bogen'}, keine Pflichtkette. <strong>Jeweils nur den nächsten sinnvollen Kauf machen.</strong> Die Lastbeispiele nehmen die zuvor genannten Teile an; bei Beute, ausgelassenen Schritten oder anderen Waffen mit deiner aktuellen Last rechnen. Preise sind Basiswerte; tatsächlicher Ladenpreis und Bestand können abweichen.</p>
  <ol class="shopping-steps">
   {shoppingSteps[build].map(step=><li key={step.item}>
    <h4>{step.item}</h4>
    <p class="purchase-price">Basisgold: {step.price}</p>
    <p class="purchase-condition">{step.where}<br/>{step.requirement}</p>
    <p>{step.action}</p>
    <p class="purchase-load"><strong>Lastprüfung:</strong> {step.load}</p>
    <p class="small-note"><strong>Behalten oder überspringen:</strong> {step.skip}</p>
   </li>)}
  </ol>
  <h3>Anlegbare Zwischenstände zum Vergleichen</h3>
  <p>Du musst diese Sets nicht vollständig kaufen. Die Zahlen zeigen, wie einzelne Schritte zusammenpassen. Alle genannten Stat-Schwellen müssen tatsächlich erreicht sein; ein leichterer Zwischenstand ist ausdrücklich brauchbar.</p>
  <div class="loadouts">{equipment[build].map(set=><section key={set.phase}>
   <div><h4>{set.phase}</h4><span>{set.load} Last</span></div>
   <p>{set.items}</p><p class="small-note">{set.note}</p>
  </section>)}</div>
  <details class="help-details">
   <summary>Späte Alternativen: Kite Shield, Steel Helmet, Greatsword und Platemail</summary>
   <p>Das sind einzelne Alternativen für einen bewussten Umbau. Sie gehören nicht zum sparsamen Standardweg.</p>
   <ul>
    <li><strong>Kite Shield</strong> · Basis 1.600, Armourer überall. Gewicht 18, Stealth −2, 30% Basis-Blockchance. Gegenüber Heater nur 5 Prozentpunkte mehr bei 2 mehr Last; direkt kaufen ist erlaubt, wenn dein Set und Budget passen.</li>
    <li><strong>Steel Helmet</strong> · Basis 1.000, Wintersholl/Hearthaven. Gewicht 12 statt Leather Helmet 4, Stealth −1. Der Austausch ergänzt 8 Last; zuerst nachrechnen.</li>
    <li><strong>Greatsword</strong> · Basis 8.000, Wintersholl. STR 20, Gewicht 18, Stealth −2. Vor dem Anlegen den Schild ablegen; danach hast du einen anderen Kampfaufbau.</li>
    <li><strong>Platemail Armour</strong> · Basis 4.000, Hearthaven. Keine Stat-Schwelle, Gewicht 40, Stealth −3. Gegenüber Leather Armour kommen 25 Last dazu. Die übrigen Slots müssen entsprechend leichter werden.</li>
   </ul>
  </details>
 </>;
}
