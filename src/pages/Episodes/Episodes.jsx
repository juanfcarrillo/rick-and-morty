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
  PageContainer,
  StickyContainer
} from '../../components'
import EpisodeCard from '../../components/EpisodeCard/EpisodeCard'
import { useApiProps } from '../../hooks'
import './styles/Episodes.css'

const Episodes = () => {
  const { response, loading, props, setProps } = useApiProps({
    baseURL: 'https://rickandmortyapi.com/api/episode',
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
          return <EpisodeCard key={elem.id} {...elem} />
        })}
      </CardsContainer>
    </PageContainer>
  )
}

export default Episodes
