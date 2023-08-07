import React from 'react'
import HomBanner from './HomBanner';
import HomeSkye from './HomeSkye';
import HomeContainer from './HomeContainer';
import {useSelector} from 'react-redux';
const HomeLayout = () => {
    const isSidebarOpen = useSelector((state:any)=>state.isSidebarOpen);
    return (
        <div className={`mt-[70px] ${isSidebarOpen && 'ml-[260px]'}`}>
            <HomeSkye/>
            <HomBanner/>
            <HomeContainer/>
        </div>
    )
}

export default HomeLayout;
