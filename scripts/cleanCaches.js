const { CACHES_DIR } = require('./constants')
const Colors = require('colors/safe')
const { sequenceFsRemove } = require('./Tools')

const cmds = [CACHES_DIR].map((dir) => {
  return { dir: dir, prelog: `${Colors.inverse('Remove:')} ${dir}`, ignoreErrors: true }
})

sequenceFsRemove(cmds).catch(() => process.exit(-1))
