Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile("C:\Users\Vicky\.gemini\antigravity-ide\brain\14120e7a-1779-4cbf-9b75-d3deafcfe29b\verify_download_full.png")
$bmp = New-Object System.Drawing.Bitmap($img)

Write-Host "Scanning for white text in download full..."
for ($y = 0; $y -lt $bmp.Height; $y += 50) {
    $count = 0
    for ($x = 0; $x -lt $bmp.Width; $x += 10) {
        $c = $bmp.GetPixel($x, $y)
        if ($c.R -gt 200 -and $c.G -gt 200 -and $c.B -gt 200) {
            $count++
        }
    }
    if ($count -gt 0) {
        Write-Host "Row $y has $count bright pixels"
    }
}
$bmp.Dispose()
$img.Dispose()
