import React from 'react';
import styled from 'styled-components';
import AddressData from './AddressData';
import { Grid } from '../elements/index';
const AddressSelector = (props) => {
  const [DoVisible, setDoVisible] = React.useState('block');
  const [modalOpen, setModalOpen] = React.useState(false);
  const [localDo, setLocalDo] = React.useState('');
  const local = AddressData;
  const closeModal = () => {
    props.visible(!props.addressModal);
  };
  const open = (e) => {
    if (e) {
      setDoVisible('none');
      setModalOpen(!modalOpen);
    }
  };

  return (
    <>
      <Grid
        position='fixed'
        top='0'
        left='0'
        rigth='0'
        zIndex='10000'
        display='flex'
      >
        <Grid
          position='fixed'
          zindex='10'
          display='flex'
          justifyContent='center'
          alignItems='center'
          width='100%'
          height='100%'
          bg='rgba(0, 0, 0, 0.5)'
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
            position='fixed'
            top='0'
            left='0'
            rigth='0'
            zindex='20'
            display='flex'
          >
            <Grid
              position='fixed'
              zindex='25'
              display='flex'
              justifyContent='center'
              alignItems='center'
              width='100%'
              height='100%'
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
  position: relative;
  z-index: 15;
  width: 305px;
  height: 40%;
  margin: auto;
  padding: 10px 0;
  background-color: white;
  overflow: auto;
  border-radius: 15px;
`;
const DoBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 40px;
  margin: 10px auto;
  color: white;
  background-color: #ff6666;
  border-radius: 20px;
  cursor: pointer;
`;

export default AddressSelector;
