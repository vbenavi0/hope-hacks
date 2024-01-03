async function idSearch(lang, topicId) { //asynchronous function to search for movie based on argument
    const url = 'https://health.gov/myhealthfinder/api/v3/topicsearch.json?lang='+lang+'&topicId='+topicId; //url to fetch from
    return fetch(url)
        .then(res => res.json()) //convert api response to json
        .then(json => [{ //results to return
            result: json.Result.Resources.Resource[0]
        }])
        .catch(err => console.log('error:' + err));
}

// idSearch('es', 25).then(res => console.log(res)) //example output

module.exports = idSearch //export search function