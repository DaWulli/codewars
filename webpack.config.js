const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const {
	NODE_ENV = 'production',
} = process.env;

module.exports = {
	mode: NODE_ENV,
	target: 'node',
	entry: {
		app: './src/index.ts',
	},
	output: {
		path: path.resolve(__dirname, 'dist/'),
		filename: '[name].js'
	},
	externals: [nodeExternals()],
	module: {
		rules: [
			{
				test: /\.(js|jsx|tsx|ts)$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
	},
};