// // 1. kreiranje store-a
// import {createStore} from 'redux'

// // createStore - prvi argument je funkcija koja u sebi kao parametar nosi default state obj
// const store = createStore((state = {count: 0}) => {
//   return state
// })

// //.getState() method vraca vrednost state-a i to je objekat
// const state = store.getState()
// console.log(state)

// // output: {count: 0}

// //2. actions

// import { createStore } from 'redux'

// // drugi argument fukcije "action" predstavlja vrednost objeka koji se poziva methodom .disapatch()
// // state se nikad ne modifikuje vec se kreira novi obj

// const store = createStore((state = { count: 0 }, action) => {

//   switch (action.type) {
//     case 'INCREMENT':
//       return { count: state.count + 1 }
//     case 'DECREMENT':
//       return { count: state.count - 1}
//     case 'RESET':
//       return {count: 0}
//     default:
//       return state
//   }
// })

// console.log(store.getState()) // output: {count: 0}

// // actions - poziva se preko .dispatch() methoda - type je obavezan - veika slova bez razmaka sa "_" ako treba

// store.dispatch({ 
//   type: 'INCREMENT'
// })

// store.dispatch({
//   type: 'INCREMENT'
// })

// console.log(store.getState())  // output: {count: 2}

// store.dispatch({
//   type: 'DECREMENT'
// })

// console.log(store.getState())  // output: {count: 1}

// store.dispatch({
//   type: 'RESET'
// })

// console.log(store.getState())  // output: {count: 0}

// //3. .subscribe() + dodavanje dinamickih opcija kroz dispatch() method

// import { createStore } from 'redux'

// // drugi argument fukcije "action" predstavlja vrednost objeka koji se poziva methodom .disapatch()
// // state se nikad ne modifikuje vec se kreira novi obj

// const store = createStore((state = { count: 0 }, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       const incrBy = action.incrBy ? action.incrBy : 1
//       //ukoliko je setvana vrednost action.incrBy, incrBy je ta nova vrednost u suprotnom je 1
//       return { count: state.count + incrBy }
//     case 'DECREMENT':
//       const decrBy = action.decrBy ? action.decrBy : 1
//       return { count: state.count - decrBy }
//     case 'RESET':
//       return { count: 0 }
//     default:
//       return state
//   }
// })

// //.subscribe()  - method koji kao argument prihvata callback funkciju - prati svaki put kada se state promeni i loguje na ekranu
// // ukoliko proglasi kao funkcija i pozove se dalje - stopira se prikaz

// const unsubscribe = store.subscribe(() => {
//   console.log(store.getState())
// })

// // output: {count: 1}
// // output: {count: 2}
// // output: {count: 1}
// // output: {count: 0}

// store.dispatch({
//   type: 'INCREMENT',
//   incrBy: 5
// })

// store.dispatch({
//   type: 'INCREMENT'
// })

// store.dispatch({
//   type: 'RESET'
// })

// store.dispatch({
//   type: 'DECREMENT'
// })

// store.dispatch({
//   type: 'DECREMENT',
//   decrBy: 10
// })


// //4. Refactoring, Action Generators

// // Action generators su funkcije koje kao utupt vracaju objekat const fuknk = () => ({ obj })

// import { createStore } from 'redux'

// // Action Generators
// const incrementCount = (payload = {}) => ({
//   type: 'INCREMENT',
//   incrBy: typeof payload.incrBy === 'number' ? payload.incrBy : 1
// })

// const incrementCount_v2 = ({incrBy} = {}) => ({
//   type: 'INCREMENT',
//   incrBy: typeof incrBy === 'number' ? incrBy : 1
// })

// const incrementCount_v3 = ({incrBy = 1} = {}) => ({
//   type: 'INCREMENT',
//   incrBy: incrBy
// })

// const incrementCount_v4 = ({incrBy = 1} = {}) => ({
//   type: 'INCREMENT',
//   incrBy
// })

// const decremetCount = ({decrBy= 1} = {}) => ({
//   type: 'DECREMENT',
//   decrBy
// })

// const resetCount = () => ({
//   type:'RESET',
//   count: 0
// })

// const setCount = () => ({
//   type:'SET',
//   count: 101
// })

// const store = createStore((state = { count: 0 }, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return { count: state.count + action.incrBy }
//     case 'DECREMENT':
//       return { count: state.count - action.decrBy }
//     case 'RESET':
//       return { count: action.count }
//     case 'SET':
//       return {count: action.count}
//     default:
//       return state
//   }
// })

// const unsubscribe = store.subscribe(() => {
//   console.log(store.getState())
// })

// store.dispatch(incrementCount_v4({incrBy:5}))
// store.dispatch(incrementCount_v2())
// store.dispatch(resetCount())
// store.dispatch(setCount())
// store.dispatch(decremetCount())
// store.dispatch(decremetCount({decrBy: 10}))

//5. Reducers

import { createStore } from 'redux'

const incrementCount = (payload = {}) => ({
  type: 'INCREMENT',
  incrBy: typeof payload.incrBy === 'number' ? payload.incrBy : 1
})

const incrementCount_v2 = ({incrBy} = {}) => ({
  type: 'INCREMENT',
  incrBy: typeof incrBy === 'number' ? incrBy : 1
})

const incrementCount_v3 = ({incrBy = 1} = {}) => ({
  type: 'INCREMENT',
  incrBy: incrBy
})

const incrementCount_v4 = ({incrBy = 1} = {}) => ({
  type: 'INCREMENT',
  incrBy
})

const decremetCount = ({decrBy= 1} = {}) => ({
  type: 'DECREMENT',
  decrBy
})

const resetCount = () => ({
  type:'RESET',
  count: 0
})

const setCount = () => ({
  type:'SET',
  count: 101
})

// fukcija koja je prethodno bila unutar createStore()
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + action.incrBy }
    case 'DECREMENT':
      return { count: state.count - action.decrBy }
    case 'RESET':
      return { count: action.count }
    case 'SET':
      return {count: action.count}
    default:
      return state
  }
}

const store = createStore(countReducer)

const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(incrementCount_v4({incrBy:5}))
store.dispatch(incrementCount_v2())
store.dispatch(resetCount())
store.dispatch(setCount())
store.dispatch(decremetCount())
store.dispatch(decremetCount({decrBy: 10}))