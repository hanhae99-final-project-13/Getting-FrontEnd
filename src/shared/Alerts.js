import Swal from 'sweetalert2';
import './App.css';

//경고 alert
export const WarningAlert = (warning_text, footer, title) => {
  Swal.fire({
    title: title,
    text: warning_text,
    icon: 'warning',
    confirmButtonColor: '#FE7968',
    footer: footer,
  });
};
//성공 alert
export const SuccessAlert = (success_text) => {
  Swal.fire({
    text: success_text,
    icon: 'success',
    confirmButtonColor: '#FE7968',
  });
};

//성공 alert (줄바꿈가능)
export const SuccessAlert2 = (html_text) => {
  Swal.fire({
    html: html_text,

    icon: 'success',
    confirmButtonColor: '#FE7968',
  });
};

//에러 alert
export const ErrorAlert = (error_text, position_text) => {
  Swal.fire({
    text: error_text,
    position: position_text,
    icon: 'error',
    confirmButtonColor: '#FE7968',
    confirmButtonBorder: 'none',
  });
};
//에러 alert (줄바꿈가능)
export const ErrorAlert2 = (html_text) => {
  Swal.fire({
    html: html_text,
    // text: error_text,
    // position: position_text,
    // customClass: 'swal-font',
    icon: 'error',
    confirmButtonColor: '#FE7968',
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
    confirmButtonColor: '#FE7968',
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
