import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Grid, Text, Input } from '../elements';
import Slider from '../components/Slider';
import SelectBox from '../components/adoptionApplycation/SelectBox';
import ApplyProgressBar from '../components/adoptionApplycation/ApplyProgressBar';
import AddressSelector from '../components/AddressSelector';
import AgeData from '../components/Data/AgeData';
import { ErrorAlert2 } from '../shared/Alerts';

import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const AdoptionApply = (props) => {
  const { history } = props;
  const postID = useParams().id;
  // console.log(postID, '입양신청서 1번 id');
  const token = localStorage.getItem('USER_TOKEN');
  const isLogin = useSelector((state) => state.user?.user.isLogin);

  //입력 값 state
  const [name, setName] = React.useState('');
  const [job, setJob] = React.useState('');
  const [fosterAge, setFosterAge] = React.useState('20');
  const [gender, setGender] = React.useState('F');
  const [address, setAddress] = React.useState('');
  const [siAddress, setSiAddress] = React.useState('');
  const [family, setFamily] = React.useState('');
  const [currentPet, setCurrentPet] = React.useState('있음');
  const [reason, setReason] = React.useState('');
  const [phone, setPhone] = React.useState();

  const [click, setClick] = useState(false);
  const [addressModal, setAddressModal] = React.useState(false);

  // 성별 option, handleChange함수
  const GENDEROPTION = [
    { value: 'M', name: '남성' },
    { value: 'F', name: '여성' },
  ];
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  // 나이 data, handleChange함수
  const AGEOPTION = AgeData;
  const handleAgeChange = (e) => {
    setFosterAge(e.target.value);
    // console.log(typeof AGEOPTION[0].value);
  };

  // 반려동물 체크함수

  const handleCurrentPet = () => {
    setClick(!click);

    if (click === false) {
      setCurrentPet('없음');
    } else setCurrentPet('있음');
  };

  const handleCurrentPetTextNo = () => {
    setClick(true);
    setCurrentPet('없음');
  };

  const handleCurrentPetTextYes = () => {
    setClick(false);
    setCurrentPet('있음');
  };

  // 주소 입력 모달

  const addressSelect = () => {
    setAddressModal(!addressModal);
  };

  // 다음페이지 버튼
  const NextPage = () => {
    const sessionData = JSON.parse(window.sessionStorage.getItem('length'));
    const DbData = (({ click, ...o }) => o)(sessionData);

    const info = Object.values(DbData);

    if (info.includes('') === true) {
      ErrorAlert2('정보를 모두 입력해주셔야합니다.', 'bottom');
      return;
    }

    if (phone.length > 11 || phone.length < 9) {
      ErrorAlert2('휴대폰번호를 9~11자리로<br/> 입력해주세요.', 'bottom');
      return;
    }
    history.push(`/apply2/${postID}`);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem('length'));

    const {
      name,
      job,
      fosterAge,
      gender,
      fosterAddress,
      family,
      currentPet,
      phone,
      reason,
      click,
    } = data;

    let totalAdress = fosterAddress.split(' ');

    if (totalAdress.length === 3) {
      let adress = totalAdress[0];
      let siAdress1 = ` ${totalAdress[1]} ${totalAdress[2]}`;
      setAddress(adress);
      setSiAddress(siAdress1);
    } else if (totalAdress.length === 2) {
      let adress = totalAdress[0];
      let siAdress2 = ` ${totalAdress[1]}`;
      setAddress(adress);
      setSiAddress(siAdress2);
    } else {
      setAddress('');
      setSiAddress('');
    }

    setName(name);
    setJob(job);
    setFosterAge(fosterAge);
    setGender(gender);

    setFamily(family);
    setClick(click);
    setCurrentPet(currentPet);
    setPhone(phone);
    setReason(reason);
  }, []);

  useEffect(() => {
    sessionStorage.setItem(
      'length',
      JSON.stringify({
        name: name,
        job: job,
        fosterAge: fosterAge,
        gender: gender,
        fosterAddress: address + siAddress,
        family: family,
        currentPet: currentPet,
        phone: phone,
        reason: reason,
        click: click,
      }),
    );
  }, [
    name,
    job,
    fosterAge,
    gender,
    address,
    siAddress,
    family,
    currentPet,
    phone,
    reason,
    click,
  ]);

  if (token && !isLogin) {
    return <div></div>;
  }

  return (
    <Grid
      maxWidth='414px'
      width='auto'
      margin='0 auto'
      padding='0 35px'
      boxSizing='border-box'>
      <Grid
        _onClick={() => {
          history.goBack();
        }}
        position='relative'
        top='65px'
        left='0px'
        width='25px'
        height='25px'
        cusor='pointer'>
        <Grid width='12px' height='7px'>
          <img src={process.env.PUBLIC_URL + '/img/icon/back_icon.svg'} />
        </Grid>
      </Grid>

      <Grid margin='103px 0 0 0'>
        <ApplyProgressBar />

        <Grid margin='30px 0 15px 0 '>
          <Text margin='0' weight='700' size='20px'>
            기본정보
          </Text>
        </Grid>
        <Grid>
          <Input
            _onChange={(e) => {
              setName(e.target.value);
            }}
            name='name'
            value={name}
            bg='#FFFFFF'
            width='100%'
            padding='16px 0px'
            border='none'
            border_top='1px solid rgba(225, 225, 225, 0.5) '
            border_bottom='1px solid rgba(225, 225, 225, 0.5) '
            placeholder='이름을 기입해주세요.'
            placeholder_color='#E7E5E5'
            placeholder_weight='700'
            box-sizing
          />
        </Grid>
        <Grid>
          <Input
            _onChange={(e) => {
              setJob(e.target.value);
            }}
            name='job'
            value={job}
            width='100%'
            padding='16px 0px'
            bg='#FFFFFF'
            border='none'
            border_bottom='1px solid rgba(225, 225, 225, 0.5) '
            placeholder='직업을 기입해주세요.'
            placeholder_color='#E7E5E5'
            placeholder_weight='700'
            box-sizing
          />
        </Grid>
        <Grid
          display='flex'
          justtifyContent='flex-start'
          height='49px'
          padding='5px 0px'
          bg='#FFFFFF'
          borderBottom='1px solid rgba(225, 225, 225, 0.5) '
          boxSizing='border-box'>
          <SelectBox
            _onChange={handleAgeChange}
            defaultValue={fosterAge}
            options={AGEOPTION}></SelectBox>

          <Text weight='700' margin='10px 11px 0 8px'>
            살
          </Text>
          <SelectBox
            _onChange={handleGenderChange}
            defaultValue={gender}
            options={GENDEROPTION}></SelectBox>
        </Grid>

        <Grid
          height='auto'
          padding='16px 0 '
          bg='#FFFFFF'
          border='none'
          borderBottom='1px solid rgba(225, 225, 225, 0.5) '
          boxSizing='border-box'>
          <Input
            value={address + siAddress}
            _onClick={addressSelect}
            border='none'
            placeholder='거주지를 선택해주세요'
            placeholder_color='#E7E5E5'
            placeholder_weight='700'
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
            _onChange={(e) => {
              setFamily(e.target.value);
            }}
            name='family'
            value={family}
            width='100%'
            padding='16px 0px'
            bg='#FFFFFF'
            border='none'
            border_bottom='1px solid rgba(225, 225, 225, 0.5) '
            placeholder='가족 구성원을 입력해주세요.'
            placeholder_color='#E7E5E5'
            placeholder_weight='700'
            box-sizing
          />
        </Grid>

        <Grid
          is_flex
          height='49px'
          padding='16px 0px'
          borderBottom='1px solid rgba(225, 225, 225, 0.5) '
          boxSizing='border-box'>
          <Grid>
            <Text margin='0' weight='700'>
              반려동물 여부
            </Text>
          </Grid>
          <Grid display='flex' justifyContent='center' alignItems='center'>
            <Text
              _onClick={handleCurrentPetTextYes}
              margin='0 10px 0 0'
              color={currentPet === '있음' ? '#000000' : '#E7E5E5'}
              weight='700'
              cursor='pointer'>
              있음
            </Text>
            <Slider
              handleToggle={handleCurrentPet}
              valueCheck={click}
              data={currentPet}
            />
            <Text
              _onClick={handleCurrentPetTextNo}
              margin='0  0 0 10px'
              color={currentPet === '없음' ? '#000000' : '#E7E5E5'}
              weight='700'
              cursor='pointer'>
              없음
            </Text>
          </Grid>
        </Grid>

        <Grid>
          <Input
            type='number'
            _onChange={(e) => {
              setPhone(e.target.value);
            }}
            name='phone'
            value={phone}
            width='100%'
            padding='16px 0px'
            bg='#FFFFFF'
            border='none'
            border_bottom='1px solid rgba(225, 225, 225, 0.5) '
            placeholder='핸드폰 번호를 입력해주세요'
            placeholder_color='#E7E5E5'
            placeholder_weight='700'
            box-sizing
          />
        </Grid>

        <Grid margin='30px 0 18px 0 '>
          <Text margin='0' weight='700' size='20px'>
            입양사유
          </Text>
        </Grid>

        <Grid display='flex' height='250px' boxSizing='border-box'>
          <Textarea
            onChange={(e) => {
              setReason(e.target.value);
            }}
            name='Reason'
            value={reason}
            cols='40'
            rows='13'
            placeholder='500자 이하로 작성해주세요'></Textarea>
        </Grid>

        <Grid height='auto' margin='23px auto'>
          <Grid
            _onClick={NextPage}
            display='flex'
            justifyContent='center'
            alignItems='center'
            width='157px'
            height='52px'
            margin='auto'
            bg='#FFBE5B'
            borderRadius='26px'
            boxShadow='1px 1px 5px rgba(0, 0, 0, 0.5)'
            cusor='pointer'>
            <Text margin='0' color='#FFFFFF' weight='800'>
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
    color: #e7e5e5;
    font-weight: 700;
  }
  :focus {
    outline: 0;
    box-shadow: 0 0 4px #fe7968;
  }
`;

export default AdoptionApply;
