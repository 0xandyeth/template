//action.ts

const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
const SPIN_MODAL = 'SPIN_MODAL';

export const toggleSidebar=()=>{
    return{
        type:TOGGLE_SIDEBAR,
    }
}

export const spinModal=()=>{
    return{
        type:SPIN_MODAL
    }
}