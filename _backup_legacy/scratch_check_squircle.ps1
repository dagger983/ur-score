Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\Vicky\.gemini\antigravity-ide\brain\6315e788-015c-4ce2-a7fa-544a0957e8f8\.user_uploaded\media_1791648352248.jpg"
$bmp = [System.Drawing.Bitmap]::FromFile($srcPath)

# Check points along the diagonal from top-left (0,0) to center (512,512)
for ($d = 0; $d -lt 300; $d += 10) {
    $c = $bmp.GetPixel($d, $d)
    Write-Host "Diagonal ($d, $d): R=$($c.R), G=$($c.G), B=$($c.B)"
    if ($c.B -gt 100) {
        Write-Host ">>> Blue starts around diagonal $d"
        break
    }
}

$bmp.Dispose()
