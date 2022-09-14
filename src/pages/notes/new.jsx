import React, { useState } from 'react'
import { Editor, EditorState } from 'react-draft-wysiwyg'
import AddNewPageAction from '../../components/notes/AddNewPageAction'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

export default function NotesNewPages() {
  const [form, setForm] = useState({
    title: '',
    body: EditorState.createWithContent('<b>HElsldosds</b>')
  })

  const handleChange = (e) => {
    setForm((data) => ({ ...data, title: e.target.value }))
  }

  const onEditorStateChange = (body) => {
    setForm((data) => ({ ...data, body }))
  }
  return (
    <section className="add-new-page">
      <div className="add-new-page__input">
        <input
          className="add-new-page__input__title"
          placeholder="Catatan rahasia"
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
      <AddNewPageAction />
    </section>

  )
}
