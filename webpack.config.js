const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	mode: process.env.NODE_ENV || 'development',
	entry: './src/index.tsx',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.svg$/,
				loader: 'svg-inline-loader'
			},
			{
				test: /\.(gif)$/i,
				use: [
					'file-loader',
					{
						loader: 'image-webpack-loader',
					}
				]
			}
		],
	},
	resolve: {
		modules: ['node_modules'],
		extensions: ['.js', '.jsx', '.tsx', '.ts', '.svg', '.gif']
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Test App',
			template: path.resolve(process.cwd(), 'index.html'),
		}),
	],
	devServer: {
		port: 8080,
		proxy: {
			'/api': 'http://localhost:3000'
		}
	},
};