import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { applyActions as userActions } from '../redux/modules/apply';
import { useParams } from 'react-router-dom';

import { Grid, Text, Input } from '../elements';
import Slider from '../components/Slider';
import SelectBox from '../components/adoptionApplycation/SelectBox';
import AddressSelector from '../components/AddressSelector';
import AgeData from '../components/Data/AgeData';

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStopwatch } from '@fortawesome/free-solid-svg-icons';

const AdoptionApply = (props) => {
  const postID = useParams().id;
  console.log(postID, '입양신청서 1번 id');

  const dispatch = useDispatch();
  const { history } = props;
  const [name, setName] = React.useState('');
  const [job, setJob] = React.useState('');
  const [fosterAge, setFosterAge] = React.useState('20');
  const [gender, setGender] = React.useState('F');
  const [address, setAddress] = React.useState('');
  const [siAddress, setSiAddress] = React.useState('');
  const [family, setFamily] = React.useState('');
  const [currentPet, setCurrentPet] = React.useState('있음');
  const [reason, setReason] = React.useState('');
  // const [allergy, setAllergy] = React.useState('있음');
  // const [experience, setExperience] = React.useState('있음');
  // const [timeTogether, setTimeTogether] = React.useState('');
  // const [anxiety, setAnxiety] = React.useState('');
  // const [bark, setBark] = React.useState('');
  // const [roomUrl, setRoomUrl] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [code, setCode] = React.useState('');

  // 성별 option, handleChange함수
  const GENDEROPTION = [
    { value: 'M', name: '남자' },
    { value: 'F', name: '여자' },
  ];
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  // 나이 option, handleChange함수
  // AgeData는 type이 number인데 setAge로들어가면 string으로 나옴. 그래서 type string으로 서버에넘김
  const AGEOPTION = AgeData;
  const handleAgeChange = (e) => {
    setFosterAge(e.target.value);
    // console.log(typeof AGEOPTION[0].value);
  };

  // 서버에 전달할 데이터

  const data = {
    name: name,
    job: job,
    fosterAge: fosterAge,
    gender: gender,
    fosterAddress: address + siAddress,
    family: family,
    currentPet: currentPet,
    phone: phone,
    // code: code,
    reason: reason,
    allergy: '',
    experience: '',
    timeTogether: '',
    anxiety: '',
    bark: '',
    roomUrl: '',
  };
  console.log(data);

  // 반려동물 체크함수
  const [click, setClick] = useState(true);
  const handleCurrentPet = () => {
    setClick(!click);
    // console.log(click);
    if (click === true) {
      setCurrentPet('없음');
    } else setCurrentPet('있음');
  };
  // console.log(click);

  // 주소 입력 오픈 모달
  const [addressModal, setAddressModal] = React.useState(false);
  const addressSelect = () => {
    setAddressModal(!addressModal);
  };

  return (
    <Grid
      boxSizing='border-box'
      width='375px'
      margin='135px auto 0'
      padding='0 35px'>
      <Grid>
        <Grid margin='0 0 15px 0 '>
          <Text margin='0' weight='700' size='20px'>
            기본정보
          </Text>
        </Grid>
        <Grid>
          <Input
            bg='#FFFFFF'
            width='100%'
            border='none'
            border_top='1px solid rgba(225, 225, 225, 0.5) '
            border_bottom='1px solid rgba(225, 225, 225, 0.5) '
            padding='16px 0px'
            box-sizing
            placeholder='이름을 기입해주세요.'
            placeholder_color='#DFDFDF'
            name='name'
            value={name}
            _onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Grid>
        <Grid>
          <Input
            bg='#FFFFFF'
            width='100%'
            border='none'
            border_bottom='1px solid rgba(225, 225, 225, 0.5) '
            padding='16px 0px'
            box-sizing
            placeholder='직업을 기입해주세요.'
            placeholder_color='#DFDFDF'
            name='job'
            value={job}
            _onChange={(e) => {
              setJob(e.target.value);
            }}
          />
        </Grid>
        <Grid
          display='flex'
          justtifyContent='flex-start'
          padding='16px 0px'
          boxSizing='border-box'
          bg='#FFFFFF'
          height='49px'
          borderBottom='1px solid rgba(225, 225, 225, 0.5) '>
          <SelectBox
            options={AGEOPTION}
            _onChange={handleAgeChange}
            defaultValue={fosterAge}></SelectBox>
          <Text margin='0' bold margin='0 11px 0 8px'>
            살
          </Text>
          <SelectBox
            options={GENDEROPTION}
            _onChange={handleGenderChange}
            defaultValue={gender}></SelectBox>
        </Grid>
        {/* 
        <Grid>
          <Input
            bg='#FFFFFF'
            width='100%'
            border='none'
            border_bottom='1px solid rgba(225, 225, 225, 0.5) '
            padding='16px 0px'
            box-sizing
            placeholder='거주지를 기입해주세요.'
            placeholder_color='#DFDFDF'
            name='name'
            // value={name}
            _onChange={(e) => {
              // setName(e.target.value);
            }}
          />
        </Grid> */}

        <Grid
          bg='#FFFFFF'
          padding='16px 0 '
          border='none'
          borderBottom='1px solid rgba(225, 225, 225, 0.5) '
          boxSizing='border-box'
          height='auto'>
          <input
            placeholder='거주지를 입력해주세요'
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

        <Grid>
          <Input
            bg='#FFFFFF'
            width='100%'
            border='none'
            border_bottom='1px solid rgba(225, 225, 225, 0.5) '
            padding='16px 0px'
            box-sizing
            placeholder='가족 구성원을 입력해주세요.'
            placeholder_color='#DFDFDF'
            name='family'
            value={family}
            _onChange={(e) => {
              setFamily(e.target.value);
            }}
          />
        </Grid>

        <Grid
          is_flex
          padding='16px 0px'
          boxSizing='border-box'
          height='49px'
          borderBottom='1px solid rgba(225, 225, 225, 0.5) '>
          <Grid>
            <Text margin='0' bold>
              반려동물 여부
            </Text>
          </Grid>
          <Grid display='flex' justifyContent='center' alignItems='center'>
            <Text
              color={currentPet === '있음' ? '#000000' : '#E1E1E1'}
              bold
              margin='0 10px 0 0'>
              있음
            </Text>
            <Slider _onClick={handleCurrentPet} />
            <Text
              color={currentPet === '없음' ? '#000000' : '#E1E1E1'}
              bold
              margin='0  0 0 10px'>
              없음
            </Text>
          </Grid>
        </Grid>

        <Grid
          alignItems='center'
          is_flex
          padding='16px 0px'
          boxSizing='border-box'
          bg='#FFFFFF'
          height='49px'
          borderBottom='1px solid rgba(225, 225, 225, 0.5) '>
          <Input
            bg='#ECECEC'
            width='52px'
            border='none'
            border_bottom='1px solid rgba(225, 225, 225, 0.5) '
            padding='8px'
            box-sizing
            placeholder='SKT'
            placeholder_color='#DFDFDF'
            name='reason'
            // value={reason}
            _onChange={(e) => {
              // setReason(e.target.value);
            }}
          />

          <Input
            bg='#ECECEC'
            width='220px'
            border_radius='5px'
            border='none'
            border_bottom='1px solid rgba(225, 225, 225, 0.5) '
            padding='8px'
            box-sizing
            placeholder='-빼고 입력하세요.'
            placeholder_color='#DFDFDF'
            name='phone'
            value={phone}
            _onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </Grid>
        <Grid
          display='flex'
          alignItems='center'
          padding='16px 0px'
          boxSizing='border-box'
          bg='#FFFFFF'
          height='49px'
          borderBottom='1px solid rgba(225, 225, 225, 0.5) '>
          <Grid width='60px' margin='0 6px 0 0'>
            <FontAwesomeIcon icon={faStopwatch} color='#00B412' fontSize='1x' />
          </Grid>
          <Grid>
            <Text color='#00B412' margin='0' weight='800'>
              5:00
            </Text>
          </Grid>

          <Input
            bg='#ECECEC'
            width='147px'
            border_radius='5px'
            border='none'
            border_bottom='1px solid rgba(225, 225, 225, 0.5) '
            padding='8px'
            box-sizing
            placeholder=''
            placeholder_color='#DFDFDF'
            name='code'
            value={code}
            _onChange={(e) => {
              setCode(e.target.value);
            }}
          />
          <Grid margin='0 0 0 15px'>
            <Text margin='0' weight='800' color='#00B412'>
              인증하기
            </Text>
          </Grid>
        </Grid>

        <Grid margin='30px 0 18px 0 '>
          <Text margin='0' weight='700' size='20px'>
            입양사유
          </Text>
        </Grid>

        <Grid boxSizing='border-box' display='flex' height='250px'>
          <Textarea
            name='Reason'
            value={reason}
            onChange={(e) => {
              setReason(e.target.value);
            }}
            cols='40'
            rows='13'
            placeholder='500자 이하로 적어주세요'></Textarea>
        </Grid>

        <Grid height='auto' margin='23px auto'>
          <Grid
            margin='auto'
            bg='#FF6666'
            width='157px'
            height='52px'
            borderRadius='26px'
            display='flex'
            justifyContent='center'
            alignItems='center'
            boxShadow='1px 1px 5px rgba(0, 0, 0, 0.5)'
            _onClick={() => {
              dispatch(userActions.addApply(data));
              history.push(`/apply2/${postID}`);
              window.scrollTo(0, 0);
            }}>
            <Text margin='0' color='white'>
              다음 페이지로
            </Text>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const Textarea = styled.textarea`
  border-radius: 15px;
  background-color: #f7f7f7;
  border: none;
  padding: 19px;
  box-sizing: border-box;
  ::placeholder {
    color: '#DFDFDF';
  }
`;

export default AdoptionApply;
