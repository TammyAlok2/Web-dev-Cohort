curl --request POST \
  --url https://api.hubapi.com/crm/v3/objects/deals/batch/archive \
  --header 'authorization: Bearer YOUR_ACCESS_TOKEN' \
  --header 'content-type: application/json' \
  --data '{
  "inputs": [
    {
      "id": "string"
    }
  ]
}