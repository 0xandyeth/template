import { Menu, Pets, SearchOff, SearchRounded, Wallet } from '@mui/icons-material'
import { AppBar, Button, IconButton, Toolbar, Typography, styled,InputBase, alpha } from '@mui/material'
import React from 'react'

const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
})

type NavbarProps={
    handleDrawerToggle:()=> void
}
const Search = styled('div')(({theme})=>({
    position:'relative',
    borderRadius:theme.shape.borderRadius,
    backgroundColor:alpha(theme.palette.common.white,0.15),
    '&:hover':{
       backgroundColor:alpha(theme.palette.common.white,0.25),
    },
    width:'30%',

}))
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

const Navbar = (props:NavbarProps) => {
    const {handleDrawerToggle} = props;
    return (
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <StyledToolbar>
             
                <Typography 
                variant='h6'
                noWrap
                sx={{
                    display:{
                        xs:'none',
                        sm:'block'
                    }
                }}
                >MAGIC EDEN</Typography>
                <IconButton
                 sx={{
                    display:{
                        xs:'block',
                        sm:'none'
                    }
                }}
                onClick={handleDrawerToggle}
                >
                <Menu/>
                </IconButton>
                <Search>
                 <SearchIconWrapper>
                    <SearchRounded/>
                 </SearchIconWrapper>
                 <StyledInputBase
                  placeholder='Search...'
                 />
               </Search>
                <Button
                 variant='contained'
                 sx={{
                    bgcolor:'#E42575'
                 }}
                 >
                    <Wallet/>
                Connect Wallet
                </Button>
             
            </StyledToolbar>
           
        </AppBar>
    )
}

export default Navbar
