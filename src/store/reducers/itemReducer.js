const initState = {
    items: [
        {id: 0, name: 'Test0', price:'4', image:'https://nevadahumanesociety.org/wp-content/uploads/2018/08/NHS-Slider-03-1024x731.jpg'},
        {id: 1, name: 'Test1', price:'400', image:'https://nevadahumanesociety.org/wp-content/uploads/2018/08/NHS-Slider-03-1024x731.jpg'},
        {id: 2, name: 'Test2', price:'40000', image:'https://nevadahumanesociety.org/wp-content/uploads/2018/08/NHS-Slider-03-1024x731.jpg'},
    ]
}

const itemReducer = (state = initState, action) => {
    return state
}

export default itemReducer