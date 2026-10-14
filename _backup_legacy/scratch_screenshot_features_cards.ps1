$edge = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
if (-not (Test-Path $edge)) { $edge = "C:\Program Files\Microsoft\Edge\Application\msedge.exe" }

$tmpProfile = "$env:TEMP\edge-prof-$(Get-Random)"
$outPng = "C:\Users\Vicky\.gemini\antigravity-ide\brain\6315e788-015c-4ce2-a7fa-544a0957e8f8\features_cards_scrolled.png"
$args = @(
    "--headless=new",
    "--disable-gpu",
    "--user-data-dir=`"$tmpProfile`"",
    "--window-size=1440,3200",
    "--screenshot=`"$outPng`"",
    "http://localhost:5000/payer.framer.website/features.html"
)
$proc = Start-Process -FilePath $edge -ArgumentList $args -PassThru -Wait
Write-Host "Captured features cards scrolled"
Remove-Item -Recurse -Force $tmpProfile -ErrorAction SilentlyContinue
