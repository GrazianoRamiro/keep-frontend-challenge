import { SearchBar } from "@/shared/components/SearchBar.component"
import styles from "./UsersList.module.scss"
import { User } from "../types/user.types"
import { useQuery } from "@tanstack/react-query"
import { userService } from "../services/user.service"

export function UsersList() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["fetchUserList"],
    queryFn: () => userService.fetchUsersList(),
  })

  const searchEval = (user: User, searchValue: string) => user.name.toLowerCase().includes(searchValue.toLowerCase())

  const renderSelected = (user: User) => user.name

  const renderItem = (user: User) => (
    <div className={styles.listItem}>
      <img />

      <div>
        <span>{user.name}</span>
        <span>{user.email}</span>
      </div>
    </div>
  )

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>Error...</p>
  }

  return (
    <SearchBar
      items={data as User[]}
      entity="user"
      itemKey="id"
      title="Search users:"
      searchEval={searchEval}
      renderItem={renderItem}
      renderSelected={renderSelected}
    />
  )
}
