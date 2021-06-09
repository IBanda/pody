import { useState } from 'react';
import Header from './Header';
import Modal from './Modal';
import SearchInput from './SearchInput';

export default function LeftSideBar() {
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
        <div className="row pt-3">
          <div className="col-lg-12 text-center mb-1">
            <img
              style={{ maxWidth: 50, width: '100%' }}
              src="/logo.png"
              alt="logo"
            />
          </div>
          <div className="col-lg-12">
            <SearchInput handleModal={handleModal} />
          </div>
        </div>
      </Header>

      {show && (
        <Modal podcastId={podcastId} show={show} onHide={onCloseModal} />
      )}
    </>
  );
}
