import gulp from 'gulp'

// config
import { path } from './gulp/config/path.js'
import { plugins } from './gulp/config/plugins.js'

// tasks
import { copy } from './gulp/tasks/copy.js'
import { clean } from './gulp/tasks/clean.js'
import { pugToHtml } from './gulp/tasks/pugToHtml.js'
import { server } from './gulp/tasks/server.js'

global.app = {
	gulp: gulp,
	path: path,
	plugins: plugins,
}

function watcher() {
	gulp.watch(path.watch.files, copy)
	gulp.watch(path.watch.html, pugToHtml)
}

const mainTasks = gulp.parallel(copy, pugToHtml)

const dev = gulp.series(clean, mainTasks, gulp.parallel(watcher, server))

gulp.task('default', dev)
