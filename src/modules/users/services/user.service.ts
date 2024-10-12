import { httpService } from "@/shared/services/http.service"
import { User } from "../types/user.types"

class UserService {
  fetchUsersList() {
    return httpService.get<User[]>("https://jsonplaceholder.typicode.com/users")
  }
}

export const userService = new UserService()
