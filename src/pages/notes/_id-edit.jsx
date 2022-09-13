import React, { useEffect, useState } from 'react'
import parser from 'html-react-parser'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { HiArrowLeft } from 'react-icons/hi'
import { showFormattedDate } from '../../utils'
import {
  archiveNote, deleteNote, getNote, unarchiveNote
} from '../../utils/local-data'
import NotesIdPageAction from '../../components/notes/NotesIdPageAction'

export default function NotesIdEditPages() {
  const [note, setNote] = useState({})
  const { id } = useParams()
  const navigate = useNavigate()

  const handleEdit = () => {
    navigate(`/notes/${id}/edit`)
  }

  const handleArchive = () => {
    if (note.archived) {
      unarchiveNote(id)
      navigate('/archives')
    } else {
      archiveNote(id)
      navigate('/')
    }
  }

  const handleDelete = () => {
    deleteNote(id)
    navigate('/')
  }

  useEffect(() => {
    setNote(getNote(id))
  }, [])
  return (
    <section className="detail-page">
      <Link
        to="/"
        title="Kembali"
      >
        <HiArrowLeft />
        {' '}
        Kembali
      </Link>
      { 'id' in note ? (
        <>
          <h3 className="detail-page__title">
            { note.title }
          </h3>
          <p className="detail-page__createdAt">
            {showFormattedDate(note.createdAt)}
          </p>
          <div className="detail-page__body">
            { parser(note.body) }
          </div>
        </>
      ) : (
        <p>Data tidak ditemukan</p>
      )}
      <NotesIdPageAction
        archived={note.archived || false}
        handleEdit={handleEdit}
        handleArchive={handleArchive}
        handleDelete={handleDelete}
      />
    </section>
  )
}
