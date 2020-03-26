---
id: configuration-file
title: Configuration File
---

## Basic info

Trecli uses [cosmiconfig](https://github.com/davidtheclark/cosmiconfig) for configuration file support. This means you can configure Trecli via (in order of precedence):

- A `"trecli"` key in your `package.json` file.
- A `.treclirc` file, written in JSON or YAML, with optional extensions: `.json`/`.yaml`/`.yml` (without extension takes precedence).
- A `.treclirc.js` or `trecli.config.js` file that exports an object. <!-- TODO write more precise info -->

When you run `trecli` command Trecli continues to search up the directory tree until it finds some acceptable configuration (or hits the home directory).

## Examples

### JSON

<!-- TODO improve example and add some more -->

```json
{
  "lazyLoaded": false
}
```
