$edge = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
if (-not (Test-Path $edge)) { $edge = "C:\Program Files\Microsoft\Edge\Application\msedge.exe" }
$tmp = "$env:TEMP\edge-$(Get-Random)"
$out = "C:\Users\Vicky\.gemini\antigravity-ide\brain\14120e7a-1779-4cbf-9b75-d3deafcfe29b\features_full_bottom.png"
$argsList = @(
    "--headless=new",
    "--disable-gpu",
    "--user-data-dir=$tmp",
    "--window-size=1280,3200",
    "--screenshot=$out",
    "http://localhost:5000/payer.framer.website/features"
)
Start-Process -FilePath $edge -ArgumentList $argsList -Wait
Remove-Item -Recurse -Force $tmp -ErrorAction SilentlyContinue

Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile($out)
Write-Host "Dimensions: $($img.Width) x $($img.Height)"
# Let's crop the bottom 1200px
$y = [Math]::Max(0, $img.Height - 1400)
$rect = New-Object System.Drawing.Rectangle(0, $y, $img.Width, 1400)
$crop = New-Object System.Drawing.Bitmap($rect.Width, $rect.Height)
$g = [System.Drawing.Graphics]::FromImage($crop)
$g.DrawImage($img, 0, 0, $rect, [System.Drawing.GraphicsUnit]::Pixel)
$g.Dispose()
$outPath = "C:\Users\Vicky\.gemini\antigravity-ide\brain\14120e7a-1779-4cbf-9b75-d3deafcfe29b\features_footer_current.png"
$crop.Save($outPath)
$crop.Dispose()
$img.Dispose()
Write-Host "Cropped to: $outPath"
