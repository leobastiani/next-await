const withNextAwait = (object, attr = 'nextAwait') => {
  const setPromise = () => {
    let resolver
    object[attr] = new Promise(resolve => (resolver = resolve))
    object[attr].resolver = resolver

    object[attr].resolve = (...args) => {
      object[attr].resolver(...args)
      setPromise()
      return args[0]
    }
  }

  setPromise()
}

class NextAwait {
  constructor () {
    withNextAwait(this)
  }
}

module.exports = { withNextAwait, NextAwait }
