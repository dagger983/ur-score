$edge = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
$outDir = "C:\Users\Vicky\.gemini\antigravity-ide\brain\6315e788-015c-4ce2-a7fa-544a0957e8f8"
$tmp = "$env:TEMP\edge-dl-fix-$(Get-Random)"
$out = Join-Path $outDir "download_page_verification_fixed.png"
Start-Process -FilePath $edge -ArgumentList @(
    "--headless=new",
    "--disable-gpu",
    "--user-data-dir=`"$tmp`"",
    "--window-size=1536,1050",
    "--screenshot=`"$out`"",
    "http://localhost:5000/payer.framer.website/download.html"
) -Wait
Write-Host "Captured fixed download page screenshot!"
