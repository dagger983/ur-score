Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\Vicky\.gemini\antigravity-ide\brain\6315e788-015c-4ce2-a7fa-544a0957e8f8\.user_uploaded\media_1791648352248.jpg"
$bmp = [System.Drawing.Bitmap]::FromFile($srcPath)

for ($y = 0; $y -lt 50; $y++) {
    $c = $bmp.GetPixel(512, $y)
    if ($c.B -gt 50) {
        Write-Host "Top edge at y=$y (R=$($c.R), G=$($c.G), B=$($c.B))"
        break
    }
}

for ($y = 1023; $y -gt 970; $y--) {
    $c = $bmp.GetPixel(512, $y)
    if ($c.B -gt 50) {
        Write-Host "Bottom edge at y=$y"
        break
    }
}

for ($x = 0; $x -lt 50; $x++) {
    $c = $bmp.GetPixel($x, 512)
    if ($c.B -gt 50) {
        Write-Host "Left edge at x=$x"
        break
    }
}

for ($x = 1023; $x -gt 970; $x--) {
    $c = $bmp.GetPixel($x, 512)
    if ($c.B -gt 50) {
        Write-Host "Right edge at x=$x"
        break
    }
}

$bmp.Dispose()
