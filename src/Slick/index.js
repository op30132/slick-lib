import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import range from 'lodash/range';
import map from 'lodash/map';
import { Wrapper, PlaceHolder } from './style';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'intersection-observer';

const Slick = ({ banners }) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const root = sliderRef.current;

    if (!root) return;

    const callback = (entries) =>
      entries.forEach((entry) => {
        const { target } = entry;
        const isActive = target.parentNode?.parentNode?.className.includes(
          'slick-slide slick-active',
        );

        if (!(entry.intersectionRatio < 0.5) || !isActive) {
          target.style.transition = 'all 0.2s';
          target.style.transform = 'scale(1)';
          target.style.opacity = 1;
          target.parentNode.parentNode.style.opacity = 1;
        }

        if (entry.intersectionRatio && entry.intersectionRatio < 0.5) {
          target.style.transition = 'all 0.2s';
          target.style.transform = 'scaleY(0.95)';
          target.parentNode.parentNode.style.opacity =
            0.3 + entry.intersectionRatio;
        }

        if (entry.intersectionRatio > 0.5 && !isActive) {
          target.style.transition = 'all 0.2s';
          target.parentNode.parentNode.style.transition = 'opacity 0.2s';
          target.style.opacity = 1;
          target.parentNode.parentNode.style.opacity = 1;
        }
      });

    const options = {
      root,
      threshold: range(0, 1, 0.001),
    };

    const observer = new IntersectionObserver(callback, options);

    const slicks = document.getElementsByClassName('slicks');
    Array.from(slicks).forEach((slick) => {
      observer.observe(slick);
    });

    // eslint-disable-next-line consistent-return
    return () => Array.from(slicks).forEach((slick) => observer.observe(slick));
  }, [banners]);

  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 4500,
    speed: 725,
    infinite: true,
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false,
  };


  return (
    <Wrapper ref={sliderRef}>
      <Slider {...settings}>
        {map(banners?.imgs, (banner) => (
          <div
            className="slicks"
            key={banner.imageUrl}
          >
            <picture>
              <source srcSet={banner.imageWebpUrl} type="image/webp" />
              <PlaceHolder
                data-gtm-event="EBPPWeb_Banner"
                data-gtm-view-property={JSON.stringify({
                  banner_url: banner.imageUrl,
                })}
                data-gtm-click-property={JSON.stringify({
                  banner_url: banner.imageUrl,
                })}
              >
                <img src={banner.imageUrl} alt="banner" />
              </PlaceHolder>
            </picture>
          </div>
        ))}
      </Slider>
    </Wrapper>
  );
};


export default React.memo(Slick);
