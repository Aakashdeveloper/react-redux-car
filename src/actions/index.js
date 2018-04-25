
const URL_ROOT = 'http://localhost:7889'

export function getCars(keywords){

    const request = fetch(`${URL_ROOT}/carsIndex?q=${keywords}`,
        {method:'GET'})
    return{
        type:'SEARCH_CARS',
        payload:request
    }

    //fetch->jsonsrver-> search->return data
    //console.log(`${URL_ROOT}/carIndex?q=${keywords}`)
}