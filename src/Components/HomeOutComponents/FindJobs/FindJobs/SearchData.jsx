import React, { useContext } from 'react'
import { createContextUser } from '../../../Sheared/Context/FullAppContext'
import SingleSearchData from './SingleSearchData'

const SearchData = () => {
    const {searchData}= useContext(createContextUser)

  return (
    <div>

        

      {
        searchData.map((job) => <SingleSearchData
        key={job._id}
        job={job}
        ></SingleSearchData>)
      } 
    
    </div>
  )
}

export default SearchData
