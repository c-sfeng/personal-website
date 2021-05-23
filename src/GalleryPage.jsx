import React from 'react';
import PrimaryBanner from './PrimaryBanner';
import Header from './Header';
import Footer from './Footer';
import test1 from './assets/gallery/gallery-test-1.jpg';
import test2 from './assets/gallery/gallery-test-2.jpg';
import test3 from './assets/gallery/gallery-test-3.jpg';
import test4 from './assets/gallery/gallery-test-4.jpg';
import test5 from './assets/gallery/gallery-test-5.jpg';
import test6 from './assets/gallery/gallery-test-6.jpg';
import test7 from './assets/gallery/gallery-test-7.jpg';
import './css/App.scss';
import './css/GalleryPage.scss';
import content from './assets/content';

const GalleryPage = () => {
  document.title = 'Gallery | Clarence Feng';

  return (
    <div className="App">
      <Header selected={2} />
      <PrimaryBanner
        imgURL={content.gallery.images.primaryImage}
        title={content.header.gallery}
        subtitle={content.gallery.gallerySubtitle}
      />
      <div className="container body-container card-columns" id="personal">
        <div className="card">
          <img src={test1} className="card-img-top" alt="test1" />
        </div>
        <div className="card">
          <img src={test2} className="card-img-top" alt="test2" />
        </div>
        <div className="card">
          <img src={test3} className="card-img-top" alt="test3" />
        </div>
        <div className="card">
          <img src={test4} className="card-img-top" alt="test4" />
        </div>
        <div className="card">
          <img src={test5} className="card-img-top" alt="test5" />
        </div>
        <div className="card">
          <img src={test6} className="card-img-top" alt="test6" />
        </div>
        <div className="card">
          <img src={test7} className="card-img-top" alt="test7" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GalleryPage;
