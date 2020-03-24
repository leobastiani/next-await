const NextAwait = require('./')

it('can return', async () => {
  const nextAwait = new NextAwait()

  expect(nextAwait.promise).toBeInstanceOf(Promise)
})

it('can wait', async () => {
  const nextAwait = new NextAwait()

  expect(nextAwait.promise).toBeInstanceOf(Promise)
  expect(nextAwait.promise.resolved).toBe(false)

  nextAwait.resolve(123)
  expect(nextAwait.promise).resolves.toBe(123)
})

it('can wait', async () => {
  const nextAwait = new NextAwait()

  expect(nextAwait.promise).toBeInstanceOf(Promise)
  expect(nextAwait.promise.resolved).toBe(false)

  nextAwait.resolve(123)
  expect(nextAwait.promise).resolves.toBe(123)
})

it('works with concurrency', async () => {
  const nextAwait = new NextAwait()

  const concurrency = Promise.all([nextAwait.promise, nextAwait.promise])
  nextAwait.resolve(123)

  expect(concurrency).resolves.toBe([123, 123])
})

it('queues', async () => {
  const nextAwait = new NextAwait()

  const promise1 = nextAwait.promise
  nextAwait.resolve(123)
  const promise2 = nextAwait.promise
  nextAwait.resolve(456)

  expect(promise1).resolves.toBe(123)
  expect(promise2).resolves.toBe(456)
})
