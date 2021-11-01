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
      IdentityPoolId: 'ap-northeast-2:3be6a8f1-b813-418a-914b-0707888dcbdc',
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
    reader.onloadend = () => {
      const imageInfo = {
        preview: reader.result,
        fileName,
        fileType,
        fileFullName,
        file,
      };
      setUserImage(imageInfo);
    };
    const awsUpload = new AWS.S3.ManagedUpload({
      params: {
        Bucket: 'team13-docking',
        Key: `${fileName}.${fileType}`,
        Body: file,
        ACL: 'public-read',
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
          userActions.updateUserInfo({
            ...userInfo,
            userImgUrl: `https://team13-docking.s3.ap-northeast-2.amazonaws.com/${fileFullName}`,
          }),
        );
      });
  };

  return (
    <Grid>
      <CameraIcon for='imageSelect' />
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
  top: 95px;
  right: 130px;
  margin: 0;
  width: 45px;
  height: 45px;
  background-color: white;
  border-radius: 45px;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.1);
  background-image: url(http://simpleicon.com/wp-content/uploads/camera.png);
  background-repeat: no-repeat;
  background-size: 24px 24px;
  background-position: center;
`;

export default MypageImageUpload;
