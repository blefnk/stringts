import * as subject from './internals'
import type * as Subject from './internals'

namespace Internals {
  type testPascalCaseAll1 = Expect<
    Equal<
      Subject.PascalCaseAll<['one', 'two', 'three']>,
      ['One', 'Two', 'Three']
    >
  >
  type testPascalCaseAll2 = Expect<
    Equal<Subject.PascalCaseAll<string[]>, string[]>
  >

  type testReject1 = Expect<
    Equal<
      Subject.Reject<['one', '', 'two', '', 'three'], ''>,
      ['one', 'two', 'three']
    >
  >

  type testReject2 = Expect<Equal<Subject.Reject<string[], ''>, string[]>>
  type testReject3 = Expect<
    Equal<Subject.Reject<['one', 'two', 'three'], string>, string[]>
  >

  type test2 = Expect<Equal<Subject.DropSuffix<'helloWorld', 'World'>, 'hello'>>

  type test3 = Expect<Equal<Subject.TupleOf<3, ' '>, [' ', ' ', ' ']>>
}

describe('typeOf', () => {
  test('null', () => {
    expect(subject.typeOf(null)).toEqual('null')
  })
  test('object', () => {
    expect(subject.typeOf({})).toEqual('object')
  })
  test('object', () => {
    expect(subject.typeOf(['a', 'b', 'c'])).toEqual('array')
  })
  test('string', () => {
    expect(subject.typeOf('hello')).toEqual('string')
  })
})

describe('pascalCaseAll', () => {
  test('simple', () => {
    const result = subject.pascalCaseAll(['one', 'two', 'three'])
    const expected = ['One', 'Two', 'Three']
    expect(result).toEqual(expected)
  })
})
