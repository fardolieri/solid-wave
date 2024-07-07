import { Router } from '@solidjs/router'
import { FileRoutes } from '@solidjs/start/router'
import { Suspense } from 'solid-js'
import { ColorModeScript, ColorModeProvider } from '@kobalte/core'

import './app.css'

export default function App() {
  return (
    <Router
      root={(props) => (
        <>
          <Suspense>
            <ColorModeScript />
            <ColorModeProvider initialColorMode="dark">
              {props.children}
            </ColorModeProvider>
          </Suspense>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  )
}
