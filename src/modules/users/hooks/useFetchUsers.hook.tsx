import { useQuery } from "@tanstack/react-query"
import { userService } from "../services/user.service"
import { User } from "../types/user.types"

export function useFetchUsers() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["fetchUserList"],
    queryFn: () => userService.fetchUsersList(),
  })

  return {
    users: data as User[],
    isLoadingUsers: isLoading,
    isErrorUsers: isError,
  }
}
