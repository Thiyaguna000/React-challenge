import React, { useState } from 'react'
import { Button } from '../Button/Button'
import { Input } from '../Input/Input'

const Search = ({value}) => {
  const [value,setValue] = useState();
  return (
    <div>
        <form inline style={{ margin: "30px 0px" }}>
          <Input type="text" placeholder="Search..." onChange={(e)=>onChangeSearchValue(setValue)} />
          <Button handleClick={onClickSearch} title="Search"/>
        </form>
    </div>
  )
}

export default Search