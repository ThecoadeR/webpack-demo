/*
 * @Descripttion: 注释
 * @Author: 朱海华
 * @Date: 2018-12-22 21:54:21
 * @LastEditTime: 2020-03-08 21:23:36
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
	entry: {
		main: './src/index.js',
	},
	// 通过配置reslove优化webpck打包速度
	resolve: {
		extensions: ['.js', '.jsx', '.vue'],
		alias: {
			'api': path.resolve(__dirname, '../src/child')
		}
	},
	module: {
		rules: [{ 
			test: /\.jsx?$/, 
			exclude: /node_modules/,
			use: [{
				loader: 'babel-loader'
			}]
		}, {
			test: /\.(jpg|png|gif)$/,
			use: {
				loader: 'url-loader',
				options: {
					name: '[name]_[hash].[ext]',
					outputPath: 'images/',
					limit: 10240
				}
			} 
		}, {
			test: /\.(eot|ttf|svg)$/,
			exclude: /node_modules/,
			use: {
				loader: 'file-loader'
			} 
		}]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		}), 
		new CleanWebpackPlugin(['dist'], {
			root: path.resolve(__dirname, '../')
		}),
		new AddAssetHtmlWebpackPlugin({
			filepath: path.resolve(__dirname, '../dll/vendors.dll.js')
		}),
		new webpack.DllReferencePlugin({
			manifest: path.resolve(__dirname, '../dll/vendors.manifest.json')
		})
	],
	optimization: {
		runtimeChunk: {
			name: 'runtime'
		},
		usedExports: true,
		splitChunks: {
      chunks: 'all',
      cacheGroups: {
      	vendors: {
      		test: /[\\/]node_modules[\\/]/,
      		priority: -10,
      		name: 'vendors',
      	}
      }
    }
	},
	performance: false,
	output: {
		path: path.resolve(__dirname, '../dist')
	}
}