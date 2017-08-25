/* Webpack config by SaliMike */

/* Base */
const path = require('path');
const webpack = require('webpack');

/* Plugin's */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const autoprefixer = require('autoprefixer');

/* Paths */
const paths = {
	srcPath: path.join(__dirname, 'source'),
	imgPath: path.join(__dirname, 'source/assets/'),
	distPath: path.join(__dirname, 'dist')
};

/* Node Environment */
const isBuild = process.env.NODE_ENV === 'build';
const isProduction = process.env.NODE_ENV === 'production';

/* Entery */
const entry = './app.js';

/* Output */
const output = {
	path: paths.distPath,
	filename: '[name].bundle.js'
};

/* ----------------------------- */
/* Plugins - konfiguracja        */
/* ----------------------------- */
var pluginsConfig = [];

if (!isProduction) {
	pluginsConfig.push(
		new HtmlWebpackPlugin({
			minify: {
				collapseWhitespace: false,
				html5: true,
				removeComments: true
			},
			hash: false,
			filename: 'main.html',
			template: 'templates/main.pug'
		})
	);
	pluginsConfig.push(
		new HtmlWebpackPlugin({
			minify: {
				collapseWhitespace: false,
				html5: true,
				removeComments: true
			},
			hash: false,
			filename: 'contact.html',
			template: 'templates/contact.pug'
		})
	);

	pluginsConfig.push(
		new webpack.HotModuleReplacementPlugin()
	);
}

if (isBuild || isProduction) {
	pluginsConfig.push(new ExtractTextPlugin({
		filename: 'style.css',
		allChunks: true
	}));

	pluginsConfig.push(
		new webpack.NamedModulesPlugin()
	);
}

/* ----------------------------- */
/* Css/Sass - konfiguracja styli */
/* ----------------------------- */

// Develop configuration
const cssDevelop = [
	{
		loader: 'style-loader'
	}, {
		loader: 'css-loader',
		options: {
			minimize: false,
			sourceMap: true,
			camelCase: true
		}
	}, {
		loader: 'sass-loader',
		options: {
			sourceMap: true
		}
	}];

// Build configuration
const cssProduction = ExtractTextPlugin.extract({
	fallback: 'style-loader',
	use: [{
		loader: 'css-loader',
		options: {
			minimize: false,
			sourceMap: true,
			camelCase: true
		}
	}, {
		loader: 'sass-loader',
		options:
			{
				sourceMap: true
			}
	}]
});

// Build configuration
const cssBuild = ExtractTextPlugin.extract({
	fallback: 'style-loader',
	use: [{
		loader: 'css-loader',
		options: {
			minimize: true,
			sourceMap: false,
			camelCase: true
		}
	}, {
		loader: 'sass-loader',
		options:
			{
				sourceMap: false
			}
	}]
});

// Setting Config
const cssConfig = isBuild ? (console.log('BUILD CSS'), cssBuild) : (isProduction ? (console.log('BUILD PROD'), cssProduction) : (console.log('BUILD DEV'), cssDevelop));


/* ----------------------------- */
/* JS - konfiguracja             */
/* ----------------------------- */

const jsConfig = {
	loader: 'babel-loader',
	options: {
		presets: ['env']
	}
};

/* ----------------------------- */
/* PUG/HTML - konfiguracja       */
/* ----------------------------- */

const htmlConfig = ['html-loader', 'pug-html-loader'];

/* ----------------------------- */
/* Fileloader - konfiguracja       */
/* ----------------------------- */

const fileConfig = {
	loader: 'file-loader',
	options: {
		name: '[path][name].[ext]',
		publicPath: path.imgPath,
		emitFile: true
	}
};

/* ----------------------------- */
/* Dev Server - konfiguracja     */
/* ----------------------------- */

const devServer = {
	contentBase: paths.distPath,
	// watchContentBase: true,

	quiet: false,
	noInfo: false,
	publicPath: '',
	historyApiFallback: false,

	port: 9000,
	hot: true,

	open: !isProduction && !isBuild,
	openPage: ''
};

/* ----------------------------- */
/* Moduł                         */
/* ----------------------------- */

/* Module */
module.exports = {
	devtool: !isBuild ? '#source-map' : '',
	devServer: devServer,

	context: paths.srcPath,

	entry: {
		app: entry
	},
	output: output,

	resolve: {
		modules: ['node_modules']
	},

	module: {
		rules: [
			{
				test: /\.sass$/,
				use: cssConfig
			},
			{
				test: /\.js$/,
				exclude: path.resolve(__dirname, 'node_modules'),
				use: jsConfig
			},
			{
				test: /\.pug$/,
				use: htmlConfig
			},
			{
				test: /\.(ico|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
				use: fileConfig
			}
		]
	},

	plugins: pluginsConfig
};