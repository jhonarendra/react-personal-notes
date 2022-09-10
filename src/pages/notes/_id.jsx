import React, { useEffect, useState } from 'react'
import parser from 'html-react-parser'
import { useParams } from 'react-router-dom'
import { showFormattedDate } from '../../utils'
import { getNote } from '../../utils/local-data'

export default function NotesIdPages() {
  const [note, setNote] = useState({})
  const { id } = useParams()

  useEffect(() => {
    setNote(getNote(id))
  }, [])
  return (
    <secion className="detail-page">
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

    </secion>
  )
}
