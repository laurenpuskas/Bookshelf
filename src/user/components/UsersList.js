import React from 'react'

import UserItem from './UserItem'
import Card from '../../shared/components/UIElements/Card'
import * as style from './style.module.scss'

const UsersList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className={`center`}>
        <Card>
          <h2>No users found.</h2>
        </Card>
      </div>
    )
  }

  return (
    <ul className={style.usersList}>
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
