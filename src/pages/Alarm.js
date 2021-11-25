import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import { Grid, Text, Image } from '../elements/index';
import { postActions } from '../redux/modules/post';
import { actionCreators } from '../redux/modules/user';
import { history } from '../redux/configureStore';
const Alarm = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.user.userInfo);
  const newAlarmCount = userInfo.alarmContent.filter(
    (alarmContent) => alarmContent.checked === true,
  ).length;
  const token = document.cookie.includes('USER_TOKEN');
  const [deleteModal, setDeleteModal] = React.useState(false);
  const delModaltoggle = () => {
    setDeleteModal(!deleteModal);
  };
  const deleteList = () => {
    if (token) {
      dispatch(actionCreators.deleteAlarmToAxios());
      setDeleteModal(!deleteModal);
    }
    return;
  };
  const createdAt = new Date();
  const alarmTime = () => {
    const milliSeconds = new Date() - createdAt;
    const seconds = milliSeconds / 1000;
    if (seconds < 60) return `방금 전`;

    const minutes = seconds / 60;
    if (minutes < 60) return `${Math.floor(minutes)}분 전`;

    const hours = minutes / 60;
    if (hours < 24) return `${Math.floor(hours)}시간 전`;

    const days = hours / 24;
    if (days < 7) return `${Math.floor(days)}일 전`;

    const weeks = days / 7;
    if (weeks < 5) return `${Math.floor(weeks)}주 전`;

    const months = days / 30;
    if (months < 12) return `${Math.floor(months)}개월 전`;

    const years = days / 365;
    return `${Math.floor(years)}년 전`;
  };
  React.useEffect(() => {
    dispatch(postActions.getMyPostsMW());
    setTimeout(() => {
      dispatch(actionCreators.loadAlarmListToAxios());
    }, 10);
  }, []);

  return (
    <>
      <Header></Header>
      <Grid maxWidth='414px' margin='50px auto 0'>
        <Grid padding='0 35px' boxSizing='border-box' margin='10px 0'>
          <Grid display='flex' justifyContent='center' alignItems='center'>
            <Text size='20px' weight='800'>
              알림
            </Text>
          </Grid>

          <Grid
            display='flex'
            width='auto'
            padding='0 5px'
            justifyContent='space-between'
            alignItems='center'
          >
            <Text size='12px'>
              새로운 알림{' '}
              <span style={{ color: 'red', fontSize: '12px' }}>
                {newAlarmCount}
              </span>
              개
            </Text>
            <button
              style={{
                all: 'unset',
                fontSize: '12px',
              }}
              onClick={() => {
                delModaltoggle();
              }}
            >
              전체삭제{' '}
            </button>
          </Grid>
          {userInfo.alarmContent.length === 0 ? (
            <>
              <Grid display='flex' justifyContent='center' alignItems='center'>
                <Grid
                  width='250px'
                  height='250px'
                  margin='70px 0 30px 0'
                  bg='white'
                  borderRadius='200px'
                  color='black'
                  boxShadow='4px 4px 20px rgba(0, 0, 0, 0.1)'
                >
                  <Image
                    style={{}}
                    src={
                      process.env.PUBLIC_URL +
                      '/img/GUIicon/warning_dog_icon.svg'
                    }
                    size='250'
                  />
                </Grid>
              </Grid>
              <Grid display='flex' justifyContent='center' margin='10px 0'>
                <Text size='20px'>
                  <span style={{ fontWeight: '800', fontSize: '20px' }}>
                    최근 알림
                  </span>
                  이 없습니다!
                </Text>
              </Grid>
            </>
          ) : (
            <>
              {userInfo.alarmContent &&
                userInfo.alarmContent.map((alarm, i) => {
                  return (
                    <>
                      {alarm.checked === true ? (
                        <Grid
                          position='relative'
                          top='10px'
                          left='10px'
                          width='10px'
                          height='10px'
                          bg='#FE7968'
                          borderRadius='5px'
                        ></Grid>
                      ) : (
                        <Grid height='10px'></Grid>
                      )}
                      <Grid
                        bg='white'
                        height='60px'
                        padding='10px 10px'
                        borderRadius='15px'
                        width='auto'
                        display='flex'
                        alignItems='center'
                        margin='5px 0'
                        boxShadow='4px 4px 10px 0px rgba(0, 0, 0, 0.1)'
                        _onClick={() => {
                          dispatch(
                            actionCreators.isReadAlarmToAxios(alarm.alarmId),
                          );
                          console.log(alarm);
                          if (alarm.alarmType === 'COMMENT') {
                            history.push(`/detail/${alarm.postId}`);
                          }
                          if (alarm.alarmType === 'FOSTER_FORM') {
                            history.push(`/takeapply/${alarm.contentId}`);
                          }
                        }}
                      >
                        <Grid
                          bg='#E8E8E8'
                          width='36px'
                          height='36px'
                          borderRadius='25px'
                          display='flex'
                          justifyContent='center'
                          alignItems='center'
                        >
                          {alarm.alarmType === 'SIGN_UP' ? (
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                '/img/icon/signup_icon.svg'
                              }
                            />
                          ) : alarm.alarmType === 'COMMENT' ? (
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                '/img/icon/comment_icon.svg'
                              }
                            />
                          ) : (
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                '/img/icon/refuse_icon.svg'
                              }
                            />
                          )}
                        </Grid>
                        <Grid
                          display='flex'
                          flexDirection='column'
                          boxSizing='border-box'
                          margin='0 0 0 10px'
                          width='78%'
                        >
                          <Grid fontSize='10px' color='darkgrey'>
                            {alarmTime(alarm.createdAt)}
                            {/* {alarm.createdAt.split('.')[0]} */}
                          </Grid>
                          <Grid fontSize='12px' fontWeight='800'>
                            {alarm.alarmContent}
                          </Grid>
                          <Grid display='flex'>
                            {alarm.alarmType === 'COMMENT' ? (
                              <>
                                <span
                                  style={{
                                    fontSize: '10px',
                                    color: 'darkgray',
                                  }}
                                >
                                  "
                                </span>
                                <span
                                  style={{
                                    fontSize: '10px',
                                    height: '100%',
                                    color: 'darkgray',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                  }}
                                >
                                  {alarm.comment}
                                </span>
                                <span
                                  style={{
                                    fontSize: '10px',
                                    color: 'darkgray',
                                  }}
                                >
                                  "
                                </span>
                              </>
                            ) : alarm.alarmType === 'SIGN_UP' ? (
                              <span
                                style={{ fontSize: '10px', color: 'darkgray' }}
                              >
                                개팅에 오신 것을 환영합니다!
                              </span>
                            ) : alarm.alarmType === 'FOSTER_FORM' ? (
                              <span
                                style={{ fontSize: '10px', color: 'darkgray' }}
                              >
                                마이페이지 > 입양 관리 > 받은 입양 신청 탭에서
                                확인하세요!
                              </span>
                            ) : null}
                          </Grid>
                        </Grid>
                      </Grid>
                    </>
                  );
                })}
            </>
          )}
        </Grid>

        {/* 전체삭제 모달 */}
        {deleteModal ? (
          <div
            style={{
              width: '375px',
              backgroundColor: 'white',
              position: 'fixed',
              bottom: '0',
              borderTopLeftRadius: '15px',
              borderTopRightRadius: '15px',
              height: '265px',
              boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.1)',
              zIndex: '2',
            }}
          >
            <Grid
              display='flex'
              justifyContent='center'
              alignItems='center'
              height='150px'
            >
              <img
                src={process.env.PUBLIC_URL + '/img/GUIicon/warning_icon.svg'}
                style={{ width: '75px' }}
              />
            </Grid>
            <Grid
              display='flex'
              justifyContent='center'
              alignItems='center'
              height='10px'
            >
              모든 알림이 삭제됩니다. 그래도 괜찮으신가요?
            </Grid>
            <Grid
              display='flex'
              alignItems='center'
              justifyContent='center'
              height='100px'
            >
              <button
                style={{
                  all: 'unset',
                  width: '130px',
                  margin: '0 5px',
                  padding: '0 10px',
                  height: '40px',
                  borderRadius: '20px',
                  backgroundColor: '#FFD3D3',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'white',
                }}
                onClick={() => {
                  delModaltoggle();
                }}
              >
                다시 생각해볼게요
              </button>
              <button
                style={{
                  all: 'unset',
                  width: '130px',
                  margin: '0 5px',
                  padding: '0 10px',
                  height: '40px',
                  borderRadius: '20px',
                  backgroundColor: '#FF7878',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'white',
                }}
                onClick={() => {
                  deleteList();
                }}
              >
                네, 삭제할게요
              </button>
            </Grid>
          </div>
        ) : null}
      </Grid>
    </>
  );
};

export default Alarm;
