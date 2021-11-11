import React from 'react';
import AWS from 'aws-sdk';
import { Grid } from '../elements/index';

const Upload = (props) => {
  const [fileName, setFileName] = React.useState();
  const [fileType, setFileType] = React.useState();
  console.log(props.img);
  // console.log('수정 프롭스', props.img.length > 0);
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
      //삭제에서 사용할 키 값
      setFileName(selectImg[i].name.split('.')[0]);
      setFileType(selectImg[i].name.split('.')[1]);
      const fileName = selectImg[i].name.split('.')[0];
      const fileType = selectImg[i].name.split('.')[1];
      console.log(fileName, fileType);
      const upload = new AWS.S3.ManagedUpload({
        params: {
          Bucket: 'docking',
          Key: `${fileName}.${fileType}`,
          Body: selectImg[i],
          ACL: 'public-read',
        },
      });
      console.log(upload);
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
    const s3 = new AWS.S3();
    s3.deleteObject(
      {
        Bucket: 'docking',
        Key: `${fileName}.${fileType}`,
      },
      (err, data) => {
        if (err) {
          throw err;
        }
        //삭제버튼을 누르면 등록하는 이미지도 사라지게 설정
        props.setImg(props.img.filter((img) => img !== props.img[e]));
      },
    );
    props.setFiles(props.files.filter((prevImg) => prevImg !== props.files[e]));
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
                  margin='0 10px 40px 0px'
                  boxShadow='4px 4px 20px 0px rgba(0, 0, 0, 0.1)'
                  boxSizing='border-box'
                >
                  <Grid position='relative'>
                    <img
                      style={{
                        position: 'absolute',
                        width: '15px',
                        height: '15px',
                        top: '10px',
                        left: '125px',
                      }}
                      src={
                        process.env.PUBLIC_URL + '../img/icon/cancel_icon.svg'
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
                      padding: '0px auto',
                      width: '150px',
                      height: '150px',
                      objectFit: 'scale-down',
                    }}
                  />
                </Grid>
              );
            })}
        </Grid>
      )}
    </>
  );
};

export default Upload;
