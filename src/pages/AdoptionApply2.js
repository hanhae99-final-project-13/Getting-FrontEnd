import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { applyActions as useActions } from '../redux/modules/apply';
import Slider from '../components/Slider';
import Upload3 from '../components/adoptionApplycation/Upload3';
import ApplyProgressBar2 from '../components/adoptionApplycation/ApplyProgressBar2';
import AdoptionApplyCheckModal from '../components/adoptionApplycation/AdoptionApplyCheckModal';

import styled from 'styled-components';
import { Grid, Text } from '../elements';
import Swal from 'sweetalert2';
import { ErrorAlert2, SuccessAlert2 } from '../shared/Alerts';

const AdoptionApply2 = (props) => {
  const { history } = props;
  const dispatch = useDispatch();
  const postId = useParams().id;
  // console.log(postId, '입양신청서2번 id');
  const token = document.cookie.includes('USER_TOKEN');
  const isLogin = useSelector((state) => state.user?.user.isLogin);

  // 입양신청 모달
  const [openApplyAlert, setOpenApplyAlert] = useState(false);
  const closeApplyAlert = () => {
    setOpenApplyAlert(!openApplyAlert);
  };

  //Upload3에 있는 s3업로드 함수 가져온것
  const imageRef = useRef();
  // console.log(imageRef.current);

  // 입력 값 state
  const [allergy, setAllergy] = React.useState('증상있음');
  const [experience, setExperience] = React.useState('');
  const [timeTogether, setTimeTogether] = React.useState('');
  const [anxiety, setAnxiety] = React.useState('');
  const [bark, setBark] = React.useState('');
  const [roomUrl, setRoomUrl] = React.useState('');
  const [previewImage, setPreviewImage] = useState('');

  // 알러지 체크함수
  const [check, setCheck] = useState(false);
  const handleallergy = () => {
    setCheck(!check);
    if (check === false) {
      setAllergy('증상없음');
    } else setAllergy('증상있음');
  };

  //입양 신청버튼
  const applyClick = () => {
    const apply1Data = JSON.parse(window.sessionStorage.getItem('length'));
    const apply2Data = JSON.parse(window.sessionStorage.getItem('length2'));
    const TotalData = { ...apply1Data, ...apply2Data };
    const DbData = (({ check, click, preview, ...o }) => o)(TotalData);
    console.log(DbData, '서버 전달 데이터');
    const info = Object.values(DbData);
    console.log(info, '입력안된 질문확인용');

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
    const DbData = (({ check, click, preview, ...o }) => o)(TotalData);
    imageRef.current.upload();
    dispatch(useActions.addApplyDB(postId, DbData));
    SuccessAlert2(
      '입양신청이 완료되었습니다!<br/>임보자님의 연락을 기다려주세요',
    );
    history.push('/main');
    window.sessionStorage.clear();
  };

  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem('length2'));
    console.log(data);

    const {
      allergy,
      experience,
      timeTogether,
      anxiety,
      bark,
      check,
      roomUrl,
      preview,
    } = data;
    setAllergy(allergy);
    setExperience(experience);
    setTimeTogether(timeTogether);
    setAnxiety(anxiety);
    setBark(bark);
    setRoomUrl(roomUrl);
    setCheck(check);
    setPreviewImage(preview);
  }, []);

  useEffect(() => {
    sessionStorage.setItem(
      'length2',
      JSON.stringify({
        allergy: allergy,
        experience: experience,
        timeTogether: timeTogether,
        anxiety: anxiety,
        bark: bark,
        check: check,
        roomUrl: roomUrl,
        preview: previewImage,
      }),
    );
  }, [
    allergy,
    experience,
    timeTogether,
    anxiety,
    bark,
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
      padding='0 35px'
    >
      <Grid
        cusor='pointer'
        _onClick={() => {
          history.goBack();
          window.scrollTo(0, 0);
        }}
        position='relative'
        top='65px'
        left='0px'
        width='25px'
        height='25px'
      >
        <Grid width='12px' height='7px'>
          <img src={process.env.PUBLIC_URL + '/img/icon/back_icon.svg'} />
        </Grid>
      </Grid>

      <Grid boxSizing='border-box' margin='100px auto 0'>
        <ApplyProgressBar2 />
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
                color={allergy === '증상있음' ? '#000000' : '#E7E5E5'}
                bold
                margin='0 7px 0 0'
              >
                증상있음
              </Text>
              <Slider
                data={allergy}
                valueCheck={check}
                handleToggle={handleallergy}
              />
              <Text
                color={allergy === '증상없음' ? '#000000' : '#E7E5E5'}
                bold
                margin='0  0 0 7px'
              >
                증상없음
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

          <Grid boxSizing='border-box' height='330px'>
            <Grid margin='18px 0 18px 0 ' height='auto'>
              <Text margin='0' bold line_height='24px'>
                아이가 <span style={{ fontWeight: '800' }}>지내게 될 곳</span>을
                사진 찍어 첨부해주세요.
              </Text>
            </Grid>
            <Upload3
              ref={imageRef}
              roomUrl={roomUrl}
              setRoomUrl={setRoomUrl}
              preview={previewImage}
              setPreview={setPreviewImage}
            ></Upload3>
          </Grid>

          <Grid height='auto' margin='23px auto' cusor='pointer'>
            <Grid
              margin='auto'
              bg='#FE7968'
              width='157px'
              height='52px'
              borderRadius='26px'
              display='flex'
              justifyContent='center'
              alignItems='center'
              boxShadow='1px 1px 5px rgba(0, 0, 0, 0.5)'
              _onClick={applyClick}
            >
              <Text margin='0' color='white' weight='800'>
                입양 신청 보내기
              </Text>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* apply 신청 정말 할꺼니?  */}
      {openApplyAlert ? (
        <AdoptionApplyCheckModal
          closeModal={closeApplyAlert}
          realApply={realApply}
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
