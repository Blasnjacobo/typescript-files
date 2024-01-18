import React from 'react'
import { Sub } from '../types/types'

interface Props {
    subs: Array<Sub>
}

// REACT FUNCTION COMPONENT (FC), ACEPTA COMPONENTES CHILDREN Y EL JSX.ELEMENT NO

const List:React.FC<Props> = ({ subs }) => {
  return (
    <ul>
      {
          subs.map(sub => {
            return (
              <li key={sub.nick}>
                <img src={sub.avatar} alt={`Avatar for ${sub.nick}`} />
                <h4>{sub.nick}(<small>{sub.subMonths}</small>)</h4>
                <p>{sub.description?.substring(0, 100)}</p>
              </li>
            )
          })
        }
    </ul>
  )
}
export default List
