import {add} from '../utils/functions'

it('add returns the sum of two numbers', () => {
    expect(add(1, 2)).toBe(3)
})

// TAKE IN '3' AND '4'. RECEIVE A NUMBER
it('add takes in two strings, returns a number', () => {
    expect(add('3', '4')).toBe(7)
})


// TAKE IN TWO STRINGS. CHECK FOR NaN returned
it('add returns NaN if non numbers are passed', () => {
    expect(add('hello', 'world')).toBeNaN()
})