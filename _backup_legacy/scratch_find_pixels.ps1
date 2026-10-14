Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile("C:\Users\Vicky\.gemini\antigravity-ide\brain\14120e7a-1779-4cbf-9b75-d3deafcfe29b\features_full_bottom.png")
$bmp = New-Object System.Drawing.Bitmap($img)
Write-Host "Width: $($bmp.Width), Height: $($bmp.Height)"

# Find first and last y with non-black pixels
$minY = 99999
$maxY = -1
for ($y = 0; $y -lt $bmp.Height; $y += 10) {
    for ($x = 0; $x -lt $bmp.Width; $x += 20) {
        $c = $bmp.GetPixel($x, $y)
        if ($c.R -gt 15 -or $c.G -gt 15 -or $c.B -gt 15) {
            if ($y -lt $minY) { $minY = $y }
            if ($y -gt $maxY) { $maxY = $y }
        }
    }
}
Write-Host "Non-black rows range: $minY to $maxY"
$bmp.Dispose()
$img.Dispose()
