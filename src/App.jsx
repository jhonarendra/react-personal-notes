import React from 'react'
import {
  Link, Navigate, Route, Routes
} from 'react-router-dom'

import IndexPage from './pages'
import NotFoundPages from './pages/not-found'
import ArchivesPage from './pages/archives'
import NotesIdPages from './pages/notes/_id'
import NotesNewPages from './pages/notes/new'
import ThemeToggler from './components/layout/ThemeToggler'

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>
          <Link to="/">Aplikasi Catatan</Link>
        </h1>
        <nav className="navigation">
          <ul>
            <li><Link to="/archives" title="Archives">Arsip</Link></li>
            <li>
              <ThemeToggler />
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/archives" element={<ArchivesPage />} />
          <Route path="/notes" element={<Navigate to="/" replace />} />
          <Route path="/notes/new" element={<NotesNewPages />} />
          <Route path="/notes/:id" element={<NotesIdPages />} />
          <Route path="*" element={<NotFoundPages />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
