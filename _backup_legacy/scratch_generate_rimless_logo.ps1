Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\Vicky\.gemini\antigravity-ide\brain\6315e788-015c-4ce2-a7fa-544a0957e8f8\.user_uploaded\media_1791648352248.jpg"
$bmp = [System.Drawing.Bitmap]::FromFile($srcPath)

$size = 1024
$outBmp = New-Object System.Drawing.Bitmap($size, $size, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($outBmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$g.Clear([System.Drawing.Color]::Transparent)

# Inset by 12 pixels so NO dark compression artifact remains
$inset = 12
$srcX = 8 + $inset
$srcY = 6 + $inset
$srcW = 1006 - ($inset * 2)
$srcH = 1006 - ($inset * 2)

$r = 226
$rect = New-Object System.Drawing.RectangleF(0, 0, $size, $size)

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

$g.SetClip($path)
$srcRect = New-Object System.Drawing.Rectangle($srcX, $srcY, $srcW, $srcH)
$destRect = New-Object System.Drawing.Rectangle(0, 0, $size, $size)
$g.DrawImage($bmp, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)

$g.ResetClip()
$path.Dispose()
$g.Dispose()
$bmp.Dispose()

$destPng = "payer_clone\framerusercontent.com\images\ur_score_logo.png"
$destWebsitePng = "payer_clone\payer.framer.website\ur_score_logo.png"

$outBmp.Save($destPng, [System.Drawing.Imaging.ImageFormat]::Png)
$outBmp.Save($destWebsitePng, [System.Drawing.Imaging.ImageFormat]::Png)
$outBmp.Dispose()

Write-Host "Rimless logo saved!"
