const exec = require('child_process').exec;
var serverRestart = require('./serverRestart')
var settings = require('./settings')


// debug params, +set thereisacow 1337 +set developer 1
// for server too
const open = () => {
    serverRestart.restart()

    exec(`CoDMP.exe +set thereisacow 1337 +set developer 1 + connect ${settings.cod_credentials.host}; password ${settings.cod_credentials.password}; rconPassword ${settings.cod_credentials.rconPassword}`, {
        cwd: settings.gamepath
    });
}

// called directly
if (require.main === module) {
    open()
}

module.exports = {
    open
}
