import React from 'react';
import Upload from './Upload';
import Slider from './Slider';
import AddressSelector from './AddressSelector';
import { WarningAlert } from '../shared/Alerts';
import { Grid, Text } from '../elements/index';
import { useDispatch } from 'react-redux';
import { history } from '../redux/configureStore';
import { postActions } from '../redux/modules/post';

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
  const [addressModal, setAddressModal] = React.useState(false);
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
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <Grid maxWidth='414px' margin='50px auto '>
        <Grid
          position='sticky'
          top='0'
          left='0'
          zIndex='1000'
          display='flex'
          alignItems='center'
          justifyContent='center'
          width='100px'
          height='60px'
          margin='-60px auto 0 0'
          bg='white'
          color='#6B6462'
          cusor='pointer'
          _onClick={() => {
            history.goBack();
          }}
        >
          닫기
        </Grid>
        <Grid
          position='sticky'
          top='0'
          left='305px'
          zIndex='1000'
          display='flex'
          alignItems='center'
          justifyContent='center'
          width='100px'
          height='60px'
          margin='-60px 0 0 auto'
          bg='white'
          color='#FE7968'
          cusor='pointer'
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
              style={{ width: '80%', border: 'none' }}
            />
            <Grid display='flex' alignItems='center'>
              <Text color={sex === 'M' ? 'black' : '#E7E5E5'}>남아</Text>
              <Slider handleToggle={sexCheck} valueCheck={sexToggle} />
              <Text color={sex === 'F' ? 'black' : '#E7E5E5'}>여아</Text>
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
                style={{ width: '60%', border: 'none' }}
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
                style={{ width: '60%', border: 'none' }}
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
              value={'보호장소를 선택해주세요'}
              placeholder='보호장소'
              style={{ width: '100%', color: 'black', border: 'none' }}
            />
            <Grid display='flex' alignItems='center'>
              <Text color={ownerType === '개인' ? 'black' : '#E7E5E5'}>
                개인
              </Text>
              <Slider
                handleToggle={ownerTypeCheck}
                valueCheck={ownerTypeToggle}
              />
              <Text color={ownerType === '보호소' ? 'black' : '#E7E5E5'}>
                보호소
              </Text>
            </Grid>
          </Grid>
          <Grid padding='15px 0' borderTop='1px solid rgba(225, 225, 225, 0.5)'>
            <input
              placeholder='주소'
              type='text'
              value={address + siAddress}
              onClick={addressSelect}
              style={{ border: 'none', cursor: 'pointer' }}
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
              value={'출처를 선택해주세요'}
              style={{
                width: '60%',
                color: 'black',
                border: 'none',
              }}
            />
            <Grid
              display='flex'
              justifyContent='flex-end'
              alignItems='center'
              fontSize='14px'
            >
              <Text color={tag === '직접등록' ? 'black' : '#E7E5E5'}>
                직접등록
              </Text>
              <Slider handleToggle={tagCheck} valueCheck={tagToggle} />
              <Text color={tag === '가져온 정보' ? 'black' : '#E7E5E5'}>
                가져온 정보
              </Text>
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
                  width: '100%',
                  fontSize: '14px',
                  border: 'none',
                  boxSizing: 'border-box',
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
                  width: '100%',
                  fontSize: '14px',
                  border: 'none',
                  boxSizing: 'border-box',
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
                marginBottom: '20px',
                border: 'none',
                resize: 'none',
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
