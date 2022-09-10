import React from 'react'
import { Link } from 'react-router-dom'
import HomepageAction from '../components/index/HomePageAction'

export default function IndexPage() {
  return (
    <section className="homepage">
      <h2>Catatan Aktif</h2>
      <section className="search-bar">
        <input type="text" placeholder="Cari berdasarkan judul ..." value="" />
      </section>
      <section className="notes-list">
        <article className="note-item">
          <h3 className="note-item__title">
            <Link to="/" title="/">Title</Link>
          </h3>
          <p className="note-item__createdAt">
            Kamis, 14 April 2022
          </p>
          <p className="note-item__body">
            Body/.
          </p>
        </article>
      </section>
      <HomepageAction />
    </section>
  )
}
