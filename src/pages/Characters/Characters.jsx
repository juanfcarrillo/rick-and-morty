import {
  AiOutlineArrowLeft as LeftArrowIcon, AiOutlineArrowRight as RightArrowIcon
} from 'react-icons/ai'
import { characterEmptyType } from '../../../models'
import { Input, StickyButton } from '../../components'
import { CharacterCard } from '../../components/CharacterCard'
import { useApiProps } from '../../hooks'
import './styles/characters.css'

const Characters = () => {
  const { response, loading, props, setProps, setPageNumber } = useApiProps({ baseURL: 'https://rickandmortyapi.com/api/character', emptyModelType: characterEmptyType })
  return (
    <div className="characters-container">
      <div className="button-container">
        <Input value={props.name} onChange={e => setProps({ name: e.target.value })}/>
        <StickyButton onClick={() => setPageNumber((pageNum) => pageNum - 1)}>
          <LeftArrowIcon /> Previous
        </StickyButton>
        <StickyButton onClick={() => setPageNumber((pageNum) => pageNum + 1)}>
          Next
          <RightArrowIcon />
        </StickyButton>
      </div>
      <div className="cards-container">
        {!loading
          ? response?.results?.map((elem) => {
            return <CharacterCard key={elem.id} {...elem} />
          })
          : <>loading</>}
      </div>
    </div>
  )
}

export default Characters
