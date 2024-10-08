import { useEffect, useMemo, useState } from "react"

type User = {
  id: number
  email: string
  name: string
}

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [selectedUsers, setSelectedUsers] = useState<User[]>([])
  const [searchValue, setSearchValue] = useState("")

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
  }, [])

  const filteredUsers = useMemo(
    () =>
      users.filter((user) => {
        const isSelected = selectedUsers.some((selectedUser) => selectedUser.id === user.id)
        const matchesName = user.name.toLowerCase().includes(searchValue.toLowerCase())

        return !isSelected && matchesName
      }),
    [searchValue, users, selectedUsers]
  )

  return (
    <main
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div>
        <p>Select users:</p>

        {selectedUsers.map((selectedUser) => (
          <button
            onClick={() => {
              const newSelectedUsers = selectedUsers.filter((user) => user.id !== selectedUser.id)
              setSelectedUsers(newSelectedUsers)
            }}
          >
            {selectedUser.name}
          </button>
        ))}

        <input defaultValue={searchValue} onChange={(e) => setSearchValue(e.target.value)} />

        <ul>
          {searchValue &&
            filteredUsers.map((user) => {
              return (
                <li
                  key={user.id}
                  onClick={() => {
                    selectedUsers.push(user)

                    setSelectedUsers(selectedUsers)
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "left",
                    gap: "13px",
                    backgroundColor: "#f2f2f2",
                    borderBottom: "1px solid #e1e1e1",
                  }}
                >
                  <img />
                  <div style={{}}>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                  </div>
                </li>
              )
            })}
        </ul>
      </div>
    </main>
  )
}

export default App
