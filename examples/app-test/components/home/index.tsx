import React from 'react';
import HomBanner from './HomBanner';
import HomeSkye from './HomeSkye';
import HomeContainer from './HomeContainer';
import { useSelector } from 'react-redux';
import Modal from 'react-modal';
import Wheel from '../../modals/Wheel';

const customStyles = {
 overlay:{
    zIndex:1001,
    backgroundColor: 'rgba(0,0,0,0.8)',
 },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    overFlow:'none',
    
  },
};
const HomeLayout = () => {
  const isSidebarOpen = useSelector((state: any) => state.sidebar.isSidebarOpen);
  const isSpinOpen = useSelector((state:any)=>state.spin.isSpinOpen);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className={`mt-[70px] ${isSidebarOpen && 'ml-[260px]'} duration-300`}>
      <HomeSkye />
      <HomBanner />
      <HomeContainer />
      <Modal
        isOpen={isSpinOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <div style={{padding:20}}>
        <Wheel/>

        </div>
        
      </Modal>
    </div>
  );
};

export default HomeLayout;
