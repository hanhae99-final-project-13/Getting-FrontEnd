import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import { Grid, Text, Image } from '../elements/index';
import { actionCreators } from '../redux/modules/user';
const Alarm = () => {
  const dispatch = useDispatch();
  const alarmCount = useSelector(
    (state) => state.user.user.userInfo.alarmCount,
  );
  const userInfo = useSelector((state) => state.user.user.userInfo);
  console.log(userInfo);
  const [deleteModal, setDeleteModal] = React.useState(false);
  const delModaltoggle = () => {
    setDeleteModal(!deleteModal);
  };
  const deleteList = () => {
    dispatch(actionCreators.deleteAlarmToAxios());
  };
  React.useEffect(() => {
    dispatch(actionCreators.loadAlarmListToAxios());
  }, []);

  return (
    <>
      <Grid width='375px' margin='0 auto'>
        <Grid padding='35px' boxSizing='border-box' margin='10px 0'>
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
                {alarmCount}
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
          {/* 삼항을 알람컨텐츠 렝스로 해야할듯 */}
          {userInfo.alarmContent.length === 0 ? (
            <>
              <Grid display='flex' justifyContent='center' alignItems='center'>
                <Grid
                  width='260px'
                  height='260px'
                  margin='70px 0 30px 0'
                  bg='white'
                  borderRadius='200px'
                  color='black'
                  boxShadow='4px 4px 20px rgba(0, 0, 0, 0.1)'
                >
                  <img
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '200px',
                      objectFit: 'cover',
                    }}
                    src='https://w.namu.la/s/4c9edd1a4c1cf019e364ad3b684c8e6537f834527ee6fb94dd9853b506a7163d1a0150c52864ef19d322cf5fa17bd5b1dd7e7db063889d4a832cb4c8784712fdaa65557a38e9eac3afa50a862472f273df9b2906cfbc0f84d324476519b424d7'
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
              {userInfo.alarmContent.map((a) => {
                console.log(a);
                return (
                  <Grid
                    bg='white'
                    height='60px'
                    padding='10px 5px'
                    borderRadius='15px'
                    width='auto'
                    display='flex'
                    alignItems='center'
                    margin='15px 0'
                    boxShadow='4px 4px 10px 0px rgba(0, 0, 0, 0.1)'
                  >
                    <Image margin='0 10px' size='50' />
                    <Grid
                      display='flex'
                      flexDirection='column'
                      boxSizing='border-box'
                    >
                      <Grid fontSize='12px' color='darkgrey'>
                        {'30분'} 전
                      </Grid>
                      <Grid>
                        {userInfo.nickname}님, {a.alarmContent}
                      </Grid>
                      <Grid fontSize='12px' color='darkgrey'>
                        {'랜덤메세지 뭐시깽이'}
                      </Grid>
                    </Grid>
                  </Grid>
                );
              })}
            </>
          )}
        </Grid>

        {/* 알람없을때 화면 */}

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
            }}
          >
            <Grid
              display='flex'
              justifyContent='center'
              alignItems='center'
              height='120px'
            >
              이미지 넣을 곳
            </Grid>
            <Grid
              display='flex'
              justifyContent='center'
              alignItems='center'
              height='10px'
            >
              {' '}
              모든 알림이 삭제됩니다. 그래도 괜찮으신가요?
            </Grid>
            <Grid
              display='flex'
              alignItems='center'
              justifyContent='center'
              height='150px'
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
