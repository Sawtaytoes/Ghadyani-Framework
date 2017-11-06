const bodyParser = require('body-parser')
const compression = require('compression')
const express = require('express')
const helmet = require('helmet')

const config = require('config')
const loadHtmlRenderer = require('scripts/utils/loadHtmlRenderer')
const paths = require('scripts/utils/paths')
const sendEmail = require('scripts/server/middleware/sendEmail')

const loadSite = (req, res) => (
	loadHtmlRenderer({
		args: [req, res],
		filename: `${paths.base}/${paths.dest}backend`,
		res,
	})
)

const httpServerConfig = express()

httpServerConfig
.use(compression())
.use(helmet())

.use(
	express.static(
		`${paths.base}/${paths.static}`,
		{ redirect: false }
	)
)
.use(
	express.static(
		`${paths.base}/${paths.bundles}`,
		{ redirect: false }
	)
)

.use(bodyParser.json())
.use(bodyParser.urlencoded({ extended: false }))

.disable('x-powered-by')

.get('*.js', (req, res, next) => {
	req.url = `${req.url}.gz`
	res.set('Content-Encoding', 'gzip')
	next()
})

.post(config.getMailSendPath(), sendEmail)

.all('*', loadSite)

module.exports = () => httpServerConfig