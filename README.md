# Pk3 Watcher (CoD)

This package was made to ease modding when .pk3 was involved. Be aware that this project was made for CoD(1) and
 uses [LinuxGSM](https://linuxgsm.com/). Although it could be easily adaptable to other games.

# What does it do?

- Watches for code changes
- When a change is detected:
    - Compresses the code to `.pk3`
    - Uploads it the server
    - Restarts the game server
    - Launches the game with debug parameters (Optionally) 
    
# How to use

1. Install [Node JS](https://nodejs.org/es/download/) version >= 8
1. `npm install`
1. Add your desired uncompressed `.pk3` to root folder (remember that its just a ZIP with `.pk3` extension)
1. Fill your `settings.js`
1. `npm start`
1. Modify anything and it should do the work.

# Licence

MIT
