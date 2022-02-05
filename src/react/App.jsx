import { AppComponent } from './components'

const App = () => (
  <AppComponent
    componentsGlob={import.meta.glob('./testui/**/*.jsx')}
    sidebarTitle="UITEST"
  />
)

export default App
