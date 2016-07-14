import example from 'washington'
import compose from './compose'

example('compose', (check) => {
  const increment = (x) => x + 1
  const duplicate = (x) => x * 2
  const add = (y) => (x) => x + y

  const allOfTheAbove = compose(add(3), duplicate, increment)

  check(allOfTheAbove(5), 15)
})

example.go()
