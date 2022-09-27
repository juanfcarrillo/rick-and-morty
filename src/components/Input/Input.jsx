import { InputGroup } from '../InputGroup'
import './styles/Input.css'

const Input = ({ bordered, labelContent, ...props }) => {
  console.log(props.value)
  return (
    <InputGroup value={props.value} bordered={!!bordered}>
      <input type='text' className='input' {...props} />
      <span className='highlight'></span>
      <label className='input-label'>{labelContent || 'Name'}</label>
    </InputGroup>
  )
}

export default Input
