import React from 'react'
import { Link } from 'react-router-dom'

import Avatar from '../../shared/components/UIElements/Avatar'
import Card from '../../shared/components/UIElements/Card'
import * as style from './style.module.scss'

const UserItem = (props) => {
  return (
    <li className={style.userItem}>
      <Card className={style.userItemContent}>
        <Link to={`/${props.id}/places`}>
          <div className={style.userItemImage}>
            <Avatar image={props.image} alt={props.name} />
          </div>

          <div className={style.userItemInfo}>
            <h2>{props.name}</h2>
            <h3>
              {props.bookCount} {props.bookCount === 1 ? 'Book' : 'Books'}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  )
}

export default UserItem
