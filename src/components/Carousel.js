import { useRef, useState } from 'react';
import Slick from 'react-slick';
import Card from './Card';
import styled from 'styled-components';
import settings from '../utils/settings';
import useFetch from '../utils/useFetch';
import ErrorBoundary from './ErrorBoundary';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const StyledCarousel = styled.div`
  margin-bottom: 0.5em;

  @media (min-width: 1440px) {
    .slick-slider {
      margin-right: -25px;
    }
  }
  .carousel-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1em;
    padding-right: 10px;
    h3 {
      margin: 0;
      font-weight: 700;
      font-size: 1.5em;
    }
    img {
      max-width: 20px;
      width: 100%;
    }
  }
  .carousel-item {
    outline: none !important;
    cursor: pointer;
  }
`;
export default function Carousel({ handleModal }) {
  const [page, setPage] = useState(1);
  const [payload, , handleLazyDispatch] = useFetch(
    'best_podcasts?page=5&region=us&safe_mode=0',
    {
      key: 'podcasts',
      lazy: true,
    }
  );

  const onLazyDispatch = () => {
    handleLazyDispatch(`best_podcasts?page=${page}&region=us&safe_mode=0`);
    setPage((prev) => {
      if (prev >= 5) return 1;
      return prev + 1;
    });
  };

  return (
    <ErrorBoundary onReset={onLazyDispatch}>
      <CarouselView payload={payload} handleModal={handleModal} />
    </ErrorBoundary>
  );
}

function CarouselView({ payload: { data, status, error } = {}, handleModal }) {
  const carouselRef = useRef();
  const handleNext = () => {
    carouselRef.current.slickNext();
  };

  const handlePrev = () => {
    carouselRef.current.slickPrev();
  };

  if (status === 'rejected') throw new Error('Something went wrong');
  const results = data?.length ? data : Array(8).fill(0);

  const handleClick = (id) => {
    handleModal(id);
  };
  return (
    <StyledCarousel>
      <div className="carousel-header ">
        <h3>Top Podcasts</h3>
        <div>
          <CarouselControl onClick={handlePrev}>
            <img src="/chevron-left.png" alt="left" />
          </CarouselControl>
          <CarouselControl onClick={handleNext}>
            <img src="/chevron-right.png" alt="right" />
          </CarouselControl>
        </div>
      </div>
      <Slick ref={carouselRef} {...settings}>
        {results.map((podcast, index) => (
          <div
            className="carousel-item"
            onClick={() => handleClick(podcast.id)}
            key={podcast?.id || index}
          >
            <Card
              src={podcast?.image}
              author={podcast?.publisher}
              title={podcast?.title}
            />
          </div>
        ))}
      </Slick>
    </StyledCarousel>
  );
}

const ChevronButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none !important;
  cursor: pointer;
`;

function CarouselControl({ children, onClick }) {
  return (
    <ChevronButton type="button" onClick={onClick}>
      {children}
    </ChevronButton>
  );
}
