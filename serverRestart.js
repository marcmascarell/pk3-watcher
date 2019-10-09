var sshExec = require('ssh-exec')
var settings = require('./settings')

const restart = () => {
    sshExec('./codserver restart', {
        user: settings.server_credentials.user,
        host: settings.server_credentials.host,
        password: settings.server_credentials.password
    })
}

if (require.main === module) {
    console.log('called directly');
    restart()
}

module.exports = {
    restart
}
