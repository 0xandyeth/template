import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from '../components/Navbar';
import Drawer from '@mui/material/Drawer';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Challenge from '../components/Challenge';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}
const drawerWidth = 240;
const MainLayout = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const ref = React.useRef<HTMLDivElement>(null);
  const ref1 = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && ref1.current && !event.target.contains(ref1.current)) {
      } else {
        console.log('456');
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Navbar handleDrawerToggle={handleDrawerToggle} />
      <Drawer
        container={container}
        variant='temporary'
        open={mobileOpen}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        ref={ref}
      >
        <Sidebar ref={ref1} />
      </Drawer>
      <Drawer
        variant='permanent'
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          display: {
            xs: 'none',
            sm: 'block',
          },
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        open
      >
        <Sidebar ref={ref1} />
      </Drawer>
      <Box component='main' sx={{ flexGrow: 1, p: 3 , overflowX:'hidden',background:'green'}}>
        {/* <Feed /> */}
        <Challenge/>
      </Box>
    </Box>
  );
};

export default MainLayout;
