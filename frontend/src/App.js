import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { HomePage } from './pages/HomePage';
import { QuestionsBoardPage } from './pages/QuestionsBoardPage'
import { QuestionPage } from './pages/QuestionPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { EditQuestionsPage } from './pages/EditQuestionsPage';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/questions" element={<QuestionsBoardPage />} />
        <Route path="/questions/:questionRow/:questionId" element={<QuestionPage />} />
        <Route path="/edit" element={<EditQuestionsPage />}/>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
