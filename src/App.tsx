import type { FC } from 'react'

import styles from './App.module.scss'
import { CV } from './components/cv/CV'
import { SideBar } from './components/SideBar'

const App: FC = () => {
  return (
    <div className={styles.container}>
      <CV />
      <SideBar />
    </div>
  )
}

export default App
