import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { apis } from '../../lib/axios';

const SET_SEARCH = 'SET_SEARCH';

const setSearch = createAction(SET_SEARCH, (searchSetting) => ({
  searchSetting,
}));

const initialState = {
  searchSetting: {
    page: 0,
    startDt: undefined,
    endDt: undefined,
    ownerType: undefined,
    city: undefined,
    district: undefined,
    sort: 'new',
  },
};

export default handleActions(
  {
    [SET_SEARCH]: (state, action) =>
      produce(state, (darft) => {
        darft.searchSetting = {
          ...darft.searchSetting,
          ...action.payload.searchSetting,
        };
      }),
  },
  initialState,
);

const searchActions = {
  setSearch,
};
export { searchActions };
