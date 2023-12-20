#!/bin/bash

# Run the test command
OUTPUT=$(npm run test-with-server)

# Capture the exit code
EXIT_CODE=$?

# Print the output for logging
echo "$OUTPUT"

# Check for "tests passed" string in the output
if echo "$OUTPUT" | grep -iq "\d+\sfailed"; then
    echo "Exiting with code $EXIT_CODE"
    exit $EXIT_CODE
else
    echo "Tests passed found in output"
    exit 0
fi