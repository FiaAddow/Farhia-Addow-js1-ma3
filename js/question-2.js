/*Question 2
Make a call to the Rawg API.*/

const apiKey = "2b98f3683d9c4123aa1a3f17f13f673e";
const rawgUrl = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key={apiKey}`;



async function getData() {
    const response = await fetch(url);
    const results = await response.json();
    const corsEnabledUrl = "https://rawg.io/@farhia/apikey" + rawgUrl;
    
    console.log(results);
}

    getData();

    async function makeApiCall() {
        try {
            const response = await fetch(corsFix);
    
            const results = await response.json();
    
            console.log(results);
    
        } catch (error) {
            console.log(error);
            resultsContainer.innerHTML = alert("error", error);
        }
    }
    
    makeApiCall();