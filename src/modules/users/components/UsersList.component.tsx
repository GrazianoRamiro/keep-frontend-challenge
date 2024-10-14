import { SearchBar } from "@/shared/components/SearchBar.component"
import styles from "./UsersList.module.scss"
import { User } from "../types/user.types"
import { useFetchUsers } from "../hooks/useFetchUsers.hook"

export function UsersList() {
  const { users, isLoadingUsers, isErrorUsers } = useFetchUsers()

  const searchEval = (user: User, searchValue: string) => user.name.toLowerCase().includes(searchValue.toLowerCase())

  const renderSelected = (user: User) => user.name

  const renderItem = (user: User) => (
    <div className={styles.listItem}>
      <img className={styles.listItemImage} />

      <div className={styles.listItemContent}>
        <span className={styles.listItemText}>{user.name}</span>
        <span className={styles.listItemText}>{user.email}</span>
      </div>
    </div>
  )

  if (isLoadingUsers) {
    return <p>Loading...</p>
  }

  if (isErrorUsers) {
    return <p>Error...</p>
  }

  return (
    <SearchBar
      items={users}
      entity="user"
      itemKey="id"
      title="Search users:"
      searchEval={searchEval}
      renderItem={renderItem}
      renderSelected={renderSelected}
    />
  )
}
