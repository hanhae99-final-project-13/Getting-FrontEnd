import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postActions } from '../redux/modules/post';

const InfinityScroll = ({ page }) => {
  const dispatch = useDispatch();
  const searchSetting = useSelector((state) => state.post.searchSetting);
  const getMoreTrigger = React.useRef();

  const getMoreObserver = new IntersectionObserver((entry) => {
    if (entry[0].isIntersecting) {
      const _page = searchSetting.page;
      const newSearchSetting = { ...searchSetting, page: _page + 1 };
      console.log(newSearchSetting);
      dispatch(postActions.setSearch(newSearchSetting));
      dispatch(postActions.getMorePostMW(newSearchSetting));
      console.log(newSearchSetting);
    }
  });

  React.useEffect(() => {
    getMoreObserver.observe(getMoreTrigger.current);

    return () => getMoreObserver.disconnect();
  }, []);
  return <div ref={getMoreTrigger} />;
};

export default InfinityScroll;
