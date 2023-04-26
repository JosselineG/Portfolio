import React from 'react';
import './Home.css'
import { TypeAnimation } from 'react-type-animation';

function Home() {

  return (

    <div className='hom' id='/'>
      <div className='Title'>
      <h3>Welcome, my name is</h3>
      <div>
      <TypeAnimation
          
            sequence={[
              
              'JOSSELINE GUARDADO',
              6000,
             

              () => {
                console.log('Sequence completed');
              },
            ]}
            wrapper="h2"
            cursor={true}
            repeat={Infinity}
            speed={{type: 'keyStrokeDelayInMs', value: 250}}
          />
      </div>
      </div>
    </div>
  );
}

export default Home;
