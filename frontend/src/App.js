import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { HomePage } from './pages/HomePage';
import { QuestionsBoardPage } from './pages/QuestionsBoardPage'
import { QuestionPage } from './pages/QuestionPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { EditQuestionsPage } from './pages/EditQuestionsPage';
import { ScoreboardPage } from './pages/ScoreboardPage';

function App() {
  return (
    <div className='App'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/questions_board" element={<QuestionsBoardPage />} />
        <Route path="/question/:questionId" element={<QuestionPage />} />
        <Route path="/scoreboard" element={<ScoreboardPage />} />
        <Route path="/edit" element={<EditQuestionsPage />}/>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;
