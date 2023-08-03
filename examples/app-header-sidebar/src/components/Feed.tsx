import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Box, Button, Typography } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';

const Feed = () => {
  return (
    <Box
      sx={{
        width: '100%',
        mt: '60px',
      }}
    >
      <Box
        sx={{
          width: '100%',
          borderRadius: 2,
          bgcolor:"#1c1326",
          display: 'flex',
        }}
      >
        <Box>
          <Carousel
            autoPlay={true}
            infiniteLoop
            width={'100%'}
            emulateTouch={true}
            showArrows={false}
            showThumbs={false}
            showStatus={false}
          >
            <Box
              style={{
                width: '100%',
                display: 'flex',
              }}
            >
              <Box width={'40%'} sx={{
             
                 borderRadius: 2,
                 justifyContent:'center',
                 alignItems:'center',
                 display:'flex',

              }}>
                <Box>
                <h1 className='text-3xl font-bold underline'>Hello world</h1>
                {/* <Typography variant='h2' fontWeight='bold'>Defi Tribe</Typography> */}
                <Button
                 variant='contained'
                 sx={{
                    bgcolor:'#E42575'
                 }}
                >Explore Collection</Button>
                </Box>
          
              </Box>
              <Box width={'60%'}>
                <img
                  width={400}
                  height={500}
                  style={{
                    objectFit: 'cover',
                  }}
                  src='https://img-cdn.magiceden.dev/rs:fill:1440:1050:0:0/plain/https://bafybeihtfxvfpmzhmgjoq5ykcqoleizc564fqlnc6l24dpykjqlhlvt5fm.ipfs.nftstorage.link/'
                />
              </Box>
            </Box>
            <Box
              style={{
                width: '100%',
                display: 'flex',
              }}
            >
              <Box width={'40%'} sx={{
                 borderRadius: 2,
                 justifyContent:'center',
                 alignItems:'center',
                 display:'flex'
              }}>
                <Box>
                <Typography variant="h2" fontWeight='bold'>The Heist</Typography>
                <Typography sx={{
                    width:'60%'
                }}>Enjoy -0.25% maker and 0.25% taker fees!
                    The Heist is a high-stakers,risk based game of crime,corruption... and bananas.
                </Typography>
                <Button
                 variant='contained'
                 sx={{
                    bgcolor:'#E42575'
                 }}
                >Explore Collection</Button>
                </Box>

              </Box>
              <Box width={'60%'}>
                <img
                  width={400}
                  height={500}
                  style={{
                    objectFit: 'cover',
                  }}
                  src='https://img-cdn.magiceden.dev/rs:fill:1440:1050:0:0/plain/https://bafybeiekoyqsp5w5ijjtthyifvhp45gpwloh6h3ubcbu5uxwogaxpse54y.ipfs.nftstorage.link/'
                />
              </Box>
            </Box>
          </Carousel>
        </Box>
      </Box>
    </Box>
  );
};

export default Feed;
