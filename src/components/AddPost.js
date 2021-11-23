import React from 'react';
import { useDispatch } from 'react-redux';
import { Grid, Text } from '../elements/index';
import Slider from './Slider';
import { postActions } from '../redux/modules/post';
import AddressSelector from './AddressSelector';
import Upload from './Upload';
import Header from './Header';
import { history } from '../redux/configureStore';
import { WarningAlert } from '../shared/Alerts';
const AddPost = () => {
  const dispatch = useDispatch();
  const [breed, setBreed] = React.useState('');
  const [sex, setSex] = React.useState('M');
  const [age, setAge] = React.useState('');
  const [weight, setWeight] = React.useState('');
  const [lostLocation, setLostLocation] = React.useState('');
  const [ownerType, setOwnerType] = React.useState('개인');
  const [address, setAddress] = React.useState('');
  const [siAddress, setSiAddress] = React.useState('');
  const [url, setUrl] = React.useState(null);
  const [tag, setTag] = React.useState('직접등록');
  const [phone, setPhone] = React.useState('');
  const [extra, setExtra] = React.useState('');
  const [img, setImg] = React.useState([]);

  const [sexToggle, setSexToggle] = React.useState(false);
  const [ownerTypeToggle, setOwnerTypeToggle] = React.useState(false);
  const [tagToggle, setTagToggle] = React.useState(false);
  const [files, setFiles] = React.useState([]);
  //토글

  const sexCheck = () => {
    setSexToggle(!sexToggle);
    if (sexToggle === true) {
      setSex('M');
    } else {
      setSex('F');
    }
  };

  const ownerTypeCheck = () => {
    setOwnerTypeToggle(!ownerTypeToggle);
    if (ownerTypeToggle === true) {
      setOwnerType('개인');
    } else {
      setOwnerType('보호소');
    }
  };

  const tagCheck = () => {
    setTagToggle(!tagToggle);
    if (tagToggle === true) {
      setTag('직접등록');
    } else {
      setTag('가져온 정보');
    }
  };
  const postInfo = {
    breed: breed,
    sex: sex,
    age: age,
    weight: weight,
    lostLocation: lostLocation,
    ownerType: ownerType,
    address: address + siAddress,
    url: url,
    tag: tag,
    phone: phone,
    extra: extra,
    img: img,
    isAdopted: 'abandoned',
  };
  console.log(postInfo);
  const [addressModal, setAddressModal] = React.useState(false);
  const addressSelect = () => {
    setAddressModal(!addressModal);
  };

  const addPostCard = () => {
    if (img.length === 0) {
      return WarningAlert('이미지를 최소 한 장 올려주세요');
    }
    const nullCheck =
      Object.values(postInfo).filter((check) => check === '').length === 0;
    if (nullCheck === true || url === '') {
      dispatch(postActions.addPostToAxios(postInfo));
      dispatch(postActions.setSearch({ page: 0, sort: 'new' }));
    } else {
      WarningAlert('모든 값을 입력해주세요!');
    }
  };
  return (
    <React.Fragment>
      <Header></Header>
      <Grid maxWidth='414px' margin='50px auto '>
        <Grid
          position='sticky'
          top='0'
          margin='-60px auto 0 0'
          left='0px'
          width='100px'
          height='60px'
          bg='white'
          display='flex'
          alignItems='center'
          justifyContent='center'
          color='#6B6462'
          zIndex='1000'
          _onClick={() => {
            history.goBack();
          }}
        >
          닫기
        </Grid>
        <Grid
          position='sticky'
          top='0'
          margin='-60px 0 0 auto'
          left='305px'
          width='100px'
          height='60px'
          bg='white'
          display='flex'
          alignItems='center'
          justifyContent='center'
          color='#FE7968'
          zIndex='1000'
          _onClick={addPostCard}
        >
          등록완료
        </Grid>
        <Grid padding='0 35px' boxSizing='border-box'>
          <p>이미지</p>
          <Upload files={files} setFiles={setFiles} img={img} setImg={setImg} />
          <p>상세 정보</p>
          <Grid
            display='flex'
            padding='10px 0'
            borderTop='1px solid rgba(225, 225, 225, 0.5)'
          >
            <input
              placeholder='견종'
              value={breed}
              onChange={(e) => {
                setBreed(e.target.value);
              }}
              style={{ border: 'none', width: '80%' }}
            />
            <Grid display='flex' alignItems='center'>
              남아
              <Slider handleToggle={sexCheck} valueCheck={sexToggle} />
              여아
            </Grid>
          </Grid>

          <Grid
            display='flex'
            padding='15px 0'
            borderTop='1px solid rgba(225, 225, 225, 0.5)'
          >
            <Grid display='flex' justifyContent='space-between'>
              <input
                type='number'
                placeholder='나이'
                value={age}
                onChange={(e) => {
                  setAge(e.target.value);
                }}
                style={{ border: 'none', width: '60%' }}
              />
              <strong style={{ paddingRight: '10px' }}>살</strong>
            </Grid>
            <Grid display='flex' justifyContent='space-between'>
              <input
                type='number'
                placeholder='체중'
                value={weight}
                onChange={(e) => {
                  if (e.keyCode < 48 || e.keyCode > 57) {
                    return false;
                  }
                  setWeight(e.target.value);
                }}
                style={{ border: 'none', width: '60%' }}
              />
              <strong style={{ paddingRight: '10px' }}>kg</strong>
            </Grid>
          </Grid>
          <Grid padding='15px 0' borderTop='1px solid rgba(225, 225, 225, 0.5)'>
            <input
              placeholder='발견장소를 입력해주세요'
              value={lostLocation}
              onChange={(e) => {
                setLostLocation(e.target.value);
              }}
              style={{ border: 'none' }}
            />
          </Grid>
          <Grid
            display='flex'
            padding='10px 0'
            borderTop='1px solid rgba(225, 225, 225, 0.5)'
          >
            <input
              value={'보호장소'}
              placeholder='보호장소'
              style={{ border: 'none', width: '80%', color: 'gray' }}
            />
            <Grid display='flex' alignItems='center'>
              개인
              <Slider
                handleToggle={ownerTypeCheck}
                valueCheck={ownerTypeToggle}
              />
              보호소
            </Grid>
          </Grid>
          <Grid padding='15px 0' borderTop='1px solid rgba(225, 225, 225, 0.5)'>
            <input
              placeholder='주소'
              type='text'
              value={address + siAddress}
              onClick={addressSelect}
              style={{ border: 'none' }}
            />
            {addressModal ? (
              <AddressSelector
                visible={addressSelect}
                setAddress={setAddress}
                siAddress={siAddress}
                setSiAddress={setSiAddress}
                addressModal={addressModal}
              />
            ) : null}
          </Grid>
          <Grid
            display='flex'
            padding='10px 0'
            borderTop='1px solid rgba(225, 225, 225, 0.5)'
          >
            <input
              placeholder='정보출처'
              value={'정보출처'}
              style={{ border: 'none', width: '50%', color: 'gray' }}
            />
            <Grid display='flex' alignItems='center'>
              직접등록
              <Slider handleToggle={tagCheck} valueCheck={tagToggle} />
              가져온 정보
            </Grid>
          </Grid>
          <Grid padding='15px 0' borderTop='1px solid rgba(225, 225, 225, 0.5)'>
            {tag === '직접등록' ? (
              <input
                placeholder='유기견 정보를 참고할 수 있는 링크를 남겨주세요'
                value={url}
                onChange={(e) => {
                  setUrl(e.target.value);
                }}
                style={{
                  border: 'none',
                  width: '100%',
                  boxSizing: 'border-box',
                  fontSize: '14px',
                }}
              />
            ) : (
              <input
                placeholder='유기견 정보를 가져오신 링크를 남겨주세요'
                value={url}
                onChange={(e) => {
                  setUrl(e.target.value);
                }}
                style={{
                  border: 'none',
                  width: '100%',
                  boxSizing: 'border-box',
                  fontSize: '14px',
                }}
              />
            )}
          </Grid>
          <Grid padding='15px 0' borderTop='1px solid rgba(225, 225, 225, 0.5)'>
            <input
              placeholder='연락처'
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              style={{ border: 'none', width: '100%', boxSizing: 'border-box' }}
            />
          </Grid>
          <Grid padding='15px 0' borderTop='1px solid rgba(225, 225, 225, 0.5)'>
            <textarea
              placeholder='특이사항'
              value={extra}
              onChange={(e) => {
                setExtra(e.target.value);
              }}
              style={{
                width: '100%',
                height: '200px',
                border: 'none',
                resize: 'none',
                marginBottom: '20px',
                boxSizing: 'border-box',
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default AddPost;
