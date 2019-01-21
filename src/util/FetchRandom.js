//this method as a function (users) that will fetch my users list from the API. It will fectch 25 users as per stated in the URL 
const FetchRandom = {

    //fetching # of users that are random
    users() {
        const url = 'https://api.randomuser.me/?results=2';
        return fetch(url)
            .then(res => res.json())
            .then(data => data.results)
    }
}

export default FetchRandom;