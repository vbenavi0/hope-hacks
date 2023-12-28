async function catList(lang) { //asynchronous function to search for movie based on argument
    const url = 'https://health.gov/myhealthfinder/api/v3/itemlist.json?lang='+lang+'&type=category'; //url to fetch from
    return fetch(url)
        .then(res => res.json()) //convert api response to json
        .then(json => [{ //results to return
            result: json.Result.Items
        }])
        .catch(err => console.error('error:' + err));
}

// catList('en').then(res => console.log(res[0].result)) //example output

module.exports = catList //export search function