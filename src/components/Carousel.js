import { useEffect, useRef, useState } from 'react';
import Slick from 'react-slick';
import Card from './Card';
import styled from 'styled-components';
import settings from '../utils/settings';
import useFetch from '../utils/useFetch';
import ErrorBoundary from './ErrorBoundary';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Modal from './Modal';
import { usePlayer } from '../Context';
import { observer } from 'mobx-react-lite';

const StyledCarousel = styled.div`
  margin-bottom: 0.5em;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.12);
  padding: 1em;
  overflow: hidden;
  border-radius: 10px;
  background-color: #fff;
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
      font-size: 1.05em;
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
export default observer(function Carousel() {
  const [page, setPage] = useState(1);
  const [payload, , handleLazyDispatch] = useFetch(
    'best_podcasts?page=5&region=us&safe_mode=0',
    {
      key: 'podcasts',
      lazy: true,
    }
  );

  const { genreId } = usePlayer();

  useEffect(() => {
    if (genreId) {
      handleLazyDispatch(`best_podcasts?genre_id=${genreId}`);
    }
  }, [genreId, handleLazyDispatch]);

  const onLazyDispatch = () => {
    handleLazyDispatch(`best_podcasts?page=${page}&region=us&safe_mode=0`);
    setPage((prev) => {
      if (prev >= 5) return 1;
      return prev + 1;
    });
  };

  return (
    <ErrorBoundary onReset={onLazyDispatch}>
      <CarouselView payload={payload} />
    </ErrorBoundary>
  );
});

function CarouselView({ payload: { data, status, error } = {} }) {
  const [modal, setModal] = useState('close');
  const [podcastId, setId] = useState('');
  const handleModal = (id) => {
    setId(id);
    setModal('show');
  };
  const onCloseModal = () => {
    setModal('close');
  };
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
  const show = modal === 'show';
  return (
    <>
      <StyledCarousel className="carousel">
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
              className="carousel-item col pl-0"
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
      {show && (
        <Modal podcastId={podcastId} show={show} onHide={onCloseModal} />
      )}
    </>
  );
}

const ChevronButton = styled.button`
  background-color: transparent;
  border: 1px solid rgb(30, 60, 114);
  outline: none !important;
  cursor: pointer;
`;

function CarouselControl({ children, onClick }) {
  return (
    <ChevronButton className="mr-2 rounded" type="button" onClick={onClick}>
      {children}
    </ChevronButton>
  );
}
