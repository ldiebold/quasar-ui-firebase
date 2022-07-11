/**
 * Quasar App Extension index/runner script
 * (runs on each dev/build)
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/index-api
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/IndexAPI.js
 */

function extendConf(conf, api) {
    // register our boot file
    conf.boot.push('~quasar-app-extension-firebase/src/boot/registerFirebase.js')
    conf.boot.push('~quasar-app-extension-firebase/src/boot/registerAuthRoutes.js')

    // make sure app extension files & ui package gets transpile
    if (api.hasVite !== true) {
        conf.build.transpileDependencies.push(/quasar-app-extension-firebase[\\/]src/)
    }

    conf.framework.plugins.push('Loading')
}

module.exports = function (api) {
    // Quasar compatibility check; you may need
    // hard dependencies, as in a minimum version of the "quasar"
    // package or a minimum version of "@quasar/app" CLI
    api.compatibleWith('quasar', '^2.0.0')

    if (api.hasVite === true) {
        api.compatibleWith('@quasar/app-vite', '^1.0.0-alpha.0')
    } else {
        api.compatibleWith('@quasar/app', '^3.0.0')
    }


    // Uncomment the line below if you provide a JSON API for your component
    // api.registerDescribeApi('FirebaseRegisterForm', '~quasar-ui-firebase/src/components/FirebaseRegisterForm.json')

    // We extend /quasar.conf.js
    api.extendQuasarConf(extendConf)

    // Add webpack alias for firebase-actions
    api.chainWebpack((chain) => {
        chain.resolve.alias.set('firebase-actions', api.resolve.src('actions/firebase'))
    })
}
