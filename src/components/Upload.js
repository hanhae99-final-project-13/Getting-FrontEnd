import React, { memo } from 'react';
import AWS from 'aws-sdk';
import imageCompression from 'browser-image-compression';
import { WarningAlert } from '../shared/Alerts';
import { Grid } from '../elements/index';

const Upload = (props) => {
  AWS.config.update({
    region: 'ap-northeast-2',
    credentials: new AWS.CognitoIdentityCredentials({
      IdentityPoolId: 'ap-northeast-2:24a59675-7fac-4f78-81a7-3f87f75a70ff',
    }),
  });
  // 이미지 리사이즈
  const options = {
    maxSizeMB: 0.2,
    maxWidthOrHeight: 414,
    useWebWorker: true,
  };
  //이미지 여러개 미리보기

  console.log('업로드 리렌더링');
  const onloadFile = async (e) => {
    let newImg = [...props.img];
    const date = new Date();
    const selectImg = e.target.files;
    const imgUrlList = [...props.files];
    for (let i = 0; i < selectImg.length; i++) {
      try {
        const compressedFile = await imageCompression(selectImg[i], options);
        const nowImgUrl = URL.createObjectURL(compressedFile);
        const fileName = compressedFile.name.split('.')[0];
        const fileType = compressedFile.name.split('.')[1];
        const upload = new AWS.S3.ManagedUpload({
          params: {
            Bucket: 'docking',
            Key: `${fileName}` + date.getTime() + `.${fileType}`,
            Body: compressedFile,
            ACL: 'public-read',
          },
        });
        const promise = upload.promise();

        promise
          .then((data) => {
            newImg.push(data.Location);
          })
          .catch((err) => {
            return alert('오류가 발생했습니다: ', err.message);
          });
        imgUrlList.push(nowImgUrl);

        if (imgUrlList.length >= 4) {
          WarningAlert('이미지는 최대 4개까지 올리실 수 있습니다!');
          break;
        }
      } catch (error) {
        window.alert('앗, 이미지 업로드에 오류가 있습니다!');
      }
    }
    props.setImg(newImg);
    props.setFiles(imgUrlList);
  };

  const deleteImg = (e) => {
    const file = props.img[e].split('/')[3];
    const s3 = new AWS.S3();
    s3.deleteObject(
      {
        Bucket: 'docking',
        Key: `${file}`,
      },
      (err, data) => {
        if (err) {
          throw err;
        }
        props.setImg(props.img.filter((img) => img !== props.img[e]));
      },
    );
    if (props.files.length !== 0) {
      URL.revokeObjectURL(props.files);
      props.setFiles(
        props.files.filter((prevImg) => prevImg !== props.files[e]),
      );
    }
  };

  return (
    <>
      <Grid display='flex' overflowX='auto'>
        {props.files.length >= 4 ? null : (
          <Grid
            display='flex'
            justifyContent='center'
            alignItems='center'
            width='150px'
            height='150px'
            margin='0 10px 40px 0'
            bg='white'
            boxShadow='4px 4px 20px 0px rgba(0, 0, 0, 0.1)'
            borderRadius='10px'
            boxSizing='border-box'
          >
            <input
              type='file'
              multiple
              accept='image/*'
              onChange={onloadFile}
              id='file'
              style={{ display: 'none' }}
            />
            <label for='file' style={{ fontSize: '48px' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '150px',
                  height: '150px',
                  color: '#fe7968',
                  fontSize: '48px',
                  cursor: 'pointer',
                }}
              >
                +
              </div>
            </label>
          </Grid>
        )}
        {props.files &&
          props.files.map((a, i) => {
            return (
              <Grid
                key={i}
                display='flex'
                justifyContent='center'
                alignItems='center'
                width='150px'
                height='150px'
                margin='0 10px 40px 0px'
                bg='white'
                borderRadius='10px'
                boxShadow='4px 4px 20px 0px rgba(0, 0, 0, 0.1)'
                boxSizing='border-box'
              >
                <Grid position='relative'>
                  <img
                    style={{
                      position: 'absolute',
                      top: '10px',
                      left: '125px',
                      width: '15px',
                      height: '15px',
                    }}
                    src={
                      process.env.PUBLIC_URL +
                      '../img/icon/cancel_filled_icon.svg'
                    }
                    onClick={() => {
                      deleteImg(i);
                    }}
                  />
                </Grid>
                <img
                  alt='sample'
                  src={a}
                  style={{
                    width: '150px',
                    height: '150px',
                    padding: '0px auto',
                    borderRadius: '10px',
                    objectFit: 'scale-down',
                  }}
                />
              </Grid>
            );
          })}
      </Grid>
    </>
  );
};

export default memo(Upload);
