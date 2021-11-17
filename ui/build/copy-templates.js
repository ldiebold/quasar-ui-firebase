const { copySync, removeSync } = require('fs-extra');

console.log(` ⬆️  Copying template files...\n`)

removeSync('../app-extension/src/templates/src/actions')
copySync('src/actions', '../app-extension/src/templates/src/actions')

removeSync('../app-extension/src/templates/src/components')
copySync('src/components', '../app-extension/src/templates/src/components')

removeSync('../app-extension/src/templates/src/pages')
copySync('src/pages', '../app-extension/src/templates/src/pages')