import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Grid, Image } from '../elements/index';
import Slider from './Slider';
import { postActions } from '../redux/modules/post';

const AddPost = () => {
  const dispatch = useDispatch();
  // const [petName, setPetName] = React.useState('');
  const [breed, setBreed] = React.useState('');
  const [sex, setSex] = React.useState('남아');
  const [age, setAge] = React.useState('');
  const [weight, setWeight] = React.useState('');
  const [lostLocation, setLostLocation] = React.useState('');
  const [ownerType, setOwnerType] = React.useState('개인');
  // const [condition, setCondition] = React.useState('임시보호중');
  const [address, setAddress] = React.useState('');
  const [url, setUrl] = React.useState('');
  const [tag, setTag] = React.useState('직접등록');
  const [phone, setPhone] = React.useState('');
  const [extra, setExtra] = React.useState('');

  const [sexToggle, setSexToggle] = React.useState(false);
  const [ownerTypeToggle, setOwnerTypeToggle] = React.useState(false);
  // const [conditionToggle, setConditionToggle] = React.useState(false);
  const [tagToggle, setTagToggle] = React.useState(false);

  //토글

  const sexCheck = () => {
    setSexToggle(!sexToggle);
    if (sexToggle === true) {
      setSex('남아');
    } else {
      setSex('여아');
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

  // const conditionCheck = () => {
  //   setConditionToggle(!conditionToggle);
  //   if (conditionToggle === true) {
  //     setCondition('임시보호중');
  //   } else {
  //     setCondition('입양중');
  //   }
  // };

  const tagCheck = () => {
    setTagToggle(!tagToggle);
    if (tagToggle === true) {
      setTag('직접등록');
    } else {
      setTag('가져온 정보');
    }
  };
  console.log(sex, ownerType, tag);

  const [files, setFiles] = useState([]);
  const onloadFile = (e) => {
    const selectImg = e.target.files;
    const imgUrlList = [...files];
    console.log(e.target.files);

    for (let i = 0; i < selectImg.length; i++) {
      const nowImgUrl = URL.createObjectURL(selectImg[i]);
      imgUrlList.push(nowImgUrl);
    }

    setFiles(imgUrlList);
  };
  const postInfo = {
    breed: breed,
    sex: sex,
    age: age,
    weight: weight,
    lostLocation: lostLocation,
    ownerType: ownerType,
    address: address,
    url: url,
    tag: tag,
    phone: phone,
    extra: extra,
    img: files,
    isAdopted: false,
  };

  const addPostCard = () => {
    dispatch(postActions.addPostToAxios(postInfo));
  };
  return (
    <React.Fragment>
      <Grid>
        <button onClick={addPostCard}>등록완료</button>
        <input type='file' multiple accept='image/*' onChange={onloadFile} />
        이미지
        <div style={{ display: 'flex' }}>
          {files &&
            files.map((a) => {
              return (
                <>
                  <img
                    alt='sample'
                    src={a}
                    style={{
                      margin: 'auto',
                      width: '150px',
                      height: '150px',
                      objectFit: 'scale-down',
                    }}
                  />
                  <button>x</button>
                </>
              );
            })}
        </div>
        <Image />
        <p>
          <input
            placeholder='견종'
            value={breed}
            onChange={(e) => {
              setBreed(e.target.value);
            }}
          />
          남아
          <Slider sexCheck={sexCheck} sexToggle={sexToggle} />
          여아
        </p>
        <p>
          <input
            placeholder='나이'
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />

          <input
            placeholder='체중'
            value={weight}
            onChange={(e) => {
              setWeight(e.target.value);
            }}
          />
        </p>
        <p>
          <input
            placeholder='발견장소'
            value={lostLocation}
            onChange={(e) => {
              setLostLocation(e.target.value);
            }}
          />
        </p>
        <p>
          <input placeholder='보호장소' value={ownerType} />
          개인
          <Slider
            ownerTypeCheck={ownerTypeCheck}
            ownerTypeToggle={ownerTypeToggle}
          />
          보호소
        </p>
        {/* 토글버튼, 임시보호중, 입양중 >> 마이페이지로 가야함
        <p>
          <input placeholder='상태' value={condition} />
          임시보호중
          <Slider
            conditionCheck={conditionCheck}
            conditionToggle={conditionToggle}
          />
          입양중
        </p> */}
        {/* 시 단위까지 추가  얘기해봐야함*/}
        <p>
          <input
            placeholder='주소'
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </p>
        <p>
          <input placeholder='정보출처' value={tag} />
          직접등록
          <Slider tagCheck={tagCheck} tagToggle={tagToggle} />
          가져온정보
        </p>
        <p>
          <input
            placeholder='SNS주소나 URL주소를 입력해주세요'
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
            }}
          />
        </p>
        <p>
          <input
            placeholder='연락처 정보'
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </p>
        <p>
          <textarea
            placeholder='특이사항'
            value={extra}
            onChange={(e) => {
              setExtra(e.target.value);
            }}
          />
        </p>
      </Grid>
    </React.Fragment>
  );
};

export default AddPost;
