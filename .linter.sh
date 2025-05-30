#!/bin/bash
cd /home/kavia/workspace/code-generation/noteease-103630-5b9a5993/noteease
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

