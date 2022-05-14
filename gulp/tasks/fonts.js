import fs from 'fs'
import fonter from 'gulp-fonter'
import ttf2woff2 from 'gulp-ttf2woff2'

export const otfToTtf = () => {
	return app.gulp
		.src(`${app.path.srcFolder}/fonts/*.otf`)
		.pipe(
			fonter({
				formats: ['ttf'],
			})
		)
		.pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`))
}

export const ttfToWoff = () => {
	return app.gulp
		.src(`${app.path.srcFolder}/fonts/*.ttf`)
		.pipe(
			fonter({
				formats: ['woff'],
			})
		)
		.pipe(app.gulp.dest(app.path.build.fonts))
		.pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`))
		.pipe(ttf2woff2())
		.pipe(app.gulp.dest(app.path.build.fonts))
}

export const fontsInSass = () => {
	let fontsFile = `${app.path.srcFolder}/sass/utils/fonts.sass`

	fs.readdir(app.path.build.fonts, function (error, fontsFiles) {
		if (fontsFiles) {
			if (!fs.existsSync(fontsFile)) {
				fs.writeFile(fontsFile, '', callback)
				let newFileOnly
				for (let i = 0; i < fontsFiles.length; i++) {
					const fontFileName = fontsFiles[i].split('.')[0]
					if (newFileOnly !== fontFileName) {
						// let fontName = fontFileName.split('-')[0]
						// 	? fontFileName.split('-')[0]
						// 	: fontFileName
						// let fontWeight = fontFileName.split('-')[1]
						// 	? fontFileName.split('-')[1]
						// 	: fontFileName
						// switch (fontWeight.toLowerCase()) {
						// 	case 'thin':
						// 		fontWeight = 100
						// 		break
						// 	case 'extralight':
						// 		fontWeight = 200
						// 		break
						// 	case 'light':
						// 		fontWeight = 300
						// 		break
						// 	case 'medium':
						// 		fontWeight = 500
						// 		break
						// 	case 'semibold':
						// 		fontWeight = 600
						// 		break
						// 	case 'bold':
						// 		fontWeight = 700
						// 		break
						// 	case 'extrabold':
						// 		fontWeight = 800
						// 		break
						// 	case 'heavy':
						// 		fontWeight = 800
						// 		break
						// 	case 'black':
						// 		fontWeight = 900
						// 		break
						// 	default:
						// 		fontWeight = 400
						// 		break
						// }

						// let fontName = fontFileName.split('-')[0]
						// 	? fontFileName.split('-')[0]
						// 	: fontFileName
						// let fontName = fontFileName.split('-').slice(0, -1).join('-')
						// let fontWeight = fontFileName.split('-')
						let fontName
						let fontWeight
						let fontArray = fontFileName.split('-')
						if (fontArray.indexOf('thin') !== -1) {
							fontWeight = 100
							fontArray.splice(fontArray.indexOf('thin'), 1)
							fontName = fontArray.join('-')
						} else if (fontArray.indexOf('extralight') !== -1) {
							fontWeight = 200
							fontArray.splice(fontArray.indexOf('extralight'), 1)
							fontName = fontArray.join('-')
						} else if (fontArray.indexOf('light') !== -1) {
							fontWeight = 300
							fontArray.splice(fontArray.indexOf('light'), 1)
							fontName = fontArray.join('-')
						} else if (fontArray.indexOf('medium') !== -1) {
							fontWeight = 500
							fontArray.splice(fontArray.indexOf('medium'), 1)
							fontName = fontArray.join('-')
						} else if (fontArray.indexOf('semibold') !== -1) {
							fontWeight = 600
							fontArray.splice(fontArray.indexOf('semibold'), 1)
							fontName = fontArray.join('-')
						} else if (fontArray.indexOf('bold') !== -1) {
							fontWeight = 700
							fontArray.splice(fontArray.indexOf('bold'), 1)
							fontName = fontArray.join('-')
						} else if (fontArray.indexOf('extrabold') !== -1) {
							fontWeight = 800
							fontArray.splice(fontArray.indexOf('extrabold'), 1)
							fontName = fontArray.join('-')
						} else if (fontArray.indexOf('heavy') !== -1) {
							fontWeight = 800
							fontArray.splice(fontArray.indexOf('heavy'), 1)
							fontName = fontArray.join('-')
						} else if (fontArray.indexOf('black') !== -1) {
							fontWeight = 900
							fontArray.splice(fontArray.indexOf('black'), 1)
							fontName = fontArray.join('-')
						} else {
							fontWeight = 400
							if (fontArray.indexOf('regular') !== -1) {
								fontArray.splice(fontArray.indexOf('regular'), 1)
								fontName = fontArray.join('-')
							} else {
								fontName = fontArray.join('-')
							}
						}

						fs.appendFile(
							fontsFile,
							`@font-face\n\tfont-family: ${fontName}\n\tfont-display: swap\n\tsrc: url('../fonts/${fontFileName}.woff2') format('woff2'), url('../fonts/${fontFileName}.woff') format('woff'),\n\tfont-weight: ${fontWeight}\n\tfont-style: normal\n`,
							callback
						)
						newFileOnly = fontFileName
					}
				}
			} else {
				console.log(
					'Файл шрифтов уже существует. Если вы хотите обновить его, то удалите существующий и запустите задачу заново'
				)
			}
		}
	})

	return app.gulp.src(app.path.srcFolder)
	function callback() {}
}
