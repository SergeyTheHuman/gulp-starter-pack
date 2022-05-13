import * as nodePath from 'path'

const rootFolder = nodePath.basename(nodePath.resolve())
const buildFolder = './dist'
const srcFolder = './src'

export const path = {
	build: {
		css: `${buildFolder}/css/`,
		html: `${buildFolder}/`,
		files: `${buildFolder}/files/`,
	},
	src: {
		sass: `${srcFolder}/sass/style.sass`,
		pug: `${srcFolder}/pug/*.pug`,
		files: `${srcFolder}/files/**/*.*`,
	},
	watch: {
		sass: `${srcFolder}/sass/**/*.sass`,
		pug: `${srcFolder}/pug/**/*.pug`,
		files: `${srcFolder}/files/**/*.*`,
	},
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
	ftp: ``,
}
