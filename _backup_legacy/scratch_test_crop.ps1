$edge = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
if (-not (Test-Path $edge)) { $edge = "C:\Program Files\Microsoft\Edge\Application\msedge.exe" }
$tmpProfile = "$env:TEMP\edge-prof-$(Get-Random)"
$brainDir = "C:\Users\Vicky\.gemini\antigravity-ide\brain\14120e7a-1779-4cbf-9b75-d3deafcfe29b"
$outPng = "$brainDir\features_ai_card_closeup.png"

# We run a node script with puppeteer/cdp or edge directly
# Let's use edge with a script that crops the exact 4 cards
