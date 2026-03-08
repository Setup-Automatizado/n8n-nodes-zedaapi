#!/bin/bash
# Test script for Zé da API credentials
# Usage: ./test-credentials.sh <base_url> <instance_id> <instance_token> <client_token>

set -e

BASE_URL="${1:?Usage: $0 <base_url> <instance_id> <instance_token> <client_token>}"
INSTANCE_ID="${2:?Missing instance_id}"
INSTANCE_TOKEN="${3:?Missing instance_token}"
CLIENT_TOKEN="${4:?Missing client_token}"

API_URL="${BASE_URL}/instances/${INSTANCE_ID}/token/${INSTANCE_TOKEN}"

echo "=== Zé da API Credential Test ==="
echo ""
echo "Base URL:       ${BASE_URL}"
echo "Instance ID:    ${INSTANCE_ID}"
echo "Instance Token: ${INSTANCE_TOKEN:0:8}..."
echo "Client Token:   ${CLIENT_TOKEN:0:8}..."
echo "Full API URL:   ${API_URL}/status"
echo ""

# Test 1: Full auth (Instance Token + Client Token)
echo "--- Test 1: Full authentication (token + Client-Token header) ---"
HTTP_CODE=$(curl -s -o /tmp/zedaapi-test.json -w "%{http_code}" \
  -H "Client-Token: ${CLIENT_TOKEN}" \
  "${API_URL}/status")
BODY=$(cat /tmp/zedaapi-test.json)

if [ "$HTTP_CODE" = "200" ]; then
  echo "PASS (HTTP ${HTTP_CODE}): ${BODY}"
elif [ "$HTTP_CODE" = "404" ]; then
  echo "FAIL (HTTP ${HTTP_CODE}): Instance not found. Check your Instance ID."
  echo "  Response: ${BODY}"
  echo ""
  echo "  Common mistake: using the Instance Token as Instance ID."
  echo "  Instance ID and Instance Token are DIFFERENT values."
elif [ "$HTTP_CODE" = "401" ]; then
  echo "FAIL (HTTP ${HTTP_CODE}): Invalid credentials."
  echo "  Response: ${BODY}"
  echo "  Check both Instance Token and Client Token."
else
  echo "FAIL (HTTP ${HTTP_CODE}): Unexpected response."
  echo "  Response: ${BODY}"
fi
echo ""

# Test 2: Without Client-Token header
echo "--- Test 2: Without Client-Token header ---"
HTTP_CODE=$(curl -s -o /tmp/zedaapi-test.json -w "%{http_code}" \
  "${API_URL}/status")
BODY=$(cat /tmp/zedaapi-test.json)

if [ "$HTTP_CODE" = "401" ]; then
  echo "PASS (HTTP ${HTTP_CODE}): Server correctly requires Client-Token header."
elif [ "$HTTP_CODE" = "200" ]; then
  echo "WARN (HTTP ${HTTP_CODE}): Server does not require Client-Token. CLIENT_AUTH_TOKEN may not be configured."
else
  echo "INFO (HTTP ${HTTP_CODE}): ${BODY}"
fi
echo ""

# Test 3: Send a test message (dry run - only if test 1 passed)
if [ "$HTTP_CODE" != "200" ] || [ "$(curl -s -o /dev/null -w '%{http_code}' -H "Client-Token: ${CLIENT_TOKEN}" "${API_URL}/status")" = "200" ]; then
  echo "--- Test 3: List contacts (read-only validation) ---"
  HTTP_CODE=$(curl -s -o /tmp/zedaapi-test.json -w "%{http_code}" \
    -H "Client-Token: ${CLIENT_TOKEN}" \
    -H "Content-Type: application/json" \
    "${API_URL}/contacts")
  BODY=$(cat /tmp/zedaapi-test.json)

  if [ "$HTTP_CODE" = "200" ]; then
    echo "PASS (HTTP ${HTTP_CODE}): API operations working."
  else
    echo "INFO (HTTP ${HTTP_CODE}): ${BODY}"
  fi
fi

echo ""
echo "=== Test Complete ==="

rm -f /tmp/zedaapi-test.json
