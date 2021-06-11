import React from "react";
import PropTypes from 'prop-types'

const Categories = React.memo(function Categories({ activeCategory,items, onClick }) {
 
 const [ openFilter,setOpenFilter] = React.useState(false)
  
 const toggleCatergories = ()=>{
   setOpenFilter(!openFilter)
 }

  return (
    <div className="categories">
      <div className="categories__toggle" onClick={toggleCatergories}>
       <span>Фильтр</span>

      <svg
           className={openFilter ? 'rotated' : ''}
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                  fill="#2C2C2C"
                />
              </svg>
            
            </div>
      
        <ul className={openFilter ? "active" : ""}>
        <li
          onClick={() => onClick(null)}
          className={activeCategory === null ? "active" : ""}
        >
          Все
        </li>
        { items &&
        items.map((name, index) => (
          <li
            className={activeCategory === index ? "active" : ""}
            onClick={() => onClick(index)}
            key={`${name}_${index}`}
          >
            {name}
          </li>
        ))}
      </ul>
      
    </div>
  );
})

Categories.propTypes = {
  items:PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func
}
Categories.defalutProps = {activeCategory : null, items : []}


export default Categories