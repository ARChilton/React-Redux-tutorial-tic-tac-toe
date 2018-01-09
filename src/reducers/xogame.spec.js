import {initialState, calculateWinner, xoGame} from './xogame'

import {clickSquare} from '../actions'

const expectedInitialState = {
  history: [{
    squares: Array(9).fill(null),
  }],
  xIsNext: true,
  stepNumber: 0,
  winner: null,
  historicStep: null,
}


const squares = Array(9).fill(null)
const xwins = Array(9).fill('X')
const owins = Array(9).fill('O')

describe('xoGame Reducer', () => {
  describe('initial state', () => {
    it('equals expected start state', () => {
      expect(initialState).toEqual(expectedInitialState)
    })
  })


  describe('calculateWinner Function', () => {
    test('Null array should return null', () => {
      expect(calculateWinner(squares)).toBeNull()
    })

    test('xwins array should return X', () => {
      expect(calculateWinner(xwins)).toBe('X')
    })

    test('owins array should return O', () => {
      expect(calculateWinner(owins)).toBe('O')
    })
  })

  describe('xoGame reducer function', () => {
    it('winner won so return initial state', () => {
      const state = expectedInitialState
      const action = clickSquare(1)
      expect(xoGame({...state, winner: 'X'}, action)).toEqual({...state, winner: 'X'})
    })

    it('clicked square 1', () => {
      const state = expectedInitialState
      const action = clickSquare(1)
      const equals = Object.assign({}, state, {
        history: [{squares: Array(9).fill(null)}, {squares: [null, 'X', null, null, null, null, null, null, null]}],
        stepNumber: 1,
        xIsNext: false,
      })

      expect(xoGame({...state}, action)).toEqual(equals)
    })
  })
})

