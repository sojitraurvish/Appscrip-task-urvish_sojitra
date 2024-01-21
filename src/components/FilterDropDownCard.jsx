import React, { useState } from 'react'

const FilterDropDownCard = ({subCategory,unSelectAllCheckBox}) => {

  const [isChecked,setIsChecked]=useState(false);

  return (
    <div>
        <input type="checkbox" name="" id="" checked={isChecked}/>
        <span>{subCategory}</span>
    </div>
  )
}

export default FilterDropDownCard