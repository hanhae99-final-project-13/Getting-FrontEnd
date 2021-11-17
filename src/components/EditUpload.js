import React from 'react';
import AWS from 'aws-sdk';
import { Grid } from '../elements/index';
import { useDispatch, useSelector } from 'react-redux';
import { postActions } from '../redux/modules/post';

const EditUpload = (props) => {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post.detailPost);
  console.log(post.post.img);
  console.log(props);
  const [fileName, setFileName] = React.useState();
  const [fileType, setFileType] = React.useState();
  //다중이미지 aws s3 업로드
  AWS.config.update({
    region: 'ap-northeast-2',
    credentials: new AWS.CognitoIdentityCredentials({
      IdentityPoolId: 'ap-northeast-2:24a59675-7fac-4f78-81a7-3f87f75a70ff',
    }),
  });

  let newImg = [...post.post.img];
  console.log(newImg);
  //이미지 여러개 미리보기
  const onloadFile = (e) => {
    console.log(e);
    const selectImg = e.target.files;
    console.log(selectImg);
    const imgUrlList = [...props.files];
    console.log(props.files);
    // blob파일
    console.log(imgUrlList);
    for (let i = 0; i < selectImg.length; i++) {
      const nowImgUrl = URL.createObjectURL(selectImg[i]);
      // blob파일 여러개
      console.log(nowImgUrl);
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
      const promise = upload.promise();
      console.log('뉴이미지1 ', newImg);
      promise
        .then((data) => {
          console.log(data.Location);
          // dispatch(postActions.updateImg(data.Location));
          newImg.push(data.Location);
          console.log('뉴이미지2', newImg);
        })
        .catch((err) => {
          return alert('오류가 발생했습니다: ', err.message);
        });

      console.log('뉴이미지3', newImg);
      imgUrlList.push(nowImgUrl);
      if (imgUrlList.length >= 4) {
        break;
      }
    }
    props.setImg(newImg);
    props.setFiles(imgUrlList);
  };
  console.log(props.img);
  const deleteImg = (e) => {
    console.log(e);
    dispatch(postActions.deleteImg(e));
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
      },
    );

    //삭제버튼을 누르면 등록하는 이미지도 사라지게 설정
    props.setImg(
      post.post.img.filter((img) => img !== e),
      ...props.img,
    );
    // 이 코드를 주석처리하면 새로운 이미지를 올렸을 때의 미리보기 삭제가 불가.
    // blob객체
    if (props.files.length !== 0) {
      URL.revokeObjectURL(props.files);
      console.log(props.files);
      props.setFiles(props.files.filter((prevImg) => prevImg !== e));
    }
    console.log(props.files);
  };
  return (
    <>
      <Grid display='flex' overflowX='auto'>
        {/* 이미지 개수가 4개가 되면 첨부버튼 사라짐 */}
        {props.files.length + post.post.img.length >= 4 ? null : (
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
        )}

        {post.post.img &&
          post.post.img.map((a, i) => {
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
                    src={process.env.PUBLIC_URL + '../img/icon/cancel_icon.svg'}
                    onClick={() => {
                      deleteImg(a);
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
                    borderRadius: '10px',
                  }}
                />
              </Grid>
            );
          })}
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
                    src={process.env.PUBLIC_URL + '../img/icon/cancel_icon.svg'}
                    onClick={() => {
                      deleteImg(a);
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
                    borderRadius: '10px',
                  }}
                />
              </Grid>
            );
          })}
      </Grid>
    </>
  );
};

export default EditUpload;
