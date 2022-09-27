import styled from 'styled-components'

const SearchContainer = styled.div`
  display: flex;
  flex-direction:  ${(props) => (props.column ? 'column' : 'row')};
  justify-content: ${(props) => props.justifyContent || 'space-between'};
  align-items: ${(props) => props.alignItems || 'center'};
  flex-wrap: ${(props) => props.wrapped ? 'wrap' : 'initial'};
  padding: 1em;
  max-width: 90vw;
  background-color: white;
  box-shadow: 0 10px 20px 4px rgba(35, 35, 35, 0.1);
  border-radius: 10px;
  gap: ${(props) => props.gap || '1em'};
  transition: all 0.3s ease-in-out;
`
export default SearchContainer
