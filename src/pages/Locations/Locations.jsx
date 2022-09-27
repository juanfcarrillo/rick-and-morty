import { locationEmptyType, locationEmptyTypeFilter } from '../../../models'
import {
  CardsContainer,
  FilterComponent, Loader,
  LocationCard,
  PageContainer
} from '../../components'
import { useApiProps } from '../../hooks'
import './styles/Locations.css'

const Locations = () => {
  const { response, loading, apiProps, setApiProps } = useApiProps({
    baseURL: 'https://rickandmortyapi.com/api/location',
    emptyModelType: locationEmptyType
  })

  if (loading) return <Loader />

  return (
    <PageContainer>
      <FilterComponent
        apiProps={apiProps}
        setApiProps={setApiProps}
        pagesCount={response?.info?.pages}
        filterType={locationEmptyTypeFilter}
      />
      <CardsContainer>
        {response?.results?.map((elem) => {
          return <LocationCard key={elem.id} {...elem} />
        })}
      </CardsContainer>
    </PageContainer>
  )
}

export default Locations
