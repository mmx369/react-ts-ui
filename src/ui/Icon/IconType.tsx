import { newGuid } from 'utils/guid'
import { ReactComponent as ArrowDown } from '../assets/icons/arrowDown.svg'
import { ReactComponent as Close } from '../assets/icons/close.svg'
import { ReactComponent as Pdf } from '../assets/icons/pdf.svg'

export type IconType = 'Pdf' | 'ArrowDown' | 'Close'

export const iconTypes = new Map([
  ['ArrowDown', <ArrowDown key={newGuid()} />],
  ['Close', <Close key={newGuid()} />],
  ['Pdf', <Pdf key={newGuid()} />],
])
