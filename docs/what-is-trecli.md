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

```typescript title="Foo.tsx"
import React from 'react';

import { FooProps } from './Foo.interface';

export function Foo(props: FooProps) {
  return <>Foo rendered</>;
}
```

```typescript title="Foo.interface.ts"
interface FooOwnProps {

}

export type FooProps = FooOwnProps;
```

---

## Example 2. Component with index file and Material UI hook

```bash
trecli Bar --idx -s=material-ui
```

⬇ **creates** ⬇

```typescript title="index.ts"
export { default as Bar } from './Bar';
```

```typescript title="Bar.tsx"
import React from 'react';

import { BarProps } from './Bar.interface';
import { useStyles } from './Bar.styles';

export default function Bar(props: BarProps) {
  const classes = useStyles();

  return <>Bar rendered</>;
}
```

```typescript title="Bar.interface.ts"
interface BarOwnProps {

}

export type BarProps = BarOwnProps;
```

```typescript title="Bar.styles.ts"
import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({

}));
```

<!-- prettier-ignore-end -->
