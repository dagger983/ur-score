Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile("C:\Users\Vicky\.gemini\antigravity-ide\brain\14120e7a-1779-4cbf-9b75-d3deafcfe29b\verify_download_full.png")
$rect = New-Object System.Drawing.Rectangle(0, 1650, $img.Width, [Math]::Min(550, $img.Height - 1650))
$crop = New-Object System.Drawing.Bitmap($rect.Width, $rect.Height)
$g = [System.Drawing.Graphics]::FromImage($crop)
$g.DrawImage($img, 0, 0, $rect, [System.Drawing.GraphicsUnit]::Pixel)
$g.Dispose()
$outPath = "C:\Users\Vicky\.gemini\antigravity-ide\brain\14120e7a-1779-4cbf-9b75-d3deafcfe29b\verify_dl_footer_1700.png"
$crop.Save($outPath)
$crop.Dispose()
$img.Dispose()
Write-Host "Crop 1700 saved!"
