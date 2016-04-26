module.exports = function(config) {
	config.set({

		basePath: './',

		files: [
			'source/*tests.js',
			'source/**/*tests.js',
			'server/**/*tests.js',
		],

		systemjs: {
			// Point out where the SystemJS config file is
			configFile: 'config.js',

			serveFiles: [
				'source/*.js',
				'source/**/*.js',
				'server/**/*.js',
			],

			// Add any additional configuration, such as mappings to modules only used in testing
			config: {
				paths: {
				}
			}
		},

		autoWatch: true,

		frameworks: ['systemjs', 'mocha', 'chai', 'sinon'],

		browsers: ['Chrome'],

		plugins: [
			'karma-systemjs',
			'karma-chrome-launcher',
			'karma-firefox-launcher',
			'karma-mocha',
			'karma-chai',
			'karma-sinon',
		],

	});
};
