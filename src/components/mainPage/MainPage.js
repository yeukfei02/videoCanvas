import React, { useState, useEffect } from 'react';
import CanvasVideo from 'react-canvas-video';

import backgroundMusic from '../../audio/background-music.mp3';

const data = [
  {
    index: 0,
    sentence: "This is a simple Javascript test",
    media: "https://miro.medium.com/max/1024/1*OK8xc3Ic6EGYg2k6BeGabg.jpeg",
    duration: 3
  },
  {
    index: 1,
    sentence: "Here comes the video!",
    media: "https://media.gettyimages.com/videos/goodlooking-young-woman-in-casual-clothing-is-painting-in-workroom-video-id1069900546",
    duration: 5
  }
];
const audio = new Audio(backgroundMusic);

function MainPage() {
  const [autoplay, setAutoplay] = useState(false);
  let [count, setCount] = useState(0);

  useEffect(() => {
    if (autoplay) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [autoplay]);

  useEffect(() => {
    if (count >= 15) {
      window.location.reload();
    }
  }, [count]);

  const handleCanvasVideoClick = () => {
    if (!autoplay) {
      setAutoplay(true);
      setInterval(() => {
        count += 1;
        setCount(count);
      }, 1000);
    } else {
      setAutoplay(false);
    }
  }

  return (
    <div className="d-flex justify-content-center" style={{ marginTop: '5em' }}>
      <div style={{ width: '70%', height: '70%' }} onClick={handleCanvasVideoClick}>
        <CanvasVideo
          src={data[1].media}
          options={{
            text: data[0].sentence,
            poster: data[0].media,
            autoplay: autoplay
          }}
          styles={{
            barContainer: {
              display: 'none'
            }
          }}
        />
      </div>
    </div>
  );
}

export default MainPage;
