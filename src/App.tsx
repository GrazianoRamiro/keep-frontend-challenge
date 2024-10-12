import { AppProviders } from "./App.providers"
import { UsersList } from "@/modules/users/components/UsersList.component"

function App() {
  return (
    <AppProviders>
      <main>
        <UsersList />
      </main>
    </AppProviders>
  )
}

export default App
