import 'bootstrap/dist/css/bootstrap.min.css';
import 'simplebar/dist/simplebar.min.css';
import Genres from './components/Genres';
import RightSection from './components/RightSection';
import LeftSideBar from './components/LeftSideBar';
import Provider from './Context';

function App() {
  return (
    <div className="app w-100 h-100">
      <div className="container-fluid p-0  h-100">
        <div className="row h-100 w-100 m-0">
          <Provider>
            <div className=" col-xl-3 search">
              <LeftSideBar />
              <Genres />
            </div>
            <div
              className=" col-xl-9 pt-3 h-100"
              style={{ backgroundColor: '#f6f8fa' }}
            >
              <RightSection />
            </div>
          </Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
