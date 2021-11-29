import React from 'react';
import styled from 'styled-components';
import AddressData from './AddressData';
import { Grid } from '../elements/index';
const AddressSelector = (props) => {
  const local = AddressData;
  const closeModal = () => {
    props.visible(!props.addressModal);
  };
  const [DoVisible, setDoVisible] = React.useState('block');
  const [modalOpen, setModalOpen] = React.useState(false);
  const [localDo, setLocalDo] = React.useState('');
  const open = (e) => {
    if (e) {
      setDoVisible('none');
      setModalOpen(!modalOpen);
    }
  };

  return (
    <>
      <Grid
        display='flex'
        position='fixed'
        zIndex='10000'
        top='0'
        left='0'
        rigth='0'
      >
        <Grid
          display='flex'
          bg='rgba(0, 0, 0, 0.5)'
          width='100%'
          height='100%'
          zindex='10'
          position='fixed'
          justifyContent='center'
          alignItems='center'
        ></Grid>
        <ModalBox style={{ display: `${DoVisible}` }}>
          {Object.keys(local).map((Do, i) => {
            return (
              <DoBox
                key={i}
                onClick={() => {
                  setLocalDo(Do);
                  props.setAddress(Do);
                  open(Do);
                }}
              >
                {Do}
              </DoBox>
            );
          })}
        </ModalBox>
        {modalOpen ? (
          <Grid
            display='flex'
            zindex='20'
            position='fixed'
            top='0'
            left='0'
            rigth='0'
          >
            <Grid
              display='flex'
              width='100%'
              height='100%'
              zindex='25'
              position='fixed'
              justifyContent='center'
              alignItems='center'
            >
              <ModalBox>
                {local[localDo].map((d, i) => {
                  return (
                    <DoBox
                      key={i}
                      onClick={() => {
                        props.setSiAddress(' ' + d);
                        closeModal();
                      }}
                    >
                      {d}
                    </DoBox>
                  );
                })}
              </ModalBox>
            </Grid>
          </Grid>
        ) : null}
      </Grid>
    </>
  );
};

const ModalBox = styled.div`
  margin: auto;
  position: relative;
  width: 305px;
  height: 40%;
  background-color: white;
  border-radius: 15px;
  z-index: 15;
  overflow: auto;
  padding: 10px 0;
`;
const DoBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  width: 150px;
  height: 40px;
  border-radius: 20px;
  color: white;
  background-color: #ff6666;
  cursor: pointer;
`;

export default AddressSelector;
