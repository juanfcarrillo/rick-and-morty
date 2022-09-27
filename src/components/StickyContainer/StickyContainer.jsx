import styled from 'styled-components'

const StickyContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  gap: ${(props) => props.gap || '0px'};
  position: sticky;
  top: 1.5em;
  z-index: 1001;
`

export default StickyContainer
