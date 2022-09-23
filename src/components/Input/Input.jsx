import { forwardRef } from 'react'
import './styles/Input.css'

const Input = (props, ref) => {
  return (
    <div className="group">
      <input ref={ref} required type="text" className="input" {...props}/>
      <span className="highlight"></span>
      <span className="bar"></span>
      <label className='input-label'>Name</label>
    </div>
  )
}

export default forwardRef(Input)
