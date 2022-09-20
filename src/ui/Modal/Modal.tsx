import cn from 'classnames'
import { default as ReactModal } from 'react-responsive-modal'

import React, { useEffect, useState } from 'react'
import 'react-responsive-modal/styles.css'
import Button from 'ui/Button'
import Icon from 'ui/Icon'
import './Modal.scss'

export type IModalSize = 'medium'

export interface IModalProps {
  className?: string
  children?: React.ReactNode
  size?: IModalSize
  isOpen: boolean
  onClose: () => void
}

export const Modal = ({
  className,
  children,
  size = 'medium',
  isOpen,
  onClose,
}: IModalProps): JSX.Element => {
  const defaultClassNames = {
    modal: cn('ModalDefault', {
      ModalDefault__medium: size === 'medium',
    }),
    closeButton: cn('ModalDefaultCloseButton'),
    className,
  }

  const [styles, setStyles] = useState({})

  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth
    if (isOpen && scrollbarWidth) {
      const _styles = {
        modal: { marginRight: `${scrollbarWidth + 16}px` },
      }
      setStyles(_styles)
      document.body.classList.add('Modal__open')
      document.body.style.paddingRight = `${scrollbarWidth}px`

      return () => {
        setStyles({})
        document.body.classList.remove('Modal__open')
        document.body.style.removeProperty('padding-right')
      }
    }
  }, [isOpen])

  return (
    <ReactModal
      classNames={defaultClassNames}
      center
      closeIcon={<Icon type='Close' />}
      styles={styles}
      open={isOpen}
      onClose={onClose}
    >
      <div className='Modal'>{children}</div>
    </ReactModal>
  )
}

export interface IModalHeaderProps {
  className?: string
  children?: React.ReactNode
  align?: 'start' | 'center' | 'end'
}

Modal.Header = ({
  className,
  children,
  align,
}: IModalHeaderProps): JSX.Element => {
  return (
    <div
      className={cn('ModalHeader', className, {
        ModalHeader__start: align === 'start',
        ModalHeader__center: align === 'center',
        ModalHeader__end: align === 'end',
      })}
    >
      {children}
    </div>
  )
}

export interface IModalContentProps {
  className?: string
  children?: React.ReactNode
}

Modal.Content = ({ className, children }: IModalContentProps): JSX.Element => {
  return <div className={cn('ModalContent', className)}>{children}</div>
}

export interface IModalFooterProps {
  className?: string
  buttonText: string
  handleClick: () => void
}

Modal.Footer = ({
  className,
  buttonText,
  handleClick,
}: IModalFooterProps): JSX.Element => {
  return (
    <div className={cn('ModalFooter', className)}>
      <Button onClick={handleClick}>{buttonText}</Button>
    </div>
  )
}
