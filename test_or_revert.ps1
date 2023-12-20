# FILEPATH: /d:/WebDevProjs/TCR_JavaScript/test_or_revert.ps1

# Run build, exit if it fails
npm run build
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

# Run Jest tests
npx jest
$exitcode_1 = $LASTEXITCODE;
npm run test-with-server
$exitcode_2 = $LASTEXITCODE;

# Check if tests passed
if ($exitcode_1 -ne 0 -and $exitcode_2 -ne 0 ) {
  # Tests failed, reset changes
  git clean -f -d
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
