# Moonring-Guide

Lade das Repository über **Code → Download ZIP** herunter und entpacke es, oder klone es mit Git. Öffne anschließend **[Moonring-Guide.html](Moonring-Guide.html)** direkt im Browser. Die Datei enthält die Anwendung, Stile und Schrift und benötigt keinen laufenden Server oder Internetzugang. Quellenlinks ins Netz benötigen eine Verbindung.

- **Wolf & Schild**: Empfehlung für den ersten Durchlauf, einfache Nahkampfroutine mit Kontrolle.
- **Lady & Bogen**: Fernkampf mit Durchschüssen, Blutheilung und mehr Munitionsplanung.

Beide Builds beginnen neutral ohne Eid. Reiseplan, genaue Kräfte-Kaufreihenfolge und Ausrüstung wechseln mit dem Build. Story-Enden und Rätselhilfen sind zunächst eingeklappt. Markierungen und Notizen werden pro Build im Browser gespeichert; unter „Quellen & Speicher“ kannst du sie als JSON sichern und übertragen. Browser können für Datei und Server getrennte Speicher verwenden.

Die Regeln wurden gegen die lokal installierte PC-Fassung **0.0.958 / Steam-Build 24843312** geprüft. Reise- und Build-Reihenfolge sind Empfehlungen; prozedurale Räume, Gold und dynamische Ladenpreise sind variabel. Ein vollständiger neuer Spieldurchlauf wurde nicht durchgeführt. Ausführliche Primärbelege stehen in **research-powers.md** und **research-route.md**. Die Spielinstallation wurde nur gelesen.

## Entwicklung

Preact 11, TypeScript und Vite.

```bash
npm ci
npm run dev
npm run build
```

Der Build erzeugt dist/index.html und kopiert die fertige Einzeldatei nach Moonring-Guide.html. Die zwei Recherchedateien werden ebenfalls nach dist kopiert. Für eine lokale Vorschau des fertigen Exports:

```bash
python -m http.server 5173 --directory dist
```

Die Chivo-Schrift stammt aus dem Google-Fonts-Repository und wird unter der SIL Open Font License ausgeliefert; siehe src/assets/FONT-LICENSE.txt. Keine Cloud-Dienste, Konten oder externen Schriftabrufe erforderlich.
