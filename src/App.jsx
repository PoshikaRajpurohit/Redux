import './App.css'
import { Route, Routes } from 'react-router';
import Header from './Components/Header';
import Home from './Components/Home';
import AddBook from './Components/Add';
import EditBook from './Components/Edit';
import NotFound from './Components/NotFound';


function App() {

  return (
    <>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add-book' element={<AddBook />} />
        <Route path='/edit-book/:id' element={<EditBook />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App;
