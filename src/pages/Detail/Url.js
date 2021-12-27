import React from 'react';
import { Grid } from '../../elements/index';
const Url = ({ post }) => {
  return (
    <Grid
      display='flex'
      margin='20px 0 0 0'
      padding='0 0 15px 0'
      borderBottom='1px solid rgba(225, 225, 225, 0.8)'
    >
      <Grid display='flex' justifyContent='space-between' alignItems='center'>
        <span
          style={{
            color: '#6B6462',
            fontSize: '14px',
            fontWeight: '800',
          }}
        >
          웹사이트
        </span>
        <span style={{ margin: '0 5px 0 10px', cursor: 'pointer' }}>
          {post.post.url === null || post.post.url === '' ? (
            '없음'
          ) : post.post.url.includes('http') ? (
            post.post.url.includes('instagram.com') ? (
              <img
                src={process.env.PUBLIC_URL + '/img/GUIicon/instagram_icon.svg'}
                style={{ width: '30px' }}
                onClick={() => window.open(`${post.post.url}`, '_blank')}
              />
            ) : post.post.url.includes('facebook.com') ? (
              <img
                src={process.env.PUBLIC_URL + '/img/GUIicon/facebook_icon.svg'}
                style={{ width: '30px' }}
                onClick={() => window.open(`${post.post.url}`, '_blank')}
              />
            ) : post.post.url.includes('twitter.com') ? (
              <img
                src={process.env.PUBLIC_URL + '/img/GUIicon/twitter_icon.svg'}
                style={{ width: '30px' }}
                onClick={() => window.open(`${post.post.url}`, '_blank')}
              />
            ) : (
              <img
                src={process.env.PUBLIC_URL + '/img/icon/link_icon.svg'}
                style={{ width: '20px' }}
                onClick={() => window.open(`${post.post.url}`, '_blank')}
              />
            )
          ) : post.post.url.includes('instagram.com') ? (
            <img
              src={process.env.PUBLIC_URL + '/img/GUIicon/instagram_icon.svg'}
              style={{ width: '30px' }}
              onClick={() => window.open(`http://${post.post.url}`, '_blank')}
            />
          ) : post.post.url.includes('facebook.com') ? (
            <img
              src={process.env.PUBLIC_URL + '/img/GUIicon/facebook_icon.svg'}
              style={{ width: '30px' }}
              onClick={() => window.open(`http://${post.post.url}`, '_blank')}
            />
          ) : post.post.url.includes('twitter.com') ? (
            <img
              src={process.env.PUBLIC_URL + '/img/GUIicon/twitter_icon.svg'}
              style={{ width: '30px' }}
              onClick={() => window.open(`http://${post.post.url}`, '_blank')}
            />
          ) : post.post.url === null ? (
            '없음'
          ) : (
            <img
              src={process.env.PUBLIC_URL + '/img/icon/link_icon.svg'}
              style={{ width: '30px' }}
              onClick={() => window.open(`http://${post.post.url}`, '_blank')}
            />
          )}
        </span>
      </Grid>
    </Grid>
  );
};

export default Url;
