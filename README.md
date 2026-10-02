> 100% vibecoded — just a little guide to help me out here and there with this awesome free (!) game, Moonring.

# Moonring-Walkthrough

**Online:** [Moonring-Walkthrough auf Cloudflare](https://moonring-walkthrough.renkebrixel.workers.dev) · [Offline-Datei herunterladen](https://moonring-walkthrough.renkebrixel.workers.dev/Moonring-Walkthrough.html)

Lade das Repository über **Code → Download ZIP** herunter und entpacke es, oder klone es mit Git. Öffne anschließend **[Moonring-Walkthrough.html](Moonring-Walkthrough.html)** direkt im Browser. Die Datei enthält die Anwendung, Stile und Schrift und benötigt keinen laufenden Server oder Internetzugang. Quellenlinks ins Netz benötigen eine Verbindung.

- **Wolf & Schild**: Empfehlung für den ersten Durchlauf, einfache Nahkampfroutine mit Kontrolle.
- **Lady & Bogen**: Fernkampf mit Durchschüssen, Blutheilung und mehr Munitionsplanung.

**DX / The Egg ist enthalten:** Etappe 16 folgt nach den fünf Relikten und vor beiden Schlussrouten. Zugang per Schiff, Vorbereitung pro Build, 100 Etagen zum Abhaken, Speichern/Tod und eingeklappte Boss-/Preishilfe. Die Etagen 1–99 sind prozedural: Der Guide gibt eine Routine und belegte Muster vor. „Neuen Egg-Versuch beginnen“ setzt nur diesen Lauf zurück.

**Geheimnisse:** Der eigene Reiter sammelt die Hinweise zum Friedhofsherz („My heart hides behind a word made by walls“) und zur Jest-Zugangsphrase. An den passenden Reiseetappen stehen konkrete Fundanleitungen mit eigenen Hinweis-Häkchen. Erst wenn alle benötigten Hinweise ausdrücklich bestätigt sind, werden Geheimnis-Link und aufklappbare Lösung freigegeben. Ein erledigter Stadtbesuch genügt dafür nicht. Die Sammlung ist kein vollständiges Verzeichnis aller Spielgeheimnisse.

Beide Builds beginnen neutral ohne Eid. Reiseplan, genaue Kräfte-Kaufreihenfolge und Ausrüstung wechseln mit dem Build. Story-Enden und Rätselhilfen sind zunächst eingeklappt. Markierungen und Notizen werden pro Build im Browser gespeichert; unter „Quellen & Speicher“ kannst du sie als JSON sichern und übertragen. Browser können für Datei und Server getrennte Speicher verwenden.

Die Ausrüstungsliste beginnt bei Dagger, Cap, Cotton Tunic und Leggings. Jeder Einkaufs-Schritt zeigt Preis, Stat-Anforderung, Gewichtsänderung und eine Möglichkeit zum Behalten oder Überspringen. Versorgung zuerst bezahlen und nur einzelne Teile austauschen; Zwischenstufen und vollständige Sets sind keine Kaufpflicht. Gewicht, Dodge, Stealth und die Vergleichsvorschau werden separat erklärt.

**Hirschjagd in Etappe 3 (Wolf):** Crossbow ist nach Slam / STR 5 als optionale frühe Jagdhilfe eingeplant, mit Bolts, Einkaufspreis und einem leichten 36/40-Set ohne Buckler. Nach Feast / PER 5 ist Shortbow eine leichtere Alternative. Jagd und Kauf dürfen warten; Hurl ist kein Pflicht-Gate für die Reise oder die frühe Yarrow-Höhle.

**Steinspur in Etappe 3 (beide Builds):** Nach der Yarrow-Höhle die Inschrift des Black Eyed Stone im Dorf erfragen, dann zum Priest of Balance in die Hauptstadt zurückkehren. Nevin erst nach dem Hinweis des Priesters aufsuchen und Roche erst nach seiner Erwähnung im Gespräch erfragen. Der bisherige Gesprächspunkt aus Etappe 8 wurde mit derselben Speicher-ID vorgezogen; vorhandene Häkchen bleiben erhalten.

**Inventar:** 91 geprüfte Gegenstände, nach Nah-/Fernkampfwaffen, Helmen, Körperrüstung, Handschuhen, Beinschutz, Schilden, Umhängen, Amuletten und Quest-Ausrüstung gegliedert, lassen sich unter „Ausrüstung“ einzeln als vorhanden markieren und wieder abwählen. Die Sammlung wird pro Build gespeichert, gesichert, geladen und mit dem Build zurückgesetzt. Die offene Liste zeigt pro Slot die passendsten Optionen für den gewählten Build zuerst; weitere situative oder weniger passende Teile sind darunter eingeklappt und bleiben markierbar. Die Sortierung ist eine Empfehlung nach Kampfrolle, Last und Attributplan, keine allgemeine Stärke- oder Einkaufsrangliste. Besitzhäkchen beeinflussen weder Reiseetappen noch Gaben und berechnen keine ausgerüstete Last. Bisherige Besitzhäkchen bleiben erhalten. Die besondere Egg-Belohnung bleibt in der dortigen Spoilerhilfe.

**Goldreserve:** Auf jeder Guide-Ansicht steht gut sichtbar die Empfehlung, nach Ausrüstungskäufen mindestens **1.000 Gold** für Versorgung übrig zu lassen. Die Ausrüstungsseite erklärt den Nachschubpuffer mit Basispreisen und Kaufbeispielen. Am Spielstart wird die Reserve erst aufgebaut; für lange Expeditionen zusätzliche Vorräte besorgen.

Bei einem Wechsel der Webadresse oder des Offline-Dateipfads die JSON-Sicherung unter „Quellen & Speicher“ laden. Bereits gespeicherter Fortschritt am selben Browser-Ursprung wird auch aus dem bisherigen Speicherschlüssel übernommen.

Die Regeln wurden gegen die lokal installierte PC-Fassung **0.0.958 / Steam-Build 24843312** geprüft. Reise- und Build-Reihenfolge sind Empfehlungen; prozedurale Räume, Gold und dynamische Ladenpreise sind variabel. Ein vollständiger neuer Spieldurchlauf wurde nicht durchgeführt. Ausführliche Primärbelege stehen in **research-powers.md**, **research-route.md**, **research-egg.md**, **research-cemetery.md**, **research-secrets.md** und **research-equipment.md**. Die Spielinstallation wurde nur gelesen.

## Entwicklung

Preact 11, TypeScript und Vite.

```bash
npm ci
npm run dev
npm run build
```

Der Build erzeugt dist/index.html und kopiert die fertige Einzeldatei nach Moonring-Walkthrough.html. Die sechs Recherchedateien werden ebenfalls nach dist kopiert. Für eine lokale Vorschau des fertigen Exports:

```bash
python -m http.server 5173 --directory dist
```

Die Chivo-Schrift stammt aus dem Google-Fonts-Repository und wird unter der SIL Open Font License ausgeliefert; siehe src/assets/FONT-LICENSE.txt. Zum Lesen sind kein Konto und keine externen Schriftabrufe erforderlich. Der Offline-Guide braucht keine Cloud-Verbindung.

## Veröffentlichung

Die Seite läuft als Cloudflare Worker mit Static Assets. Native **Workers Builds** ist direkt mit diesem GitHub-Repository verbunden: Jeder Push auf `main`, auch ein gemergter Pull Request, baut und veröffentlicht automatisch. Andere Branches werden nicht veröffentlicht. Es ist kein GitHub-Actions-Workflow und kein Geheimnis im Repository erforderlich.

Voraussetzung für den automatischen Push-Auslöser: Die GitHub-App **Cloudflare Workers and Pages** muss Zugriff auf `ReynkeDeVos/Moonring-Walkthrough` haben. Bei „Only select repositories“ das Repository in den [GitHub-App-Einstellungen](https://github.com/settings/installations) ergänzen und bestehende Freigaben beibehalten. Eine erfolgreiche manuelle Veröffentlichung allein prüft diesen Auslöser nicht.

Cloudflare führt `npm run build:cloudflare` und danach `npm run deploy:cloudflare` aus. Der normale Offline-Build bleibt `npm run build`; die gesonderte Vite-Konfiguration übernimmt anschließend HTML, Offline-Download und Recherchedateien für das Hosting. Die Anmeldung und Repository-Verbindung liegen bei Cloudflare.

Für eine manuelle Veröffentlichung mit einem autorisierten Cloudflare-Konto:

```bash
npm ci
npm run build:cloudflare
npm run deploy:cloudflare
```

`cf` wird aus den Projektabhängigkeiten verwendet. Die Worker-Einstellungen stehen in `cloudflare.config.ts`, der Assets-Build in `vite.cloudflare.config.ts`. Die Fortschrittsdaten werden nicht an Cloudflare gesendet; online und offline kannst du sie über „Quellen & Speicher“ als JSON übertragen.
