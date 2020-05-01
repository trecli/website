---
id: options
title: Options
---

Trecli ships with a handful of customizable options, usable in both the CLI and [configuration file](configuration-file.md).

## Index File Generation

Specify if component contain `index.ts` file.

| Default | CLI option | CLI alias | Configuration file |
| ------- | ---------- | --------- | ------------------ |
| `false` | `--index`  | `--idx`   | `index: <boolean>` |

---

## Styles Solutions

Valid options:

- `"css"` - Basic [CSS stylesheet][css]
- `"css-modules"` - [CSS Modules stylesheet][css-modules]
- `"material-ui"` - [Material-UI styles hook][material-ui]

| Default | CLI option                                     | CLI alias | Configuration file                                  |
| ------- | ---------------------------------------------- | --------- | --------------------------------------------------- |
| `false` | `--styles=<"css"∣"css-modules"∣"material-ui">` | `-s`      | `styles: <"css"∣"css-modules"∣"material-ui"∣false>` |

:::note
If you have `styles` value specified in your configuration file you can still generate component without style by adding `--no-styles` or `--no-s` option to command.
:::

[css]: https://create-react-app.dev/docs/adding-a-stylesheet/
[css-modules]: https://create-react-app.dev/docs/adding-a-css-modules-stylesheet
[material-ui]: https://material-ui.com/styles/api/#makestyles-styles-options-hook

---

## Lazy Loaded

Specify if component will be exporting named of default export. Default export is necessary if you are going to import component with `React.lazy`.

| Default | CLI option      | CLI alias | Configuration file      |
| ------- | --------------- | --------- | ----------------------- |
| `false` | `--lazy-loaded` | `-l`      | `lazyLoaded: <boolean>` |

More information about `React.lazy` and exports is available in [official react documentation][react-lazy-docs]

[react-lazy-docs]: https://reactjs.org/docs/code-splitting.html#named-exports
