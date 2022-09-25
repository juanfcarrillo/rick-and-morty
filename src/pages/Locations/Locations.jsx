import {
  AiOutlineArrowLeft as LeftArrowIcon,
  AiOutlineArrowRight as RightArrowIcon
} from 'react-icons/ai'
import { locationEmptyType } from '../../../models'
import { Input, Loader, LocationCard, StickyButton } from '../../components'
import { useApiProps } from '../../hooks'
import './styles/Locations.css'

const Locations = () => {
  const { response, loading, props, setProps } = useApiProps({
    baseURL: 'https://rickandmortyapi.com/api/location',
    emptyModelType: locationEmptyType
  })

  return (
    <div className="locations-container">
      <div className="button-container">
        <Input
          value={props.name}
          onChange={(e) =>
            setProps({ ...props, name: e.target.value, page: 1 })
          }
        />
        <StickyButton
          onClick={() => setProps({ ...props, page: props.page - 1 })}
        >
          <LeftArrowIcon /> Previous
        </StickyButton>
        <StickyButton
          onClick={() => setProps({ ...props, page: props.page + 1 })}
        >
          Next
          <RightArrowIcon />
        </StickyButton>
      </div>
      <div className="cards-container">
        {!loading
          ? (
              response?.results?.map((elem) => {
                return <LocationCard key={elem.id} {...elem} />
              })
            )
          : (
          <Loader />
            )}
      </div>
    </div>
  )
}

export default Locations
