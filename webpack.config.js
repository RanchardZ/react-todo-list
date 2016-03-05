
module.exports = {
	devtool: 'inline-source-map', // not in production code -- this is used to track the error in source files instead of bundle.js
	entry: ['./client/client.js'],
	output: {
		path: './dist',
		filename: 'bundle.js',
		publicPath: '/'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader', // compile JSX and ES6 into JavaScript
				exclude: /node_modules/,
				query: {
					presets: ['react', 'es2015']
				} // equivalent to setting a babel setting file
			}
		]
	} // certain tasks you want webpack do
}