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

// 신중한 선택 버튼
export const a = () => {
  Swal.fire({
    title: '입양을 신청하시면 되돌릴 수 없습니다',
    text: '신중하게 선택해주세요:)',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: '승인',
    cancelButtonText: '취소',
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        '입양신청이 완료되었습니다.',
        '임보자님의 연락을 기다려주세요!',
        'success',
      );
    }
  });
};
