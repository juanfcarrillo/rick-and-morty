import { forwardRef } from 'react'
import styles from './styles/Button.module.css'

const StickyButton = ({ children, onClick }, ref) => {
  return <button onClick={onClick} ref={ref} className={styles.Button}>{children}</button>
}

export default forwardRef(StickyButton)
