const hound = require('hound')
const _ = require('lodash')
const zipFolder = require('zip-folder');
const rimraf = require('rimraf');
const client = require('scp2')
const serverRestart = require('./serverRestart')
const settings = require('./settings')
const codLauncher = require('./codLauncher')

const watchPath = __dirname
const zippablePath = settings.zippablePath
const outputPk3Path = settings.outputPk3Path

function createPk3() {
    console.log('Called: createPk3');

    rimraf(outputPk3Path, {}, () => {
        console.log('Creating Pk3...');

        zipFolder(zippablePath, outputPk3Path, function(err) {
            if(err) {
                console.log('oh no!', err);
                return
            }
            console.log('Created Pk3');

            client.scp(outputPk3Path, {
                host: settings.server_credentials.host,
                username: settings.server_credentials.user,
                password: settings.server_credentials.password,
                path: settings.server_credentials.cod_files_path
            }, function(err) {
                if (err) {
                    console.log('oh no!', err);
                    return
                }
                console.log('Pk3 Sent to server. ' + new Date().toString());

                serverRestart.restart()
                // codLauncher.open()
            })
        })
    })
}

// Create a directory tree watcher.
watcher = hound.watch(watchPath)

// Add callbacks for file and directory events.  The change event only applies to files.

try {
    watcher.on('create', _.debounce(createPk3, 1500))
    watcher.on('change', _.debounce(createPk3, 1500))
    watcher.on('delete', _.debounce(createPk3, 1500))
} catch (e) {
    console.log('Error', e)
}
