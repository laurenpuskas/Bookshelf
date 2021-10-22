import React from 'react'

import UserItem from './UserItem'
import * as style from './style.module.scss'

const UsersList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className={style.center}>
        <h2>No users found.</h2>
      </div>
    )
  }

  return (
    <ul>
      {props.items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          bookCount={user.books}
        />
      ))}
    </ul>
  )
}

export default UsersList
