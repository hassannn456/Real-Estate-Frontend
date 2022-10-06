import {configureStore} from '@reduxjs/toolkit'
import dashReducer from './DashSlice'
import navReducer from './NavSlice'

const store = configureStore({
    reducer: { dash: dashReducer, nav: navReducer}
})


export default store;