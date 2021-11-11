import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { applyActions as userActions } from '../redux/modules/apply';
import { useParams } from 'react-router-dom';

import { Grid, Text, Input } from '../elements';
import Slider from '../components/Slider';
import SelectBox from '../components/adoptionApplycation/SelectBox';
import ApplyProgressBar from '../components/adoptionApplycation/ApplyProgressBar';
import AddressSelector from '../components/AddressSelector';
import AgeData from '../components/Data/AgeData';

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStopwatch } from '@fortawesome/free-solid-svg-icons';

const AdoptionApply = (props) => {
  const postID = useParams().id;
  // console.log(postID, '입양신청서 1번 id');
  const userInfo = useSelector((state) => state.user?.user.userInfo);
  console.log(userInfo.phone, '미리받은 번호1');

  const token = localStorage.getItem('USER_TOKEN');
  const isLogin = useSelector((state) => state.user?.user.isLogin);

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
  const [phone, setPhone] = React.useState();

  useEffect(() => {
    if (userInfo && userInfo.phone !== '') {
      setPhone(userInfo.phone);
    } else {
      setPhone('');
    }
  }, []);
  // 성별 option, handleChange함수
  const GENDEROPTION = [
    { value: 'M', name: '남성' },
    { value: 'F', name: '여성' },
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

  if (token && !isLogin) {
    return <div>로딩중~</div>;
  }

  console.log(userInfo.phone, '미리받은 번호2');

  return (
    <Grid
      boxSizing='border-box'
      width='375px'
      margin='80px auto 0'
      padding='0 35px'>
      <Grid>
        <ApplyProgressBar />

        <Grid margin='30px 0 15px 0 '>
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
          padding='5px 0px'
          boxSizing='border-box'
          bg='#FFFFFF'
          height='49px'
          borderBottom='1px solid rgba(225, 225, 225, 0.5) '>
          <SelectBox
            options={AGEOPTION}
            _onChange={handleAgeChange}
            defaultValue={fosterAge}></SelectBox>

          <Text bold margin='10px 11px 0 8px'>
            살
          </Text>
          <SelectBox
            options={GENDEROPTION}
            _onChange={handleGenderChange}
            defaultValue={gender}></SelectBox>
        </Grid>

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
            <Slider handleToggle={handleCurrentPet} />
            <Text
              color={currentPet === '없음' ? '#000000' : '#E1E1E1'}
              bold
              margin='0  0 0 10px'>
              없음
            </Text>
          </Grid>
        </Grid>

        <Grid>
          <Input
            bg='#FFFFFF'
            width='100%'
            border='none'
            border_bottom='1px solid rgba(225, 225, 225, 0.5) '
            padding='16px 0px'
            box-sizing
            placeholder='핸드폰 번호를 입력해주세요'
            placeholder_color='#DFDFDF'
            name='phone'
            value={phone}
            _onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
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
              window.sessionStorage.setItem('length2', 'length2'); //프로그래스 바용
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
