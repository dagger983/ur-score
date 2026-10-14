$edge = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
$outDir = "C:\Users\Vicky\.gemini\antigravity-ide\brain\6315e788-015c-4ce2-a7fa-544a0957e8f8"

# 1. Hero check (1536x1000)
$tmp1 = "$env:TEMP\edge-p1-$(Get-Random)"
$out1 = Join-Path $outDir "hero_phone_verification.png"
Start-Process -FilePath $edge -ArgumentList @(
    "--headless=new",
    "--disable-gpu",
    "--user-data-dir=`"$tmp1`"",
    "--window-size=1536,1050",
    "--screenshot=`"$out1`"",
    "http://localhost:5000/payer.framer.website/"
) -Wait

# 2. Mobile check (390x844)
$tmp2 = "$env:TEMP\edge-p2-$(Get-Random)"
$out2 = Join-Path $outDir "mobile_phone_verification.png"
Start-Process -FilePath $edge -ArgumentList @(
    "--headless=new",
    "--disable-gpu",
    "--user-data-dir=`"$tmp2`"",
    "--window-size=390,844",
    "--screenshot=`"$out2`"",
    "http://localhost:5000/payer.framer.website/"
) -Wait

# 3. Download page check (1536x1050)
$tmp3 = "$env:TEMP\edge-p3-$(Get-Random)"
$out3 = Join-Path $outDir "download_page_verification.png"
Start-Process -FilePath $edge -ArgumentList @(
    "--headless=new",
    "--disable-gpu",
    "--user-data-dir=`"$tmp3`"",
    "--window-size=1536,1050",
    "--screenshot=`"$out3`"",
    "http://localhost:5000/payer.framer.website/download.html"
) -Wait

Write-Host "Captured verification screenshots to brain dir!"
