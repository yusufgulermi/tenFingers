import { configureStore } from '@reduxjs/toolkit'
import correctCount from './stores/correctCount'
import counter from './stores/counter'
import inCorrectCount from './stores/inCorrectCount'
import timer from "./stores/timer"
import isUpdated from './stores/isUpdated'
import data from './stores/data'
import keystrokes from './stores/keystrokes'

export default configureStore({
  reducer: {
    counter:counter,
    timer:timer,
    inCorrectCount:inCorrectCount,
    correctCount:correctCount,
    isUpdated:isUpdated,
    data:data,
    keystrokes:keystrokes,
  },
})