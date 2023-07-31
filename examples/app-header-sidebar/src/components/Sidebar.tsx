import {
  Games,
  Grade,
  Home,
  Rocket,
  ShoppingBag,
  Start,
  Support,
  ExpandMore,
  Shop,
} from '@mui/icons-material';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import React,{useEffect, useRef,forwardRef} from 'react';

const Sidebar = forwardRef(function Sidebar(props, ref){

  return (
    <Box
      sx={{
        mt: '60px',
      }}
      ref={ref}
    >
      <Box>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <ListItem disablePadding>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary='Marketplace'></ListItemText>
            </ListItem>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem disablePadding>
                <ListItemButton component='a' href='#collection'>
                  <ListItemText primary='Popular collections'></ListItemText>
                </ListItemButton>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <ListItem disablePadding>
              <ListItemIcon>
                <Rocket />
              </ListItemIcon>
              <ListItemText primary='Launchpad'></ListItemText>
            </ListItem>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem disablePadding>
                <ListItemButton component='a' href='#launches'>
                  <ListItemText primary='Launches'></ListItemText>
                </ListItemButton>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <ListItem disablePadding>
              <ListItemIcon>
                <Games />
              </ListItemIcon>
              <ListItemText primary='Games'></ListItemText>
            </ListItem>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem disablePadding>
                <ListItemButton component='a' href='#games'>
                  <ListItemText primary='Games'></ListItemText>
                </ListItemButton>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <ListItem disablePadding>
              <ListItemIcon>
                <Shop />
              </ListItemIcon>
              <ListItemText primary='Creators'></ListItemText>
            </ListItem>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem disablePadding>
                <ListItemButton component='a' href='#presale'>
                  <ListItemText primary='Presale'></ListItemText>
                </ListItemButton>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
});

export default Sidebar;
