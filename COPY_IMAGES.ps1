# Run this script after placing images in the source folders
# It copies them to the correct /public/ locations

$src = "D:\projects\task-manager\portfolio photos"
$dst = "D:\projects\task-manager\projects\portfolio\public"

Write-Host "Copying images to portfolio public folder..." -ForegroundColor Cyan

# Profile photo - looks for any image file in profile photo folder
$profileFiles = Get-ChildItem "$src\profile photo" -Include "*.jpg","*.jpeg","*.png","*.webp" -Recurse -ErrorAction SilentlyContinue
if ($profileFiles) {
    $first = $profileFiles | Select-Object -First 1
    $ext = $first.Extension.ToLower()
    # Always save as tanvin-kheni.jpg (convert name, keep extension)
    Copy-Item $first.FullName "$dst\tanvin-kheni$ext" -Force
    Write-Host "Profile photo copied: $($first.Name) -> tanvin-kheni$ext" -ForegroundColor Green
} else {
    Write-Host "No profile photo found in: $src\profile photo" -ForegroundColor Red
    Write-Host "  -> Place your photo there and re-run this script" -ForegroundColor Yellow
}

# VTS images
$vtsFiles = Get-ChildItem "$src\vts" -Include "*.png","*.jpg","*.jpeg","*.webp" -Recurse -ErrorAction SilentlyContinue | Sort-Object Name
if ($vtsFiles) {
    $i = 1
    foreach ($f in $vtsFiles) {
        Copy-Item $f.FullName "$dst\projects\vts\vts-$i.png" -Force
        Write-Host "VTS: $($f.Name) -> vts-$i.png" -ForegroundColor Green
        $i++
    }
} else {
    Write-Host "No VTS images found" -ForegroundColor Red
}

Write-Host "`nDone! Refresh your browser at http://localhost:3000" -ForegroundColor Cyan
