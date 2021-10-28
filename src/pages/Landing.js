import React from 'react';
import { history } from '../redux/configureStore';
import styled from 'styled-components';
const Landing = () => {
  const [imgPosition, setImgPosition] = React.useState(0);
  const next = () => {
    setImgPosition(imgPosition - 375);
    if (imgPosition === -1125) {
      setImgPosition(-1125);
    }
  };
  const prev = () => {
    setImgPosition(imgPosition + 375);
    if (imgPosition === 0) {
      setImgPosition(0);
    }
  };
  // const prev = () => {
  //   setPrevImg(prevImg + 375);
  // }
  return (
    <React.Fragment>
      <div
        style={{
          display: 'flex',
          backgroundColor: 'skyblue',
          height: '300px',
          overflowX: 'hidden',
          marginLeft: `${imgPosition}px`,
          // transform: translateX(10%),
          transition: '1s',
        }}
      >
        <img
          src='https://cdn.royalcanin-weshare-online.io/UCImMmgBaxEApS7LuQnZ/v2/eukanuba-market-image-puppy-beagle?w=5596&h=2317&rect=574,77,1850,1045&auto=compress,enhance '
          style={{
            width: '375px',
            height: '300px',
            objectFit: 'cover',
          }}
        />
        <button
          style={{
            position: 'absolute',
            top: '150px',
            left: '5px',
          }}
          onClick={prev}
        >
          ㅁ
        </button>
        <button
          style={{
            position: 'absolute',
            top: '150px',
            left: '340px',
          }}
          onClick={next}
        >
          ㅁ
        </button>

        <img
          src='https://images.mypetlife.co.kr/content/uploads/2019/09/09153001/dog-panting-1024x683.jpg'
          style={{
            width: '375px',
            height: '300px',
            objectFit: 'cover',
          }}
        />
        <img
          src='https://blog.kakaocdn.net/dn/Z1F5v/btqLNsEwNKZ/eDuSRnRxoIHnpyrO4uX570/img.jpg'
          style={{
            width: '375px',
            height: '300px',
            objectFit: 'cover',
          }}
        />
        <img
          src='https://blog.hmgjournal.com/images_n/contents/170421_dog01.png'
          style={{
            width: '375px',
            height: '300px',
            objectFit: 'cover',
          }}
        />
      </div>
      <div
        style={{
          backgroundColor: 'white',
          height: '300px',
          marginBottom: '40px',
        }}
      >
        <p style={{ width: '305px', margin: '10px auto' }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos esse
          velit odit, exercitationem animi, dicta ex voluptates consequatur
          commodi, beatae sint labore odio? Ducimus omnis ratione harum
          explicabo laudantium. Nulla officia fuga enim sapiente dicta illum
          ipsa atque nam pariatur accusantium consequuntur voluptate, incidunt
          itaque aspernatur. Ipsum ratione impedit corporis iste. Aut sint
          laborum nisi obcaecati officia suscipit reiciendis fugiat, eos
          expedita delectus? Unde adipisci aliquid, harum vero veniam eligendi
        </p>
      </div>
      <ButtonBox>
        <Button
          onClick={() => {
            console.log('회원가입페이지로');
          }}
        >
          시작하기
        </Button>
      </ButtonBox>

      <ButtonBox2>
        <Button2
          onClick={() => {
            history.push('/');
          }}
        >
          이미 계정이 있어요
        </Button2>
      </ButtonBox2>
    </React.Fragment>
  );
};

const ButtonBox = styled.div`
  width: 305px;
  height: 50px;
  margin: 10px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  cursor: pointer;
  border-radius: 25px;
  border: solid 0.5px #eee;
`;
const ButtonBox2 = styled.div`
  width: 305px;
  height: 50px;
  margin: 10px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff6666;
  cursor: pointer;
  border-radius: 25px;
`;
const Button = styled.button`
  all: unset;
  color: #ff6666;
`;
const Button2 = styled.button`
  all: unset;
  color: white;
`;
export default Landing;
