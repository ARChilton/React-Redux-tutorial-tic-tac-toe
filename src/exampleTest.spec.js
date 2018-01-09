import sum from './exampleTest'

describe('summer', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
  })

  test('adds 5 + 2 = 7', () => {
    expect(sum(5, 2)).toBe(7)
  })
})
