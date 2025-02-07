
import { BrowserRouter,Routes,Route } from 'react-router';
import Api from './components/api';
import ShowMore from './components/ShowMore';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/api" element={<Api />} />
          <Route path="/api/:id" element={<ShowMore />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;