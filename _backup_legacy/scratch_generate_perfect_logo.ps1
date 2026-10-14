Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\Vicky\.gemini\antigravity-ide\brain\6315e788-015c-4ce2-a7fa-544a0957e8f8\.user_uploaded\media_1791648352248.jpg"
$bmp = [System.Drawing.Bitmap]::FromFile($srcPath)

# 1024x1024 output
$size = 1024
$outBmp = New-Object System.Drawing.Bitmap($size, $size, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($outBmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$g.Clear([System.Drawing.Color]::Transparent)

# We want the icon centered and taking 1024x1024
# The icon in the source is from rect (8, 6, 1006, 1006)
# Radius in source is approx 224. In 1024 scale, radius is 224 * (1024 / 1006) = 228
$r = 226
$rect = New-Object System.Drawing.RectangleF(0, 0, $size, $size)

# Create rounded rectangle path
function Get-RoundedRectPath($rect, $r) {
    $path = New-Object System.Drawing.Drawing2D.GraphicsPath
    $d = $r * 2
    $path.AddArc($rect.X, $rect.Y, $d, $d, 180, 90)
    $path.AddArc($rect.Right - $d, $rect.Y, $d, $d, 270, 90)
    $path.AddArc($rect.Right - $d, $rect.Bottom - $d, $d, $d, 0, 90)
    $path.AddArc($rect.X, $rect.Bottom - $d, $d, $d, 90, 90)
    $path.CloseFigure()
    return $path
}

$path = Get-RoundedRectPath $rect $r

# Set clipping to the smooth rounded path
$g.SetClip($path)

# Draw the source image mapped to 0,0,1024,1024 from (8, 6, 1006, 1006)
$srcRect = New-Object System.Drawing.Rectangle(8, 6, 1006, 1006)
$destRect = New-Object System.Drawing.Rectangle(0, 0, $size, $size)
$g.DrawImage($bmp, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)

$g.ResetClip()
$path.Dispose()
$g.Dispose()
$bmp.Dispose()

# Save
$destPng = "payer_clone\framerusercontent.com\images\ur_score_logo.png"
$destWebsitePng = "payer_clone\payer.framer.website\ur_score_logo.png"

$outBmp.Save($destPng, [System.Drawing.Imaging.ImageFormat]::Png)
$outBmp.Save($destWebsitePng, [System.Drawing.Imaging.ImageFormat]::Png)
$outBmp.Dispose()

Write-Host "Flawless transparent logo saved!"
