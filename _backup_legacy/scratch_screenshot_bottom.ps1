$edge = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
$tmpProfile = "$env:TEMP\edge-scroll-profile-$(Get-Random)"
$url = "http://localhost:5000/payer.framer.website/"

$outPng = (Join-Path (Get-Location).Path "payer_clone\payer.framer.website\homepage_footer_preview.png")

$args = @(
    "--headless=new",
    "--disable-gpu",
    "--user-data-dir=`"$tmpProfile`"",
    "--window-size=1600,4500",
    "--screenshot=`"$outPng`"",
    $url
)

$proc = Start-Process -FilePath $edge -ArgumentList $args -PassThru -Wait
Write-Host "Bottom preview saved to: $outPng"
