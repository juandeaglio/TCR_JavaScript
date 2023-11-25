# FILEPATH: /d:/WebDevProjs/TCR_JavaScript/test_or_revert.ps1

# Run Jest tests
npx jest

# Check if tests passed
if ($LASTEXITCODE -ne 0) {
  # Tests failed, reset changes
  git reset --hard
} else {
  # Tests passed, prompt for commit message
  $commitMessage = Read-Host "Tests passed. Enter commit message"

  if ($commitMessage -eq "") {
    # No commit message, reset changes
    git add -A; git commit -m 'Tests passed.'
  }
  else {
     # Commit changes with message
     git add -A; git commit -m $commitMessage
  }
}
