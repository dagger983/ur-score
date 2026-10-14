Add-Type -AssemblyName System.Drawing
$brainDir = "C:\Users\Vicky\.gemini\antigravity-ide\brain\14120e7a-1779-4cbf-9b75-d3deafcfe29b"

# 1. Crop Scenario 2
$src1 = "$brainDir\live_interaction_scenario2.png"
$bmp1 = [System.Drawing.Bitmap]::FromFile($src1)
$rect = New-Object System.Drawing.Rectangle(775, 240, 525, 535)
$crop1 = $bmp1.Clone($rect, $bmp1.PixelFormat)
$crop1.Save("$brainDir\card_interactive_scenario2_crop.png", [System.Drawing.Imaging.ImageFormat]::Png)
$bmp1.Dispose()
$crop1.Dispose()

# 2. Crop Scrubbing
$src2 = "$brainDir\live_interaction_scrubbing.png"
$bmp2 = [System.Drawing.Bitmap]::FromFile($src2)
$crop2 = $bmp2.Clone($rect, $bmp2.PixelFormat)
$crop2.Save("$brainDir\card_interactive_scrubbing_crop.png", [System.Drawing.Imaging.ImageFormat]::Png)
$bmp2.Dispose()
$crop2.Dispose()

# 3. Crop Scenario 1
$src3 = "$brainDir\live_interaction_scenario1.png"
$bmp3 = [System.Drawing.Bitmap]::FromFile($src3)
$crop3 = $bmp3.Clone($rect, $bmp3.PixelFormat)
$crop3.Save("$brainDir\card_interactive_scenario1_crop.png", [System.Drawing.Imaging.ImageFormat]::Png)
$bmp3.Dispose()
$crop3.Dispose()

Write-Host "Cropped all 3 interactive cards successfully!"
