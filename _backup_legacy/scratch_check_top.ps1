Add-Type -AssemblyName System.Drawing
$b = [System.Drawing.Bitmap]::FromFile('payer_clone\framerusercontent.com\images\enhanced_screen_1_know_your_score.png')
Write-Host "Top center (190, 10):" $b.GetPixel(190, 10)
Write-Host "Top center (190, 20):" $b.GetPixel(190, 20)
Write-Host "Top center (190, 30):" $b.GetPixel(190, 30)
Write-Host "Top center (190, 60):" $b.GetPixel(190, 60)
$b.Dispose()
