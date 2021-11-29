import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Image, Text } from '../../elements';
import Slider from '../../components/Slider';
import styled from 'styled-components';

const AdoptionReason = (props) => {
  const detailFosterForm = useSelector((state) => state.apply.detailFosterForm);
  const [showSurvey, setShowSurvey] = React.useState(false);

  // 알러지 체크함수

  React.useEffect(() => {
    return () => setShowSurvey(false);
  }, []);

  return (
    <React.Fragment>
      <Grid
        padding='15px 0'
        height='auto'
        borderBottom='1px solid rgba(225, 225, 225, 0.5)'
        cusor='pointer'
      >
        <Grid
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          width='auto'
          height='auto'
          _onClick={() => setShowSurvey(!showSurvey)}
        >
          <Text margin='0' weight='700' size='20px'>
            입양 설문
          </Text>
          <img
            width='16px'
            height='12px'
            src={process.env.PUBLIC_URL + '/img/icon/downarrow.svg'}
          />
        </Grid>
      </Grid>
      {showSurvey ? (
        <Grid boxSizing='border-box' margin='0 0 100px 0'>
          <Grid>
            <Grid
              boxSizing='border-box'
              height='auto'
              borderTop='1px solid rgba(225, 225, 225, 0.5) '
              borderBottom='1px solid rgba(225, 225, 225, 0.5) '
            >
              <Grid height='auto' margin='13px 0 26px 0'>
                <Text margin='0' bold line_height='24px'>
                  가족 구성원 중
                  <BoldText style={{ fontWeight: '800' }}>
                    동물 알레르기 증상
                  </BoldText>
                  이
                  <br />
                  있는 분이 있습니까?
                </Text>
              </Grid>
              <Grid
                display='flex'
                alignItems='center'
                justifyContent='center'
                margin='0 0 17px 0'
                width='70px'
                height='30px'
                bg='#FE7968'
                borderRadius='15px'
              >
                <Text color='white' weight='700'>
                  {detailFosterForm.allergy}
                </Text>
              </Grid>
            </Grid>

            <Grid
              boxSizing='border-box'
              height='352px'
              borderBottom='1px solid rgba(225, 225, 225, 0.5) '
            >
              <Grid margin='11px 0 26px 0 ' height='auto'>
                <Text margin='0' bold line_height='24px'>
                  만약 <BoldText> 과거</BoldText>에 반려동물을 키워본 적이
                  있다면 <br />
                  현재는 어떻게 되었나요?
                </Text>
              </Grid>

              <Textarea>{detailFosterForm.experience}</Textarea>
            </Grid>

            <Grid
              boxSizing='border-box'
              height='375px'
              borderBottom='1px solid rgba(225, 225, 225, 0.5) '
            >
              <Grid margin='11px 0 26px 0 ' height='auto'>
                <Text margin='0' bold line_height='24px'>
                  반려동물과
                  <BoldText>함께 할 수 있는 시간</BoldText>
                  을 알려주세요. <br />
                  (반려동물이 집에 혼자 있는 시간, 반려동물과 함께 할 수 있는
                  시간)
                </Text>
              </Grid>

              <Textarea>{detailFosterForm.timeTogether}</Textarea>
            </Grid>
            <Grid
              boxSizing='border-box'
              height='375px'
              borderBottom='1px solid rgba(225, 225, 225, 0.5) '
            >
              <Grid margin='11px 0 26px 0 ' height='auto'>
                <Text margin='0' bold line_height='24px'>
                  하루동안 불가피하게 집을 비우는 경우 <br />
                  반려동물을 어떻게 할 것인지 말씀해주세요.
                </Text>
              </Grid>

              <Textarea>{detailFosterForm.timeTogether}</Textarea>
            </Grid>
            <Grid
              boxSizing='border-box'
              height='auto'
              padding='18px 0'
              borderBottom='1px solid rgba(225, 225, 225, 0.5) '
            >
              <Grid height='auto'>
                <Text margin='0' bold line_height='24px'>
                  해당 카테고리의 예측되는 비용을 적어주세요.
                </Text>
                <Grid
                  display='flex'
                  justifyContent='space-between'
                  alignItems='center'
                  margin='18px 0 0 0'
                  height='auto'
                >
                  <Text margin='0' weight='700' size='16px'>
                    1년 동안의 예방접종 비용
                  </Text>
                  <Grid
                    display='flex'
                    alignItems='center'
                    justifyContent='space-between'
                    padding='0 13px'
                    width='128px'
                    height='46px'
                    bg='#F7F7F7'
                    borderRadius='9px'
                    boxSizing='border-box'
                  >
                    <Text margin='0' size='16px'></Text>
                    <Text margin='0' size='16px' weight='700'>
                      원
                    </Text>
                  </Grid>
                </Grid>
                <Grid
                  display='flex'
                  justifyContent='space-between'
                  alignItems='center'
                  margin='14px 0 0 0'
                  height='auto'
                >
                  <Text margin='0' weight='700' size='16px'>
                    1년 동안의 양육비용
                  </Text>
                  <Grid
                    display='flex'
                    alignItems='center'
                    justifyContent='space-between'
                    padding='0 13px'
                    width='128px'
                    height='46px'
                    bg='#F7F7F7'
                    borderRadius='9px'
                    boxSizing='border-box'
                  >
                    <Text margin='0' size='16px'></Text>
                    <Text margin='0' size='16px' weight='700'>
                      원
                    </Text>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              boxSizing='border-box'
              height='auto'
              borderBottom='1px solid rgba(225, 225, 225, 0.5) '
            >
              <Grid margin='11px 0 26px 0 ' height='auto'>
                <Text margin='0' bold line_height='24px'>
                  입양 후, 입양하신 반려동물의 동물 등록이 이루어져야 합니다.
                  이에 동의하시나요?
                </Text>
              </Grid>
              <Grid
                display='flex'
                alignItems='center'
                justifyContent='center'
                margin='0 0 17px 0'
                width='70px'
                height='30px'
                bg='#FE7968'
                borderRadius='15px'
              >
                <Text color='white' weight='700'>
                  {detailFosterForm.allergy}
                </Text>
              </Grid>
            </Grid>

            <Grid
              boxSizing='border-box'
              height='362px'
              borderBottom='1px solid rgba(225, 225, 225, 0.5) '
            >
              <Grid margin='11px 0 26px 0 ' height='auto'>
                <Text margin='0' bold line_height='24px'>
                  입양한 반려동물이
                  <BoldText>분리불안</BoldText>이 있다면
                  <br />
                  어떻게 하시겠어요?
                </Text>
              </Grid>

              <Textarea>{detailFosterForm.anxiety}</Textarea>
            </Grid>

            <Grid
              boxSizing='border-box'
              height='364px'
              borderBottom='1px solid rgba(225, 225, 225, 0.5) '
            >
              <Grid margin='11px 0 26px 0 ' height='auto'>
                <Text margin='0' bold line_height='24px'>
                  입양한 <BoldText>반려동물이 짖음</BoldText>이 있어 주변에서
                  민원이 들어온다면 어떻게 하시겠어요?
                </Text>
              </Grid>

              <Textarea>{detailFosterForm.bark}</Textarea>
            </Grid>
            <Grid margin='18px 0 21px 0 ' height='auto'>
              <Text margin='0 0 8px 0' bold line_height='24px'>
                동거인들의 입양동의 서명을 찍어 첨부해주세요.
              </Text>
              <Image
                shape='square'
                src={detailFosterForm.roomUrl}
                borderRadius='10px'
                backgroundPosition='center'
              />
            </Grid>
            <Grid margin='18px 0 21px 0 ' height='auto'>
              <Text margin='0 0 8px 0' bold line_height='24px'>
                아이가
                <BoldText>지내게 될 곳</BoldText>을 사진 찍어 첨부해주세요.
              </Text>
              <Image
                shape='square'
                src={detailFosterForm.roomUrl}
                borderRadius='10px'
                backgroundPosition='center'
              />
            </Grid>
          </Grid>
        </Grid>
      ) : (
        ''
      )}
    </React.Fragment>
  );
};

const Textarea = styled.p`
  width: 100%;
  height: 249px;
  background-color: #f7f7f7;
  border-radius: 15px;
  border: none;
  padding: 19px;
  box-sizing: border-box;
`;

const BoldText = styled.span`
  font-weight: 800;
  font-family: 'NanumSquareR_EB';
`;

export default AdoptionReason;
