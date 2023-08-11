import React from 'react';

const cutomStyles = [
     {
        '--i': 1,
        '--crl': '#db7093',
        backgroundColor: 'var(--clr)',
      },
      {
        '--i': 2,
        '--crl': '#20b2aa',
        backgroundColor: 'var(--clr)',
      },
      {
        '--i': 3,
        '--crl': '#daa520',
        backgroundColor: 'var(--clr)',
      },
      {
        '--i': 4,
        '--crl': '#ff340f',
        backgroundColor: 'var(--clr)',
      },
      {
        '--i': 5,
        '--crl': '#4169e1',
        backgroundColor: 'var(--clr)',
      },
      {
        '--i': 6,
        '--crl': '#3cb371',
        backgroundColor: 'var(--clr)',
      },
      {
        '--i': 7,
        '--crl': '#d63e92',
        backgroundColor: 'var(--clr)',
      },
      {
        '--i': 8,
        '--crl': '#ff7f50',
        backgroundColor: 'var(--clr)',
      }
]
const Wheel = () => {
  return (
    <div className='container'>
      <div className='spinBtn'></div>
      <div className='wheel'>
        <div className='name' style={cutomStyles[0]}>
            <span>100</span>
        </div>
        <div className='name' style={cutomStyles[1]}>
            <span>1</span>
        </div>
        <div className='name' style={cutomStyles[2]}>
            <span>50</span>
        </div>
        <div className='name' style={cutomStyles[3]}>
            <span>0</span>
        </div>
        <div className='name' style={cutomStyles[4]}>
            <span>1000</span>
        </div>
        <div className='name' style={cutomStyles[5]}>
            <span>10</span>
        </div>
        <div className='name' style={cutomStyles[6]}>
            <span>5</span>
        </div>
        <div className='name' style={cutomStyles[7]}>
            <span>20</span>
        </div>
      </div>
    </div>
  );
};

export default Wheel;
