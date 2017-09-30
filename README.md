# Ghadyani Framework for Webpack, React, and Redux
[ ![Codeship Status for Sawtaytoes/Ghadyani-Framework-Webpack-React-Redux](https://app.codeship.com/projects/6a9ebe50-fc1e-0134-257f-0aa8194bf520/status?branch=master)](https://app.codeship.com/projects/211675)

- [Advanced Configuration](docs/advanced-configuration.md)
- [Create Dev SSL Certs](docs/dev-ssl-cert.md)
- [Create Prod SSL Certs](docs/prod-ssl-cert.md)
- [Linting](docs/linting.md)
- [Process Monitoring](docs/process-monitoring.md)
- [Project Commands](docs/project-commands.md)
- [SMTP Configuration](docs/smtp-config.md)
- [Software Requirements](docs/software-requirements.md)


## Running Locally
```shell
yarn start
```


## Configuration Settings
Default config values are found in [server/configs/configSettings.js](server/configs/configSettings.js).

Create a custom `config.js` in `server/configs/` to change from the default 'production' to 'development' and use https so long as there is a provided local SSL cert in `conf/`.

### Example
```js
module.exports = {
	env: 'development',
	protocol: 'https',
	port: 443,
}
```

More tweaks available in the [Advanced Configuration](docs/advanced-configuration.md).
