import React from 'react';
import { Grid } from '../elements/index';
const Upload = (props) => {
  //이미지 여러개 미리보기
  const onloadFile = (e) => {
    const selectImg = e.target.files;
    const imgUrlList = [...props.files];

    for (let i = 0; i < selectImg.length; i++) {
      const nowImgUrl = URL.createObjectURL(selectImg[i]);
      imgUrlList.push(nowImgUrl);
    }
    props.setFiles(imgUrlList);
  };
  const deleteImg = (e) => {
    console.log(e.parentNode);
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
            props.files.map((a) => {
              return (
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
        </Grid>
      )}
    </>
  );
};

export default Upload;
