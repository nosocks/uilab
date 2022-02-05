import { AppComponent } from './components'

const App = () => (
  <AppComponent
    components={import.meta.glob('./testui/**/*.jsx')}
    sidebarTitle="UILAB 🛸"
  />
)

export default App
