import React from 'react';
import { Grid } from '../../elements/index';
import AddressSelector from '../AddressSelector';
const Address = ({
  address,
  siAddress,
  addressSelect,
  addressModal,
  setAddress,
  setSiAddress,
}) => {
  return (
    <Grid padding='15px 0' borderTop='1px solid rgba(225, 225, 225, 0.5)'>
      <input
        placeholder='주소'
        type='text'
        value={address + siAddress}
        onClick={addressSelect}
        style={{ border: 'none', cursor: 'pointer' }}
      />
      {addressModal ? (
        <AddressSelector
          visible={addressSelect}
          setAddress={setAddress}
          siAddress={siAddress}
          setSiAddress={setSiAddress}
          addressModal={addressModal}
        />
      ) : null}
    </Grid>
  );
};
export default Address;
