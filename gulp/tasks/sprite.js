import svgSprite from 'gulp-svg-sprite'

export const sprite = () => {
	return app.gulp
		.src(app.path.src.svgIcons)
		.pipe(
			svgSprite({
				mode: {
					symbol: true, // Activate the «symbol» mode
				},
			})
		)
		.pipe(
			app.plugins.replace(
				/(fill=\"\#\w{1,6}\")|(fill=\"\")|(fill=\"\w{1,6}\")/g,
				'fill="currentColor"'
			)
		)
		.pipe(app.gulp.dest(app.path.build.images))
}
