import React from 'react';

import { Grid, Text } from '../../elements';
import { ErrorAlert } from '../../shared/Alerts';
import { history } from '../../redux/configureStore';
import Advanced2QuizData from '../Data/Advanced2QuizData';

const AdvancedKnowledge2 = () => {
  const token = localStorage.getItem('USER_TOKEN');

  const quizId = Advanced2QuizData[0].id;
  console.log(quizId);

  return (
    <>
      <Grid
        maxWidth='414px'
        width='auto'
        margin='0 auto 200px'
        position='relative'
        padding='0 35px'
      >
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
          left='36px'
        >
          <Grid width='12px' height='7px'>
            <img src={process.env.PUBLIC_URL + '/img/icon/back_icon.svg'} />
          </Grid>
        </Grid>

        <Grid position='absolute' top='-52px' left='0' right='0'>
          <Text size='18px' margin='0' weight='800' align='center'>
            심화지식 리스트2
          </Text>
        </Grid>

        {/*지식 1번 */}

        <Grid is_flex maxWidth='414px' width='auto' margin='117px auto 0'>
          <Text margin='0 4px 0 0' size='16px' line_height='22px' weight='700'>
            1.
          </Text>
          <Grid>
            <Text margin='0' size='14px' line_height='21px' weight='700'>
              <span style={{ color: '#FE7968', fontSize: '14px' }}>
                반려견이 먹으면 안되는 음식
              </span>
              <br />
              <br />
              1) 초콜릿 <br />
              초콜릿 속 카파엔과 테오브로민은 '메칠키산친' <br />
              성분으로 구토, 복통, 탈수, 근육 경련 등을 일으켜 발작 혹은
              죽음에까지 이를 수 있습니다.
              <br />
              <br />
              2) 우유, 치즈 등의 유제품 <br />
              개에게는 유당(락토스)을 분해하는 효소가 없어 구토, 설사 등의 위장
              장애를 일으킬 수 있습니다.
              <br />
              <br />
              3) 아보카도 페르신 성분이 위장장애와 호흡곤란을 일으킵니다.
              <br />
              <br />
              4) 뼈 질식의 우려가 있고 목이나 소화기간 내에 상처를 입힐 수
              있습니다.
              <br />
              <br />
              5) 마카다미아 독성 반응으로 다리 건강을 악화시킵니다. 구토, 설사와
              쇠약증, 떨림 증세 등을 유발합니다.
              <br />
              <br />
              6) 마늘, 양파 티오설 페이트와 티오황산염 성분이 적혈구를 파괴해
              빈혈과 호흡곤란을 일으킬 수 있습니다.
              <br />
              <br />
              7) 포도 신부전을 일으킬 수 있으며 구토, 설사, 혈뇨 등의 증상이
              나타날 수 있습니다.
            </Text>
            <Grid
              borderRadius='15px'
              margin='36px auto 0'
              maxWidth='226px'
              width='100%'
              height='152px'
              bgi={
                process.env.PUBLIC_URL + '/img/QuizImg/Advanced2QuizImg1.svg'
              }
              bgisize='contain'
              bgiposition='center'
              bgirepeat='no-repeat'
            ></Grid>
          </Grid>
        </Grid>

        {/*지식 2번 */}

        <Grid is_flex maxWidth='414px' width='auto' margin='24px auto 0'>
          <Text margin='0 4px 0 0' size='16px' line_height='22px' weight='700'>
            2.
          </Text>
          <Grid>
            <Text margin='0' size='14px' line_height='21px' weight='700'>
              <span style={{ color: '#FE7968', fontSize: '14px' }}>
                반려견 심장사상충 원인 및 예방법
              </span>{' '}
              <br />
              <br />
              심장사상충이란 모기를 매개체로 반려견에게 질병을 일으키는
              기생충입니다. <br /> 감염된 반려견을 모기가 물면, 혈액 속의
              심장사상충 유충이 모기한테 들어가 자랍니다. <br /> 그리고 그
              모기가 다시 다른 강아지를 물면, 전엽이 이루어집니다.
              <br />
              <br />
              그런데, 반려견이 심장사상충 유충을 지닌 모기에 물린다고 곧바로
              증상이 나타나지 않습니다. <br />
              모기에 물린 후, 유충이 자라서 폐동맥까지 이동하는 데 수 개월이
              소요가 됩니다.
              <br />
              <br />
              <span style={{ padding: '0 10px', fontSize: '10px' }}>●</span>
              1기: 별다른 증상이 없음
              <br />
              <span style={{ padding: '0 10px', fontSize: '10px' }}>●</span>
              2기: 가벼운 기침, 식욕 감소
              <br />
              <span style={{ padding: '0 10px', fontSize: '10px' }}>●</span>
              3기: 심한 기침, 체중 감소, 활동량 감소, 빈혈
              <br />
              <span style={{ padding: '0 10px', fontSize: '10px' }}>●</span>4기:
              호흡곤란, 기력저하, 짙은 갈색 소변, 쇼크등
            </Text>
            <Grid
              borderRadius='15px'
              margin='36px auto 0'
              maxWidth='226px'
              width='100%'
              height='152px'
              bgi={
                process.env.PUBLIC_URL + '/img/QuizImg/Advanced2QuizImg2.svg'
              }
              bgisize='contain'
              bgiposition='center'
              bgirepeat='no-repeat'
            ></Grid>
          </Grid>
        </Grid>

        {/*지식 3번 */}

        <Grid is_flex maxWidth='414px' width='auto' margin='24px auto 0'>
          <Text margin='0 4px 0 0' size='16px' line_height='22px' weight='700'>
            3.
          </Text>
          <Grid>
            <Text margin='0' size='14px' line_height='21px' weight='700'>
              <span style={{ color: '#FE7968', fontSize: '14px' }}>
                강아지 눈곱 끼는 이유 및 관리법
              </span>
              <br />
              <br />
              <span style={{ color: '#FE7968', fontSize: '14px' }}>
                〈 체크 리스트 〉
              </span>
              <br />
              1) 눈곱 변화: 눈곱 양 증가, 색까 변함, 눈곱이 지속적으로 생겨남
              <br />
              <br />
              2) 안구 상태: 과도한 눈물 혹은 건조한 안구 상태, 충혈
              <br />
              <br />
              3) 행동 변화: 눈을 자꾸 긁거나 비빔, 불편한 쪽의 눈을 자꾸
              깜빡거림
              <br />
              <br />
              <span style={{ color: '#FE7968', fontSize: '14px' }}>
                〈 눈곱이 왜 심해질까? 〉
              </span>
              <br />
              1) 유루증 <br />
              유루증은 반려견이 눈물을 과도하게 흘리는 것입니다. 눈물을 흘리는
              상태가 지속된다면, <br />
              눈물자국이 생기고, 염증으로 이어져 냄새가 나면서 눈곱이 생길 수
              있습니다.
              <br />
              <br />
              2) 결막염 <br />
              눈꺼풀 안쪽 결막에 염증이 생기는 증상입니다. <br />
              이때는 눈곱이 진한 노란색을 띠고, 자고 <br />
              일어나면 딱딱하게 굳어있을 수 있습니다. <br />
              또한, 눈이 충혈되어 있거나 가려움을 느끼는 <br />
              반려견은 눈을 비비거나 깜빡거립니다. <br />
              알레르기가 원인이거나 기타 질환이 원인일 수 있기 때문에 정확한
              원인을 파악해야 합니다.
              <br />
              <br />
              3) 건성각결막염(안구건조증)
              <br />
              안구가 건조해져서 눈의 흰색 부분이 빨갛게 <br />
              혹은 갈색으로 변하고 눈곱이 생길 수 있습니다. <br /> <br />
              누점에 문제가 생겼거나 염증, 심지어 복용 약물 때문일 수 있습니다.{' '}
              <br />
              [반려견 눈곱 관리법] <br />
              질병에 따른 눈곱은 치료를 받아야 하지만 일상적인 눈곱은 집에서
              관리해주면 될 것입니다.
              <br />
              <br />
              4) 맨 손으로 닦으면 안 됩니다. <br />
              우리의 손은 그리 깨끗하지 않고, 자칫 찌를 수도 있습니다.
              <br />
              <br />
              5) 젖은 물수건 혹은 순면 화장솜 눈을 닦을 때, 이물질이 들어가지
              않는 것이 핵심입니다.
              <br />
              따라서, 젖은 물수건이나 화장솜을 사용해줍니다. <br />
              화장솜은 보풀이 생기거나 열 겹으로 쌓인 경우는 강아지 눈에 들어갈
              위험이 있으니 순면을 사용해줍니다.
              <br />
              <br />
              6) 눈 주위 털 잘라주기 눈 주위 털이 눈을 찌르지 않도록 주기적으로
              잘라줘야 합니다. 특히, 단두종은 각막이 약해서 눈곱이 잘 생깁니다.
              또한 장모종이라면 눈 주변 털이 찌르는 경우가 많으므로 이 부분에
              신경 써줘야 합니다.
            </Text>
            <Grid
              borderRadius='15px'
              margin='36px auto 0'
              maxWidth='226px'
              width='100%'
              height='152px'
              bgi={
                process.env.PUBLIC_URL + '/img/QuizImg/Advanced2QuizImg3.svg'
              }
              bgisize='contain'
              bgiposition='center'
              bgirepeat='no-repeat'
            ></Grid>
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
                강아지 알레르기 증상과 해결책
              </span>
              <br />
              <br />
              강아지 알레르기란 몸속에서 특정 물질에 대해 <br />
              과하게 반응을 보이는 상태를 뜻합니다. <br />
              강아지는 말을 못하기 때문에 몸에 이상이와도 <br />
              그것을 우리에게 말해줄 수는 없으나 특정 행동을 <br /> 보이기
              때문에 어느정도 알아챌 수 있습니다.
              <br />
              <br />
              1) 털을 자주 핥고 몸을 긁는다 개는 습관적으로 자신의 털을 핥고
              몸을 긁는 것처럼 보입니다. 하지만 평소보다 이러한 행동을 더 많이
              보인다면 알레르기가 발현됐을 가능성이 있습니다.
              <br />
              <br />
              2) 눈곱이 심하게 낀다 <br />
              눈곱은 녹내장, 결막염뿐 아니라 알레르기의 증상이기도 합니다.
              눈곱이 많이 끼어있는 반려견은 방향제, 담배연기, 먼지 등에 알레르기
              반응을 나타내고 있을 수 있습니다.
              <br />
              <br />
              3) 구토를 한다 <br />
              알레르기 강아지가 구토하는 일이 잦다면 수의사와 상의해보는 편이
              안전합니다.
              <br />
              <br />
              4) 발을 자주 깨문다 <br />
              특히 동물의 발에 큰 영향을 미칩니다. 꽃가루 등 계절성 알레르기일
              경우, 특히 더 발을 간지러워합니다.
              <br />
              <br />
              5) 화장실에 가는 횟수가 는다
              <br />
              <br />
              알레르기때문에 소화 기관이 예민해지면 설사를 하거나 자주 화장실에
              갈 수 있습니다.
              <br />
              하지만 이러한 증상은 알레르기 외에도 다른 질환과 연관되어 있을 수
              있기 때문에 역시 수의사와 상담해보는 것이 좋습니다.
              <br /> <br />
              <span style={{ color: '#FE7968', fontSize: '14px' }}>
                반려견의 알레르기를 예방하고 해결
              </span>
              하기 위해서
              <br />
              <span style={{ color: '#FE7968', fontSize: '14px' }}>
                다음의 방법을 사용
              </span>
              하는 것이 좋습니다.
              <br />
              <br />
              1) 자주 목욕 시키기
              <br /> 목욕은 개와 주인의 유대감을 높여 줄 도 방지합니다. 털과
              피부에 묻은 알레르기 유발 물질을 씻어내고 가려움증도 완화시킬 수
              있습니다. 이때 곡물 성분이 들어있지 않은 샴푸를 쓰도록 유의해야
              합니 다.
              <br />
              <br />
              2) 집 청소하기
              <br />
              당연한 이야기이지만 알레르기가 있는 반려견을키운다면 집안 청결에
              더 신경을 써야합니다. 청소기 등을 자주 사용해 먼지를 제거하고
              구석구석 더러움을 닦아내야 합니다.
              <br />
              <br />
              3) 꽃가루 주의하기 강아지는 산책을 좋아하기 때문에 꽃가루에 아예
              노출되지 않을 수는 없습니다. 다만, 꽃가루에 대한 사전 지식을 갖춰
              심각한 위험을 피할 수 있습니다.
              <br />
              <br />
              4) 카펫 깔지 않기 사람과 마찬가지로 동물도 카펫 속 먼지에 민감하게
              반응합니다. 섬유 소재의 카펫을 치우고 나무 바닥 또는 맨 바닥에서
              생활하는 것이 좋습니다
              <br />
              <br />
              5) 쿠션에 비닐 씌우기 반려견이 자주 눕는 등이 쉽게 더러워진다면 그
              위에 비닐을 씌워서 진드기가 곰팡이가 서식하는 것을 막을 수
              있습니다.
            </Text>
            <Grid
              borderRadius='15px'
              margin='36px auto 0'
              maxWidth='226px'
              width='100%'
              height='152px'
              bgi={
                process.env.PUBLIC_URL + '/img/QuizImg/Advanced2QuizImg4.svg'
              }
              bgisize='contain'
              bgiposition='center'
              bgirepeat='no-repeat'
            ></Grid>
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
                강아지 슬개골 탈구 증상과 치료법
              </span>
              <br />
              <br />
              슬개골이란 무릎 앞에 있는 무릎 뼈이며, <br />
              슬개골 탈구란 대퇴골 활차구의 깊이가 변형되거나 낮아져 슬개골이
              고정되지 못하고 쉽게 빠져 버리는 질환입니다. <br />
              강아지의 슬개골 탈구는 가정에서 많이 키우는 소형견에게 흔하게
              발생합니다. <br />
              가정에서 키우는 경우 미끄러운 바닥에서 생활하면서 강아지 슬개골
              탈구가 발생할 확률이 높습니다. <br />
              슬개골 탈구의 원인과 증상을 알아 두고 조기 발견해 치료하는 것이
              좋습니다. <br />
              <br />
              강아지 슬개골 탈구는 선천적인 요인으로 발생하는가 많지만 점프를
              자주 하거나 두 발로 서있는 자세를 취하면서 다리에 무리를 주는
              잘못된 생활 습관이나 발바닥 털로 인해 자주 미끄러지거나 미끄러운
              바닥에서 생활하다 보면 증상이 발생할 수 있습니다. 또한, 몸무게가
              많이 나가는 과체중의 경우에도 발병할 수 있어 체중 관리와 함께
              바닥에 매트를 깔거나 발바닥 털을 자주 확인하는 등 관리해주는 것이
              좋습니다.
              <br />
              <br />
              <span style={{ color: '#FE7968', fontSize: '14px' }}>
                〈 단계별 증상 〉
              </span>
              <br />
              <span style={{ fontSize: '10px' }}>●</span> 1기: 슬개골이 대부분
              무릎 고랑 안에 있지만 손으로 미는 경우, 원래의 위치에서 벗어나는
              단계입니다. 대개 초기에는 무증상으로 시작하는 경우가 많습니다.
              <br />
              <span style={{ fontSize: '10px' }}>●</span> 2기: 슬개골이 무릎
              고랑 안에 있는 경우와 밖에 있는 경우가 약 50%의 확률을 가지며
              손으로 밀면 쉽게 빠지는 단계입니다. <br />
              <span style={{ fontSize: '10px' }}>●</span> 3기: 슬개골이 대부분
              무릎 고랑 밖에 빠져 있는 상태가 계속되고 힘을 주면 원위치로
              돌아오는 단계입니다.
              <br />
              <span style={{ fontSize: '10px' }}>●</span> 4기: 슬개골이 항상
              빠져 있어 힘을 줘도 제자리로 돌아오지 않는 단계입니다. 강아지
              무릎을 만졌을 때 무릎 뼈가 빠지는 느낌이 들거나 무릎에서 뚝뚝
              소리가 나는 경우 슬개골 탈구를 의심해야 합니다. 산책하거나 걷다가
              갑자기 한 쪽 다리를 들고 다니거나 절뚝거리는 경우에도 의심해야
              합니다.
              <br />
              <br />이 외에도 평소와 다르게 절뚝거리면서 걷거나 <br /> 허리를
              자꾸 리며 걸을 때, 거침없이 올라가던 계단이나 침대처럼 높은 곳에
              올라가는 것을 힘들어 할 때, &nbsp;
              <span style={{ color: '#FE7968', fontSize: '14px' }}>
                동물병원에 방문해 슬개골 탈구 검진
              </span>
              을 받는 것이 좋습니다.
              <br />
              <br />
              슬개골 탈구는 대개 선천적인 문제에서 발생하는 많습니다. 하지만,
              초기에 슬개골에 좋다는 약을 먹이거나 과체중이 되지 않도록
              관리해주는 것은 진행을 늦출 뿐 근본적인 해결이 될 수는 없습니다.
              오히려, &nbsp;
              <span style={{ color: '#FE7968', fontSize: '14px' }}>
                슬개골이 다시 빠지지 않도록 교정하는 것이 더욱 중요합니다.
              </span>
            </Text>
            <Grid
              borderRadius='15px'
              margin='36px auto 0'
              maxWidth='226px'
              width='100%'
              height='152px'
              bgi={
                process.env.PUBLIC_URL + '/img/QuizImg/Advanced2QuizImg5.svg'
              }
              bgisize='contain'
              bgiposition='center'
              bgirepeat='no-repeat'
            ></Grid>
          </Grid>
        </Grid>

        <Grid
          cusor='pointer'
          position='fixed'
          left='0'
          right='0'
          bottom='130px'
          _onClick={() => {
            if (!token) {
              ErrorAlert('로그인 후 진행해주세요!');
              return;
            }

            history.push(`/advanced2quiz/${quizId}`);
          }}
          margin='0 auto'
          bg='#FE7968'
          width='157px'
          height='52px'
          borderRadius='26px'
          display='flex'
          justifyContent='center'
          alignItems='center'
          boxShadow='1px 1px 5px rgba(0, 0, 0, 0.5)'
        >
          <Text color='white' margin='0' weight='700'>
            퀴즈로 검증하기
          </Text>
        </Grid>
      </Grid>
    </>
  );
};

export default AdvancedKnowledge2;
