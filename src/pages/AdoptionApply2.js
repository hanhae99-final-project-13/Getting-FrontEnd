import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

import { Grid, Input, Text } from '../elements';
import { ErrorAlert2, SuccessAlert2 } from '../shared/Alerts';
import { applyActions as useActions } from '../redux/modules/apply';
import Slider from '../components/Slider';
import Upload2 from '../components/adoptionApplycation/Upload2';
import Upload3 from '../components/adoptionApplycation/Upload3';
import ApplyProgressBar2 from '../components/adoptionApplycation/ApplyProgressBar2';
import ReCheckModal from '../components/adoptionApplycation/ReCheckModal';

import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const AdoptionApply2 = (props) => {
  const { history } = props;
  const dispatch = useDispatch();
  const postId = useParams().id;
  // console.log(postId, '입양신청서2번 id');
  const token = localStorage.getItem('USER_TOKEN');
  const isLogin = useSelector((state) => state.user?.user.isLogin);
  //Upload2에 있는 s3업로드 함수 가져온것 (지내게 될 곳)
  const imageRef2 = useRef();
  //Upload3에 있는 s3업로드 함수 가져온것 (지내게 될 곳)
  const imageRef = useRef();
  // console.log(imageRef.current);

  // 입력 값 state
  const [allergy, setAllergy] = React.useState('증상있음');
  const [experience, setExperience] = React.useState('');
  const [timeTogether, setTimeTogether] = React.useState('');
  const [leaveHome, setLeaveHome] = React.useState('');
  const [medicalBudget, setMedicalBuget] = React.useState('');
  const [monthlyBudget, setMonthlyBuget] = React.useState('');
  const [anxiety, setAnxiety] = React.useState('');
  const [bark, setBark] = React.useState('');
  const [etc, setEtc] = React.useState('');
  const [signUrl, setSignUrl] = React.useState('');
  const [signPreviewImage, setSignPreviewImage] = useState('');
  const [roomUrl, setRoomUrl] = React.useState('');
  const [previewImage, setPreviewImage] = useState('');

  const [openApplyAlert, setOpenApplyAlert] = useState(false);
  const [check, setCheck] = useState(false);

  // 입양신청 모달
  const closeApplyAlert = () => {
    setOpenApplyAlert(!openApplyAlert);
  };

  // 알러지 체크함수
  const handleallergy = () => {
    setCheck(!check);
    if (check === false) {
      setAllergy('증상없음');
    } else setAllergy('증상있음');
  };

  const handleallergyNo = () => {
    setCheck(true);
    setAllergy('증상없음');
  };
  const handleallergyYes = () => {
    setCheck(false);
    setAllergy('증상있음');
  };

  //입양 신청버튼
  const applyClick = () => {
    const apply1Data = JSON.parse(window.sessionStorage.getItem('length'));
    const apply2Data = JSON.parse(window.sessionStorage.getItem('length2'));
    const TotalData = { ...apply1Data, ...apply2Data };
    const DbData = (({ check, click, roomPreview, signPreview, ...o }) => o)(
      TotalData,
    );
    console.log(DbData, '서버 전달 데이터');
    const info = Object.values(DbData);

    if (info.includes('') === true) {
      ErrorAlert2(
        '정보를 모두 입력해주셔야합니다. <br/>(사진첨부 필수)',
        'bottom',
      );
      return;
    }
    setOpenApplyAlert(!openApplyAlert);
  };

  //real 신청버튼
  const realApply = () => {
    const apply1Data = JSON.parse(window.sessionStorage.getItem('length'));
    const apply2Data = JSON.parse(window.sessionStorage.getItem('length2'));
    const TotalData = { ...apply1Data, ...apply2Data };
    const DbData = (({ check, click, roomPreview, signPreview, ...o }) => o)(
      TotalData,
    );
    imageRef.current.upload();
    imageRef2.current.upload();
    dispatch(useActions.addApplyDB(postId, DbData));
    SuccessAlert2(
      '입양신청이 완료되었습니다!<br/>임보자님의 연락을 기다려주세요',
    );
    history.push('/main');
    window.sessionStorage.clear();
  };

  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem('length2'));

    const {
      allergy,
      experience,
      timeTogether,
      leaveHome,
      medicalBudget,
      monthlyBudget,
      anxiety,
      bark,
      check,
      etc,
      signPreview,
      signUrl,
      roomUrl,
      roomPreview,
    } = data;
    setAllergy(allergy);
    setExperience(experience);
    setTimeTogether(timeTogether);
    setLeaveHome(leaveHome);
    setMedicalBuget(medicalBudget);
    setMonthlyBuget(monthlyBudget);
    setAnxiety(anxiety);
    setBark(bark);
    setEtc(etc);
    setSignPreviewImage(signPreview);
    setSignUrl(signUrl);
    setPreviewImage(roomPreview);
    setRoomUrl(roomUrl);
    setCheck(check);
  }, []);

  useEffect(() => {
    sessionStorage.setItem(
      'length2',
      JSON.stringify({
        allergy: allergy,
        experience: experience,
        timeTogether: timeTogether,
        leaveHome: leaveHome,
        medicalBudget: medicalBudget,
        monthlyBudget: monthlyBudget,
        anxiety: anxiety,
        bark: bark,
        etc: etc,
        signPreview: signPreviewImage,
        signUrl: signUrl,
        roomUrl: roomUrl,
        roomPreview: previewImage,
        check: check,
      }),
    );
  }, [
    allergy,
    experience,
    timeTogether,
    leaveHome,
    medicalBudget,
    monthlyBudget,
    anxiety,
    bark,
    etc,
    signPreviewImage,
    signUrl,
    check,
    roomUrl,
    previewImage,
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
        _onClick={() => {
          history.goBack();
          window.scrollTo(0, 0);
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

      <Grid margin='100px auto 0' boxSizing='border-box'>
        <ApplyProgressBar2 />
        <Grid>
          <Grid margin='30px 0 15px 0 '>
            <Text margin='0' weight='700' size='20px'>
              입양설문
            </Text>
          </Grid>

          <Grid
            height='118px'
            padding='13px 0px'
            borderTop='1px solid rgba(225, 225, 225, 0.5) '
            borderBottom='1px solid rgba(225, 225, 225, 0.5) '
            boxSizing='border-box'>
            <Grid height='auto'>
              <Text margin='0' weight='700' line_height='24px'>
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
              margin='12px 0 0 0'>
              <Text
                _onClick={handleallergyYes}
                margin='0 7px 0 0'
                color={allergy === '증상있음' ? '#000000' : '#E7E5E5'}
                weight='700'
                cursor='pointer'>
                증상있음
              </Text>
              <Slider
                handleToggle={handleallergy}
                data={allergy}
                valueCheck={check}
              />
              <Text
                _onClick={handleallergyNo}
                margin='0  0 0 7px'
                color={allergy === '증상없음' ? '#000000' : '#E7E5E5'}
                weight='700'
                cursor='pointer'>
                증상없음
              </Text>
            </Grid>
          </Grid>

          <Grid
            height='352px'
            borderBottom='1px solid rgba(225, 225, 225, 0.5) '
            boxSizing='border-box'>
            <Grid margin='11px 0 26px 0 ' height='auto'>
              <Text margin='0' weight='700' line_height='24px'>
                만약 <span style={{ fontWeight: '800' }}> 과거</span>에
                반려동물을 키워본 적이 있다면 <br />
                현재는 어떻게 되었나요?
              </Text>
            </Grid>

            <Grid display='flex' height='250px' boxSizing='border-box'>
              <Textarea
                onChange={(e) => {
                  setExperience(e.target.value);
                }}
                name='experience'
                value={experience}
                cols='40'
                rows='13'
                placeholder='500자 이하로 적어주세요'></Textarea>
            </Grid>
          </Grid>

          <Grid
            height='375px'
            borderBottom='1px solid rgba(225, 225, 225, 0.5)'
            boxSizing='border-box'>
            <Grid height='auto' margin='11px 0 26px 0 '>
              <Text margin='0' weight='700' line_height='24px'>
                반려동물과
                <span style={{ fontWeight: '800' }}>함께 할 수 있는 시간</span>
                을 알려주세요. <br />
                (반려동물이 집에 혼자 있는 시간, 반려동물과 함께 할 수 있는
                시간)
              </Text>
            </Grid>

            <Grid display='flex' height='250px' boxSizing='border-box'>
              <Textarea
                onChange={(e) => {
                  setTimeTogether(e.target.value);
                }}
                name='timeTogether'
                value={timeTogether}
                cols='40'
                rows='13'
                placeholder='500자 이하로 적어주세요'></Textarea>
            </Grid>
          </Grid>

          <Grid
            height='350px'
            borderBottom='1px solid rgba(225, 225, 225, 0.5)'
            boxSizing='border-box'>
            <Grid margin='11px 0 26px 0' height='auto'>
              <Text margin='0' weight='700' line_height='24px'>
                하루동안 불가피하게 집을 비우는 경우
                <br />
                반려동물을 어떻게 할 것인지 말씀해주세요
              </Text>
            </Grid>

            <Grid display='flex' height='250px' boxSizing='border-box'>
              <Textarea
                onChange={(e) => {
                  setLeaveHome(e.target.value);
                }}
                name='leaveHome'
                value={leaveHome}
                cols='40'
                rows='13'
                placeholder='500자 이하로 적어주세요'></Textarea>
            </Grid>
          </Grid>

          <Grid
            height='180px'
            boxSizing='border-box'
            borderBottom='1px solid rgba(225, 225, 225, 0.5)'>
            <Grid margin='30px 0 18px 0 ' height='auto'>
              <Text margin='0' weight='700' line_height='24px'>
                해당 카테고리의 예측되는 비용을 적어주세요.
              </Text>
            </Grid>

            <Grid is_flex height='auto'>
              <Grid
                maxWidth='200px'
                height='auto'
                padding='13px 0 0 5px'
                boxSizing='border-box'>
                <Text margin='0' weight='700'>
                  1년 동안의 예방접종 비용
                </Text>
              </Grid>

              <Grid
                display='flex'
                alignItems='center'
                maxWidth='120px'
                height='46px'
                margin='0 0 0 8px'
                padding='0 10px'
                bg='#F7F7F7'
                borderRadius='9px'
                boxSizing='border-box'>
                <Input
                  type='number'
                  _onChange={(e) => {
                    setMedicalBuget(e.target.value);
                  }}
                  name='medicalBudget'
                  value={medicalBudget}
                  padding='5px'
                  bg='#F7F7F7'
                  border='none'></Input>
                <Text margin='0' weight='700'>
                  원
                </Text>
              </Grid>
            </Grid>

            <Grid is_flex height='auto' margin='14px 0 0 0'>
              <Grid
                maxWidth='200px'
                height='auto'
                padding='13px 0 0 5px'
                boxSizing='border-box'>
                <Text margin='0' weight='700'>
                  1개월 동안의 양육비용
                </Text>
              </Grid>

              <Grid
                display='flex'
                alignItems='center'
                maxWidth='120px'
                height='46px'
                margin='0 0 0 8px'
                padding='0 10px'
                borderRadius='9px'
                bg='#F7F7F7'
                boxSizing='border-box'>
                <Input
                  type='number'
                  _onChange={(e) => {
                    setMonthlyBuget(e.target.value);
                  }}
                  name='monthlyBudget'
                  value={monthlyBudget}
                  padding='5px'
                  bg='#F7F7F7'
                  border='none'></Input>
                <Text margin='0' weight='700'>
                  원
                </Text>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            height='362px'
            borderBottom='1px solid rgba(225, 225, 225, 0.5) '
            boxSizing='border-box'>
            <Grid margin='11px 0 26px 0 ' height='auto'>
              <Text margin='0' weight='700' line_height='24px'>
                입양한 반려동물이
                <span style={{ fontWeight: '800' }}>분리불안</span>이 있다면
                <br />
                어떻게 하시겠어요?
              </Text>
            </Grid>

            <Grid display='flex' height='250px' boxSizing='border-box'>
              <Textarea
                onChange={(e) => {
                  setAnxiety(e.target.value);
                }}
                name='anxiety'
                value={anxiety}
                cols='40'
                rows='13'
                placeholder='500자 이하로 적어주세요'></Textarea>
            </Grid>
          </Grid>

          <Grid
            height='364px'
            borderBottom='1px solid rgba(225, 225, 225, 0.5) '
            boxSizing='border-box'>
            <Grid margin='11px 0 26px 0 ' height='auto'>
              <Text margin='0' weight='700' line_height='24px'>
                입양한{' '}
                <span style={{ fontWeight: '800' }}>반려동물이 짖음</span>이
                있어 주변에서 민원이 들어온다면 어떻게 하시겠어요?
              </Text>
            </Grid>

            <Grid display='flex' height='250px' boxSizing='border-box'>
              <Textarea
                onChange={(e) => {
                  setBark(e.target.value);
                }}
                name='bark'
                value={bark}
                cols='40'
                rows='13'
                placeholder='500자 이하로 적어주세요'></Textarea>
            </Grid>
          </Grid>

          <Grid
            height='364px'
            borderBottom='1px solid rgba(225, 225, 225, 0.5) '
            boxSizing='border-box'>
            <Grid margin='11px 0 26px 0 ' height='auto'>
              <Text margin='0' weight='700' line_height='24px'>
                그 외, 하고 싶은 말씀이 있으시다면 적어주세요.
              </Text>
            </Grid>

            <Grid display='flex' height='250px' boxSizing='border-box'>
              <Textarea
                onChange={(e) => {
                  setEtc(e.target.value);
                }}
                name='bark'
                value={etc}
                cols='40'
                rows='13'
                placeholder='500자 이하로 적어주세요'></Textarea>
            </Grid>
          </Grid>

          <Grid
            height='360px'
            borderBottom='1px solid rgba(225, 225, 225, 0.5) '
            boxSizing='border-box'>
            <Grid margin='18px 0 18px 0 ' height='auto'>
              <Text margin='0' weight='700' line_height='24px'>
                동거인들의 입양동의{' '}
                <span style={{ fontWeight: '800' }}>서명</span>을 찍어
                첨부해주세요.
                <br />
                (만약, 혼자 거주하신다면 입양 동의 서명을 찍어 첨부해주세요.)
              </Text>
            </Grid>
            <Upload2
              ref={imageRef2}
              setSignUrl={setSignUrl}
              signPreviewImage={signPreviewImage}
              setSignPreviewImage={setSignPreviewImage}></Upload2>
          </Grid>

          <Grid height='330px' boxSizing='border-box'>
            <Grid margin='18px 0 18px 0 ' height='auto'>
              <Text margin='0' weight='700' line_height='24px'>
                아이가 <span style={{ fontWeight: '800' }}>지내게 될 곳</span>을
                사진 찍어 첨부해주세요.
              </Text>
            </Grid>
            <Upload3
              ref={imageRef}
              setRoomUrl={setRoomUrl}
              previewImage={previewImage}
              setPreviewImage={setPreviewImage}></Upload3>
          </Grid>

          <Grid height='auto' margin='23px auto' cusor='pointer'>
            <Grid
              _onClick={applyClick}
              display='flex'
              justifyContent='center'
              alignItems='center'
              width='157px'
              height='52px'
              margin='auto'
              bg='#FE7968'
              borderRadius='26px'
              boxShadow='1px 1px 5px rgba(0, 0, 0, 0.5)'>
              <Text margin='0' color='white' weight='800'>
                입양 신청 보내기
              </Text>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* apply 신청 정말 할꺼니?  */}
      {openApplyAlert ? (
        <ReCheckModal
          closeModal={closeApplyAlert}
          clickTrue={realApply}
          text='작성한 입양신청서는 수정/삭제가 불가합니다. 
          <br/> 정말 이대로 제출하시겠습니까?'
          image='/img/GUIicon/warning_icon.svg'
          buttonTrueText='확인했습니다'
          buttonFalseText='다시 생각해볼게요'
        />
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
    color: #e7e5e5;
    font-weight: 700;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 4px #fe7968;
  }
`;

export default AdoptionApply2;
