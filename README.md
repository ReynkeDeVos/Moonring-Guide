> 100% vibecoded — just a little guide to help me out here and there with this awesome free (!) game, Moonring.

# Moonring-Guide

**Online:** [Moonring-Guide auf Cloudflare](https://moonring-guide.renkebrixel.workers.dev) · [Offline-Datei herunterladen](https://moonring-guide.renkebrixel.workers.dev/Moonring-Guide.html)

Lade das Repository über **Code → Download ZIP** herunter und entpacke es, oder klone es mit Git. Öffne anschließend **[Moonring-Guide.html](Moonring-Guide.html)** direkt im Browser. Die Datei enthält die Anwendung, Stile und Schrift und benötigt keinen laufenden Server oder Internetzugang. Quellenlinks ins Netz benötigen eine Verbindung.

- **Wolf & Schild**: Empfehlung für den ersten Durchlauf, einfache Nahkampfroutine mit Kontrolle.
- **Lady & Bogen**: Fernkampf mit Durchschüssen, Blutheilung und mehr Munitionsplanung.

**DX / The Egg ist enthalten:** Etappe 16 folgt nach den fünf Relikten und vor beiden Schlussrouten. Zugang per Schiff, Vorbereitung pro Build, 100 Etagen zum Abhaken, Speichern/Tod und eingeklappte Boss-/Preishilfe. Die Etagen 1–99 sind prozedural: Der Guide gibt eine Routine und belegte Muster vor. „Neuen Egg-Versuch beginnen“ setzt nur diesen Lauf zurück.

Beide Builds beginnen neutral ohne Eid. Reiseplan, genaue Kräfte-Kaufreihenfolge und Ausrüstung wechseln mit dem Build. Story-Enden und Rätselhilfen sind zunächst eingeklappt. Markierungen und Notizen werden pro Build im Browser gespeichert; unter „Quellen & Speicher“ kannst du sie als JSON sichern und übertragen. Browser können für Datei und Server getrennte Speicher verwenden.

Die Regeln wurden gegen die lokal installierte PC-Fassung **0.0.958 / Steam-Build 24843312** geprüft. Reise- und Build-Reihenfolge sind Empfehlungen; prozedurale Räume, Gold und dynamische Ladenpreise sind variabel. Ein vollständiger neuer Spieldurchlauf wurde nicht durchgeführt. Ausführliche Primärbelege stehen in **research-powers.md**, **research-route.md** und **research-egg.md**. Die Spielinstallation wurde nur gelesen.

## Entwicklung

Preact 11, TypeScript und Vite.

```bash
npm ci
npm run dev
npm run build
```

Der Build erzeugt dist/index.html und kopiert die fertige Einzeldatei nach Moonring-Guide.html. Die drei Recherchedateien werden ebenfalls nach dist kopiert. Für eine lokale Vorschau des fertigen Exports:

```bash
python -m http.server 5173 --directory dist
```

Die Chivo-Schrift stammt aus dem Google-Fonts-Repository und wird unter der SIL Open Font License ausgeliefert; siehe src/assets/FONT-LICENSE.txt. Zum Lesen sind kein Konto und keine externen Schriftabrufe erforderlich. Der Offline-Guide braucht keine Cloud-Verbindung.

## Veröffentlichung

Die Seite läuft als Cloudflare Worker mit Static Assets. Native **Workers Builds** ist direkt mit diesem GitHub-Repository verbunden: Jeder Push auf `main`, auch ein gemergter Pull Request, baut und veröffentlicht automatisch. Andere Branches werden nicht veröffentlicht. Es ist kein GitHub-Actions-Workflow und kein Geheimnis im Repository erforderlich.

Cloudflare führt `npm run build:cloudflare` und danach `npm run deploy:cloudflare` aus. Der normale Offline-Build bleibt `npm run build`; die gesonderte Vite-Konfiguration übernimmt anschließend HTML, Offline-Download und Recherchedateien für das Hosting. Die Anmeldung und Repository-Verbindung liegen bei Cloudflare.

Für eine manuelle Veröffentlichung mit einem autorisierten Cloudflare-Konto:

```bash
npm ci
npm run build:cloudflare
npm run deploy:cloudflare
```

`cf` wird aus den Projektabhängigkeiten verwendet. Die Worker-Einstellungen stehen in `cloudflare.config.ts`, der Assets-Build in `vite.cloudflare.config.ts`. Die Fortschrittsdaten werden nicht an Cloudflare gesendet; online und offline kannst du sie über „Quellen & Speicher“ als JSON übertragen.
