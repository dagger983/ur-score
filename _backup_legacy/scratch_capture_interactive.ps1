$edge = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
if (-not (Test-Path $edge)) { $edge = "C:\Program Files\Microsoft\Edge\Application\msedge.exe" }
$tmpProfile = "$env:TEMP\edge-prof-$(Get-Random)"
$brainDir = "C:\Users\Vicky\.gemini\antigravity-ide\brain\14120e7a-1779-4cbf-9b75-d3deafcfe29b"
$outPng = "$brainDir\preview_interactive_widget.png"
$args = @(
    "--headless=new",
    "--disable-gpu",
    "--user-data-dir=`"$tmpProfile`"",
    "--window-size=950,650",
    "--screenshot=`"$outPng`"",
    "file:///d:/Project/ur-score/scratch_test_interactive_widget.html"
)
$proc = Start-Process -FilePath $edge -ArgumentList $args -PassThru -Wait
Write-Host "Captured to $outPng"
Remove-Item -Recurse -Force $tmpProfile -ErrorAction SilentlyContinue
