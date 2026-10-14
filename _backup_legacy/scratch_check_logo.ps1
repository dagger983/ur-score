
Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\Vicky\.gemini\antigravity-ide\brain\6315e788-015c-4ce2-a7fa-544a0957e8f8\.user_uploaded\media_1791648352248.jpg"
$bmp = [System.Drawing.Bitmap]::FromFile($srcPath)

Write-Host "Width: $($bmp.Width), Height: $($bmp.Height)"
Write-Host "Corner 0,0: $($bmp.GetPixel(0,0))"
Write-Host "Corner 10,10: $($bmp.GetPixel(10,10))"
Write-Host "Edge 512,0: $($bmp.GetPixel(512,0))"
Write-Host "Center 512,512: $($bmp.GetPixel(512,512))"
$bmp.Dispose()
