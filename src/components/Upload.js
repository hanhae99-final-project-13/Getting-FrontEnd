import React from 'react';
import AWS from 'aws-sdk';
import { Grid } from '../elements/index';
const Upload = (props) => {
  console.log('수정 프롭스', props.img.length > 0);
  //다중이미지 aws s3 업로드
  AWS.config.update({
    region: 'ap-northeast-2',
    credentials: new AWS.CognitoIdentityCredentials({
      IdentityPoolId: 'ap-northeast-2:24a59675-7fac-4f78-81a7-3f87f75a70ff',
    }),
  });

  let newImg = [];
  //이미지 여러개 미리보기
  const onloadFile = (e) => {
    const selectImg = e.target.files;
    const imgUrlList = [...props.files];
    for (let i = 0; i < selectImg.length; i++) {
      const nowImgUrl = URL.createObjectURL(selectImg[i]);
      const fileName = selectImg[i].name.split('.')[0];
      const fileType = selectImg[i].name.split('.')[1];

      const upload = new AWS.S3.ManagedUpload({
        params: {
          Bucket: 'docking',
          Key: `${fileName}.${fileType}`,
          Body: selectImg[i],
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
        break;
      }
    }
    props.setImg(newImg);
    props.setFiles(imgUrlList);
  };

  const deleteImg = (e) => {
    console.log(e);
  };
  return (
    <>
      {props.files.length === 0 ? (
        <Grid display='flex'>
          <Grid
            width='150px'
            height='150px'
            bg='white'
            borderRadius='10px'
            display='flex'
            justifyContent='center'
            alignItems='center'
            margin='0 10px 40px 0'
            boxShadow='4px 4px 20px 0px rgba(0, 0, 0, 0.1)'
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
                  fontSize: '48px',
                  width: '150px',
                  height: '150px',
                }}
              >
                +
              </div>
            </label>
          </Grid>
        </Grid>
      ) : (
        <Grid display='flex' overflowX='auto'>
          {props.files &&
            props.files.map((a, i) => {
              return (
                <Grid
                  key={i}
                  width='150px'
                  height='150px'
                  bg='white'
                  borderRadius='10px'
                  display='flex'
                  justifyContent='center'
                  alignItems='center'
                  margin='0 10px 40px 0'
                  boxShadow='4px 4px 20px 0px rgba(0, 0, 0, 0.1)'
                  boxSizing='border-box'
                >
                  <button
                    style={{
                      all: 'unset',
                      position: 'relative',
                      top: '-55px',
                      left: '140px',
                      fontSize: '20px',
                    }}
                    onClick={deleteImg}
                  >
                    x
                  </button>
                  <img
                    alt='sample'
                    src={a}
                    style={{
                      padding: '0px 15px 0px 5px',
                      width: '150px',
                      objectFit: 'scale-down',
                    }}
                  />
                </Grid>
              );
            })}
          {props.files.length >= 4 ? null : (
            <Grid
              width='150px'
              height='150px'
              bg='white'
              borderRadius='10px'
              display='flex'
              justifyContent='center'
              alignItems='center'
              margin='0 10px 0px 0'
              boxShadow='4px 4px 20px 0px rgba(0, 0, 0, 0.1)'
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
                    fontSize: '48px',
                    width: '150px',
                    height: '150px',
                  }}
                >
                  +
                </div>
              </label>
            </Grid>
          )}
        </Grid>
      )}
    </>
  );
};

export default Upload;
