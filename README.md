# ?? EmpireOS Dashboard

Live AGI-controlled dashboard shell with test integration, iframe overlays, and Electron packaging.

## Features
- ? Real-time iframe monitoring
- ? HTML test result viewer
- ? Ready for Electron or browser launch

> To launch:
`ash
npm install
npm start
Set-Content -Path .\css\style.css -Value @"
body {
  background: #000;
  color: #0ff;
  font-family: 'Segoe UI', sans-serif;
  text-align: center;
  padding: 2rem;
}
iframe {
  border-radius: 8px;
  box-shadow: 0 0 10px cyan;
}
