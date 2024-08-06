# Define script actions
function Run-Command {
    param (
        [string]$Command
    )
    Write-Output "Running command: $Command"
    Invoke-Expression $Command
}

# Upgrade dependencies
Write-Output "Upgrading dependencies..."
Run-Command "npx npm-check-updates -u"
Run-Command "npm install --legacy-peer-deps"

# Upgrade React and ReactDOM
Write-Output "Upgrading React and ReactDOM..."
Run-Command "npm install react@latest react-dom@latest --legacy-peer-deps"

# Run codemods
Write-Output "Running codemods..."

# Codemod transformations
$codemods = @(
    "update-react-imports",
    "react-dom-render",
    "rename-unsafe-lifecycles",
    "create-element-to-jsx",
    "react-to-react-dom",
    "React-PropTypes-to-prop-types",
    "React-DOM-to-react-dom-factories"
)

foreach ($codemod in $codemods) {
    Run-Command "npx react-codemod $codemod --force"
}

# Check for specific React 18 transformations
Write-Output "Running additional React 18 transformations..."
Run-Command "npx react-codemod react-18 --force"

Write-Output "Upgrade complete! Please review and test your code."
