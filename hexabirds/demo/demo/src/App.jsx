import React, { useState, useRef, useEffect } from 'react';
import gril_img from './assets/img/gril insta.jpg';
import img_2 from './assets/img/download.jpeg';
import cute_gril from './assets/img/cute-girls-pictures.jpg';
import img_gril from './assets/img/cute_gril.jpg';
import video from './assets/img/pp.mp4';

function App() {
  const [caunt, setCaunt] = useState(0);
  const [data, setData] = useState([]);
  const [api, setapi] = useState([]);

  useEffect(() => {
    let myfun = async () => {
      let get_api = await fetch('https://fakestoreapi.com/products').then((res) => res.json());
      // .then((json) => console.log(json));
      console.log(get_api);
      setapi(get_api);
    };
    myfun();
  }, []);

  if (caunt > 1) {
    document.title = `chats(${caunt})`;
  } else {
    document.title = `chats`;
  }
  {
  }
  const [fist, setFist] = useState('live');

  const videos = useRef();

  const play = () => {
    videos.current.play();
  };
  const pause = () => {
    videos.current.pause();
  };

  let stutend = [
    {
      imgs: gril_img,
      name1: 'RINKI',
      age: '19Y',
      cls: '12TH',
      nam: [{ name: 'vikram', cls: '10th' }],
    },
    {
      imgs: img_2,
      name1: 'SUBHAM',
      age: '19Y',
      cls: '11TH',
      nam: [{ name: 'vikram', cls: '10th' }],
    },
    {
      imgs: cute_gril,
      name1: 'MAMTA',
      age: '19Y',
      cls: 'B.A',
      nam: [{ name: 'vikram', cls: '10th' }],
    },
    {
      imgs: img_gril,
      name1: 'ANKITA',
      age: '19Y',
      cls: 'B.C',
      nam: [{ name: 'vikram', cls: '10th' }],
    },
    {
      imgs: gril_img,
      name1: 'GUNJAN',
      age: '19Y',
      cls: '12TH',
      nam: [{ name: 'vikram', cls: '10th' }],
    },
    {
      imgs: img_2,
      name1: 'DIKSA',
      age: '19Y',
      cls: '11TH',
      nam: [{ name: 'vikram', cls: '10th' }],
    },
    {
      imgs: cute_gril,
      name1: 'ROSHNI',
      age: '19Y',
      cls: 'B.A',
      nam: [{ name: 'vikram', cls: '10th' }],
    },
    {
      imgs: img_gril,
      name1: 'PRIYNKA',
      age: '19Y',
      cls: 'B.C',
      nam: [{ name: 'vikram', cls: '10th' }],
    },
  ];

  return (
    <>
      <div>
        {api.map((items, i) => {
          return (
            <div key={i}>
              <h1>{items.id}</h1>
              <h1>{items.title}</h1>
              <img src={items.image} alt="" />
              <h1>{items.title}</h1>
            </div>
          );
        })}
      </div>
      {data.map((item, i) => {
        return (
          <div>
            <p>{item.name}</p>
            <p>{item.username}</p>
          </div>
        );
      })}
      <div className=" container">
        <div className=" d-flex flex-wrap gap-3">
          {stutend.map((item, i) => {
            return (
              <div key={i}>
                <div className=" card ">
                  <div className=" d-flex align-items-center ">
                    <div>
                      <img className=" " src={item.imgs} alt="" />
                    </div>
                    <div>
                      <div className=" d-flex justify-content-between ps-3 ">
                        <h2 className="">NAME: {item.name1}</h2>
                      </div>
                      <div className=" d-flex justify-content-between ps-3 ">
                        <h2>AGE:{item.age}</h2>
                      </div>
                      <div className=" d-flex justify-content-between ps-3 ">
                        <h2>CLASS:{item.cls}</h2>
                      </div>
                      {/* <p>{item.nam.name}</p> */}
                      {/* <div>
                        {item.nam.map((item, i) => {
                          return (
                            <div>
                              {item.name},{item.cls}
                            </div>
                          );
                        })}
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" container">
        <label htmlFor="">live</label>
        <input onChange={() => setFist('live')} checked={fist === 'live'} type="checkbox" />
        <br />
        <label htmlFor="">on</label>
        <input onChange={() => setFist('on')} checked={fist === 'on'} type="checkbox" />
        <br />
        <label htmlFor="">off</label>
        <input onChange={() => setFist('off')} checked={fist === 'off'} type="checkbox" />

        <div className=" mt-5">
          <label htmlFor="">ON</label>
          <input onChange={() => setInp(true)} checked={inp == true} type="checkbox" />
          <br />
          <label htmlFor="">OFF</label>
          <input onChange={() => setInp(false)} checked={inp == false} type="checkbox" />
        </div>
      </div>

      <div>
        <video width={900} height={300} ref={videos}>
          <source src={video} />
        </video>
        <button onClick={play}>plya</button>
        <button onClick={pause}>pause</button>
      </div>

      <div>
        <h1>Count: {caunt}</h1>
        <button onClick={() => setCaunt(caunt + 1)}>ckick me </button>
      </div>
    </>
  );
}

export default App;
