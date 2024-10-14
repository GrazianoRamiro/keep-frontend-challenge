import { AppProviders } from "./App.providers"
import { UsersList } from "@/modules/users/components/UsersList.component"
import styles from "./App.module.scss"

function App() {
  return (
    <AppProviders>
      <header className={styles.header}>
        <img src="https://cdn.prod.website-files.com/664501a053251deac9fb7060/664501a053251deac9fb70e8_keep-logo.svg" />
      </header>

      <main className={styles.mainContent}>
        <UsersList />
      </main>
    </AppProviders>
  )
}

export default App
