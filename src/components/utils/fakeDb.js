const addToDb = id => {
    let shoppingCart = {}

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('adding-job')
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart)
    }

    // add quantity
    // const quantity = shoppingCart[id]
    // if (quantity) {
    //     const newQuantity = quantity + 0

    // } else {
    //     shoppingCart[id] = 1
    // }
    localStorage.setItem('adding-job', JSON.stringify(shoppingCart))
}

const getStoredJob = () => {
    let shoppingJob = {}

    //get the added Job from local storage
    const storedJob = localStorage.getItem('adding-job')
    if (storedJob) {
        shoppingJob = JSON.parse(storedJob)
    }
    return shoppingJob
}



export { addToDb, getStoredJob }