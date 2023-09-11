import { Page } from './components/Page'
import { PageProvider } from './contexts/PageContext'
export function App() {
  return (
    <>
      <PageProvider>
        <Page />
      </PageProvider>
    </>
  )
}