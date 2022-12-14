import cn from 'classnames'
import React, { memo, useState } from 'react'
import { SlideDown } from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'
import { Icon } from 'ui'
import './Accordion.scss'

export interface IAccordionProps {
  className?: string
  title?: string
  isActive?: boolean
  children?: React.ReactNode
}

const AccordionComponent: React.FC<IAccordionProps> = ({
  className,
  title = '',
  isActive = false,
  children = null,
}) => {
  const [isOpen, setIsOpen] = useState(isActive)

  const handleToggleAccordion = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <div
      className={cn('Accordion', className, {
        Accordion__active: isOpen,
      })}
    >
      <div className='Accordion-Header' onClick={handleToggleAccordion}>
        <div className='Accordion-HeaderTitle'>{title}</div>
        <Icon className='Accordion-HeaderIcon' type='ArrowDown' />
      </div>
      <SlideDown className='Accordion-ContentSlideDown'>
        {isOpen && <div className='Accordion-Content'>{children}</div>}
      </SlideDown>
    </div>
  )
}

export const Accordion = memo(AccordionComponent)
