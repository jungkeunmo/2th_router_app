import React from "react";
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
    description : "이미지 설명",

  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
    description : "이미지 설명",

  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
    description : "이미지 설명",

  },
];

class Home extends React.Component {
    _click = (e, i) => {
        console.log(e);
        console.log(i);
    };

    render() {
        return <div>
            <ImageGallery 
                showNav={false} 
                items={images}
                thumbnailPosition="right"
                onThumbnailClick={this._click}
             />;
        </div>
    };
};

export default Home;