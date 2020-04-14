---
id: what-is-trecli
title: What is Trecli?
---

Trecli is a simple CLI tool dedicated for React developers that uses TypeScript.

Creating React component with styles file and props interface is a little bit to time-consuming but happily it can be easily automated with Trecli.

Checking out examples is the simplest way to understand how Trecli works :)

<!-- prettier-ignore-start -->

## Example 1. Simple component

```bash
trecli Foo
```

⬇ **creates** ⬇

_Foo.tsx_

```typescript
import React from 'react';

import { FooProps } from './Foo.interface';

export function Foo(props: FooProps) {
  return <>Foo rendered</>;
}
```

_Foo.interface.ts_

```typescript
export interface FooProps {

}
```

---

## Example 2. Component with index file and Material UI hook

```bash
trecli Bar --idx -s=material-ui
```

⬇ **creates** ⬇

_index.ts_

```typescript
export { default as Bar } from './Bar';
```

_Bar.tsx_

```typescript
import React from 'react';

import { BarProps } from './Bar.interface';
import { useStyles } from './Bar.styles';

export default function Bar(props: BarProps) {
  const classes = useStyles();

  return <>Bar rendered</>;
}
```

_Bar.interface.ts_

```typescript
export interface BarProps {

}
```

_Bar.styles.ts_

```typescript
import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({

}));
```

<!-- prettier-ignore-end -->
