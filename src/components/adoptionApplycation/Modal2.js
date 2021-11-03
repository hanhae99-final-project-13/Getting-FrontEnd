import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';

import styled from 'styled-components';
import { Grid, Text, Input } from '../../elements';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';

import Slider from '../Slider';
import AddressSelector from '../AddressSelector';
import Upload2 from '../Upload2';
import Swal from 'sweetalert2';
import Footer from '../Footer';

const Modal2 = (props) => {
  // s3에 이미지 업로드하는 자식함수
  const sampleRef = useRef();

  const dispatch = useDispatch();

  // 정보입력창 여는 토글
  const [basicInfoToggle, setBasicInfoToggle] = useState(false);
  const [reasonToggle, setReasonToggle] = useState(false);

  const openBasicinfo = () => {
    setBasicInfoToggle(!basicInfoToggle);
  };
  const openPosterReason = () => {
    setReasonToggle(!reasonToggle);
  };

  // 입력값 받는 useState
  const [name, setName] = React.useState('');
  const [birthYear, setBirthYear] = React.useState('');
  const [gender, setGender] = React.useState('M');
  const [phone, setPhone] = React.useState('');
  const [job, setJob] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [siAddress, setSiAddress] = React.useState('');
  const [currnetPet, setCurrnetPet] = React.useState('');
  const [experience, setExperience] = React.useState('있음');
  const [family, setFamily] = React.useState('혼자');
  const [reason, setReason] = React.useState('');
  const [timeTogether, setTimeTogether] = React.useState('');
  const [anxiety, setAnxiety] = React.useState('');
  const [bark, setBark] = React.useState('');
  const [roomUrl, setRoomUrl] = React.useState('');

  // 서버전달 데이터
  const data = {
    name: name,
    birthYear: birthYear,
    gender: gender,
    phone: phone,
    job: job,
    address: address + siAddress,
    currnetPet: currnetPet,
    experience: experience,
    family: family,
    reason: reason,
    timeTogether: timeTogether,
    anxiety: anxiety,
    bark: bark,
    roomUrl: roomUrl,
  };
  console.log(data);

  // 성별토글
  const [genderToggle, setGenderToggle] = React.useState(false);
  const checkGender = () => {
    setGenderToggle(!genderToggle);
    console.log(genderToggle);
    if (genderToggle === true) {
      setGender('M');
    } else {
      setGender('F');
    }
  };
  console.log(genderToggle);

  // 주소토글
  const [addressModal, setAddressModal] = React.useState(false);
  const addressSelect = () => {
    setAddressModal(!addressModal);
  };

  // 가족토글
  const [familyToggle, setFamilyToggle] = React.useState(false);
  const checkFamily = () => {
    setFamilyToggle(!familyToggle);
    console.log(familyToggle);
    if (familyToggle === true) {
      setFamily('혼자');
    } else {
      setFamily('가족');
    }
  };

  // 반려경 키운 경험 토글
  const [exToggle, setExToggle] = React.useState(false);
  const checkExperience = () => {
    setExToggle(!exToggle);
    if (exToggle === true) {
      setExperience('있음');
    } else {
      setExperience('없음');
    }
    console.log(exToggle);
  };

  //입양신청버튼
  const applyPoster = () => {
    Swal.fire({
      title: '입양을 신청하시면 되돌릴 수 없습니다',
      text: '신중하게 선택해주세요:)',
      icon: 'error',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '승인',
      cancelButtonText: '취소',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          '입양신청이 완료되었습니다.',
          '임보자님의 연락을 기다려주세요!',
          'success',
        );
        // sampleRef.current.upload();
        // dispatch()
      }
    });
  };

  return (
    <React.Fragment>
      <Grid position='fixed' top='60px' left='0' zIndex='999'>
        <Grid
          margin='0 auto'
          width='375px'
          bg='#FFFFFF'
          backdropFilter='blur(20px)'
          border='none'
          boxShadow='5px 5px 10px 0px #00000040'
          boxSizing='border-box'
          padding='20px'
          borderRadius='30px 30px 0 0'>
          <Grid
            is_flex
            height='auto'
            margin='54px 0 0 0'
            alignItems='center'
            _onClick={openBasicinfo}>
            <Text size='20px' weight='700' width='800px'>
              기본정보 입력
            </Text>
            <Grid width='100px' display='flex' justifyContent='flex-end'>
              <FontAwesomeIcon icon={faSortDown} color='black' fontSize='1x' />
            </Grid>
          </Grid>

          {basicInfoToggle ? (
            <Grid height='600px' overflow='auto'>
              <Input
                margin='15px 0 0 0'
                bg='#FFFFFF'
                width='100%'
                border='none'
                border_top='1px solid rgba(225, 225, 225, 0.5) '
                border_bottom='1px solid rgba(225, 225, 225, 0.5) '
                padding='16px'
                box-sizing
                placeholder='이름을 기입해주세요.'
                placeholder_color='#DFDFDF'
                name='name'
                value={name}
                _onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <Input
                bg='#FFFFFF'
                width='100%'
                border='none'
                border_bottom='1px solid rgba(225, 225, 225, 0.5) '
                padding='16px'
                box-sizing
                placeholder='출생년도를 기입해주세요.(드롭다운리스트로 변경예정)'
                placeholder_color='#DFDFDF'
                name='birthYear'
                value={birthYear}
                _onChange={(e) => {
                  setBirthYear(e.target.value);
                }}
              />

              <Grid
                height='auto'
                is_flex
                padding='12px 16px'
                alignItems='center'
                borderBottom='1px solid rgba(225, 225, 225, 0.5) '>
                <Text margin='0' bold width='100%'>
                  성별
                </Text>
                <Grid
                  display='flex'
                  alignItems='center'
                  justifyContent='center'>
                  <Text margin='0' bold>
                    남자
                  </Text>
                  <Slider _onClick={checkGender} />
                  <Text margin='0' bold>
                    여자
                  </Text>
                </Grid>
              </Grid>
              <Input
                bg='#FFFFFF'
                width='100%'
                border='none'
                border_bottom='1px solid rgba(225, 225, 225, 0.5) '
                padding='16px'
                box-sizing
                placeholder='직업을 기입해주세요'
                placeholder_color='#DFDFDF'
                name='job'
                value={job}
                _onChange={(e) => {
                  setJob(e.target.value);
                }}
              />
              <Input
                type='number'
                bg='#FFFFFF'
                width='100%'
                border='none'
                border_bottom='1px solid rgba(225, 225, 225, 0.5) '
                padding='16px'
                box-sizing
                placeholder='연락처를 -를 빼고 입력해주세요'
                placeholder_color='#DFDFDF'
                name='phone'
                value={phone}
                _onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />

              <Grid
                bg='#FFFFFF'
                width='100%'
                padding='16px'
                border='none'
                borderBottom='1px solid rgba(225, 225, 225, 0.5) '
                boxSizing='border-box'
                height='auto'>
                <input
                  placeholder='주소 (클릭해주세요)'
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
                height='auto'
                is_flex
                padding='12px 16px'
                alignItems='center'
                borderBottom='1px solid rgba(225, 225, 225, 0.5) '>
                <Text margin='0' bold width='100%'>
                  가족관계
                </Text>
                <Grid
                  display='flex'
                  alignItems='center'
                  justifyContent='center'>
                  <Text margin='0' bold>
                    혼자
                  </Text>
                  <Slider _onClick={checkFamily} />
                  <Text margin='0' bold>
                    가족
                  </Text>
                </Grid>
              </Grid>
              <Grid
                height='auto'
                is_flex
                padding='12px 16px'
                alignItems='center'
                borderBottom='1px solid rgba(225, 225, 225, 0.5) '>
                <Text margin='0' bold width='100%'>
                  반려동물을 키워본 경험
                </Text>
                <Grid
                  display='flex'
                  alignItems='center'
                  justifyContent='center'>
                  <Text margin='0' bold>
                    있음
                  </Text>
                  <Slider _onClick={checkExperience} />
                  <Text margin='0' bold>
                    없음
                  </Text>
                </Grid>
              </Grid>
              <Input
                bg='#FFFFFF'
                width='100%'
                border='none'
                border_bottom='1px solid rgba(225, 225, 225, 0.5) '
                padding='16px'
                box-sizing
                placeholder='현재키우는 반려동물이 있나요?'
                placeholder_color='#DFDFDF'
                name='currnetPet'
                value={currnetPet}
                _onChange={(e) => {
                  setCurrnetPet(e.target.value);
                }}
              />
              <Input
                bg='#FFFFFF'
                width='100%'
                border='none'
                border_bottom='1px solid rgba(225, 225, 225, 0.5) '
                padding='16px'
                box-sizing
                placeholder='같이 있을 수 있는 시간은 얼마나되나요??'
                placeholder_color='#DFDFDF'
                name='timeTogether'
                value={timeTogether}
                _onChange={(e) => {
                  setTimeTogether(e.target.value);
                }}
              />

              <Input
                bg='#FFFFFF'
                width='100%'
                border='none'
                border_bottom='1px solid rgba(225, 225, 225, 0.5) '
                padding='16px'
                box-sizing
                placeholder='반려동물이 분리불안이 있다면 어떻게하실예정인가요?'
                placeholder_color='#DFDFDF'
                name='anxiety'
                value={anxiety}
                _onChange={(e) => {
                  setAnxiety(e.target.value);
                }}
              />
              <Input
                bg='#FFFFFF'
                width='100%'
                border='none'
                border_bottom='1px solid rgba(225, 225, 225, 0.5) '
                padding='16px'
                box-sizing
                placeholder='짖어서 민원이 들어오면 어떻게 하시껀가요?'
                placeholder_color='#DFDFDF'
                name='bark'
                value={bark}
                _onChange={(e) => {
                  setBark(e.target.value);
                }}
              />
              <Upload2 ref={sampleRef} setRoomUrl={setRoomUrl}></Upload2>
            </Grid>
          ) : (
            ' '
          )}
          <Grid
            is_flex
            height='auto'
            margin='0 0 18px 0'
            alignItems='center'
            _onClick={openPosterReason}>
            <Text size='20px' weight='700' width='800px'>
              입양사유 입력
            </Text>
            <Grid width='100px' display='flex' justifyContent='flex-end'>
              <FontAwesomeIcon icon={faSortDown} color='black' fontSize='1x' />
            </Grid>
          </Grid>

          {reasonToggle ? (
            <Grid
              boxSizing='border-box'
              display='flex'
              justifyContent='center'
              alignItems='center'
              height='250px'>
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
          ) : (
            ''
          )}
        </Grid>

        <Grid display='flex' justifyContent='center'>
          <Grid
            position='fixed'
            margin='auto'
            bg='#FF6666'
            width='144px'
            height='50px'
            borderRadius='25px'
            display='flex'
            justifyContent='center'
            alignItems='center'
            top='90px'
            boxShadow='1px 1px 5px rgba(0, 0, 0, 0.5)'>
            <Text color='white' _onClick={applyPoster}>
              입양 신청하기
            </Text>
          </Grid>
        </Grid>
        {/* <Footer></Footer> */}
      </Grid>
    </React.Fragment>
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

export default Modal2;
