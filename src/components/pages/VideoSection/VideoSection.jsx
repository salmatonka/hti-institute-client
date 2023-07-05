import React from 'react';

const VideoSection = () => {
    return (
        
          <div>
            

            {/* <video id="my_video" width="100%" height="auto" poster="images/video.jpg" alt="your browser is not support this video" controls="">
                          <source src="" />
                          </video> */}

{/* <video  id="my_video" width="100%" height="auto"  alt="your browser is not support this video" controls="">
  <source src="https://www.bdhti.com/video/video.mp4" type="video/mp4" />
  
  Your browser does not support HTML video.
</video> */}

<video id="my_video" width="100%" height="auto" alt="your browser is not support this video" controls>
  <source src="https://www.bdhti.com/video/video.mp4" type="video/mp4" />
  <source src="movie.ogg" type="video/ogg" />
  Your browser does not support the video tag.
</video>

          </div>
        
    );
};

export default VideoSection;