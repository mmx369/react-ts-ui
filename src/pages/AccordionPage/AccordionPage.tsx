import React from 'react'
import { Accordion, AccordionGroup } from 'ui'
import './AccordionPage.scss'

export const AccordionPage: React.FC = () => {
  return (
    <div className='AccordionPage'>
      <h2>Accordion</h2>
      <Accordion title='Title Lorem' isActive>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
          voluptates, saepe aut eius harum cupiditate deleniti quam, nisi, sequi
          vero eaque facilis sit distinctio quos fuga reiciendis earum ut
          aperiam?
        </p>
      </Accordion>
      <h2>Accordion Group</h2>
      <AccordionGroup title='Accordion Group'>
        <Accordion title='Title Lorem One'>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            voluptates, saepe aut eius harum cupiditate deleniti quam, nisi,
            sequi vero eaque facilis sit distinctio quos fuga reiciendis earum
            ut aperiam?
          </p>
        </Accordion>
        <Accordion title='Title Lorem Two'>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            voluptates, saepe aut eius harum cupiditate deleniti quam, nisi,
            sequi vero eaque facilis sit distinctio quos fuga reiciendis earum
            ut aperiam?
          </p>
        </Accordion>
        <Accordion title='Title Lorem Three'>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            voluptates, saepe aut eius harum cupiditate deleniti quam, nisi,
            sequi vero eaque facilis sit distinctio quos fuga reiciendis earum
            ut aperiam?
          </p>
        </Accordion>
      </AccordionGroup>
    </div>
  )
}
