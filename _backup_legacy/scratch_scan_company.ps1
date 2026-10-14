Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile("C:\Users\Vicky\.gemini\antigravity-ide\brain\14120e7a-1779-4cbf-9b75-d3deafcfe29b\verify_company_full.png")
$bmp = New-Object System.Drawing.Bitmap($img)
Write-Host "Width: $($bmp.Width), Height: $($bmp.Height)"

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
Write-Host "Company page non-black rows: $minY to $maxY"
$bmp.Dispose()
$img.Dispose()
