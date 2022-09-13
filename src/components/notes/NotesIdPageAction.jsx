import React from 'react'
import PropTypes from 'prop-types'
import { HiOutlineTrash } from 'react-icons/hi'
import { BiArchiveIn } from 'react-icons/bi'
import PageAction from '../layout/PageAction'

function NotesIdPageAction({ handleArchive, handleDelete }) {
  return (
    <PageAction page="detail-page">
      <>
        <button
          className="action"
          type="button"
          title="Arsipkan"
          onClick={() => handleArchive()}
        >
          <BiArchiveIn />
        </button>
        <button
          className="action"
          type="button"
          title="Tambah"
          onClick={() => handleDelete()}
        >
          <HiOutlineTrash />
        </button>
      </>
    </PageAction>
  )
}

NotesIdPageAction.propTypes = {
  handleArchive: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
}

export default NotesIdPageAction
