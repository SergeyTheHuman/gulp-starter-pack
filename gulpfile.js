import gulp from 'gulp'
import { path } from './gulp/config/path.js'
import { copy } from './gulp/tasks/copy.js'
import { clean } from './gulp/tasks/clean.js'
import { html } from './gulp/tasks/html.js'

global.app = {
	gulp: gulp,
	path: path,
}

function watcher() {
	gulp.watch(path.watch.files, copy)
	gulp.watch(path.watch.html, html)
}

const mainTasks = gulp.series(copy, html)

const dev = gulp.series(clean, mainTasks, watcher)

gulp.task('default', dev)
