import { useState } from 'react'
import {
  AiOutlineArrowLeft as LeftArrowIcon,
  AiOutlineArrowRight as RightArrowIcon,
  AiOutlineClose
} from 'react-icons/ai'
import { IoFunnelOutline } from 'react-icons/io5'
import { Button } from '../Button'
import { Input } from '../Input'
import { RowContainer } from '../RowContainer'
import { SearchContainer } from '../SearchContainer'
import { StickyContainer } from '../StickyContainer'
import './styles/FilterComponent.css'

const FilterComponent = ({ apiProps, setApiProps, pagesCount, filterType }) => {
  const [searchFormValues, setSearchFormValues] = useState(
    filterType
  )
  const [openSearch, setOpenSearch] = useState(false)
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setSearchFormValues({
      ...searchFormValues,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setApiProps({
      ...apiProps,
      ...searchFormValues
    })
    setSearchFormValues(filterType)

    setOpenSearch(false)
  }

  const handleClear = (open) => {
    setSearchFormValues(filterType)
    setApiProps(filterType)
    setOpenSearch(open)
  }

  return (
    <StickyContainer column gap='20px'>
      <SearchContainer justifyContent='center' column>
        <RowContainer>
          {!openSearch && (
            <Input
              value={apiProps.name}
              onChange={(e) =>
                setApiProps({
                  ...filterType,
                  name: e.target.value,
                  page: 1
                })
              }
            />
          )}
          <Button
            onClick={() =>
              setApiProps({ ...apiProps, page: apiProps.page - 1 })
            }
          >
            <LeftArrowIcon /> Previous
          </Button>
          <Button
            onClick={() =>
              setApiProps({ ...apiProps, page: apiProps.page + 1 })
            }
          >
            Next
            <RightArrowIcon />
          </Button>
          {openSearch
            ? (
            <AiOutlineClose
              className='search-button'
              onClick={() => handleClear(false)}
            />
              )
            : (
            <IoFunnelOutline
              className='search-button'
              onClick={() => handleClear(true)}
            />
              )}
        </RowContainer>
        <p className='page-info'>
          {apiProps.page} / {pagesCount}
        </p>
      </SearchContainer>
      {openSearch && (
        <form onSubmit={handleSubmit}>
          <SearchContainer wrapped column>
            <RowContainer wrapped>
              {Object.keys(filterType).map((elem) => {
                return (
                  <Input
                    autocomplete='off'
                    bordered
                    key={elem}
                    name={elem}
                    labelContent={elem}
                    value={searchFormValues[elem]}
                    onChange={handleInputChange}
                  />
                )
              })}
            </RowContainer>
            <Button bordered>Submit</Button>
          </SearchContainer>
        </form>
      )}
    </StickyContainer>
  )
}

export default FilterComponent
