import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { Grid, Text } from '../elements';
import '../shared/App.css';
import AWS from 'aws-sdk';

const Upload2 = forwardRef((props, ref) => {
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

  //이미지 미리보기
  const [images, setImages] = useState('');

  // 업로드용 url
  const [file, setFile] = useState('');
  const [fullname, setFullname] = useState('');

  // 삭제버튼

  const deleteFile = () => {
    URL.revokeObjectURL(images);
    setImages('');
    //   setImages(URL.createObjectURL(e.target.files[0])); reader대신 쓴 미리보기
  };

  // 사진 s3 업로드 함수
  const upload = () => {
    const upload = new AWS.S3.ManagedUpload({
      params: {
        Bucket: 'gceebucket',
        Key: fullname,
        Body: file,
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

  const handleFileInput = (e) => {
    const imagefile = e.target.files[0];
    setFile(imagefile);
    const imagefullName = e.target.files[0].name;
    setFullname(imagefullName);

    console.log(imagefile);
    console.log(imagefullName);

    const reader = new FileReader();
    reader.readAsDataURL(imagefile);
    reader.onloadend = () => {
      console.log(reader.result);
      setImages(reader.result);
    };
    setRoomUrl(
      `https://gceebucket.s3.ap-northeast-2.amazonaws.com/${imagefullName}`,
    );
  };

  return (
    <React.Fragment>
      <Grid padding='16px' width='auto'>
        <Text margin='0px'>반려동물이 지낼 곳을 올려주세요</Text>

        <Grid display='flex' overflowX='auto'>
          {images ? (
            <Grid
              bg='white'
              width='150px'
              height='150px'
              borderRadius='10px'
              margin='10px 30px 0 0'
              boxSizing='border-box'
              boxShadow='4px 4px 20px 0px rgba(0, 0, 0, 0.1)'
              display='flex'
              alignItems='center'
              justifyContent='center'>
              <button
                onClick={deleteFile}
                style={{
                  all: 'unset',
                  position: 'relative',
                  top: '-55px',
                  left: '135px',
                  fontSize: '20px',
                }}>
                x
              </button>

              <img
                src={images}
                style={{
                  padding: '0px 15px 0 0',
                  width: '140px',
                  height: '140px',
                  objectFit: 'contain',
                }}></img>
            </Grid>
          ) : (
            <Grid
              bg='white'
              width='150px'
              height='150px'
              borderRadius='10px'
              margin='10px 30px 0 0'
              boxSizing='border-box'
              boxShadow='4px 4px 20px 0px rgba(0, 0, 0, 0.1)'
              // display='flex'
              // alignItems='center'
              // justifyContent='center'
            >
              <input
                capture='camera'
                type='file'
                id='upload'
                accept='image/*'
                onChange={handleFileInput}
                style={{ display: 'none' }}
              />

              <label htmlFor='upload'>
                <Grid
                  display='flex'
                  justifyContent='center'
                  alignItems='center'
                  fontSize='48px'
                  width='150px'
                  height='150px'>
                  +
                </Grid>
              </label>
            </Grid>
          )}
        </Grid>
      </Grid>
    </React.Fragment>
  );
});

export default Upload2;
