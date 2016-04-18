# redux-chain-middleware
redux middleware which allows dispatching promise action creators sequentially


## Usage
---
sequentially
```js
dispatch([
  a(),
  b(),
  c()
])
```

concurrently
```js
dispatch(a())
dispatch(b())
dispatch(c())
```

