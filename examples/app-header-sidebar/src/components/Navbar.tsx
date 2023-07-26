import { Menu, Pets } from '@mui/icons-material'
import { AppBar, IconButton, Toolbar, Typography, styled } from '@mui/material'
import React from 'react'

const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
})

type NavbarProps={
    handleDrawerToggle:()=> void
}
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
            </StyledToolbar>
        </AppBar>
    )
}

export default Navbar
