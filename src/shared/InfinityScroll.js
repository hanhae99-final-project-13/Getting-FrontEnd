import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postActions } from '../redux/modules/post';

const InfinityScroll = ({ page }) => {
  const dispatch = useDispatch();
  const searchSetting = useSelector((state) => state.post.searchSetting);
  const getMoreTrigger = React.useRef();

  const getMoreObserver = new IntersectionObserver((entry) => {
    if (entry[0].isIntersecting) {
      const newSearchSetting = { ...searchSetting, page: page + 1 };
      dispatch(postActions.setSearch(newSearchSetting));
      dispatch(postActions.getMorePostMW(newSearchSetting));
    }
  });

  React.useEffect(() => {
    getMoreObserver.observe(getMoreTrigger.current);

    return () => getMoreObserver.disconnect();
  }, []);
  return <div ref={getMoreTrigger} />;
};

export default InfinityScroll;
