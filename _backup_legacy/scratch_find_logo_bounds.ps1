Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\Vicky\.gemini\antigravity-ide\brain\6315e788-015c-4ce2-a7fa-544a0957e8f8\.user_uploaded\media_1791648352248.jpg"
$bmp = [System.Drawing.Bitmap]::FromFile($srcPath)

$minX = $bmp.Width
$maxX = 0
$minY = $bmp.Height
$maxY = 0

for ($y = 0; $y -lt $bmp.Height; $y += 4) {
    for ($x = 0; $x -lt $bmp.Width; $x += 4) {
        $c = $bmp.GetPixel($x, $y)
        # Check if pixel is not black (R > 20 or G > 20 or B > 20)
        if ($c.R -gt 25 -or $c.G -gt 25 -or $c.B -gt 25) {
            if ($x -lt $minX) { $minX = $x }
            if ($x -gt $maxX) { $maxX = $x }
            if ($y -lt $minY) { $minY = $y }
            if ($y -gt $maxY) { $maxY = $y }
        }
    }
}

Write-Host "Non-black Bounding Box: minX=$minX, maxX=$maxX, minY=$minY, maxY=$maxY"
Write-Host "Icon Width: $($maxX - $minX), Icon Height: $($maxY - $minY)"
$bmp.Dispose()
