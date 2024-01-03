async function keyWordSearch(lang, keyword) { //asynchronous function to search for movie based on argument
    const url = 'https://health.gov/myhealthfinder/api/v3/topicsearch.json?lang='+lang+'&keyword='+keyword; //url to fetch from
    console.log(url)
    return fetch(url)
        .then(res => res.json()) //convert api response to json
        .then(json => [{ //results to return
            result: json.Result.Resources.Resource
        }])
        .catch(err => console.log('error:' + err));
}

// keyWordSearch("es", "h").then(res => console.log(res[0].result[1])) // example output

module.exports = keyWordSearch //export search function