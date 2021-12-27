import React from 'react';
import Swal from 'sweetalert2';
import { Grid } from '../../elements/index';
const PostEditModal = ({
  editMode,
  detailModal,
  setDetailModal,
  detailDelete,
}) => {
  return (
    <div
      style={{
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: '0',
        zIndex: '5',
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '414px',
        height: '200px',
        margin: '0 auto',
        backgroundColor: 'white',
        boxShadow: '2px 2px 5px 2px rgba(0, 0, 0, 0.1)',
        borderTopLeftRadius: '15px',
        borderTopRightRadius: '15px',
        boxSizing: 'border-box',
      }}
    >
      <Grid display='flex' justifyContent='center' alignItems='center'>
        <button
          style={{
            all: 'unset',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            color: '#ff6666',
            cursor: 'pointer',
          }}
          onClick={() => {
            editMode();
          }}
        >
          수정
        </button>
      </Grid>
      <Grid display='flex' justifyContent='center' alignItems='center'>
        <button
          style={{
            all: 'unset',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            color: '#ff6666',
            borderTop: 'solid 1px rgba(225, 225, 225, 0.8)',
            borderBottom: 'solid 1px rgba(225, 225, 225, 0.8)',
            cursor: 'pointer',
          }}
          onClick={() => {
            Swal.fire({
              title: '정말 삭제하시겠습니까?',
              showCancelButton: true,
              confirmButtonColor: '#FE7968',
              cancelButtonColor: '#d33',
              confirmButtonText: '승인',
              cancelButtonText: '취소',
              customClass: 'swal-font swal-borderRadius',
            }).then((result) => {
              if (result.isConfirmed) {
                detailDelete();
              }
              setDetailModal(!detailModal);
            });
          }}
        >
          삭제
        </button>
      </Grid>
      <Grid display='flex' justifyContent='center' alignItems='center'>
        <button
          style={{
            all: 'unset',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            color: '#ff6666',
            cursor: 'pointer',
          }}
          onClick={() => {
            setDetailModal(!detailModal);
          }}
        >
          취소
        </button>
      </Grid>
    </div>
  );
};

export default PostEditModal;
