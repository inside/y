const bind = (fn, context, ...args) => {
  return () => fn.call(context, ...args)
}

function greet (greet, name) {
  console.log(greet, name)
  console.log('my name is ' + this.name)
}

const me = {
  name: 'yann'
}
const he = {
  name: 'chris'
}

const a = bind(greet, he, 'hi', 'bruno')
a()
