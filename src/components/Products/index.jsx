import React from "react";
import classnames from "classnames";
import Button from '../Button'

function ProductsBlock({ id,imageUrl, name, price, sizes,onClickAddItem,addedCount}) {
 
  const [sizesItem, setSizesItem] = React.useState(sizes[0]);

 
  const currentSizes = [30, 50, 90];

 
  const selectSize = (index) => {
    setSizesItem(index);
  };

 const handleAddItem = ()=> {
   const obj = {
     id,
     name,
     imageUrl,
     price,
     size:sizesItem,
   }
   onClickAddItem(obj)
 }

  return (
    <div className="products-block">
      <img className="products-block__image" src={imageUrl} alt="products" />
      <h4 className="products-block__title">{name}</h4>
      <div className="products-block__selector">
       
        <ul>
          {currentSizes.map((size, index) => (
            <li
             key={`${size}_${index}`}
             onClick={() => selectSize(size)}
             className={classnames({
               active: sizesItem === size,
               disabled: !sizes.includes(size),
              
             })}
             >{size} ml
             </li>
          ))}
        </ul>
      </div>
      <div className="products-block__bottom">
        <div className="products-block__price">{price} $</div>
        <Button onClick={handleAddItem} className="button--add" outline>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          {addedCount &&<i>{  addedCount}</i>}
        </Button>
      </div>
    </div>
  );
}

export default ProductsBlock;
