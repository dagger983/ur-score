$edge = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
$outDir = "C:\Users\Vicky\.gemini\antigravity-ide\brain\6315e788-015c-4ce2-a7fa-544a0957e8f8"
$tmp = "$env:TEMP\edge-orbit-check-$(Get-Random)"
$out = Join-Path $outDir "orbit_section_preview.png"
$args = @(
    "--headless=new",
    "--disable-gpu",
    "--user-data-dir=`"$tmp`"",
    "--window-size=1600,6000",
    "--screenshot=`"$out`"",
    "http://localhost:5000/payer.framer.website/"
)
Start-Process -FilePath $edge -ArgumentList $args -Wait
Write-Host "Orbit section preview captured!"
