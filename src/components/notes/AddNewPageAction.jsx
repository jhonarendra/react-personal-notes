import React from 'react'
import { HiX, HiCheck } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import PageAction from '../layout/PageAction'

export default function AddNewPageAction() {
  const navigate = useNavigate()

  return (
    <PageAction page="add-new-page">
      <>
        <button
          className="action"
          type="button"
          title="Tambah"
          onClick={() => navigate('/')}
        >
          <HiX />
        </button>
        <button
          className="action"
          type="button"
          title="Tambah"
          onClick={() => navigate('/notes/new')}
        >
          <HiCheck />
        </button>
      </>
    </PageAction>
  )
}
