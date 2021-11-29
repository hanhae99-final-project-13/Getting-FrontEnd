import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Grid, Text, Input } from '../elements';
import Slider from '../components/Slider';
import SelectBox from '../components/adoptionApplycation/SelectBox';
import ApplyProgressBar from '../components/adoptionApplycation/ApplyProgressBar';
import AddressSelector from '../components/AddressSelector';
import AgeData from '../components/Data/AgeData';
import { ErrorAlert2 } from '../shared/Alerts';

import styled from 'styled-components';

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
  const [click, setClick] = useState(false);
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
  const [addressModal, setAddressModal] = React.useState(false);
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
      boxSizing='border-box'
      maxWidth='414px'
      width='auto'
      margin='0 auto'
      padding='0 35px'>
      <Grid
        cusor='pointer'
        _onClick={() => {
          history.goBack();
        }}
        position='relative'
        top='65px'
        left='0px'
        width='25px'
        height='25px'>
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
            bg='#FFFFFF'
            width='100%'
            border='none'
            border_top='1px solid rgba(225, 225, 225, 0.5) '
            border_bottom='1px solid rgba(225, 225, 225, 0.5) '
            padding='16px 0px'
            box-sizing
            placeholder='이름을 기입해주세요.'
            placeholder_color='#E7E5E5'
            placeholder_weight='700'
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
            placeholder_color='#E7E5E5'
            placeholder_weight='700'
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

          <Text weight='700' margin='10px 11px 0 8px'>
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
          <Input
            border='none'
            placeholder='거주지를 선택해주세요'
            placeholder_color='#E7E5E5'
            placeholder_weight='700'
            value={address + siAddress}
            _onClick={addressSelect}
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
            placeholder_color='#E7E5E5'
            placeholder_weight='700'
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
            <Text margin='0' weight='700'>
              반려동물 여부
            </Text>
          </Grid>
          <Grid display='flex' justifyContent='center' alignItems='center'>
            <Text
              _onClick={handleCurrentPetTextYes}
              cursor='pointer'
              color={currentPet === '있음' ? '#000000' : '#E7E5E5'}
              weight='700'
              margin='0 10px 0 0'>
              있음
            </Text>
            <Slider
              data={currentPet}
              valueCheck={click}
              handleToggle={handleCurrentPet}
            />
            <Text
              _onClick={handleCurrentPetTextNo}
              cursor='pointer'
              color={currentPet === '없음' ? '#000000' : '#E7E5E5'}
              weight='700'
              margin='0  0 0 10px'>
              없음
            </Text>
          </Grid>
        </Grid>

        <Grid>
          <Input
            type='number'
            bg='#FFFFFF'
            width='100%'
            border='none'
            border_bottom='1px solid rgba(225, 225, 225, 0.5) '
            padding='16px 0px'
            box-sizing
            placeholder='핸드폰 번호를 입력해주세요'
            placeholder_color='#E7E5E5'
            placeholder_weight='700'
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
            placeholder='500자 이하로 작성해주세요'></Textarea>
        </Grid>

        <Grid height='auto' margin='23px auto'>
          <Grid
            cusor='pointer'
            margin='auto'
            bg='#FFBE5B'
            width='157px'
            height='52px'
            borderRadius='26px'
            display='flex'
            justifyContent='center'
            alignItems='center'
            boxShadow='1px 1px 5px rgba(0, 0, 0, 0.5)'
            _onClick={NextPage}>
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
