
const quote = document.getElementById('quote')
const author = document.getElementById('author')


const url = `https://quotes.rest/qod?api_key=${config}`


async function get_quote_of_the_day() {
  const getAQuote = document.getElementById('quote')
    const headerDetails = 
  {headers: {
          "Accept": "application/json"
        }
  }
  let response = await fetch(url, 
  headerDetails)
  let data = await response.json()
  console.log(data.contents.quotes[0])

  quote.innerHTML = data.contents.quotes[0].quote
  author.innerHTML = `~  ${data.contents.quotes[0].author}`
  
}

get_quote_of_the_day()