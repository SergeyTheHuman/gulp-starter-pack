import gulp from 'gulp'
import { path } from './gulp/config/path.js'
import { copy } from './gulp/tasks/copy.js'
import { clean } from './gulp/tasks/clean.js'

global.app = {
	gulp: gulp,
	path: path,
}

function watcher() {
	gulp.watch(path.watch.files, copy)
}

const dev = gulp.series(clean, copy, watcher)

gulp.task('default', dev)
