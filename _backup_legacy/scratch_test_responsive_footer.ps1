$edge = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
if (-not (Test-Path $edge)) { $edge = "C:\Program Files\Microsoft\Edge\Application\msedge.exe" }

# 1. Tablet Viewport: 900px
$tmp = "$env:TEMP\edge-$(Get-Random)"
$outTab = "C:\Users\Vicky\.gemini\antigravity-ide\brain\14120e7a-1779-4cbf-9b75-d3deafcfe29b\features_tablet_footer.png"
$argsList = @(
    "--headless=new",
    "--disable-gpu",
    "--user-data-dir=$tmp",
    "--window-size=900,2800",
    "--screenshot=$outTab",
    "http://localhost:5000/payer.framer.website/features"
)
Start-Process -FilePath $edge -ArgumentList $argsList -Wait
Remove-Item -Recurse -Force $tmp -ErrorAction SilentlyContinue

# 2. Mobile Viewport: 390px
$tmp = "$env:TEMP\edge-$(Get-Random)"
$outMob = "C:\Users\Vicky\.gemini\antigravity-ide\brain\14120e7a-1779-4cbf-9b75-d3deafcfe29b\features_mobile_footer.png"
$argsList = @(
    "--headless=new",
    "--disable-gpu",
    "--user-data-dir=$tmp",
    "--window-size=390,3200",
    "--screenshot=$outMob",
    "http://localhost:5000/payer.framer.website/features"
)
Start-Process -FilePath $edge -ArgumentList $argsList -Wait
Remove-Item -Recurse -Force $tmp -ErrorAction SilentlyContinue

# Crop bottom of both
Add-Type -AssemblyName System.Drawing

# Tablet crop
$imgT = [System.Drawing.Image]::FromFile($outTab)
$rectT = New-Object System.Drawing.Rectangle(0, 1600, $imgT.Width, [Math]::Min(1000, $imgT.Height - 1600))
$cropT = New-Object System.Drawing.Bitmap($rectT.Width, $rectT.Height)
$gT = [System.Drawing.Graphics]::FromImage($cropT)
$gT.DrawImage($imgT, 0, 0, $rectT, [System.Drawing.GraphicsUnit]::Pixel)
$gT.Dispose()
$outTCrop = "C:\Users\Vicky\.gemini\antigravity-ide\brain\14120e7a-1779-4cbf-9b75-d3deafcfe29b\features_tablet_footer_crop.png"
$cropT.Save($outTCrop)
$cropT.Dispose()
$imgT.Dispose()

# Mobile crop
$imgM = [System.Drawing.Image]::FromFile($outMob)
$rectM = New-Object System.Drawing.Rectangle(0, 2000, $imgM.Width, [Math]::Min(1000, $imgM.Height - 2000))
$cropM = New-Object System.Drawing.Bitmap($rectM.Width, $rectM.Height)
$gM = [System.Drawing.Graphics]::FromImage($cropM)
$gM.DrawImage($imgM, 0, 0, $rectM, [System.Drawing.GraphicsUnit]::Pixel)
$gM.Dispose()
$outMCrop = "C:\Users\Vicky\.gemini\antigravity-ide\brain\14120e7a-1779-4cbf-9b75-d3deafcfe29b\features_mobile_footer_crop.png"
$cropM.Save($outMCrop)
$cropM.Dispose()
$imgM.Dispose()

Write-Host "Tablet and Mobile footer cropped!"
