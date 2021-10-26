import React from 'react';
import { Grid, Image } from '../elements/index';

const AddPost = () => {
  const [petName, setPetName] = React.useState('');
  const [breed, setBreed] = React.useState('');
  const [age, setAge] = React.useState('');
  const [weight, setWeight] = React.useState('');
  const [lostLocation, setLostLocation] = React.useState('');
  const [ownerType, setOwnerType] = React.useState('');
  const [condition, setCondition] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [url, setUrl] = React.useState('');
  const [tag, setTag] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [extra, setExtra] = React.useState('');

  return (
    <React.Fragment>
      <Grid>
        <Image />
        {/* 체크박스, 이름없음 체크박스 */}
        <p>
          <input
            placeholder='이름'
            value={petName}
            onChange={(e) => {
              setPetName(e.target.value);
            }}
          />
        </p>

        {/* 토글버튼, 남아 여아 */}
        <p>
          <input
            placeholder='견종'
            value={breed}
            onChange={(e) => {
              setBreed(e.target.value);
            }}
          />
        </p>

        <p>
          <input
            placeholder='나이'
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </p>

        <p>
          <input
            placeholder='체중'
            value={weight}
            onChange={(e) => {
              setWeight(e.target.value);
            }}
          />
        </p>

        <p>
          <input
            placeholder='발견장소'
            value={lostLocation}
            onChange={(e) => {
              setLostLocation(e.target.value);
            }}
          />
        </p>

        {/* 토글버튼, 개인, 보호소*/}
        <p>
          <input
            placeholder='보호장소'
            value={ownerType}
            onChange={(e) => {
              setOwnerType(e.target.value);
            }}
          />
        </p>

        {/* 토글버튼, 임시보호중, 입양중 */}
        <p>
          <input
            placeholder='상태'
            value={condition}
            onChange={(e) => {
              setCondition(e.target.value);
            }}
          />
        </p>

        {/* 시 단위까지 추가  얘기해봐야함*/}
        <p>
          <input
            placeholder='주소'
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </p>

        <p>
          <input
            placeholder='사이트 주소'
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
            }}
          />
        </p>

        {/* 토글버튼, 직접등록, 가져온정보 */}
        <p>
          <input
            placeholder='정보출처'
            value={tag}
            onChange={(e) => {
              setTag(e.target.value);
            }}
          />
        </p>

        <p>
          <input
            placeholder='연락처 정보'
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </p>

        <p>
          <textarea
            placeholder='특이사항'
            value={extra}
            onChange={(e) => {
              setExtra(e.target.value);
            }}
          />
        </p>
      </Grid>
    </React.Fragment>
  );
};

export default AddPost;
