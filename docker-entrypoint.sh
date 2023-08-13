#!/bin/sh

rm -rf .env
echo "GITHUB_TOKEN=${GITHUB_TOKEN}" >> .env
echo "NEXT_PUBLIC_SUPABASE_ANON_KEY=${NEXT_PUBLIC_SUPABASE_ANON_KEY}" >> .env
echo "NEXT_PUBLIC_SUPABASE_URL=${NEXT_PUBLIC_SUPABASE_URL}" >> .env
node server.js
