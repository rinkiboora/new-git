import React from 'react';
import doctor from './assets/img/doctor.webp';
import doctor_child_img from './assets/img/cute-child-in-doctor.jpg';
import child from './assets/img/cute_baby.jpg';
const App = () => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2
          style={{
            color: 'black',
            fontSize: '40px',
            fontWeight: '400px',
            fontFamily: 'initial',
            marginLeft: '30px',
          }}>
          Our <span style={{ color: 'yellow' }}>Experts</span>
        </h2>
        <div>
          <h2
            style={{
              fontSize: '20px',
              fontWeight: '300px',
              fontFamily: 'initial',
              color: 'yellow',
              marginRight: '30px',
            }}>
            Viex All Team
          </h2>
        </div>
      </div>
      <div style={{ width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: '30px' }}>
          <div>
            <img style={{ height: '500px' }} src={doctor} alt="" />
            <h2 style={{ fontSize: '20px', fontWeight: '600px', fontFamily: 'initial' }}>
              Ameen Alqudsi
            </h2>
            <h2
              style={{
                color: 'gray',
                fontSize: '19px',
                fontWeight: '400px',
                fontFamily: 'initial',
              }}>
              Disease detection, check up in the laboratory
            </h2>
            <p
              style={{
                fontSize: '20px',
                fontWeight: '300px',
                fontFamily: 'initial',
                color: 'black',
              }}>
              In this case, the role of the health laboratory is very important to do a disease
              detection... <span style={{ color: 'yellow', fontFamily: 'initial' }}>Read More</span>
            </p>
          </div>
          <div style={{ display: 'flex' }}>
            <div>
              <img style={{ marginRight: '30px' }} src={doctor_child_img} alt="" />
              <h2
                style={{
                  fontSize: '20px',
                  fontWeight: '300px',
                  fontFamily: 'initial',
                  color: 'black',
                }}>
                Hasan Abo Elshelk
              </h2>
              <h2
                style={{
                  color: 'grey',
                  fontFamily: 'initial',
                  fontSize: '16px',
                  fontWeight: '400px',
                }}>
                Herbal medicines that are{' '}
              </h2>
            </div>
            <div>
              <img
                style={{ width: '340px', height: '200px', marginRight: '30px' }}
                src={child}
                alt=""
              />
              <h2
                style={{
                  fontSize: '20px',
                  fontWeight: '300px',
                  fontFamily: 'initial',
                  color: 'black',
                }}>
                Hasan Abo Elshelk
              </h2>
              <h2
                style={{
                  color: 'grey',
                  fontFamily: 'initial',
                  fontSize: '16px',
                  fontWeight: '400px',
                }}>
                Herbal medicines that are{' '}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
