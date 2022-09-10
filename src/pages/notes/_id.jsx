import React from 'react'
import { useParams } from 'react-router-dom'

export default function NotesIdPages() {
  const { id } = useParams()
  return (
    <p>
      Notes ID:
      {' '}
      {id}
    </p>
  )
}
