import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchActions } from '../redux/modules/search';
import { postActions } from '../redux/modules/post';

const InfinityScroll = (props) => {
  const dispatch = useDispatch();
  const searchSetting = useSelector((state) => state.search.searchSetting);

  const getMoreTrigger = React.useRef();

  let newPage = searchSetting.page;

  const getMoreObserver = new IntersectionObserver((entry) => {
    console.log(entry);
    console.log(entry[0].isIntersecting);
    if (entry[0].isIntersecting) {
      newPage += 1;
      const newSearchSetting = { ...searchSetting, page: newPage };
      dispatch(postActions.getMorePostMW(newSearchSetting));
    }
  });

  React.useEffect(() => {
    getMoreObserver.observe(getMoreTrigger.current);

    // return () => getMoreObserver.unobserve(getMoreTrigger.current);
  }, []);

  return <div ref={getMoreTrigger}></div>;
};

export default InfinityScroll;
