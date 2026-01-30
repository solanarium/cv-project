import './App.scss'

import type { FC } from 'react'

import { CV } from './components/cv/CV'
import { SideBar } from './components/SideBar'

const App: FC = () => {
  return (
    <div className="container">
      <CV />
      <SideBar />
    </div>
  )
}

export default App
