import styled from 'styled-components'

const RowContainer = styled.div`
  display: flex;
  flex-wrap: ${(props) => props.wrapped ? 'wrap' : 'initial'};
  flex-direction:  ${(props) => (props.column ? 'column' : 'row')};
  justify-content: ${(props) => props.justifyContent || 'space-between'};
  align-items: ${(props) => props.alignItems || 'center'};
  gap: .5em;
`

export default RowContainer
