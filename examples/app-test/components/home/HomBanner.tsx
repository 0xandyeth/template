import React from 'react';
import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const images = [
    "https://bc.imgix.net/banner/64/08/00/168907004336082.png?auto=format&dpr=2&w=450",
    "https://bc.imgix.net/banner/5c/90/a0/16887008573966.png?auto=format&dpr=2&w=4500",
    "https://bc.imgix.net/banner/2d/32/fe/168873617452053.png?auto=format&dpr=2&w=450",
    "https://bc.imgix.net/banner/64/08/00/168907004336082.png?auto=format&dpr=2&w=450",
    "https://bc.imgix.net/banner/5c/90/a0/16887008573966.png?auto=format&dpr=2&w=4500",
    "https://bc.imgix.net/banner/2d/32/fe/168873617452053.png?auto=format&dpr=2&w=450",
    "https://bc.imgix.net/banner/64/08/00/168907004336082.png?auto=format&dpr=2&w=450",
    "https://bc.imgix.net/banner/5c/90/a0/16887008573966.png?auto=format&dpr=2&w=4500",
    "https://bc.imgix.net/banner/2d/32/fe/168873617452053.png?auto=format&dpr=2&w=450",
  ];
interface HomeBannerProps {}
const HomBanner: React.FC<HomeBannerProps> = () => {
  return (
    <div className='flex w-full max-w-[1440px] m-auto flex-col-reverse items-center self-center lg:flex-row lg:justify-between relative'>
  
     <div className='mt-[100px] w-full'>
     <Carousel
      ssr
      deviceType={'desktop'}
      itemClass="image-item"
      infinite ={true}
      swipeable={true}
      autoPlay={true}
      transitionDuration={500}
      responsive={responsive}
      showDots={true}
      dotListClass='custom-dot-list-style'
      centerMode={true}
    >
     
      {images.slice(0, 5).map((image,index) => {
        return (
         <img key={index} src={image} alt=""  className='w-full h-[123px] lg:h-[144px]'/>
        );
      })}
    </Carousel>
     </div>
    </div>
  );
};

export default HomBanner;
