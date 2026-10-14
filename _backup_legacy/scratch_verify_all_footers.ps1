$edge = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
if (-not (Test-Path $edge)) { $edge = "C:\Program Files\Microsoft\Edge\Application\msedge.exe" }

Add-Type -AssemblyName System.Drawing

$testPages = @(
    @{ name = "home"; url = "http://localhost:5000/payer.framer.website/"; height = 4800; cropStart = 3800 },
    @{ name = "features"; url = "http://localhost:5000/payer.framer.website/features"; height = 2200; cropStart = 1100 },
    @{ name = "download"; url = "http://localhost:5000/payer.framer.website/download"; height = 2200; cropStart = 1100 },
    @{ name = "company"; url = "http://localhost:5000/payer.framer.website/company"; height = 2600; cropStart = 1500 }
)

foreach ($tp in $testPages) {
    $tmp = "$env:TEMP\edge-verify-$($tp.name)-$(Get-Random)"
    $out = "C:\Users\Vicky\.gemini\antigravity-ide\brain\14120e7a-1779-4cbf-9b75-d3deafcfe29b\verify_$($tp.name)_full.png"
    $argsList = @(
        "--headless=new",
        "--disable-gpu",
        "--user-data-dir=$tmp",
        "--window-size=1280,$($tp.height)",
        "--screenshot=$out",
        $tp.url
    )
    Start-Process -FilePath $edge -ArgumentList $argsList -Wait
    Remove-Item -Recurse -Force $tmp -ErrorAction SilentlyContinue

    if (Test-Path $out) {
        $img = [System.Drawing.Image]::FromFile($out)
        $cStart = [Math]::Min($tp.cropStart, $img.Height - 600)
        $cHeight = [Math]::Min(750, $img.Height - $cStart)
        $rect = New-Object System.Drawing.Rectangle(0, $cStart, $img.Width, $cHeight)
        $crop = New-Object System.Drawing.Bitmap($rect.Width, $rect.Height)
        $g = [System.Drawing.Graphics]::FromImage($crop)
        $g.DrawImage($img, 0, 0, $rect, [System.Drawing.GraphicsUnit]::Pixel)
        $g.Dispose()
        $outCrop = "C:\Users\Vicky\.gemini\antigravity-ide\brain\14120e7a-1779-4cbf-9b75-d3deafcfe29b\verify_$($tp.name)_crop.png"
        $crop.Save($outCrop)
        $crop.Dispose()
        $img.Dispose()
        Write-Host "Captured & cropped $($tp.name) footer to: $outCrop"
    }
}
