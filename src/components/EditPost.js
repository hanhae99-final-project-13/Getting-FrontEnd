import React from 'react';
import Slider from './Slider';
import AddressSelector from './AddressSelector';
import Footer from './Footer';
import EditUpload from './EditUpload';
import { WarningAlert } from '../shared/Alerts';
import { Grid } from '../elements/index';
import { useDispatch } from 'react-redux';
import { postActions } from '../redux/modules/post';

const EditPost = (props) => {
  const { data, postId, setEdit } = props;

  const dispatch = useDispatch();
  const [breed, setBreed] = React.useState(data.breed);
  const [sex, setSex] = React.useState(data.sex);
  const [age, setAge] = React.useState(data.age);
  const [weight, setWeight] = React.useState(data.weight);
  const [lostLocation, setLostLocation] = React.useState(data.lostLocation);
  const [ownerType, setOwnerType] = React.useState(data.ownerType);
  const [address, setAddress] = React.useState(data.address);
  const [siAddress, setSiAddress] = React.useState('');
  const [url, setUrl] = React.useState(data.url);
  const [tag, setTag] = React.useState(data.tag);
  const [phone, setPhone] = React.useState(data.phone);
  const [extra, setExtra] = React.useState(data.extra);
  const [img, setImg] = React.useState(data.img);

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
    } else if (sexToggle === false) {
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
  const editPost = () => {
    if (img.length === 0) {
      return WarningAlert('이미지를 최소 한 장 올려주세요');
    }
    if (breed === null || breed === '') {
      return WarningAlert('견종을 입력해주세요');
    }
    if (age === null || age === '') {
      return WarningAlert('나이를 입력해주세요');
    }
    if (weight === null || weight === '') {
      return WarningAlert('체중을 입력해주세요');
    }
    if (lostLocation === null || lostLocation === '') {
      return WarningAlert('발견장소를 입력해주세요');
    }
    if (address === null || address === '') {
      return WarningAlert('주소를 입력해주세요');
    }
    if (phone === null || phone === '') {
      return WarningAlert('연락처를 입력해주세요');
    }
    dispatch(postActions.addPostToAxios(postInfo));
    dispatch(postActions.setSearch({ page: 0, sort: 'new' }));
  };

  return (
    <React.Fragment>
      <Grid maxWidth='414px' margin='65px auto'>
        <Grid padding='0 35px' boxSizing='border-box'>
          <p>이미지</p>
          <EditUpload
            files={files}
            setFiles={setFiles}
            img={img}
            setImg={setImg}
          />

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
              남아
              <Slider
                data={data.sex}
                handleToggle={sexCheck}
                valueCheck={sexToggle}
              />
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
                style={{ width: '60%', border: 'none' }}
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
                style={{ width: '60%', border: 'none' }}
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
              style={{ border: 'none', width: '80%' }}
            />
            <Grid display='flex' alignItems='center'>
              개인
              <Slider
                data={data.ownerType}
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
              value={tag}
              style={{ border: 'none', width: '50%' }}
            />
            <Grid display='flex' alignItems='center'>
              직접등록
              <Slider
                data={data.tag}
                handleToggle={tagCheck}
                valueCheck={tagToggle}
              />
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
              style={{ width: '100%', border: 'none', boxSizing: 'border-box' }}
            />
          </Grid>
          <Grid padding='15px 0' borderTop='1px solid rgba(225, 225, 225, 0.5)'>
            <input
              placeholder='연락처 정보'
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              style={{ width: '100%', border: 'none', boxSizing: 'border-box' }}
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
        <Grid
          display='flex'
          alignItems='center'
          justifyContent='center'
          width='150px'
          height='50px'
          margin='0 auto 100px'
          bg='#FE7968'
          color='white'
          borderRadius='30px'
          cusor='pointer'
          _onClick={editPost}
        >
          수정하기
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default EditPost;
