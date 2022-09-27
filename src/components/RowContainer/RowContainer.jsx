import styled from 'styled-components'

const RowContainer = styled.div`
  display: flex;
  flex-wrap: ${(props) => props.wrapped ? 'wrap' : 'initial'};
  gap: 1em;
  align-items: center;
  justify-content: center;
`

export default RowContainer
