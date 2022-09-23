import {
  AiOutlineArrowLeft as LeftArrowIcon,
  AiOutlineArrowRight as RightArrowIcon
} from 'react-icons/ai'
import { locationEmptyType } from '../../../models'
import { Input, LocationCard, StickyButton } from '../../components'
import { useApiProps } from '../../hooks'
import './styles/Locations.css'

const Locations = () => {
  const { response, loading, props, setProps, setPageNumber } = useApiProps({ baseURL: 'https://rickandmortyapi.com/api/location', emptyModelType: locationEmptyType })

  return (
    <div className="locations-container">
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
          ? (
              response?.results?.map((elem) => {
                return <LocationCard key={elem.id} {...elem} />
              })
            )
          : (
          <>loading</>
            )}
      </div>
    </div>
  )
}

export default Locations
