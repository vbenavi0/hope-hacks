async function catSearch(lang, categoryId) { //asynchronous function to search for movie based on argument
    const url = 'https://health.gov/myhealthfinder/api/v3/topicsearch.json?lang='+lang+'&categoryId='+categoryId; //url to fetch from
    return fetch(url)
        .then(res => res.json()) //convert api response to json
        .then(json => [{ //results to return
            result: json.Result.Resources.Resource
        }])
        .catch(err => console.error('error:' + err));
}

catSearch('en', 15).then(res => console.log(res[0].result[0])) //example output

module.exports = catSearch //export search function