import React from 'react';
import AWS from 'aws-sdk';
import { Grid } from '../elements/index';
import { useDispatch, useSelector } from 'react-redux';
import { postActions } from '../redux/modules/post';
import { WarningAlert } from '../shared/Alerts';
const EditUpload = (props) => {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post.detailPost);
  //다중이미지 aws s3 업로드
  AWS.config.update({
    region: 'ap-northeast-2',
    credentials: new AWS.CognitoIdentityCredentials({
      IdentityPoolId: 'ap-northeast-2:24a59675-7fac-4f78-81a7-3f87f75a70ff',
    }),
  });

  let newImg = [...post.post.img];
  //이미지 여러개 미리보기
  const onloadFile = (e) => {
    const date = new Date();
    const selectImg = e.target.files;
    for (let i = 0; i < selectImg.length; i++) {
      const fileName = selectImg[i].name.split('.')[0];
      const fileType = selectImg[i].name.split('.')[1];
      if (post.post.img.length + selectImg.length > 4) {
        return WarningAlert('이미지는 최대 4개까지 올리실 수 있습니다!');
      }

      const upload = new AWS.S3.ManagedUpload({
        params: {
          Bucket: 'docking',
          Key: `${fileName}` + date.getTime() + `.${fileType}`,
          Body: selectImg[i],
          ACL: 'public-read',
        },
      });
      const promise = upload.promise();
      promise
        .then((data) => {
          dispatch(postActions.updateImg(data.Location));
          newImg.push(data.Location);
        })
        .catch((err) => {
          return alert('오류가 발생했습니다: ', err.message);
        });
    }
    props.setImg(newImg);
  };
  const deleteImg = (e) => {
    console.log(e.split('/')[3]);
    dispatch(postActions.deleteImg(e));
    const file = e.split('/')[3];
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
      },
    );

    //삭제버튼을 누르면 등록하는 이미지도 사라지게 설정
    props.setImg(
      post.post.img.filter((img) => img !== e),
      ...props.img,
    );
  };
  return (
    <>
      <Grid display='flex' overflowX='auto'>
        {/* 이미지 개수가 4개가 되면 첨부버튼 사라짐 */}
        {post.post.img.length >= 4 ? null : (
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
                  color: '#fe7968',
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
                    src={
                      process.env.PUBLIC_URL +
                      '../img/icon/cancel_filled_icon.svg'
                    }
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
