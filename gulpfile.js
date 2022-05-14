import gulp from 'gulp'

// config
import { path } from './gulp/config/path.js'
import { plugins } from './gulp/config/plugins.js'

// tasks
import { copy } from './gulp/tasks/copy.js'
import { clean } from './gulp/tasks/clean.js'
import { pugToHtml } from './gulp/tasks/pugToHtml.js'
import { sassToCss } from './gulp/tasks/sassToCss.js'
import { javascript } from './gulp/tasks/javascript.js'
import { images } from './gulp/tasks/images.js'
import { otfToTtf, ttfToWoff, fontsInSass } from './gulp/tasks/fonts.js'
import { sprite } from './gulp/tasks/sprite.js'
import { server } from './gulp/tasks/server.js'

global.app = {
	gulp: gulp,
	path: path,
	plugins: plugins,
}

export { sprite }

function watcher() {
	gulp.watch(path.watch.files, copy)
	gulp.watch(path.watch.pug, pugToHtml)
	gulp.watch(path.watch.sass, sassToCss)
	gulp.watch(path.watch.js, javascript)
	gulp.watch(path.watch.images, images)
}

const fonts = gulp.series(otfToTtf, ttfToWoff, fontsInSass)
const mainTasks = gulp.series(
	fonts,
	sprite,
	gulp.parallel(copy, pugToHtml, sassToCss, javascript, images)
)
// const mainTasks = gulp.series(
// 	sprite,
// 	gulp.parallel(copy, pugToHtml, sassToCss, javascript)
// )
const dev = gulp.series(clean, mainTasks, gulp.parallel(watcher, server))

gulp.task('default', dev)
