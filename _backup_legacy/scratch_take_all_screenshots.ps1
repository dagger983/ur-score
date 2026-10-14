$edge = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
if (-not (Test-Path $edge)) {
    $edge = "C:\Program Files\Microsoft\Edge\Application\msedge.exe"
}

$pages = @(
    @{ Name="download_desktop"; Url="http://localhost:5000/payer.framer.website/download.html"; Size="1440,1200" },
    @{ Name="features_desktop"; Url="http://localhost:5000/payer.framer.website/features.html"; Size="1440,2400" },
    @{ Name="support_desktop"; Url="http://localhost:5000/payer.framer.website/support.html"; Size="1440,1800" },
    @{ Name="download_mobile"; Url="http://localhost:5000/payer.framer.website/download.html"; Size="390,844" },
    @{ Name="features_mobile"; Url="http://localhost:5000/payer.framer.website/features.html"; Size="390,2000" },
    @{ Name="support_mobile"; Url="http://localhost:5000/payer.framer.website/support.html"; Size="390,1200" }
)

$outDir = "C:\Users\Vicky\.gemini\antigravity-ide\brain\6315e788-015c-4ce2-a7fa-544a0957e8f8"

foreach ($p in $pages) {
    $tmpProfile = "$env:TEMP\edge-prof-$(Get-Random)"
    $outPng = Join-Path $outDir "$($p.Name).png"
    $args = @(
        "--headless=new",
        "--disable-gpu",
        "--user-data-dir=`"$tmpProfile`"",
        "--window-size=$($p.Size)",
        "--screenshot=`"$outPng`"",
        $p.Url
    )
    $proc = Start-Process -FilePath $edge -ArgumentList $args -PassThru -Wait
    Write-Host "Captured $($p.Name) -> $outPng"
    Remove-Item -Recurse -Force $tmpProfile -ErrorAction SilentlyContinue
}
