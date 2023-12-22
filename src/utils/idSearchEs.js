async function idSearchEs(topicId) { //asynchronous function to search for movie based on argument
    const url = 'https://health.gov/myhealthfinder/api/v3/topicsearch.json?lang=es&topicId='+topicId; //url to fetch from
    return fetch(url)
        .then(res => res.json()) //convert api response to json
        .then(json => [{ //results to return
            result: json.Result.Resources.Resource[0]
        }])
        .catch(err => console.error('error:' + err));
}

// idSearchEs(25).then(res => console.log(res)) //example output

module.exports = idSearchEs //export search function