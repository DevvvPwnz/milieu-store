import React from 'react'
import ContentLoader from "react-content-loader"
function ProductsLoadingBlock() {
    return (
        <ContentLoader 
        className="products-block"
          speed={2}
          width={280}
          height={457}
          viewBox="0 0 280 457"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <circle cx="140" cy="140" r="140" /> 
          <rect x="1" y="286" rx="8" ry="8" width="274" height="24" /> 
          <rect x="1" y="316" rx="6" ry="6" width="280" height="84" /> 
          <rect x="1" y="417" rx="0" ry="0" width="90" height="27" /> 
          <rect x="122" y="408" rx="13" ry="13" width="151" height="44" />
        </ContentLoader>
      )
}

export default ProductsLoadingBlock
