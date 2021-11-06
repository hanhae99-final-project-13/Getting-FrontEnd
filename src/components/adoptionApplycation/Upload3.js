import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { Grid, Text } from '../../elements';

import '../../shared/App.css';
import AWS from 'aws-sdk';

const Upload3 = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    upload,
  }));

  const { setRoomUrl } = props;

  // s3 연결
  AWS.config.update({
    region: 'ap-northeast-2', // 버킷이 존재하는 리전을 문자열로 입력합니다. (Ex. "ap-northeast-2")
    credentials: new AWS.CognitoIdentityCredentials({
      IdentityPoolId: 'ap-northeast-2:1adaddbf-fd10-4925-bd1e-45188fd5188f', // cognito 인증 풀에서 받아온 키를 문자열로 입력합니다. (Ex. "ap-northeast-2...")
    }),
  });
  // s3업로드 이미지
  const [uploadImage, setUploadImage] = useState('');
  const [uploadImageFullname, setUploadImageFullname] = useState('');

  // 사진 s3 업로드 함수
  const upload = () => {
    const upload = new AWS.S3.ManagedUpload({
      params: {
        Bucket: 'gceebucket',
        Key: uploadImageFullname,
        Body: uploadImage,
      },
    });
    const promise = upload.promise();
    promise.then(
      function (data) {
        console.log('이미지 업로드에 성공했습니다.');
      },
      function (err) {
        return console.log('오류가 발생했습니다.', err.message);
      },
    );
  };

  //이미지 미리보기
  const [previewImage, setPreviewImage] = useState('');

  //이미지 미리보기 삭제
  const deletePrevieImage = () => {
    URL.revokeObjectURL(previewImage);
    setPreviewImage('');
  };

  // 이미지 핸들 함수
  const handleImage = (e) => {
    console.log(e.target.files[0]);
    if (e.target.files[0] === undefined) {
      return;
    }
    const imagefile = e.target.files[0];
    setUploadImage(imagefile);
    const imagefullname = e.target.files[0].name;
    setUploadImageFullname(imagefullname);

    const reader = new FileReader();
    reader.readAsDataURL(imagefile);
    reader.onloadend = () => {
      // console.log(reader.result);
      //미리보기이미지
      setPreviewImage(reader.result);
    };
    //우리서버에 보낼 데이터
    setRoomUrl(
      `https://gceebucket.s3.ap-northeast-2.amazonaws.com/${imagefullname}`,
    );
  };

  return (
    <Grid>
      <input
        type='file'
        id='file'
        style={{ display: 'none' }}
        capture='camera'
        accept='image/*'
        onChange={handleImage}
      />
      <label htmlFor='file'>
        <Grid
          display='flex'
          justifyContent='center'
          alignItems='center'
          width='305px'
          height='58px'
          bg='#C8C8C8'
          borderRadius='11px'
          color='white'>
          사진 첨부하기
        </Grid>
      </label>

      {previewImage ? (
        <Grid
          position='realtive'
          bg='white'
          width='200px'
          height='200px'
          borderRadius='10px'
          margin='20px auto'
          boxSizing='border-box'
          boxShadow='4px 4px 20px 0px rgba(0, 0, 0, 0.1)'
          display='flex'
          justifyContent='center'
          alignItems='center'>
          <button
            onClick={deletePrevieImage}
            style={{
              all: 'unset',
              position: 'relative',
              bottom: '80px',
              left: '180px',
              fontSize: '20px',
            }}>
            x
          </button>
          <img
            src={previewImage}
            style={{
              padding: '0 10px 0 0',
              width: '180px',
              height: '180px',
              objectFit: 'contain',
            }}></img>
        </Grid>
      ) : (
        <Grid
          position='realtive'
          bg='white'
          width='200px'
          height='200px'
          borderRadius='10px'
          margin='20px auto'
          boxSizing='border-box'
          boxShadow='4px 4px 20px 0px rgba(0, 0, 0, 0.1)'
          display='flex'
          justifyContent='center'
          alignItems='center'>
          <img
            src='https://w7.pngwing.com/pngs/469/94/png-transparent-camera-logo-graphy-camera-text-camera-lens-rectangle.png'
            style={{
              width: '180px',
              height: '180px',
              objectFit: 'contain',
            }}></img>
        </Grid>
      )}
    </Grid>
  );
});

export default Upload3;
