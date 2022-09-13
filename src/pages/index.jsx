import React, { useEffect, useState } from 'react'
import HomepageAction from '../components/index/HomePageAction'
import NotesList from '../components/notes/NotesList'
import { getActiveNotes } from '../utils/local-data'

export default function IndexPage() {
  const [notes, setNotes] = useState([])
  const [search, setSearch] = useState('')

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    setNotes(getActiveNotes())
  }, [])

  useEffect(() => {
    if (search !== '') {
      setNotes(
        getActiveNotes()
          .filter((note) => note.title.toLowerCase().includes(search.toLowerCase()))
      )
    } else {
      setNotes(getActiveNotes())
    }
  }, [search])
  return (
    <section className="homepage">
      <h2>Catatan Aktif</h2>
      <section className="search-bar">
        <input
          type="text"
          placeholder="Cari berdasarkan judul ..."
          value={search}
          onChange={handleSearch}
        />
      </section>
      {notes.length > 0 && <NotesList notes={notes} />}
      {notes.length === 0 && <p>Tidak ada catatan</p>}
      <HomepageAction />
    </section>
  )
}
