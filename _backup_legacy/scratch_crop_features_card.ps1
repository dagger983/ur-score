Add-Type -AssemblyName System.Drawing
$srcPath = "C:\Users\Vicky\.gemini\antigravity-ide\brain\14120e7a-1779-4cbf-9b75-d3deafcfe29b\features_viewport_scroll.png"
$dstPath = "C:\Users\Vicky\.gemini\antigravity-ide\brain\14120e7a-1779-4cbf-9b75-d3deafcfe29b\features_ai_card_full_closeup.png"
$bmp = [System.Drawing.Bitmap]::FromFile($srcPath)
# Card full rectangle: x=820, y=240, w=480, h=530
$rect = New-Object System.Drawing.Rectangle(820, 245, 480, 530)
$crop = $bmp.Clone($rect, $bmp.PixelFormat)
$crop.Save($dstPath, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
$crop.Dispose()
Write-Host "Cropped full card successfully!"
