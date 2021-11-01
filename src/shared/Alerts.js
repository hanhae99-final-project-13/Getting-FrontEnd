import Swal from 'sweetalert2';

//경고 alert
export const WarningAlert = (warning_text, footer) => {
  Swal.fire({
    text: warning_text,
    icon: 'warning',
    confirmButtonColor: '#999cda',
    footer: footer,
  });
};
//성공 alert
export const SuccessAlert = (success_text) => {
  Swal.fire({
    text: success_text,
    icon: 'success',
    confirmButtonColor: '#999cda',
  });
};
//에러 alert
export const ErrorAlert = (error_text, position_text) => {
  Swal.fire({
    text: error_text,
    position: position_text,
    icon: 'error',
    confirmButtonColor: '#999cda',
  });
};
// 이미지 추가 alert
export const imageSuccessAlert = (success_text) => {
  Swal.fire({
    // title: success_text,
    text: success_text,
    imageUrl: 'https://unsplash.it/400/200',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
  });
};

const a = () => {
  Swal.fire({
    title: '정말로 그렇게 하시겠습니까?',
    text: '다시 되돌릴 수 없습니다. 신중하세요.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: '승인',
    cancelButtonText: '취소',
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire('승인이 완료되었습니다.', '화끈하시네요~!', 'success');
    }
  });
};

// 요청 처리 과정 여기서 처리
