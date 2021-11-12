import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AWS from 'aws-sdk';
import styled from 'styled-components';

import { Grid } from '../../elements';
import { actionCreators as userActions } from '../../redux/modules/user';

const MypageImageUpload = (props) => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.user.userInfo);
  const [userImage, setUserImage] = React.useState();

  AWS.config.update({
    region: 'ap-northeast-2',
    credentials: new AWS.CognitoIdentityCredentials({
      IdentityPoolId: 'ap-northeast-2:24a59675-7fac-4f78-81a7-3f87f75a70ff',
    }),
  });

  const selectFile = (e) => {
    const fileName = e.target.files[0].name.split('.')[0];
    const fileType = e.target.files[0].name.split('.')[1];
    const fileFullName = e.target.files[0].name;
    const file = e.target.files[0];
    const reader = new FileReader();
    console.log(e.target.files);
    reader.readAsDataURL(file);
    reader.onloadend = () => {};
    const awsUpload = new AWS.S3.ManagedUpload({
      params: {
        Bucket: 'docking',
        Key: `${fileName}.${fileType}`,
        Body: file,
      },
    });

    const promise = awsUpload.promise();
    promise
      .then((data) => {})
      .catch((err) => {
        window.alert('업로드 실패');
      })
      .then((data) => {
        dispatch(
          userActions.updateUserInfoMW({
            nickname: userInfo.nickname,
            userImgUrl: `https://docking.s3.ap-northeast-2.amazonaws.com/${fileFullName}`,
          }),
        );
        window.alert('프로필 이미지가 변경되었습니다!');
      });
  };

  return (
    <Grid>
      <CameraIcon
        for='imageSelect'
        src={process.env.PUBLIC_URL + '/img/icon/camera_icon.svg'}
      />
      <input
        id='fileSelect'
        type='file'
        accept='image/*'
        id='imageSelect'
        style={{ display: 'none' }}
        onChange={(e) => {
          selectFile(e);
        }}
      />
    </Grid>
  );
};

const CameraIcon = styled.label`
  position: absolute;
  margin: 0;
  width: 45px;
  height: 45px;
  background-color: white;
  border-radius: 45px;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.1);
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: 24px 24px;
  background-position: center;
`;

export default MypageImageUpload;
