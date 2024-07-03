import { Router } from '@solidjs/router'
import { FileRoutes } from '@solidjs/start/router'
import { Suspense } from 'solid-js'

import './app.css'
import { ColorModeScript, ColorModeProvider } from '@kobalte/core'

export default function App() {
  return (
    <Router
      root={(props) => (
        <>
          <Suspense>
            <ColorModeScript />
            <ColorModeProvider initialColorMode="light">
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
