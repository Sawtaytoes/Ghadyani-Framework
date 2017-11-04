const dir = require(`${global.baseDir}directories`)
const paths = require(`${dir.includes}paths`)
const webpackKarmaConfig = require(`${dir.config}webpack/karma`)

const karmaDefaultConfig = config => ({
	basePath: `${global.baseDir}`,
	browsers: ['ChromeHeadless'],
	colors: true,
	files: [{
		pattern: `./${paths.root.src}karma.js`,
		watched: false,
	}],
	frameworks: ['tap'],
	logLevel: config.LOG_ERROR,
	port: 9876,
	preprocessors: {
		[`./${paths.root.src}karma.js`]: [
			'webpack',
			'sourcemap',
		],
	},
	reporters: ['tap-pretty'],
	tapReporter: {
		prettify: require('tap-spec'),
	},
	webpack: webpackKarmaConfig,
	webpackMiddleware: {
		noInfo: true,
		stats: 'errors-only',
	},
})

module.exports = karmaDefaultConfig