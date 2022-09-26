import {
  AiOutlineArrowLeft as LeftArrowIcon,
  AiOutlineArrowRight as RightArrowIcon
} from 'react-icons/ai'
import { locationEmptyType } from '../../../models'
import {
  Button,
  CardsContainer,
  Input,
  Loader,
  LocationCard,
  PageContainer,
  StickyContainer
} from '../../components'
import { useApiProps } from '../../hooks'
import './styles/Locations.css'

const Locations = () => {
  const { response, loading, props, setProps } = useApiProps({
    baseURL: 'https://rickandmortyapi.com/api/location',
    emptyModelType: locationEmptyType
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
          return <LocationCard key={elem.id} {...elem} />
        })}
      </CardsContainer>
    </PageContainer>
  )
}

export default Locations
