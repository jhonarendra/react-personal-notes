import React, { useEffect, useState } from 'react'
import HomepageAction from '../components/index/HomePageAction'
import NotesList from '../components/notes/NotesList'
import { getAllNotes } from '../utils/local-data'

export default function IndexPage() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    setNotes(getAllNotes())
  }, [])

  return (
    <section className="homepage">
      <h2>Catatan Aktif</h2>
      <section className="search-bar">
        <input type="text" placeholder="Cari berdasarkan judul ..." value="" />
      </section>
      <NotesList notes={notes} />
      <HomepageAction />
    </section>
  )
}
