# Show Token

Print your user token to the DevTools console.

## Install

Either download the precompiled plugin, or compile it by yourself.

### Precompiled

1. [Go to the releases tab of this repo](https://github.com/unclamped/show-token-plugin/releases)
   and download the .asar file for the latest release of this plugin
2. Copy the downloaded file to your Replugged plugins folder

- Windows: `%APPDATA%/replugged/plugins`
- macOS: `~/Library/Application Support/replugged/plugins`
- Other: `$XDG_CONFIG_HOME/replugged/plugins` or `~/.config/replugged/plugins`

3. Reload Discord to load the plugin

### Built from source

For this you'll need a couple of things first:

- Git
- NodeJS
- pnpm: (can be installed with `npm i -g pnpm`)
- [Replugged](https://github.com/replugged-org/replugged#installation)

1. Clone this repository and cd into it
2. Install dependencies: `pnpm i`
3. Build the plugin: `pnpm run build`
4. Reload Discord to load the plugin
