//HTTP (Hyper Transfer Protocol) -request response protocol.
/*
I as a developer issue some request the request goes to 3rd party server, that server gives respones
*/

//const puzzleRequest = new XMLHttpRequest()

//puzzleRequest.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordsNum}`)  //the false is to foce it to go Syncronouse way so itll wait for task to be done
//puzzleRequest.send()

//Request - What do we want to do.
//Response- What was actually was done.
//better way doing this is with fetch and async


const getCurrentCountry = async ()=>{
    const ipLocation= await getLocation()
    const country = await getCountry(ipLocation.country)
    return country
}


const getPuzzle = async (wordsNum)=> {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordsNum}`)
    if (response.status===200)
    {
        const data= await response.json()
        return data.puzzle
    }else{
        throw new Error('Unable to get puzzle')
    }
  

}



const getCountry= async (countryCode) =>{
    const response= await fetch(`//restcountries.eu/rest/v2/all`)
        if(response.status === 200)
        {
            const data = await response.json()
            const country = await data.find((item)=> item.alpha2Code === countryCode)
            return country
        } 
        else
        {
            throw new ERROR('There is an ERROR: unable to fetch data')
        }
  
    }


const getLocation= async ()=>{
    const response= await fetch('//ipinfo.io/json?token=b5de89da1987fc')
        if(response.status === 200){
            const data= await response.json()
            return data
        } else {
            throw new ERROR('Cant fetch data')
        }
}


