const btn = document.querySelector('.btn');
const getAQuote = document.getElementById('joke')

const url = 'http://quotes.rest/quote/random.json'

btn.addEventListener('click', getQuote)

const headerDetails = 
  {headers: {
          "Accept": "application/json"
        }
  }


async function getQuote() {
    let response = await fetch(url, headerDetails)
    let data = await response.json()
    console.log(data)
}

getQuote()