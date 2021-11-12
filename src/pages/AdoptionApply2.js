import React, { useEffect, useState, useRef } from 'react';
import { Grid, Text, Input } from '../elements';

import Slider from '../components/Slider';
import Swal from 'sweetalert2';
import { ErrorAlert } from '../shared/Alerts';
import Upload3 from '../components/adoptionApplycation/Upload3';
import ApplyProgressBar from '../components/adoptionApplycation/ApplyProgressBar';

import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { applyActions as useActions } from '../redux/modules/apply';

import styled from 'styled-components';
import dokking_logo from '../images/doking_logo.jpg';

const AdoptionApply2 = (props) => {
  const { history } = props;
  const postId = useParams().id;
  // console.log(postId, '입양신청서2번 id');
  const [openApplyAlert, setOpenApplyAlert] = useState(false);

  const dispatch = useDispatch();
  const applyData = useSelector((state) => state.apply);
  // console.log(applyData, '입양신청 1번페이지 정보');

  //Upload3에 있는 s3업로드 함수 가져온것
  const imageRef = useRef();
  // console.log(imageRef.current);

  const [allergy, setAllergy] = React.useState('있음');
  const [experience, setExperience] = React.useState('');
  const [timeTogether, setTimeTogether] = React.useState('');
  const [anxiety, setAnxiety] = React.useState('');
  const [bark, setBark] = React.useState('');
  const [roomUrl, setRoomUrl] = React.useState('');

  // db에 전송할 데이터
  const data = {
    ...applyData.apply,
    allergy: allergy,
    experience: experience,
    timeTogether: timeTogether,
    anxiety: anxiety,
    bark: bark,
    roomUrl: roomUrl,
  };
  console.log(data);

  // 알러지 체크함수
  const [check, setCheck] = useState(true);
  const handleallergy = () => {
    setCheck(!check);
    if (check === true) {
      setAllergy('없음');
    } else setAllergy('있음');
  };

  //입양 신청버튼
  const applyClick = () => {
    const info = Object.values(data);
    // console.log(data, '서버에 넘어갈데이터');
    // console.log(info, 'object value');
    if (info.includes('') === true) {
      ErrorAlert('정보를 모두 입력해주셔야합니다.!', 'bottom');
      return;
    }
    setOpenApplyAlert(!openApplyAlert);
  };

  //real 신청버튼
  const realApply = () => {
    imageRef.current.upload();
    dispatch(useActions.addApplyDB(postId, data));
    Swal.fire(
      '입양신청이 완료되었습니다.',
      '임보자님의 연락을 기다려주세요!',
      'success',
    );
    history.push('/main');
    window.sessionStorage.clear();
  };

  return (
    <Grid width='375px' margin='80px auto 90px auto'>
      <Grid
        boxSizing='border-box'
        width='375px'
        margin='20px auto 0'
        padding='0 35px'
      >
        <ApplyProgressBar />
        <Grid>
          <Grid margin='30px 0 15px 0 '>
            <Text margin='0' weight='700' size='20px'>
              입양설문
            </Text>
          </Grid>

          <Grid
            padding='13px 0px'
            boxSizing='border-box'
            height='118px'
            borderTop='1px solid rgba(225, 225, 225, 0.5) '
            borderBottom='1px solid rgba(225, 225, 225, 0.5) '
          >
            <Grid height='auto'>
              <Text margin='0' bold line_height='24px'>
                가족 구성원 중
                <span style={{ fontWeight: '800' }}> 동물 알레르기 증상</span>이
                <br />
                있는 분이 있습니까?
              </Text>
            </Grid>
            <Grid
              display='flex'
              alignItems='center'
              height='auto'
              margin='12px 0 0 0'
            >
              <Text
                color={allergy === '있음' ? '#000000' : '#E1E1E1'}
                bold
                margin='0 7px 0 0'
              >
                있음
              </Text>
              <Slider handleToggle={handleallergy} />
              <Text
                color={allergy === '없음' ? '#000000' : '#E1E1E1'}
                bold
                margin='0  0 0 7px'
              >
                없음
              </Text>
            </Grid>
          </Grid>

          <Grid
            boxSizing='border-box'
            height='352px'
            borderBottom='1px solid rgba(225, 225, 225, 0.5) '
          >
            <Grid margin='11px 0 26px 0 ' height='auto'>
              <Text margin='0' bold line_height='24px'>
                만약 <span style={{ fontWeight: '800' }}> 과거</span>에
                반려동물을 키워본 적이 있다면 <br />
                현재는 어떻게 되었나요?
              </Text>
            </Grid>

            <Grid boxSizing='border-box' display='flex' height='250px'>
              <Textarea
                name='experience'
                value={experience}
                onChange={(e) => {
                  setExperience(e.target.value);
                }}
                cols='40'
                rows='13'
                placeholder='500자 이하로 적어주세요'
              ></Textarea>
            </Grid>
          </Grid>

          <Grid
            boxSizing='border-box'
            height='375px'
            borderBottom='1px solid rgba(225, 225, 225, 0.5) '
          >
            <Grid margin='11px 0 26px 0 ' height='auto'>
              <Text margin='0' bold line_height='24px'>
                반려동물과
                <span style={{ fontWeight: '800' }}>함께 할 수 있는 시간</span>
                을 알려주세요. <br />
                (반려동물이 집에 혼자 있는 시간, 반려동물과 함께 할 수 있는
                시간)
              </Text>
            </Grid>

            <Grid boxSizing='border-box' display='flex' height='250px'>
              <Textarea
                name='timeTogether'
                value={timeTogether}
                onChange={(e) => {
                  setTimeTogether(e.target.value);
                }}
                cols='40'
                rows='13'
                placeholder='500자 이하로 적어주세요'
              ></Textarea>
            </Grid>
          </Grid>

          <Grid
            boxSizing='border-box'
            height='362px'
            borderBottom='1px solid rgba(225, 225, 225, 0.5) '
          >
            <Grid margin='11px 0 26px 0 ' height='auto'>
              <Text margin='0' bold line_height='24px'>
                입양한 반려동물이
                <span style={{ fontWeight: '800' }}>분리불안</span>이 있다면
                <br />
                어떻게 하시겠어요?
              </Text>
            </Grid>

            <Grid boxSizing='border-box' display='flex' height='250px'>
              <Textarea
                name='anxiety'
                value={anxiety}
                onChange={(e) => {
                  setAnxiety(e.target.value);
                }}
                cols='40'
                rows='13'
                placeholder='500자 이하로 적어주세요'
              ></Textarea>
            </Grid>
          </Grid>

          <Grid
            boxSizing='border-box'
            height='364px'
            borderBottom='1px solid rgba(225, 225, 225, 0.5) '
          >
            <Grid margin='11px 0 26px 0 ' height='auto'>
              <Text margin='0' bold line_height='24px'>
                입양한{' '}
                <span style={{ fontWeight: '800' }}>반려동물이 짖음</span>이
                있어 주변에서 민원이 들어온다면 어떻게 하시겠어요?
              </Text>
            </Grid>

            <Grid boxSizing='border-box' display='flex' height='250px'>
              <Textarea
                name='bark'
                value={bark}
                onChange={(e) => {
                  setBark(e.target.value);
                }}
                cols='40'
                rows='13'
                placeholder='500자 이하로 적어주세요'
              ></Textarea>
            </Grid>
          </Grid>

          <Grid
            boxSizing='border-box'
            height='370px'
            borderBottom='1px solid rgba(225, 225, 225, 0.5) '
          >
            <Grid margin='18px 0 21px 0 ' height='auto'>
              <Text margin='0' bold line_height='24px'>
                아이가 <span style={{ fontWeight: '800' }}>지내게 될 곳</span>을
                사진 찍어 첨부해주세요.
              </Text>
            </Grid>
            <Upload3 ref={imageRef} setRoomUrl={setRoomUrl}></Upload3>
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
              _onClick={applyClick}
            >
              <Text margin='0' color='white'>
                입양신청하기
              </Text>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* apply 신청 정말 할꺼니?  */}
      {openApplyAlert ? (
        <Grid
          position='fixed'
          bg='#FFFFFF'
          bottom='250px'
          boxShadow='4px 4px 20px rgba(0, 0, 0, 0.1);'
          height='264px'
          width='375px'
          margin='35px auto'
          borderRadius='30px 30px 0 0'
          boxSizing='border-box'
          display='flex'
          flexDirection='column'
          alignItems='center'
          zIndex='9999'
        >
          <Grid
            margin='40.25px 0 0 0'
            width='60px'
            height='120px'
            bgisize='cover'
            bgiposition='center'
            bgi={dokking_logo}
          ></Grid>
          <Text
            margin='14.25px 0 0 0'
            align='center'
            line_height='21px'
            weight='600'
          >
            작성한 입양신청서는
            <span style={{ fontWeight: '800' }}> 수정/삭제가 불가합니다.</span>
            <br />
            정말 이대로 제출하시겠습니까?
          </Text>
          <Grid display='flex' justifyContent='center'>
            <Button
              margin='17px 10px 0 0'
              width='130px'
              size='14px'
              weight='600'
              height='40px'
              padding='12px 0px'
              bg='#FE7968'
              border='none'
              border_radius='34px'
              onClick={() => {
                setOpenApplyAlert(!openApplyAlert);
              }}
            >
              다시 생각해볼게요
            </Button>

            <Button
              margin='17px 0 0 10px'
              width='130px'
              size='14px'
              weight='600'
              height='40px'
              padding='12px 0px'
              bg='#FE7968'
              border='none'
              border_radius='34px'
              onClick={() => {
                realApply();
                setOpenApplyAlert(!openApplyAlert);
              }}
            >
              확인했습니다.
            </Button>
          </Grid>
        </Grid>
      ) : (
        ''
      )}
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

const Button = styled.button`
  border: ${(props) => props.border};
  border-radius: ${(props) => props.border_radius};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  background-color: ${(props) => props.bg};
  color: white;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
`;

export default AdoptionApply2;
