import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchActions } from '../redux/modules/search';
import { postActions } from '../redux/modules/post';

const InfinityScroll = (props) => {
  const dispatch = useDispatch();
  const searchSetting = useSelector((state) => state.search.searchSetting);
  const getMoreTrigger = React.useRef(); 
  
  
  const getMoreObserver = new IntersectionObserver((entry) => {        
    if (entry[0].isIntersecting) {      
      
      console.log(props.page);
      const newSearchSetting = { ...searchSetting, page: props.page + 1 };
      console.log(newSearchSetting)
      dispatch(searchActions.setSearch(newSearchSetting));
      dispatch(postActions.getMorePostMW(newSearchSetting));      
    }
  });

  React.useEffect(() => {    
    getMoreObserver.observe(getMoreTrigger.current);

    return () => getMoreObserver.disconnect();    
  }, []);
  return (    
      <div ref={getMoreTrigger}/>
    
  );
};

export default InfinityScroll;
