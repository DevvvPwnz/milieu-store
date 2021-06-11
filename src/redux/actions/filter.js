
const setSortBy = (name)=>({
    type:'SET_SORT_BY',
    payload:name,
})

const setSortCategory = (index)=>({
    type:'SET_CATEGORY',
    payload:index,
})

export  {setSortBy,setSortCategory}