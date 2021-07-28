var ghostArgs = process.argv.slice(2)
// console.log('myArgs: ', ghostArgs);

var shell = require('shelljs')

var reset = false

if (ghostArgs[0] == 'reset') {
  reset = true
  ghostArgs = ['install']
}

if (ghostArgs[0] == 'install') {
  if (shell.test('-d', 'ghost')) {
    shell.echo('ghost folder found')
    shell.echo('Try runing `yarn clean` or `npm run clean`')
    shell.exit(1)
  }
  shell.mkdir('ghost')
  shell.pushd('ghost')
  if (shell.exec('ghost install local').code !== 0) {
    shell.echo('Error: Ghost installation failed')
    shell.exit(1)
  }
  if (shell.exec('ghost stop').code !== 0) {
    shell.echo('Error: Stopping Ghost post installation failed')
    shell.exit(1)
  }
  shell.popd()
  if (!reset) {
    if (shell.exec('git checkout @ -- ghost/content/data/ghost-local.db').code !== 0) {
      shell.echo('Error: Git checkout failed for ghost/content/data/ghost-local.db')
      shell.exit(1)
    }
  } else {
    shell.echo('Warning: Please update `.env.local` with new value of `CMS_GHOST_API_KEY`')
    shell.echo('Warning: Please add new integration as `next` and update API Key in .env.local')
  }
  require('dotenv').config({ path: '.env.local' })
  let ghostConfig = require('./ghost/config.development.json')
  ghostConfig.database.connection.filename = process.cwd() + '/ghost/content/data/ghost-local.db'
  ghostConfig.url = process.env.CMS_GHOST_API_URL
  ghostConfig.server.port = parseInt(process.env.CMS_GHOST_API_URL.split(':')[2])
  let fs = require('fs')
  let ghostConfigContent = JSON.stringify(ghostConfig, null, 2)
  fs.writeFileSync('./ghost/config.development.json', ghostConfigContent, 'utf8', function (err) {
    if (err) {
      console.log('An error occured while writing JSON Object to File.')
      return console.log(err)
    }
    console.log('JSON file has been saved.')
  })
  shell.exit(0)
}

var postOps = null
var exitOnFail = true

if (ghostArgs[0] == 'publish' || ghostArgs[0] == 'publish-amend') {
  postOps = ghostArgs
  ghostArgs = ['stop']
  exitOnFail = false
}

if (!shell.test('-d', 'ghost')) {
  shell.echo('ghost folder not found')
  if (exitOnFail) {
    shell.exit(1)
  }
}

if (!shell.test('-L', 'ghost/current')) {
  shell.echo('ghost installation not found')
  if (exitOnFail) {
    shell.echo('Try runing `yarn ghost-install` or `npm run ghost-install`')
    shell.exit(1)
  }
}

if (shell.test('-d', 'ghost')) {
  shell.pushd('ghost')
  if (shell.exec(`ghost ${ghostArgs.join(' ')}`).code !== 0) {
    shell.echo('Error: Ghost command failed')
    if (exitOnFail) {
      shell.exit(1)
    }
  }
  shell.popd()
}

if (!postOps) {
  shell.exit(0)
}

ghostArgs = postOps

if (ghostArgs[0] == 'publish' || ghostArgs[0] == 'publish-amend') {
  let amend = false
  if (ghostArgs[0] == 'publish-amend') {
    amend = true
  }
  if (!shell.test('-d', 'ghost')) {
    shell.echo('ghost folder not found. Nothing to publish')
    shell.exit(0)
  }
  if (shell.test('-f', 'ghost/content/data/ghost-local.db')) {
    shell.exec('git add ghost/content/data/ghost-local.db')
  }
  let acontent = new Set(shell.exec('git diff --name-only --cached', { silent: true }).stdout.split('\n'))
  if (acontent.has('ghost/content/data/ghost-local.db')) {
    if (ghostArgs.length > 1) {
      // console.log('Something to commit', ghostArgs)
      ghostArgs.shift()
      if (shell.exec(`git commit ${amend ? '--amend ' : ''}-am "${ghostArgs.join('\n')}"`).code !== 0) {
        shell.echo('Error: Git commit failed')
        shell.exit(1)
      }
    } else if (amend) {
      // console.log('Something to commit', ghostArgs)
      if (shell.exec('git commit -a --amend --no-edit').code !== 0) {
        shell.echo('Error: Git commit failed')
        shell.exit(1)
      }
    } else {
      console.log('Error: Please publish your changes using:')
      console.log(' `yarn ghost-publish <message>`')
      console.log(' `npm run ghost-publish <message>`')
      shell.exit(1)
    }
  } else if (amend) {
    // console.log('Something to commit', ghostArgs)
    if (shell.exec('git add . && git commit -a --amend --no-edit').code !== 0) {
      shell.echo('Error: Git commit failed')
      shell.exit(1)
    }
  }
  shell.exit(0)
}

shell.exit(0)
