#!/bin/bash

# Configuration - matches your .env
DB_NAME="sapientia"
USER="root"
PASS="password"

echo "--- Starting Seed Process ---"

# Loop through all JSON files
for file in /docker-entrypoint-initdb.d/*.json; do
    # Get filename for collection name
    collection=$(basename "$file" .json)
    
    echo "Importing: $collection from $file"
    
    # Run the import
    mongoimport --host localhost \
        --port 27017 \
        --db "$DB_NAME" \
        --collection "$collection" \
        --authenticationDatabase admin \
        --username "$USER" \
        --password "$PASS" \
        --file "$file" \
        --jsonArray \
        --writeConcern="{w:0}"

    echo "Finished $collection"
done

echo "--- Seed Complete ---"