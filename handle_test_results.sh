#!/bin/bash

# Run the test command and capture its output
OUTPUT=$(npm run test-with-server; EXIT_CODE=$?; echo $EXIT_CODE)

# Print the output for logging
echo "$OUTPUT"

# Check for "tests passed" string
if echo "$OUTPUT" | grep -iq "tests passed"; then
    exit 0
else
    exit "$(echo "$OUTPUT" | tail -1)"
fi