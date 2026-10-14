Add-Type -AssemblyName System.Drawing
$b = [System.Drawing.Bitmap]::FromFile('payer_clone\framerusercontent.com\images\enhanced_screen_1_know_your_score.png')

# Find non-white pixels in top 150px
$minY = 1000
for ($y = 0; $y -lt 150; $y++) {
    for ($x = 20; $x -lt $b.Width - 20; $x++) {
        $c = $b.GetPixel($x, $y)
        # If not white (R < 250 or G < 250 or B < 250)
        if ($c.R -lt 240 -or $c.G -lt 240 -or $c.B -lt 240) {
            if ($y -lt $minY) {
                $minY = $y
                Write-Host "Non-white starts at y=$y, x=$x (R=$($c.R), G=$($c.G), B=$($c.B))"
                break
            }
        }
    }
    if ($minY -lt 1000) { break }
}

$b.Dispose()
