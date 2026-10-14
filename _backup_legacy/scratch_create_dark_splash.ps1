Add-Type -AssemblyName System.Drawing

$width = 780
$height = 1688
$bmp = New-Object System.Drawing.Bitmap($width, $height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

# 1. Background: Deep rich midnight obsidian
$rect = New-Object System.Drawing.Rectangle(0, 0, $width, $height)
$topColor = [System.Drawing.Color]::FromArgb(255, 10, 15, 24)
$bottomColor = [System.Drawing.Color]::FromArgb(255, 3, 5, 10)
$brush = New-Object System.Drawing.Drawing2D.LinearGradientBrush($rect, $topColor, $bottomColor, 90.0)
$g.FillRectangle($brush, $rect)
$brush.Dispose()

# 2. Subtle ambient blue glow in center
$glowCenter = New-Object System.Drawing.PointF($($width / 2), $($height / 2 - 40))
$glowPath = New-Object System.Drawing.Drawing2D.GraphicsPath
$glowPath.AddEllipse($($glowCenter.X - 350), $($glowCenter.Y - 350), 700, 700)
$pGlow = New-Object System.Drawing.Drawing2D.PathGradientBrush($glowPath)
$pGlow.CenterPoint = $glowCenter
$pGlow.CenterColor = [System.Drawing.Color]::FromArgb(70, 37, 99, 235)
$pGlow.SurroundColors = @([System.Drawing.Color]::FromArgb(0, 3, 5, 10))
$g.FillPath($pGlow, $glowPath)
$pGlow.Dispose()
$glowPath.Dispose()

# 3. Draw Center UR Score Logo
$logoPath = "payer_clone\framerusercontent.com\images\ur_score_logo.png"
if (Test-Path $logoPath) {
    $logoImg = [System.Drawing.Image]::FromFile((Join-Path (Get-Location).Path $logoPath))
    $logoSize = 220
    $logoX = ($width - $logoSize) / 2
    $logoY = ($height / 2) - 130
    
    # Subtle drop shadow behind logo
    $shadowBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(100, 0, 0, 0))
    $g.FillRectangle($shadowBrush, ($logoX - 5), ($logoY + 8), ($logoSize + 10), ($logoSize + 10))
    $shadowBrush.Dispose()

    $g.DrawImage($logoImg, $logoX, $logoY, $logoSize, $logoSize)
    $logoImg.Dispose()
}

# 4. Branded typography below logo
$fontFamily = New-Object System.Drawing.FontFamily("Arial")
$titleFont = New-Object System.Drawing.Font($fontFamily, 32, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$titleBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 255, 255, 255))
$sf = New-Object System.Drawing.StringFormat
$sf.Alignment = [System.Drawing.StringAlignment]::Center
$sf.LineAlignment = [System.Drawing.StringAlignment]::Center

$titleY = ($height / 2) + 130
$g.DrawString("UR SCORE", $titleFont, $titleBrush, ($width / 2), $titleY, $sf)

$subFont = New-Object System.Drawing.Font($fontFamily, 18, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
$subBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 148, 163, 184))
$g.DrawString("Know Your Score. Own Your Growth.", $subFont, $subBrush, ($width / 2), ($titleY + 44), $sf)

# 5. Clean minimalist pill badge at bottom
$badgeY = $height - 180
$badgeW = 240
$badgeH = 40
$badgeX = ($width - $badgeW) / 2
$badgeBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(35, 255, 255, 255))
$badgePen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(50, 255, 255, 255), 1.0)
$g.FillRectangle($badgeBrush, $badgeX, $badgeY, $badgeW, $badgeH)
$g.DrawRectangle($badgePen, $badgeX, $badgeY, $badgeW, $badgeH)
$badgeBrush.Dispose()
$badgePen.Dispose()

$badgeFont = New-Object System.Drawing.Font($fontFamily, 14, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$badgeTextBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 203, 213, 225))
$g.DrawString("OFFICIAL CIBIL SYNCED", $badgeFont, $badgeTextBrush, ($width / 2), ($badgeY + ($badgeH / 2)), $sf)

$sf.Dispose()
$titleFont.Dispose()
$titleBrush.Dispose()
$subFont.Dispose()
$subBrush.Dispose()
$badgeFont.Dispose()
$badgeTextBrush.Dispose()
$fontFamily.Dispose()
$g.Dispose()

# Save image
$dest1 = "payer_clone\framerusercontent.com\images\ur_score_splash_screen_dark.png"
$dest2 = "payer_clone\payer.framer.website\ur_score_splash_screen_dark.png"
$bmp.Save((Join-Path (Get-Location).Path $dest1), [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Save((Join-Path (Get-Location).Path $dest2), [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()

Write-Host "Created ur_score_splash_screen_dark.png successfully!"
