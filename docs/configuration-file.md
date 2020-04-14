---
id: configuration-file
title: Configuration File
---

When we work on project we mostly write components of the same type, so typing command options every time might be very annoying. To suppress this feeling Trecli accepts config file that specifies how component should look like. You can use our [config file generator command](#config-file-generator) or [create this file manually](#config-file-details).

## Config file generator

```bash
trecli config
```

## Config file details

Trecli uses [cosmiconfig](https://github.com/davidtheclark/cosmiconfig) for configuration file support. This means you can configure Trecli via (in order of precedence):

- A `"trecli"` key in your `package.json` file.
- A `.treclirc` file, written in JSON or YAML, with optional extensions: `.json`/`.yaml`/`.yml` (without extension takes precedence).
- A `.treclirc.js` or `trecli.config.js` file that exports an object.

When you run `trecli` command Trecli continues to search up the directory tree until it finds some acceptable configuration (or hits the home directory).

## Examples

### JSON

```json
{
  "index": true,
  "lazyLoaded": false,
  "styles": "css-modules"
}
```

### JS

```js
module.exports = {
  index: true,
  lazyLoaded: false,
  styles: 'css-modules',
};
```

### YAML

```yaml
index: true,
lazyLoaded: false,
styles: "css-modules",
```
