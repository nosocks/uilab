import { AppComponent } from './components'

function App() {
  return (
    <AppComponent
      componentsGlob={import.meta.glob('./testui/**/*.jsx')}
      sidebarTitle="UITEST"
    />
  )
}

export default App
