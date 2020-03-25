const { NextAwait } = require('./')
const { PromiseStatuses, promiseStatus } = require('promise-status-async')

it('can return', () => {
  const nextAwait = new NextAwait()

  expect(nextAwait.nextAwait).toBeInstanceOf(Promise)
})

it('can wait', () => {
  const nextAwait = new NextAwait()

  expect(nextAwait.nextAwait).toBeInstanceOf(Promise)
  expect(promiseStatus(nextAwait.nextAwait)).resolves.toBe(
    PromiseStatuses.PROMISE_PENDING
  )

  expect(nextAwait.nextAwait.resolve(123)).toBe(123)
  expect(nextAwait.nextAwait).resolves.toBe(123)
})

it('can wait', () => {
  const nextAwait = new NextAwait()

  expect(nextAwait.nextAwait).toBeInstanceOf(Promise)
  expect(promiseStatus(nextAwait.nextAwait)).resolves.toBe(
    PromiseStatuses.PROMISE_PENDING
  )

  nextAwait.nextAwait.resolve(123)
  expect(nextAwait.nextAwait).resolves.toBe(123)
})

it('works with concurrency', () => {
  const nextAwait = new NextAwait()

  const concurrency = Promise.all([nextAwait.nextAwait, nextAwait.nextAwait])
  nextAwait.nextAwait.resolve(123)

  expect(concurrency).resolves.toStrictEqual([123, 123])
})

it('queues', () => {
  const nextAwait = new NextAwait()

  const promise1 = nextAwait.nextAwait
  nextAwait.nextAwait.resolve(123)
  const promise2 = nextAwait.nextAwait
  nextAwait.nextAwait.resolve(456)

  expect(promise1).resolves.toBe(123)
  expect(promise2).resolves.toBe(456)
})
