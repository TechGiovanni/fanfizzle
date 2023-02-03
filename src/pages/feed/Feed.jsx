import { useRef } from 'react';
// import { useDispatch } from 'react-redux';
import '@pages/feed/Streams.scss';
import '@pages/feed/Feed.scss';
// components
import Suggestions from '@components/suggestions/Suggestions';
// import { getUserSuggestions } from '@redux/api/suggestions';

const Feed = () => {
  const bodyRef = useRef(null);
  const bottomLineRef = useRef();
  // const dispatch = useDispatch();

  // useEffectOnce = () => {
  //   const calledOnce = useRef(false);

  //   useEffect(() => {
  //     if (!calledOnce.current) {
  //       dispatch(getUserSuggestions());
  //       calledOnce.current = true;
  //     }
  //   }, [dispatch]);
  // };

  return (
    <div className="streams">
      <div className="streams-content">
        <div className="streams-post" ref={bodyRef} style={{ backgroundColor: 'red' }}>
          <div>Post Form</div>
          <div>Post Items</div>
          <div ref={bottomLineRef} style={{ marginBottom: '50px', height: '50px' }}></div>
        </div>
        <div className="streams-suggestions">
          {' '}
          <Suggestions />{' '}
        </div>
      </div>
    </div>
  );
};

export default Feed;
