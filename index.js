require('app-module-path').addPath(__dirname)

// Load Config settings
const config = require('config')
const serverRunMode = require('server/includes/serverRunMode')

// Set App Mode
const runTests = serverRunMode.mode === 'test'
const runTestsWatch = serverRunMode.mode === 'test:watch'

const runCompiler = (
	serverRunMode.isLocalProductionTesting
	|| serverRunMode.mode === 'compile'
)

const runServer = (
	serverRunMode.isLocalProductionTesting
	|| serverRunMode.mode === 'server'
)

// Start Webservers
if (runTests) {
	require('${dir.server}karmaTestRunner')('tests')
}

else if (runTestsWatch) {
	require('${dir.server}karmaTestRunner')('testsWatch')
}

else if (
	config.isProd()
	|| runCompiler !== runServer
) {
	runCompiler && require('${dir.server}webpackCompilerProd')()
	runServer && require('${dir.server}serverProd')
}

else {
	require('${dir.server}serverDev')
}
