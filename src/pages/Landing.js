import React from 'react';
import { history } from '../redux/configureStore';
import styled from 'styled-components';
import { Grid } from '../elements/index';
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
  return (
    <React.Fragment>
      <Grid width='375px' margin='0 auto' overflowX='hidden'>
        <Grid
          width='375px'
          margin='0 auto'
          height='0'
          display='flex'
          justifyContent='space-between'
        >
          <button
            style={{
              all: 'unset',
              position: 'relative',
              height: '300px',
              padding: '0 75px',
            }}
            onClick={prev}
          ></button>
          <button
            style={{
              all: 'unset',
              position: 'relative',
              height: '300px',
              padding: '0 75px',
            }}
            onClick={next}
          ></button>
        </Grid>
        <div
          style={{
            display: 'flex',
            height: '300px',
            marginLeft: `${imgPosition}px`,
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
        <Grid bg='white' height='305px' margin='0 0 20px'>
          <p
            style={{
              width: '305px',
              margin: '20px auto 5px',
              fontWeight: '800',
            }}
          >
            입양 <span style={{ color: '#FE7968', fontWeight: '800' }}>전</span>
            부터{' '}
            <span style={{ color: '#FE7968', fontWeight: '800' }}>
              입양 절차
            </span>
            ,<br />
          </p>
          <p style={{ width: '305px', margin: ' auto', fontWeight: '800' }}>
            그리고 입양{' '}
            <span style={{ color: '#FE7968', fontWeight: '800' }}>후 케어</span>
            까지! <br />
          </p>
          <p
            style={{
              width: '305px',
              margin: '20px auto 5px',
              fontSize: '12px',
              lineHeight: '150%',
            }}
          >
            도킹은 반려견 입양의{' '}
            <span style={{ fontWeight: '800', fontSize: '12px' }}>
              전반적 과정
            </span>
            을 함께합니다. <br />
            사용자가 반려견과 더욱 건강하고 친밀한 관계를 맺도록{' '}
            <span style={{ fontWeight: '800', fontSize: '12px' }}>
              사전 교육 서비스 제공
            </span>
            ,<br />
            <span style={{ fontWeight: '800', fontSize: '12px' }}>
              투명하고 원활한 입양절차
            </span>{' '}
            그리고{' '}
            <span style={{ fontWeight: '800', fontSize: '12px' }}>
              입양 후 반려견 관리
            </span>
            까지를 함께하며 완전한 가족이 될 수 있도록 노력합니다.
          </p>
        </Grid>
        <ButtonBox
          onClick={() => {
            history.push('/signup');
          }}
        >
          <Button>시작하기</Button>
        </ButtonBox>

        <ButtonBox2
          onClick={() => {
            history.push('/login');
          }}
        >
          <Button2>이미 계정이 있어요</Button2>
        </ButtonBox2>
      </Grid>
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
  background-color: #fe7968;
  cursor: pointer;
  border-radius: 25px;
`;
const Button = styled.button`
  all: unset;
  color: #fe7968;
`;
const Button2 = styled.button`
  all: unset;
  color: white;
`;
export default Landing;
