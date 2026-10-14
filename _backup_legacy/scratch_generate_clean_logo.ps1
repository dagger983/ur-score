Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\Vicky\.gemini\antigravity-ide\brain\6315e788-015c-4ce2-a7fa-544a0957e8f8\.user_uploaded\media_1791648352248.jpg"
$bmp = [System.Drawing.Bitmap]::FromFile($srcPath)

# Bounding box is (8, 8) to (1012, 1012), size 1005x1005
$cropX = 8
$cropY = 8
$cropW = 1005
$cropH = 1005

# We will create a new 1024x1024 32-bit ARGB bitmap
$outBmp = New-Object System.Drawing.Bitmap(1024, 1024, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($outBmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

# Clear with transparent
$g.Clear([System.Drawing.Color]::Transparent)

# Draw the cropped area scaled to 1024x1024
$destRect = New-Object System.Drawing.Rectangle(0, 0, 1024, 1024)
$srcRect = New-Object System.Drawing.Rectangle($cropX, $cropY, $cropW, $cropH)
$g.DrawImage($bmp, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)

$g.Dispose()
$bmp.Dispose()

# Now create an alpha mask using squircle / rounded rect or flood fill from corners
# Let's test the corner pixels: any pixel that is near black (R < 15, G < 15, B < 15) outside the icon should be transparent.
# Flood fill transparency from the 4 corners:
$w = $outBmp.Width
$h = $outBmp.Height

$visited = New-Object 'bool[,]' $w, $h
$queue = New-Object System.Collections.Generic.Queue[System.Drawing.Point]

# Enqueue all border pixels that are black
for ($x = 0; $x -lt $w; $x++) {
    $c1 = $outBmp.GetPixel($x, 0)
    if ($c1.R -lt 25 -and $c1.G -lt 25 -and $c1.B -lt 25) {
        $queue.Enqueue((New-Object System.Drawing.Point($x, 0)))
        $visited[$x, 0] = $true
    }
    $c2 = $outBmp.GetPixel($x, $h - 1)
    if ($c2.R -lt 25 -and $c2.G -lt 25 -and $c2.B -lt 25) {
        $queue.Enqueue((New-Object System.Drawing.Point($x, $h - 1)))
        $visited[$x, $h - 1] = $true
    }
}
for ($y = 0; $y -lt $h; $y++) {
    $c1 = $outBmp.GetPixel(0, $y)
    if ($c1.R -lt 25 -and $c1.G -lt 25 -and $c1.B -lt 25) {
        $queue.Enqueue((New-Object System.Drawing.Point(0, $y)))
        $visited[0, $y] = $true
    }
    $c2 = $outBmp.GetPixel($w - 1, $y)
    if ($c2.R -lt 25 -and $c2.G -lt 25 -and $c2.B -lt 25) {
        $queue.Enqueue((New-Object System.Drawing.Point($w - 1, $y)))
        $visited[$w - 1, $y] = $true
    }
}

$transparent = [System.Drawing.Color]::FromArgb(0, 0, 0, 0)

while ($queue.Count -gt 0) {
    $pt = $queue.Dequeue()
    $outBmp.SetPixel($pt.X, $pt.Y, $transparent)

    # 4 neighbors
    $neighbors = @(
        (New-Object System.Drawing.Point($pt.X + 1, $pt.Y)),
        (New-Object System.Drawing.Point($pt.X - 1, $pt.Y)),
        (New-Object System.Drawing.Point($pt.X, $pt.Y + 1)),
        (New-Object System.Drawing.Point($pt.X, $pt.Y - 1))
    )

    foreach ($n in $neighbors) {
        if ($n.X -ge 0 -and $n.X -lt $w -and $n.Y -ge 0 -and $n.Y -lt $h) {
            if (-not $visited[$n.X, $n.Y]) {
                $visited[$n.X, $n.Y] = $true
                $c = $outBmp.GetPixel($n.X, $n.Y)
                # If dark (threshold 30 for anti-aliasing near boundary)
                if ($c.R -lt 30 -and $c.G -lt 30 -and $c.B -lt 30) {
                    $queue.Enqueue($n)
                }
            }
        }
    }
}

$destPng = "payer_clone\framerusercontent.com\images\ur_score_logo.png"
$destWebsitePng = "payer_clone\payer.framer.website\ur_score_logo.png"

$outBmp.Save($destPng, [System.Drawing.Imaging.ImageFormat]::Png)
$outBmp.Save($destWebsitePng, [System.Drawing.Imaging.ImageFormat]::Png)
$outBmp.Dispose()

Write-Host "Transparent logo saved to: $destPng and $destWebsitePng"
