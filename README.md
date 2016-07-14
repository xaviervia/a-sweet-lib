# compose

```javascript
export default function (...fs: Array<(x: any) => any>) {
  return (x: any): any =>
    fs.reduceRight((y, f) => f(y), x)
}
```

## example

```javascript
import compose from 'sweet-spot-compose'

const increment = (x) => x + 1
const duplicate = (x) => x * 2
const add = (y) => (x) => x + y

const allOfTheAbove = compose(add(3), duplicate, increment)

allOfTheAbove(5)
// => 15
```
