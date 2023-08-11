import React,{useEffect, useRef} from 'react';

const cutomStyles = [
     {
        '--i': 1,
        '--clr': '#db7093',
        backgroundColor: 'var(--clr)',
      },
      {
        '--i': 2,
        '--clr': '#20b2aa',
        backgroundColor: 'var(--clr)',
      },
      {
        '--i': 3,
        '--clr': '#daa520',
        backgroundColor: 'var(--clr)',
      },
      {
        '--i': 4,
        '--clr': '#ff340f',
        backgroundColor: 'var(--clr)',
      },
      {
        '--i': 5,
        '--clr': '#4169e1',
        backgroundColor: 'var(--clr)',
      },
      {
        '--i': 6,
        '--clr': '#3cb371',
        backgroundColor: 'var(--clr)',
      },
      {
        '--i': 7,
        '--clr': '#d63e92',
        backgroundColor: 'var(--clr)',
      },
      {
        '--i': 8,
        '--clr': '#ff7f50',
        backgroundColor: 'var(--clr)',
      }
]

const segments=[
  '50',
  '100',
  '200',
  '1',
  '1000',
  
]
const Wheel = () => {
  let wheelRef = useRef<HTMLDivElement | null>(null);
  const onSpinMove =() =>{
    let value = Math.ceil(Math.random() * 3600);
      if(wheelRef.current){
        wheelRef.current.style.transform = "rotate(" + value + "deg)"
         value +=Math.ceil(Math.random() * 3600);
        
      }

  }

  useEffect(() => {
    if(wheelRef.current){
      const computedStyle = getComputedStyle(wheelRef.current);
      const transformValue = computedStyle.transform;

      const rotationRegex = /rotate\((\d+)deg\)/;
      const match = transformValue.match(rotationRegex);
   
      console.log("value",transformValue);
      if(match && match[1]){
       const rotationValue = parseInt(match[1],10);
       console.log("value",rotationValue);
      }
    }
  }, [wheelRef.current,onSpinMove])
  return (
    <div className='container'>
      <div className='spinBtn' onClick={()=>onSpinMove()}>spin</div>
      <div className='wheel' ref={wheelRef}>
        <div className='number' style={cutomStyles[0]}>
            <span>100</span>
        </div>
        <div className='number' style={cutomStyles[1]}>
            <span>1</span>
        </div>
        <div className='number' style={cutomStyles[2]}>
            <span>50</span>
        </div>
        <div className='number' style={cutomStyles[3]}>
            <span>0</span>
        </div>
        <div className='number' style={cutomStyles[4]}>
            <span>1000</span>
        </div>
        <div className='number' style={cutomStyles[5]}>
            <span>10</span>
        </div>
        <div className='number' style={cutomStyles[6]}>
            <span>5</span>
        </div>
        <div className='number' style={cutomStyles[7]}>
            <span>20</span>
        </div>
      </div>
    </div>
  );
};

export default Wheel;
