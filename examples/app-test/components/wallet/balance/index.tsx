import React from 'react'
import {useSelector} from 'react-redux';
import BalanceContainer from './BalanceContainer';
const BalanceLayout = () => {
    const isSidebarOpen = useSelector((state:any)=>state.isSidebarOpen);
    return (
        <div className={`mt-[100px] ${isSidebarOpen && 'ml-[260px]'} duration-300`}>
         <BalanceContainer/>
        </div>
    )
}

export default BalanceLayout;

