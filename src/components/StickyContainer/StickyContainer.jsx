import styled from 'styled-components'

const StickyContainer = styled.div`
  padding: 1em;
  max-width: 90vw;
  background-color: white;
  box-shadow: 0 10px 20px 4px rgba(35, 35, 35, 0.1);
  border: 1px solid rgb(108, 108, 108);
  border-radius: 10px;
  position: sticky;
  top: 1.5em;
  z-index: 1001;
  display: flex;
  gap: 20px;
`

export default StickyContainer
