import React from 'react'

import UsersList from '../components/UsersList'

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Lauren Puskas',
      image:
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/411cb6f0-7c85-4144-aaec-5544ff6eba9c/ddegfjm-89d93d56-d3fa-45da-baea-cc7b4e74906c.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQxMWNiNmYwLTdjODUtNDE0NC1hYWVjLTU1NDRmZjZlYmE5Y1wvZGRlZ2ZqbS04OWQ5M2Q1Ni1kM2ZhLTQ1ZGEtYmFlYS1jYzdiNGU3NDkwNmMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.I7Y-DUPGYDwHLHkeNoHyWu4q9arbB1oJOyGSIf6_ek4',
      books: '3',
    },
  ]

  return <UsersList items={USERS} />
}

export default Users
