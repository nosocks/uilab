<h3 align="center">uilab</h3>

A live component developing environment, powered by [vite](https://vitejs.dev).



### Getting Started

From scratch, uilab supports the same templates as vite:

  ```sh
  pnpm create uilab
  ```

### Adding uilab to an existing vite project

1. Install uilab framework specific dependencies:
   ```sh
   // react
   pnpm add react-router-dom react-element-to-jsx-string react-live
   ```
2. Install NPM packages
   ```sh
   pnpm add @nosocks/uilab
   ```
3. Replace your main App component
   ```js
   import { AppComponent } from '@nosocks/uilab/react'
   // this is required
   import '@nosocks/uilab/react/style.css'

   const App = () => (
      <AppComponent
        componentsGlob={import.meta.glob('./testui/**/*.jsx')}
        sidebarTitle="UITEST"
      />
    )
   ```


uilabs is just a set of components that receives props to render your components from a specific directory. `componentsGlob` must be from vite API, we use `import.meta.glob` to load all components dynamically.

  ```js
    // react
    <AppComponent
      componentsGlob={import.meta.glob('./components/**/*.jsx')}
      sidebarTitle="COOL_LAB"
    />
  ```


## Roadmap

- [ ] support vue, vue-ts
- [ ] support svelte, svelte-ts
- [ ] support preact, preact-ts
- [ ] support vanilla, vanilla-ts
- [ ] support lit, lit-ts



<p align="right">(<a href="#top">back to top</a>)</p>