import React from 'react';
import {
  Address,
  Age,
  Breed,
  Extra,
  LostLocation,
  OwnerType,
  Phone,
  Tag,
  Url,
  Weight,
  Regist,
} from '../components/AddPost/index';
import Upload from './Upload';
import { WarningAlert } from '../shared/Alerts';
import { Grid } from '../elements/index';
import { useDispatch } from 'react-redux';
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
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <Grid maxWidth='414px' margin='65px auto '>
        <Grid padding='0 35px' boxSizing='border-box'>
          <p>이미지</p>
          <Upload files={files} setFiles={setFiles} img={img} setImg={setImg} />
          <p>상세 정보</p>
          <Breed
            breed={breed}
            setBreed={setBreed}
            sex={sex}
            setSex={sexToggle}
            sexCheck={sexCheck}
          />
          <Grid
            display='flex'
            padding='15px 0'
            borderTop='1px solid rgba(225, 225, 225, 0.5)'
          >
            <Age age={age} setAge={setAge} />
            <Weight weight={weight} setWeight={setWeight} />
          </Grid>
          <LostLocation
            lostLocation={lostLocation}
            setLostLocation={setLostLocation}
          />
          <OwnerType
            ownerType={ownerType}
            ownerTypeCheck={ownerTypeCheck}
            ownerTypeToggle={ownerTypeToggle}
          />
          <Address
            address={address}
            siAddress={siAddress}
            addressSelect={addressSelect}
            addressModal={addressModal}
            setAddress={setAddress}
            setSiAddress={setSiAddress}
          />
          <Tag tag={tag} tagCheck={tagCheck} tagToggle={tagToggle} />
          <Url tag={tag} url={url} setUrl={setUrl} />
          <Phone phone={phone} setPhone={setPhone} />
          <Extra extra={extra} setExtra={setExtra} />
        </Grid>
        <Regist addPostCard={addPostCard} />
      </Grid>
    </React.Fragment>
  );
};

export default AddPost;
