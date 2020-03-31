---
id: options
title: Options
---

Trecli ships with a handful of customizable options, usable in both the CLI and [configuration file](configuration-file.md).

## Style Soultions

Valid options:

- `"css"` -
- `"css-modules"` -
- `"material-ui"` -

| Default     | CLI option | CLI alias | Configuration key   |
| ----------- | ---------- | --------- | ------------------- |
| `undefined` | `--TODO`   | `-s`      | `TODO: "<boolean>"` |

## Lazy Loaded

Specify if `index.ts` file will be exporting named of default export. Default export is necessary if you are going to import component with `React.lazy`.

| Default | CLI option      | CLI alias | Configuration key       |
| ------- | --------------- | --------- | ----------------------- |
| `false` | `--lazy-loaded` | `-l`      | `lazyLoaded: <boolean>` |

More information about `React.lazy` and exports is available in [official react documentation](https://reactjs.org/docs/code-splitting.html#named-exports)
