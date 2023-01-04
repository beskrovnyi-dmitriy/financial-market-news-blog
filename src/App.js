import { Routes, Route } from 'react-router-dom';
import Layout from './component/Layout';
import Articles from './component/Articles';
import Article from './component/Article';

function App() {
  
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Articles/>}/>
            <Route exact path='/:articleId' element={<Article/>}/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
