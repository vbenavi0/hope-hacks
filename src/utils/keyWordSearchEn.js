async function keyWordSearchEn(keyword) { //asynchronous function to search for movie based on argument
    const url = 'https://health.gov/myhealthfinder/api/v3/topicsearch.json?lang=en&keyword='+keyword; //url to fetch from
    return fetch(url)
        .then(res => res.json()) //convert api response to json
        .then(json => [{ //results to return
            result: json.Result.Resources.Resource
        }])
        .catch(err => console.error('error:' + err));
}

// keyWordSearchEn("heart").then(res => console.log(res[0].result[1])) // example output

module.exports = keyWordSearchEn //export search function