import fileinclude from 'gulp-file-include'
import webpHtmlNosvg from 'gulp-webp-html-nosvg'
import versionNumber from 'gulp-version-number'

export const pugToHtml = () => {
	return app.gulp
		.src(app.path.src.html)
		.pipe(
			app.plugins.pug({
				pretty: true,
				verbose: true,
			})
		)
		.pipe(app.plugins.replace(/@img\//g, 'images/'))
		.pipe(webpHtmlNosvg())
		.pipe(
			versionNumber({
				value: '%DT%',
				append: {
					key: '_v',
					cover: 0,
					to: ['css', 'js'],
				},
				output: {
					file: 'gulp/version.json',
				},
			})
		)
		.pipe(app.gulp.dest(app.path.build.html))
}
