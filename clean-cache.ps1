# Script to clean Next.js cache
Write-Host "Cleaning Next.js cache..." -ForegroundColor Yellow

# Remove .next directory
if (Test-Path ".next") {
    Remove-Item -Recurse -Force ".next"
    Write-Host "✓ Removed .next directory" -ForegroundColor Green
}

# Remove node_modules/.cache
if (Test-Path "node_modules\.cache") {
    Remove-Item -Recurse -Force "node_modules\.cache"
    Write-Host "✓ Removed node_modules/.cache directory" -ForegroundColor Green
}

Write-Host "Cache cleaned successfully!" -ForegroundColor Green
Write-Host "You can now run: npm run dev" -ForegroundColor Cyan
