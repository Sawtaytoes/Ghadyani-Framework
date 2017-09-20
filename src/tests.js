import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import 'utils/polyfills'
import TapOutput from 'components/tap/TapOutput'
import store from 'utils/testsStore'

// Setup testing files to watch
const context = require.context('./', true, /^\.\/.*\.test\.js$/)
const testName = window.__TESTNAME__

const runTests = isTestFile => (
	context.keys()
	.filter(isTestFile)
	.forEach(context)
)

const allTests = fileName => !fileName.includes('TapOutput.test.js')
const specificTests = testName => fileName => console.debug(fileName) || fileName.includes(`/${testName}.test.js`)

runTests(
	testName !== 'undefined'
	? specificTests(testName)
	: allTests
)

render(
	<Provider store={store}>
		<TapOutput />
	</Provider>,
	document.getElementById('root')
)