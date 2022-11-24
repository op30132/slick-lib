import styled from 'styled-components';
import bannerDefault from 'images/banner-default.png';

const Wrapper = styled('div')`
  margin: 15px 0 0;
  background-color: transparent;
  touch-action: pan-x;
  width: 100%;

  * {
    outline: none;
  }

  .slick-active {
    opacity: 1;
  }

  .slick-slide {
    transition: all 0.2s;
    padding: 0 15px;
    border-radius: 10px;
    opacity: 0.5;
    width: 70%;
  }

  .slicks {
    overflow: hidden;
    display: flex !important;
    border-radius: 15px;
    height: 100%;
    width: 100%;
  }

  .slick-dots {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    list-style: none;
    text-align: center;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 32px;
    display: flex !important;
    bottom: 10px;
    width: auto;
    padding: 1px;
  }

  .slick-dots ul {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .slick-dots li {
    position: relative;
    display: inline-block;
    margin: 3px;
    height: auto;
    width: auto;
    padding: 0;
    cursor: pointer;
  }

  .slick-dots li.slick-active {
    transform: scale(1.5);
    border-radius: 20px;
    background-color: #fff !important;
    transform-origin: center;

    button {
      background-color: #fff;
    }
  }

  .slick-dots li button {
    font-size: 0;
    line-height: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4px;
    padding: 0px;
    cursor: pointer;
    border: 0;
    outline: none;
    height: 4px;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 20px;

    :before {
      display: none;
    }
  }

  img {
    width: 100%;
    height: 100%;
    max-height: 150px;
    min-width: calc(100vw - 30px);
  }
`;

const PlaceHolder = styled('div')`
  width: 100%;
  height: 31vw;
  max-height: 150px;
  max-width: calc(100vw - 30px);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(${bannerDefault});
`;

const PlaceHolderLoadable = styled('div')`
  height: 31vw;
  max-height: 150px;
  max-width: calc(100vw - 30px);
  overflow: hidden;
  margin: 15px auto 0;
`;

export { Wrapper, PlaceHolderLoadable, PlaceHolder };
