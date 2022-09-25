import {
  AiOutlineArrowLeft as LeftArrowIcon, AiOutlineArrowRight as RightArrowIcon
} from 'react-icons/ai'
import { characterEmptyType } from '../../../models'
import { Input, Loader, StickyButton } from '../../components'
import { CharacterCard } from '../../components/CharacterCard'
import { useApiProps } from '../../hooks'
import './styles/characters.css'

const Characters = () => {
  const { response, props, setProps, loading } = useApiProps({ baseURL: 'https://rickandmortyapi.com/api/character', emptyModelType: characterEmptyType })
  return (
    <div className="characters-container">
      <div className="button-container">
        <Input value={props.name} onChange={e => setProps({ ...props, name: e.target.value, page: 1 })}/>
        <StickyButton onClick={() => setProps({ ...props, page: props.page - 1 })}>
          <LeftArrowIcon /> Previous
        </StickyButton>
        <StickyButton onClick={() => setProps({ ...props, page: props.page + 1 })}>
          Next
          <RightArrowIcon />
        </StickyButton>
      </div>
      <div className="cards-container">
        {!loading
          ? response?.results?.map((elem) => {
            return <CharacterCard key={elem.id} {...elem} />
          })
          : <Loader />}
      </div>
    </div>
  )
}

export default Characters
