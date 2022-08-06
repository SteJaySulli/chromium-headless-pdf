#!/bin/bash
echo "=========================="
echo "Installing nvm, node & npm"
echo "=========================="

# Install nvm to get a modern version of node
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
# Ensure nvm directories are available
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" 
# Install node version 14
nvm install 14
# Install most recent npm
npm install -g npm

echo "======================"
echo "Installing application"
echo "======================"

# Install application
cd /app
npm install
npm run build