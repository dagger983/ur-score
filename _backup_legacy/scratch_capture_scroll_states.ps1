$edge = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
$outDir = "C:\Users\Vicky\.gemini\antigravity-ide\brain\6315e788-015c-4ce2-a7fa-544a0957e8f8"

# Screen 1 (Hero Top)
$tmp1 = "$env:TEMP\edge-v2-$(Get-Random)"
$out1 = Join-Path $outDir "hero_phone_v2.png"
Start-Process -FilePath $edge -ArgumentList @(
    "--headless=new",
    "--disable-gpu",
    "--user-data-dir=`"$tmp1`"",
    "--window-size=1536,1050",
    "--screenshot=`"$out1`"",
    "http://localhost:5000/payer.framer.website/"
) -Wait

# Full length view of animated hero section (1536x3500)
$tmp2 = "$env:TEMP\edge-v2-$(Get-Random)"
$out2 = Join-Path $outDir "hero_phones_scroll_v2.png"
Start-Process -FilePath $edge -ArgumentList @(
    "--headless=new",
    "--disable-gpu",
    "--user-data-dir=`"$tmp2`"",
    "--window-size=1536,3600",
    "--screenshot=`"$out2`"",
    "http://localhost:5000/payer.framer.website/"
) -Wait

Write-Host "Captured scroll states v2!"
