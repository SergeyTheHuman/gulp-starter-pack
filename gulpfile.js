import gulp from 'gulp'
import { path } from './gulp/config/path.js'
import { copy } from './gulp/tasks/copy.js'

global.app = {
	gulp: gulp,
	path: path,
}

function watcher() {
	gulp.watch(path.watch.files, copy)
}

const dev = gulp.series(copy, watcher)

gulp.task('default', dev)
