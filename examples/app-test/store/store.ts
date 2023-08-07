import {legacy_createStore as createStore} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
// Action Types
const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';

//Initial State

const initialState ={
    isSidebarOpen:false
}

// reducer 

const sidebarReducer = (state = initialState,action:any)=>{
  switch(action.type){
    case TOGGLE_SIDEBAR:
        return{
            ...state,
            isSidebarOpen:!state.isSidebarOpen,
        };
    default:
        return state;
  }
}

// store
const store = createStore(sidebarReducer);
export default store;
