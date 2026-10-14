Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile("C:\Users\Vicky\.gemini\antigravity-ide\brain\14120e7a-1779-4cbf-9b75-d3deafcfe29b\features_tablet_footer.png")
$rect = New-Object System.Drawing.Rectangle(0, 1100, $img.Width, 700)
$crop = New-Object System.Drawing.Bitmap($rect.Width, $rect.Height)
$g = [System.Drawing.Graphics]::FromImage($crop)
$g.DrawImage($img, 0, 0, $rect, [System.Drawing.GraphicsUnit]::Pixel)
$g.Dispose()
$outPath = "C:\Users\Vicky\.gemini\antigravity-ide\brain\14120e7a-1779-4cbf-9b75-d3deafcfe29b\features_tablet_footer_full.png"
$crop.Save($outPath)
$crop.Dispose()
$img.Dispose()
Write-Host "Tablet full footer saved!"
