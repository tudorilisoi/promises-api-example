const BASE_URL = 'http://localhost:5556'

// const promise  = $.getJSON(locationsURL, {
//     onError:err=>{},
//     onSuccess:function(locations){
//         //called when the network request is complete
//     }
// })

function fetchData() {
    const locationsURL = BASE_URL + '/locations'
    const locationsPromise = $.getJSON(locationsURL)
    return locationsPromise.then(locations => {
        const firstLoc = locations[0]
        const weatherURL = BASE_URL + '/weather/' + firstLoc
        return $.getJSON(weatherURL).then(weatherInfo => {
            return {
                locations: locations,
                weatherInfo: weatherInfo,
            }
        })
    })
}

function setup() {
    fetchData().then(data => {
        $('body pre').html(JSON.stringify(data, 2, 2))
    }).catch(err => {
        $('body>pre').html('<button onclick="setup()" >Retry</button>')
        console.error('Promise sequence failed', err)
    })
}

$(setup)

