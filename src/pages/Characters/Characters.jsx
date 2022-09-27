import { characterEmptyType, characterEmptyTypeFilter } from '../../../models'
import {
  CardsContainer,
  FilterComponent,
  Loader,
  PageContainer
} from '../../components'
import { CharacterCard } from '../../components/CharacterCard'
import { useApiProps } from '../../hooks'
import './styles/characters.css'

const Characters = () => {
  const { response, apiProps, setApiProps, loading } = useApiProps({
    baseURL: 'https://rickandmortyapi.com/api/character',
    emptyModelType: characterEmptyType
  })

  if (loading) return <Loader />

  return (
    <PageContainer>
      <FilterComponent
        apiProps={apiProps}
        setApiProps={setApiProps}
        pagesCount={response?.info?.pages}
        filterType={characterEmptyTypeFilter}
      />
      <CardsContainer>
        {response?.results?.map((elem) => {
          return <CharacterCard key={elem.id} {...elem} />
        })}
      </CardsContainer>
    </PageContainer>
  )
}

export default Characters
