const CLIENT_ID = 'b288c56fd31bb6f686ba8a3a39ba7fb2'; // REST API 키
const REDIRECT_URI = 'http://imcute.shop/oauth/callback/kakao'; //Redirect URI
// const REDIRECT_URI = 'http://imcute.shop/oauth/callback/kakao'; //Redirect URI

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;
// 파라미터 시작은 ? 부터.

//배포후 web플랫폼에서 배포주소 추가해주기.
