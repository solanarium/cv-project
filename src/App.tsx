import './App.scss'

import type { FC } from 'react'

import { Container } from './components/Container'
import { Header } from './components/Header'
import { ResumeContent } from './components/ResumeContent'

const App: FC = () => {
  return (
    <Container>
      <Header title="Claudette Lening" />
      <ResumeContent />
    </Container>
  )
}

export default App
