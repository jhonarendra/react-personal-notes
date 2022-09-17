import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ContentState, convertFromHTML, EditorState } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import { HiArrowLeft } from 'react-icons/hi'
import {
  archiveNote, deleteNote, getNote, unarchiveNote
} from '../../utils/local-data'
import NotesIdPageAction from '../../components/notes/NotesIdPageAction'
import NoteListEmpty from '../../components/notes/NoteListEmpty'

export default function NotesIdEditPages() {
  const [form, setForm] = useState({
    id: '',
    archived: false,
    title: '',
    body: EditorState.createWithContent(
      ContentState.createFromBlockArray(
        convertFromHTML('<b><i><u>Isi Catatan</u></i></b>')
      )
    )
  })
  const { id } = useParams()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm((data) => ({ ...data, title: e.target.value }))
  }

  const onEditorStateChange = (body) => {
    setForm((data) => ({ ...data, body }))
  }

  const handleEdit = () => {
    navigate(`/notes/${id}/edit`)
  }

  const handleArchive = () => {
    if (form.archived) {
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
    const showNote = getNote(id)
    if (showNote) {
      const { title, archived, body } = showNote
      setForm({
        id,
        title,
        archived,
        body: EditorState.createWithContent(
          ContentState.createFromBlockArray(
            convertFromHTML(body)
          )
        )
      })
    }
  }, [])
  return (
    <section className="edit-page">
      <Link
        to="/"
        title="Kembali"
      >
        <HiArrowLeft />
        {' '}
        Kembali
      </Link>
      { form.id !== '' ? (
        <div className="edit-page__input">
          <input
            className="edit-page__input__title"
            placeholder="Judul"
            value={form.title}
            onChange={handleChange}
          />
          <Editor
            editorState={form.body}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={onEditorStateChange}
          />
        </div>
      ) : (
        <NoteListEmpty />
      )}
      {/* TODO: action simpan edit */}
      <NotesIdPageAction
        archived={form.archived || false}
        handleEdit={handleEdit}
        handleArchive={handleArchive}
        handleDelete={handleDelete}
      />
    </section>
  )
}
