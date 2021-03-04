# Trecli Website

This repository contains [Trecli website](https://trecli.netlify.app/) source files.

## Website development

Tested on node v13. This version of node is fixed in [.nvmrc](.nvmrc) file. To use it run command:

```
$ nvm use
```

### Installation

```
$ npm
```

### Local Development

```
$ npm start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Gifs

### Recording

```
$ npm run gif:record
```

### Playing

```
$ npm run gif:play
```

### Rendering

```
$ npm run gif:render
```

#### Troubleshooting

During rendering you may experience OpenGl error.

Simplest solution is described by @barbossa in [this issue](https://github.com/faressoft/terminalizer/issues/79#issuecomment-565835870).

> 1. You need find the folder where terminalizer have been installed. In my case it was - `/home/barbossa/.nvm/versions/node/v10.13.0/lib/node_modules`
> 2. Open `terminalizer/render/index.js` and before this line `app.on('ready', createWindow);` you need add new line: `app.disableHardwareAcceleration();`
>
> After this edits, your file will be look like this:
>
> ```
> // Hide the Dock for macOS
> if (os.platform() == 'darwin') {
>   app.dock.hide();
> }
>
> app.disableHardwareAcceleration(); // <-- new code line
>
> // When the app is ready
> app.on('ready', createWindow);
> ```
>
> This option disabled GPU areacceleration, more info here https://electronjs.org/docs/api/app#appdisablehardwareacceleration.
