$edge = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
$tmpProfile = "$env:TEMP\edge-mockup-profile-$(Get-Random)"
$url = "http://localhost:5000/payer.framer.website/screens_enhanced.html"
$allScreensPng = (Join-Path (Get-Location).Path "payer_clone\payer.framer.website\all_enhanced_screens.png")

$args = @(
    "--headless=new",
    "--disable-gpu",
    "--user-data-dir=`"$tmpProfile`"",
    "--window-size=1800,1200",
    "--screenshot=`"$allScreensPng`"",
    $url
)

Write-Host "Capturing screens_enhanced.html to $allScreensPng..."
$proc = Start-Process -FilePath $edge -ArgumentList $args -PassThru -Wait

if (-not (Test-Path $allScreensPng)) {
    Write-Host "Screenshot failed!"
    exit 1
}

Add-Type -AssemblyName System.Drawing
$bmp = [System.Drawing.Bitmap]::FromFile((Resolve-Path $allScreensPng).Path)

# Locate the top of the white box around x = 200
$topY = 0
for ($y = 150; $y -lt 350; $y++) {
    $c = $bmp.GetPixel(200, $y)
    if ($c.R -gt 240 -and $c.G -gt 240 -and $c.B -gt 240) {
        $topY = $y
        break
    }
}
Write-Host "Top white edge at Y = $topY"

# Find left edge of each phone
# In screens_enhanced.html: gap is 40px, width is 380px
# Let's find left edge of Phone 1 around y = $topY + 100
$leftX1 = 0
for ($x = 40; $x -lt 150; $x++) {
    $c = $bmp.GetPixel($x, $topY + 100)
    if ($c.R -gt 240 -and $c.G -gt 240 -and $c.B -gt 240) {
        $leftX1 = $x
        break
    }
}
Write-Host "Left edge Phone 1 at X = $leftX1"

# The 4 phones are spaced by width 380 + gap 40 = 420px
$phones = @(
    @{ Name = "enhanced_screen_1_know_your_score.png"; X = $leftX1; Y = $topY; W = 380; H = 800 },
    @{ Name = "enhanced_screen_2_understand_credit.png"; X = ($leftX1 + 420); Y = $topY; W = 380; H = 800 },
    @{ Name = "enhanced_screen_3_improve_with_plan.png"; X = ($leftX1 + 840); Y = $topY; W = 380; H = 800 },
    @{ Name = "enhanced_screen_4_ask_understand_improve.png"; X = ($leftX1 + 1260); Y = $topY; W = 380; H = 800 }
)

foreach ($p in $phones) {
    $rect = New-Object System.Drawing.Rectangle($p.X, $p.Y, $p.W, $p.H)
    $cropped = $bmp.Clone($rect, $bmp.PixelFormat)
    
    $out1 = "payer_clone\framerusercontent.com\images\$($p.Name)"
    $out2 = "payer_clone\payer.framer.website\$($p.Name)"
    
    $cropped.Save($out1, [System.Drawing.Imaging.ImageFormat]::Png)
    $cropped.Save($out2, [System.Drawing.Imaging.ImageFormat]::Png)
    $cropped.Dispose()
    
    Write-Host "Saved $($p.Name) from X=$($p.X), Y=$($p.Y), W=$($p.W), H=$($p.H)"
}

$bmp.Dispose()
Write-Host "All 4 enhanced screens cropped and updated successfully!"
