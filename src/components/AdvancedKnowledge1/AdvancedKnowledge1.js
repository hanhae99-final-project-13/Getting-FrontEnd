import React from 'react';

import { Grid, Text } from '../../elements';
import { ErrorAlert } from '../../shared/Alerts';
import { history } from '../../redux/configureStore';
import AdvancedQuizData from '../Data/AdvancedQuizData';

const AdvancedKnowledge1 = () => {
  const token = localStorage.getItem('USER_TOKEN');

  const quizId = AdvancedQuizData[0].id;
  console.log(quizId);

  return (
    <>
      <Grid
        maxWidth='414px'
        width='auto'
        margin='0 auto 200px'
        position='relative'
        padding='0 35px'>
        <Grid
          cusor='pointer'
          zIndex='9999'
          _onClick={() => {
            history.goBack();
          }}
          position='absolute'
          width='20px'
          height='20px'
          top='-51px'
          left='36px'>
          <Grid width='12px' height='7px'>
            <img src={process.env.PUBLIC_URL + '/img/icon/back_icon.svg'} />
          </Grid>
        </Grid>

        <Grid position='absolute' top='-52px' left='0' right='0'>
          <Text size='18px' margin='0' weight='800' align='center'>
            심화지식 리스트1
          </Text>
        </Grid>

        {/*지식 1번 */}

        <Grid is_flex maxWidth='414px' width='auto' margin='117px auto 0'>
          <Text margin='0 4px 0 0' size='16px' line_height='22px' weight='700'>
            1.
          </Text>
          <Grid>
            <Text margin='0' size='14px' line_height='21px' weight='700'>
              분리불안으로 인한 습관적 하울링 경우에 <br />
              행동교정이 필요할 때가 있습니다. <br />{' '}
              <span style={{ color: '#FE7968', fontSize: '14px' }}>
                습관적 하울링 행동교정법
              </span>
              에 대해 알아보겠습니다.
              <br />
              <br />
              1) 무시하기 관심을 받기위해 하울링 한다면 혼내는 것도 ‘관심’ 이라
              생각할 수 있어요. <br /> 그러니 분리불안으로 인해 하울링 한다면,
              무시하는 것도 좋은 훈련 방법입니다.
              <br />
              <br />
              2) 보상주기 강아지가 하울링을 하지 않을 때 칭찬이나 간식으로
              보상해주세요. 보상받는다는 걸 알게되면 하울링을 교정할 수
              있습니다.
              <br /> 단, 5초이상 하울링 하지 않을 때 보상을 주는게 중요합니다.
              <br />
              <br />
              3) 명령어 가르치기 “그만”, “조용” 등 같은 명령어를 가르치는 것도
              좋습니다. 강아지가 명령어를 듣고 하울링을 멈춘다면 칭찬이나
              간식으로 보상해주면 됩니다.
            </Text>
            <Grid
              borderRadius='15px'
              margin='36px auto 0'
              maxWidth='226px'
              width='100%'
              height='152px'
              bgi={process.env.PUBLIC_URL + '/img/QuizImg/AdvancedQuizImg1.svg'}
              bgisize='contain'
              bgiposition='center'
              bgirepeat='no-repeat'></Grid>
          </Grid>
        </Grid>

        {/*지식 2번 */}

        <Grid is_flex maxWidth='414px' width='auto' margin='24px auto 0'>
          <Text margin='0 4px 0 0' size='16px' line_height='22px' weight='700'>
            2.
          </Text>
          <Grid>
            <Text margin='0' size='14px' line_height='21px' weight='700'>
              강아지가 보호자를 물려고할 때가 있습니다. <br />
              강아지가 무는 행동은 크게 ‘장난과 공격’ 2가지로 나눌 수 있는데요.{' '}
              <br />
              장난 치는 경우는 보호자를 살살 물어 자연스러운 표정을 지어요.
              반대로, 공격성을 보아 물려고 한다면 코에 주름이 생기고 이빨을
              보이게 됩니다. <br /> 특히, 습관적으로 보호자에게 공격적인 물기를
              하는 경우가 있는데요. 반드시 교정을 해야하며 전문적인 훈련이
              필요할 수 있습니다. <br />
              그럼,{' '}
              <span style={{ color: '#FE7968', fontSize: '14px' }}>
                교정법과 하면 안되는 교정법
              </span>
              에 대해 알아보겠습니다. <br /> <br />
              1) 아픔 나타내기 <br />
              강아지가 보호자를 물면 아파한다는걸 <br />
              인지시켜주면 교정에 도움이 될 수 있습니다. <br />
              아프다고 소리를 내거나, 기운없는 행동, “안 된다”고 단호하기 등이
              있습니다.
              <br /> <br />
              2) 행동 멈추기 <br />
              강아지와 놀다가 물면은 행동을 멈추고 가만히 <br />
              있습니다. 이것은 보호자를 물면 놀이가 끝난다는걸 알려주는
              행동인데요. <br />
              등 돌린 상태로 10~20초정도 무시하거나 잠시 떨어져 있으세요. 이를
              반복하다보면 교정에 도움이 될 수 있습니다. <br /> <br />
              3) 대체체 찾기 <br />
              사실 강아지가 무는 행동은 본능입니다. <br />
              따라서, 강아지가 물어도 되는 물건을 알려주는 것도 좋은 방법입니다.{' '}
              <br />
              만약 물려고 한다면, 터그 놀이같은 장난감을 주어 관심을 돌려보세요.{' '}
              <br /> <br />
              4) 하면 안되는 교정법 <br />
              무는 강아지를 교육할 때 체벌교정은 절대 하면 안됩니다. 강아지는
              자신이 혼나는 이유를 알지 못하기 때문입니다. <br />
              체벌 시, 반성하는 듯한 모습은 단지 두려움의 표현일 뿐입니다.{' '}
              <br />
              또한, 부작용도 많아 심한 우울증에 걸리거나 보호자와 유대감에도
              좋지 않습니다.
            </Text>
            <Grid
              borderRadius='15px'
              margin='36px auto 0'
              maxWidth='226px'
              width='100%'
              height='152px'
              bgi={process.env.PUBLIC_URL + '/img/QuizImg/AdvancedQuizImg2.svg'}
              bgisize='contain'
              bgiposition='center'
              bgirepeat='no-repeat'></Grid>
          </Grid>
        </Grid>

        {/*지식 3번 */}

        <Grid is_flex maxWidth='414px' width='auto' margin='24px auto 0'>
          <Text margin='0 4px 0 0' size='16px' line_height='22px' weight='700'>
            3.
          </Text>
          <Grid>
            <Text margin='0' size='14px' line_height='21px' weight='700'>
              유기견의 경우 파양 경험이 있거나 <br /> 불온전한 환경에서 지내온
              경험으로 인해 <br />
              분리 불안 증세가 많이 나타납니다. 하울링 등의 분리 불안 증세는
              이웃에 큰 피해를 끼쳐 모두가 난처한 상황이 지속될 수 있으므로
              철저한 교육이 필요합니다. <br />
              <span style={{ color: '#FE7968', fontSize: '14px' }}>
                분리불안 극복을 위한교육방안
              </span>
              으로는 <br /> <br />
              1) 첫 입양 시, 당분간은 반려견을 되도록 혼자 두지 않고 안정을 찾을
              수 있도록 도와줍니다. <br /> <br />
              2) 여러 차례 문 밖으로 사라지는 시간을 1~2분 부터 5~10분 까지 차츰
              늘려나가 반려견에게 조금 기다리면 가족이 돌아온다는 신뢰를
              심어줍니다. <br /> <br />
              3) 외출 전, 노즈워크나 애착인형 등으로 <br />
              강아지가 혼자서도 놀이를 할 수 있는 환경을 만들어 둡니다. <br />{' '}
              <br />
              4) 외출 전과 귀가 시, 반려견이 흥분이 가라앉을 때까지 관심을 주지
              않도록하여 가족의 외출이 큰 이벤트가 아닌 자연스러운 일상으로
              인식되도록 합니다. <br /> <br />
              5) 평상 시, 규칙적인 산책으로 스트레스와 외출에 대한 욕구불만을
              해소시킵니다.
            </Text>
            <Grid
              borderRadius='15px'
              margin='36px auto 0'
              maxWidth='226px'
              width='100%'
              height='152px'
              bgi={process.env.PUBLIC_URL + '/img/QuizImg/AdvancedQuizImg3.svg'}
              bgisize='contain'
              bgiposition='center'
              bgirepeat='no-repeat'></Grid>
          </Grid>
        </Grid>

        {/*지식 4번 */}

        <Grid is_flex maxWidth='414px' width='auto' margin='24px auto 0'>
          <Text margin='0 4px 0 0' size='16px' line_height='22px' weight='700'>
            4.
          </Text>
          <Grid>
            <Text margin='0' size='14px' line_height='21px' weight='700'>
              <span style={{ color: '#FE7968', fontSize: '14px' }}>
                장난감을 이용한 반려견 케어
              </span>
              <br />
              <br />
              1) 맑은 종소리가 나는 장난감은 반려견의
              <br /> 청각발달에 효과가 아주 좋습니다. <br />
              주인의 신호 혹은 명령에 주의 집중을 잘 하지 못하는 반려견일 시,
              ‘맑은 종소리’가 나는 장난감으로 주의집중력을 키워주는 것이
              좋습니다.
              <br />
              <br />
              2) 선택형 장난감은 노령견의 치매예방에 탁월한 효과를 갖고
              있습니다. 견주와 특정 카드나 색을 선택해서 물고 오는 놀이 방식은
              뇌주름의 수축을 더 지연시켜 노령견의 뇌건강을 효과적으로 지켜줄 수
              있습니다.
              <br />
              <br />
              3) 분리불안 증상을 앓게 되는 경우, 켄넬 안에 부모견 형상의 인형을
              넣어주는 것이 아주 좋습니다.
              <br />
              <br />
              4) 건전지가 내장되어 스스로 움직이는 (자기작동식) 장난감의 경우
              반려견의 외로움을 달래주고 공감능력 형성에 도움이 됩니다.
            </Text>
            <Grid
              borderRadius='15px'
              margin='36px auto 0'
              maxWidth='226px'
              width='100%'
              height='152px'
              bgi={process.env.PUBLIC_URL + '/img/QuizImg/AdvancedQuizImg4.svg'}
              bgisize='contain'
              bgiposition='center'
              bgirepeat='no-repeat'></Grid>
          </Grid>
        </Grid>

        {/*지식 5번 */}

        <Grid is_flex maxWidth='414px' width='auto' margin='24px auto 0'>
          <Text margin='0 4px 0 0' size='16px' line_height='22px' weight='700'>
            5.
          </Text>
          <Grid>
            <Text margin='0' size='14px' line_height='21px' weight='700'>
              <span style={{ color: '#FE7968', fontSize: '14px' }}>
                배변훈련은 초기 교육에 꼭 필요합니다.
              </span>
              <br />
              하지만 반려견이 배변을 실수할 때도 있기 때문에 <br />
              <span style={{ color: '#FE7968', fontSize: '14px' }}>
                그 원인을 찾아 고쳐나가야 합니다.
              </span>
              <br />
              그럼,
              <span style={{ color: '#FE7968', fontSize: '14px' }}>
                초기 배변교육 방법
              </span>
              에 대해 알아보겠습니다.
              <br />
              <br />
              1) 배변을 보았을 때 주인에게 혼난 경험으로 주인이 보이지 않는
              곳에서 볼일을 보는 경우
              <br />
              반려견 배변 실수 했을때 흔히 주인이 실수 하는 것은 반려견에게 화를
              내는 것입니다.
              <br />
              강아지사람처럼 "이곳에 볼일을 봐서 혼나는 구나”라고 생각하는게
              아니라 그저 배변행동 때문에 혼난다고 인식하게 됩니다.
              <br />
              따라서, 배변실수를 했다가 혼낸 경험이 있다면, 눈에 안 보이는 곳에
              몰래 배변을 보려고 하는 성향이 생길 수 있으니 혼을 내지는 말아야
              합니다.
              <br />
              <br />
              2) 배변장소 또는 배변 패드가 너무 더러워져서 다른 장소에 배변을
              보는 경우 <br />
              강아지 성격에 따라 다르긴 하지만 몇몇 강아지들은 유난히 깔끔한
              성향이 있습니다. <br />
              주로 배변패드가 더러워졌다 싶으면 패드위로 안 올라갑니다. 그러니
              배변패드는 넓은 것을 사용하시거나 아니면 자주 확인하시고
              갈아주시는게 좋습니다.
              <br />
              <br />
              3) 분리불안으로 인한 외로움이나 두려움등으로 배변실수를 하는 경우{' '}
              <br />
              분리불안증세가 심해지면 자제력을 상실하게 됩니다. 그렇게 되면,
              배변욕구를 참지 못하고 그자리에서 실수를 하는 경우가 종종
              있습니다. <br />
              무언가 반려견은 주인의 관심을 받기 위해 의도적인 마킹 배변을 보는
              것 같다면, 혼내시기 보다는 무관심으로 대처하셔야 합니다
            </Text>
            <Grid
              borderRadius='15px'
              margin='36px auto 0'
              maxWidth='226px'
              width='100%'
              height='152px'
              bgi={process.env.PUBLIC_URL + '/img/QuizImg/AdvancedQuizImg5.svg'}
              bgisize='contain'
              bgiposition='center'
              bgirepeat='no-repeat'></Grid>
          </Grid>
        </Grid>

        <Grid
          cusor='pointer'
          position='fixed'
          top='600px'
          left='0'
          right='0'
          bottom='144px'
          _onClick={() => {
            if (!token) {
              ErrorAlert('로그인 후 진행해주세요!');
              return;
            }

            history.push(`/advancedquiz/${quizId}`);
          }}
          margin='0 auto'
          bg='#FE7968'
          width='157px'
          height='52px'
          borderRadius='26px'
          display='flex'
          justifyContent='center'
          alignItems='center'
          boxShadow='1px 1px 5px rgba(0, 0, 0, 0.5)'>
          <Text color='white' margin='0' weight='700'>
            퀴즈로 검증하기
          </Text>
        </Grid>
      </Grid>
    </>
  );
};

export default AdvancedKnowledge1;
