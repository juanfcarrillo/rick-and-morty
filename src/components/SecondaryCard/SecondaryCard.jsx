import styled from 'styled-components'

const SecondaryCard = styled.div`
  box-shadow: 0 10px 20px 4px rgba(35, 35, 35, 0.1);
  min-height: 150px;
  width: 330px;
  background-color: white;
  border-radius: 10px;
  padding: 30px 2em 30px 20px;
  transition: all 0.1s ease;
  overflow: hidden;
  position: relative;
  .card-name {
    margin-bottom: 0.3em;
  }
  .type {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 2em;
  }
`
export default SecondaryCard
