
React Migartion Utility with IBM Carbon Design System & Codemod -

Follow Below steps to run this utility to upgrade react

# Install npm-check-updates
npm install -g npm-check-updates

# Check outdated packages
ncu

# Update package.json with latest versions
ncu -u
ncu -u '/react|react-dom|react-scripts|@carbon\/react|carbon-components-react/' --target '16.14.0'


# Install updated dependencies
npm install

# If you encounter peer dependency warnings, try:
npm install --legacy-peer-deps

# Reinstall all dependencies to ensure consistency
rm -rf node_modules package-lock.json
npm install

# Run update-react codemod script to migrate code
npm run update-react.ps1
