import { useState } from 'react';
import Carousel from './Carousel';
import Header from './Header';
import Modal from './Modal';

import SearchInput from './SearchInput';
export default function TopSection() {
  const [modal, setModal] = useState('close');
  const [podcastId, setId] = useState('');
  const handleModal = (id) => {
    setId(id);
    setModal('show');
  };
  const onCloseModal = () => {
    setModal('close');
  };
  const show = modal === 'show';
  return (
    <>
      <Header>
        <div className="row">
          <div className="col-lg-5 col-md-4 order-1 order-md-0 text-center my-3 my-md-0 text-md-left">
            <img
              style={{ maxWidth: 75, width: '100%' }}
              src="/logo.png"
              alt="logo"
            />
          </div>
          <div className="col-lg-7 col-md-8 order-0 order-md-1 ">
            <SearchInput handleModal={handleModal} />
          </div>
        </div>
      </Header>

      <Carousel handleModal={handleModal} />

      {show && (
        <Modal podcastId={podcastId} show={show} onHide={onCloseModal} />
      )}
    </>
  );
}
