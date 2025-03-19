import logo from '@/assets/logo.svg'
import '@/styles/App.css'
import { useRouter } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App
})

function App() {
  const router = useRouter()
  // TODO: config default route to be /notes later
  router.navigate({to: '/notes'})

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/routes/index.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="App-link"
          href="https://tanstack.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn TanStack
        </a>
      </header>
    </div>
  )
}
