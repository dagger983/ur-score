
$edge = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
$tmpProfile = "$env:TEMP\edge-scroll-profile-$(Get-Random)"
$url = "http://localhost:5000/payer.framer.website/"

# We can run a small script to capture at scroll position or standard viewport
$outPng = (Join-Path (Get-Location).Path "payer_clone\payer.framer.website\homepage_scroll_preview.png")

$args = @(
    "--headless=new",
    "--disable-gpu",
    "--user-data-dir=`"$tmpProfile`"",
    "--window-size=1600,2400",
    "--screenshot=`"$outPng`"",
    $url
)

$proc = Start-Process -FilePath $edge -ArgumentList $args -PassThru -Wait
Write-Host "Scroll preview saved to: $outPng"
