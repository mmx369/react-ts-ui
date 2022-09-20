import { useState } from 'react'
import { Button, Modal } from 'ui'
import './ModalPage.scss'

export const ModalPage: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const handleOpenModal = () => {
    setIsOpenModal(true)
  }

  const handleCloseModal = () => {
    setIsOpenModal(false)
  }

  const handleModalSubmit = () => {
    setIsOpenModal(false)
  }

  return (
    <div className='ModalPage'>
      <h2>Modal</h2>
      <Button onClick={handleOpenModal}>Open Modal</Button>
      <Modal isOpen={isOpenModal} onClose={handleCloseModal}>
        <Modal.Header>
          <h2>Title</h2>
        </Modal.Header>
        <Modal.Content>Content</Modal.Content>
        <Modal.Footer
          buttonText='Choose'
          handleClick={handleModalSubmit}
        ></Modal.Footer>
      </Modal>
    </div>
  )
}
