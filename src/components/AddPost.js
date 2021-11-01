import React from 'react';
import { useDispatch } from 'react-redux';
import { Grid, Text } from '../elements/index';
import Slider from './Slider';
import { postActions } from '../redux/modules/post';
import AddressSelector from './AddressSelector';
import Upload from './Upload';
import Footer from './Footer';
const AddPost = () => {
  const dispatch = useDispatch();
  const [breed, setBreed] = React.useState('');
  const [sex, setSex] = React.useState('남아');
  const [age, setAge] = React.useState('');
  const [weight, setWeight] = React.useState('');
  const [lostLocation, setLostLocation] = React.useState('');
  const [ownerType, setOwnerType] = React.useState('개인');
  const [address, setAddress] = React.useState('');
  const [siAddress, setSiAddress] = React.useState('');
  const [url, setUrl] = React.useState('');
  const [tag, setTag] = React.useState('직접등록');
  const [phone, setPhone] = React.useState('');
  const [extra, setExtra] = React.useState('');

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
    img: files,
    isAdopted: false,
  };
  const [addressModal, setAddressModal] = React.useState(false);
  const addressSelect = () => {
    setAddressModal(!addressModal);
  };

  const addPostCard = () => {
    dispatch(postActions.addPostToAxios(postInfo));
  };
  return (
    <React.Fragment>
      <Grid width='375px' margin='0 auto'>
        <Grid padding='35px' boxSizing='border-box'>
          <button onClick={addPostCard}>등록완료</button>

          <p>이미지</p>
          <Upload files={files} setFiles={setFiles} />

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
              style={{ border: 'none', width: '70%' }}
            />
            <Grid display='flex' alignItems='center'>
              남아
              <Slider sexCheck={sexCheck} sexToggle={sexToggle} />
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
              <strong style={{ paddingRight: '10px' }}>년생</strong>
            </Grid>
            <Grid display='flex' justifyContent='space-between'>
              <input
                type='number'
                placeholder='체중'
                value={weight}
                onChange={(e) => {
                  setWeight(e.target.value);
                }}
                style={{ border: 'none', width: '60%' }}
              />
              <strong style={{ paddingRight: '10px' }}>kg</strong>
            </Grid>
          </Grid>
          <Grid padding='15px 0' borderTop='1px solid rgba(225, 225, 225, 0.5)'>
            <input
              placeholder='발견장소'
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
              placeholder='보호장소'
              value={ownerType}
              style={{ border: 'none', width: '70%' }}
            />
            <Grid display='flex' alignItems='center'>
              개인
              <Slider
                ownerTypeCheck={ownerTypeCheck}
                ownerTypeToggle={ownerTypeToggle}
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
              value={tag}
              style={{ border: 'none', width: '50%' }}
            />
            <Grid display='flex' alignItems='center'>
              직접등록
              <Slider tagCheck={tagCheck} tagToggle={tagToggle} />
              가져온정보
            </Grid>
          </Grid>
          <Grid padding='15px 0' borderTop='1px solid rgba(225, 225, 225, 0.5)'>
            <input
              placeholder='SNS주소나 URL주소를 입력해주세요'
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
              }}
              style={{ border: 'none', width: '100%', boxSizing: 'border-box' }}
            />
          </Grid>
          <Grid padding='15px 0' borderTop='1px solid rgba(225, 225, 225, 0.5)'>
            <input
              placeholder='연락처 정보'
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
                boxSizing: 'border-box',
              }}
            />
          </Grid>
        </Grid>
        <Footer></Footer>
      </Grid>
    </React.Fragment>
  );
};

export default AddPost;
