import { episodeEmptyType, episodeEmptyTypeFilter } from '../../../models'
import {
  CardsContainer,
  FilterComponent, Loader,
  PageContainer
} from '../../components'
import EpisodeCard from '../../components/EpisodeCard/EpisodeCard'
import { useApiProps } from '../../hooks'
import './styles/Episodes.css'

const Episodes = () => {
  const { response, loading, apiProps, setApiProps } = useApiProps({
    baseURL: 'https://rickandmortyapi.com/api/episode',
    emptyModelType: episodeEmptyType
  })

  if (loading) return <Loader />

  return (
    <PageContainer>
      <FilterComponent
        apiProps={apiProps}
        setApiProps={setApiProps}
        pagesCount={response?.info?.pages}
        filterType={episodeEmptyTypeFilter}
      />
      <CardsContainer>
        {response?.results?.map((elem) => {
          return <EpisodeCard key={elem.id} {...elem} />
        })}
      </CardsContainer>
    </PageContainer>
  )
}

export default Episodes
