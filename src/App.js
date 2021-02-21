import 'bootstrap/dist/css/bootstrap.min.css';
import 'simplebar/dist/simplebar.min.css';
import BottomSection from './components/BottomSection';
import TopSection from './components/TopSection';
import Provider from './Context';

function App() {
  return (
    <div className="app">
      <div className="container pt-3 h-100">
        <div className="row h-100">
          <div className="col overflow-hidden">
            <Provider>
              <TopSection />
              <BottomSection />
            </Provider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
