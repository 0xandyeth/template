import {combineReducers, legacy_createStore as createStore} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
// Action Types
const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
const SPIN_MODAL = 'SPIN_MODAL';


//Initial State

const initialState ={
    isSidebarOpen:true
}

const initialSpinState ={
    isSpinOpen:false
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


const spinReducer = (state = initialSpinState,action:any)=>{
    switch(action.type){
      case SPIN_MODAL:
          return{
              ...state,
              isSpinOpen:!state.isSpinOpen,
          };
      default:
          return state;
    }
  }

  const rootReducer = combineReducers({
    sidebar:sidebarReducer,
    spin:spinReducer
  })
// store
const store = createStore(rootReducer);
export default store;
