import {
  AiOutlineArrowLeft as LeftArrowIcon,
  AiOutlineArrowRight as RightArrowIcon
} from 'react-icons/ai'
import { characterEmptyType } from '../../../models'
import {
  Button, CardsContainer,
  Input,
  Loader,
  PageContainer,
  StickyContainer
} from '../../components'
import { CharacterCard } from '../../components/CharacterCard'
import { useApiProps } from '../../hooks'
import './styles/characters.css'

const Characters = () => {
  const { response, props, setProps, loading } = useApiProps({
    baseURL: 'https://rickandmortyapi.com/api/character',
    emptyModelType: characterEmptyType
  })

  if (loading) return <Loader />
  return (
    <PageContainer>
      <StickyContainer>
        <Input
          value={props.name}
          onChange={(e) =>
            setProps({ ...props, name: e.target.value, page: 1 })
          }
        />
        <Button onClick={() => setProps({ ...props, page: props.page - 1 })}>
          <LeftArrowIcon /> Previous
        </Button>
        <Button onClick={() => setProps({ ...props, page: props.page + 1 })}>
          Next
          <RightArrowIcon />
        </Button>
      </StickyContainer>
      <CardsContainer>
        {response?.results?.map((elem) => {
          return <CharacterCard key={elem.id} {...elem} />
        })}
      </CardsContainer>
    </PageContainer>
  )
}

export default Characters
