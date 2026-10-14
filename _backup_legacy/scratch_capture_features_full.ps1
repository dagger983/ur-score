$edge = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
$outDir = "C:\Users\Vicky\.gemini\antigravity-ide\brain\6315e788-015c-4ce2-a7fa-544a0957e8f8"
$tmp = "$env:TEMP\edge-features-all-$(Get-Random)"
$out = Join-Path $outDir "features_page_full.png"
Start-Process -FilePath $edge -ArgumentList @(
    "--headless=new",
    "--disable-gpu",
    "--user-data-dir=`"$tmp`"",
    "--window-size=1536,5000",
    "--screenshot=`"$out`"",
    "http://localhost:5000/payer.framer.website/features.html"
) -Wait
Write-Host "Captured full features page!"
