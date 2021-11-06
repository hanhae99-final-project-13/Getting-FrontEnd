import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchActions } from '../redux/modules/search';
import { postActions } from '../redux/modules/post';

const InfinityScroll = (props) => {
  const dispatch = useDispatch();
  const searchSetting = useSelector((state) => state.search.searchSetting);
  const getMoreTrigger = React.useRef();
  

  const page = searchSetting.page;
  console.log(page);
  const getMoreObserver = new IntersectionObserver((entry) => {
    if (entry[0].isIntersecting) {
      const newPage = page + 1;
      const newSearchSetting = { ...searchSetting, page: newPage };
      dispatch(searchActions.setSearch(newSearchSetting));
      dispatch(postActions.getMorePostMW(newSearchSetting));
    }
  });

  React.useEffect(() => {
    // if (searchSetting.page === 0) {
    //   return;
    // }
    getMoreObserver.observe(getMoreTrigger.current);

    return () => {
      getMoreObserver.disconnect();
    };
  }, []);
  
  return <div ref={getMoreTrigger}></div>;
};

export default InfinityScroll;
