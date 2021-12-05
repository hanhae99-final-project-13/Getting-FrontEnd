import React, {
  forwardRef,
  useImperativeHandle,
  useState,
  useEffect,
} from 'react';

import '../../shared/App.css';
import AWS from 'aws-sdk';
import imageCompression from 'browser-image-compression';
import { useSelector } from 'react-redux';
import { Grid, Text } from '../../elements';

const Upload3 = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    upload,
  }));

  const { setRoomUrl, previewImage, setPreviewImage } = props;

  const token = localStorage.getItem('USER_TOKEN');
  const isLogin = useSelector((state) => state.user?.user.isLogin);

  // s3업로드 이미지
  const [uploadImage, setUploadImage] = useState('');
  const [uploadImageFullname, setUploadImageFullname] = useState('');

  // s3 연결
  AWS.config.update({
    region: 'ap-northeast-2', // 버킷이 존재하는 리전을 문자열로 입력합니다. (Ex. "ap-northeast-2")
    credentials: new AWS.CognitoIdentityCredentials({
      IdentityPoolId: 'ap-northeast-2:24a59675-7fac-4f78-81a7-3f87f75a70ff', // cognito 인증 풀에서 받아온 키를 문자열로 입력합니다. (Ex. "ap-northeast-2...")
    }),
  });

  // 사진 s3 업로드 함수
  const upload = () => {
    const upload = new AWS.S3.ManagedUpload({
      params: {
        Bucket: 'docking',
        Key: uploadImageFullname,
        Body: uploadImage,
      },
    });
    const promise = upload.promise();
    promise.then(
      function (data) {
        // return console.log('이미지 업로드성공2');
      },
      function (err) {
        // return console.log('오류가 발생했습니다.', err.message);
      },
    );
  };

  //이미지 미리보기 삭제
  const deletePrevieImage = () => {
    URL.revokeObjectURL(previewImage);
    setPreviewImage('');
    setRoomUrl('');
  };

  const actionImgCompress = async (fileSrc) => {
    const options = {
      maxSizeMB: 0.2,
      maxWidth: 414,
      maxHeight: 58,
      useWebWorker: true,
    };
    try {
      const compressFile = await imageCompression(fileSrc, options);
      // console.log(compressFile, '2번 압축');
      // e.target.files[0];
      setUploadImage(compressFile); // 서버에서 업로드하면 이걸 보내야함

      const imagefullname = fileSrc.name;
      setUploadImageFullname(imagefullname); // 서버에서 업로드하면 이것도 서버에서 알아서함

      // 파일리더에 이미지파일객체 넣어주면 이미지태그 src에 넣을 수 잇는 엄청 긴 값 받음
      const reader = new FileReader();
      reader.readAsDataURL(compressFile);
      reader.onloadend = () => {
        //미리보기이미지
        setPreviewImage(reader.result);
      };
      //우리서버에 보낼 데이터
      setRoomUrl(
        `https://docking.s3.ap-northeast-2.amazonaws.com/${imagefullname}`,
      );
    } catch (error) {
      console.log(error);
    }
  };

  // 이미지 핸들 함수
  const handleImage = (e) => {
    // console.log(e.target.files);
    // console.log(e.target.files[0]);
    if (e.target.files[0] === undefined) {
      return;
    }
    actionImgCompress(e.target.files[0]);
  };

  if (token && !isLogin) {
    return <div></div>;
  }

  return (
    <Grid>
      <input
        onChange={handleImage}
        type='file'
        id='file'
        style={{ display: 'none' }}
        accept='image/*'
      />
      <label htmlFor='file'>
        <Grid
          display='flex'
          justifyContent='center'
          alignItems='center'
          maxWidth='414px'
          width='auto'
          height='58px'
          cusor='pointer'
          weight='800'
          bg='#FFBE5B'
          borderRadius='11px'
          color='#FFFFFF'>
          사진 첨부하기
        </Grid>
      </label>

      {previewImage ? (
        <Grid
          position='relative'
          display='flex'
          justifyContent='center'
          alignItems='center'
          maxWidth='414px'
          width='auto'
          height='168px'
          margin='20px auto 0px'
          bg='white'
          borderRadius='10px'
          boxSizing='border-box'
          boxShadow='4px 4px 20px 0px rgba(0, 0, 0, 0.1)'>
          <button
            onClick={deletePrevieImage}
            style={{
              all: 'unset',
              position: 'absolute',
              top: '0px',
              right: '10px',
              fontSize: '20px',
              cursor: 'pointer',
            }}>
            x
          </button>
          <img
            src={previewImage}
            style={{
              maxWidth: '414px',
              width: '100%',
              height: '160px',
              objectFit: 'contain',
            }}></img>
        </Grid>
      ) : (
        <Grid
          position='relative'
          maxWidth='414px'
          width='auto'
          height='168px'
          bg=' rgba(255, 102, 102, 0.3);'
          borderRadius='12px'
          margin='20px auto 0px'
          boxSizing='border-box'
          boxShadow='4px 4px 20px 0px rgba(0, 0, 0, 0.1)'>
          <Grid position='absolute' top='0'>
            <Text margin='10px 0 0 10px' color='#FFFFFF' weight='700'>
              사진첨부 미리보기
            </Text>
          </Grid>

          <Grid
            display='flex'
            justifyContent='center'
            alignItems='center'
            width='auto'>
            <img
              src={process.env.PUBLIC_URL + '/img/icon/camera_icon_white.svg'}
              style={{
                width: '42px',
                height: '35px',
                objectFit: 'contain',
              }}></img>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
});

export default Upload3;
