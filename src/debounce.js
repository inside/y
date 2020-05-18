const debounce = (fn, delay) => {
  let timeoutId

  return (...args) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn(...args), delay)
  }
}

const hello = (foo, bar) => {
  console.log('hello ' + foo + '.' + bar + '!')
}

const debouncedHello = debounce(hello, 500)

debouncedHello(1)
debouncedHello(2)
debouncedHello(3, 4)

setTimeout(debouncedHello.bind(null, 5, 6), 600)
// setTimeout(debouncedHello, 700)
// setTimeout(debouncedHello, 1100)
// console.log(42)
