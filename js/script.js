/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator
*************************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community

/*** 
 * `quotes` array 
***/
const quotes = [

  {
    quote: "It is hard to fail, but it is worse never to have tried to succeed.  In this life, we get nothing save by effort.",
    source: "Theodore Roosevelt",
    citation: "Strenuous Life Speach",
    year: "1899",
    tags: "Inspirational"
  },
  {
    quote: "If your actions inspire others to dream more, learn more, do more and become more, you are a leader.",
    source: "John Quincy Adams",
    citation: "",
    year: "",
    tags: "Leadership"
  },
  {
    quote: "Have the courage to follow your heart and intuition. They somehow already know what you truly want to become. Everything else is secondary.",
    source: "Steve Jobs",
    citation: "Stanford Commencement Address",
    year: "2005",
    tags: "Inspirational"
  },
  {
    quote: "Learning is the only thing the mind never exhausts, never fears, and never regrets.",
    source: "Leonardo da Vinci",
    citation: "",
    year: "",
    tags: "Learning"
  },
  {
    quote: "The happiest people discover their own nature and match their life to it.",
    source: "Ray Dalio",
    citation: "Principles: Life and Work",
    year: "2017",
    tags: "Happiness"
  }
];


/***
 * `getRandomQuote` function
* Function that gets quote object from list above
* @return   {Object}         Quote Information
*/

const getRandomQuote = () => {

  // Get Random Number
  const randomNum = Math.floor((Math.random() * 5));

  // Use Random Number to get and return Quote Object
  return quotes[randomNum];
}

/***
 * getBackgroundColor function
 * 
 * Function will use randon numbers to create a random RGB to change the background of our app
 * @return string
 */
const randomValue = () => Math.floor( Math.random() * 256 );
const getBackgroundColor = () =>{
const color = `rgb( ${randomValue()},  ${randomValue()}, ${randomValue()})`; 
return color
}

/***
 * `printQuote` function
***/

const printQuote = () => {

  const quoteObj = getRandomQuote(); //Get Quote Object

  let html = `<p class="quote"> ${quoteObj.quote} </p>
<p class="source"> ${quoteObj.source}`

  if (quoteObj.citation != "") { //Add Citation to HTML if available
    html += `<span class = 'citation'> ${quoteObj.citation} </span>`
  }

  if (quoteObj.year != '') { //Add year to HTML if available
    html += `<span class = "year"> ${quoteObj.year} </span>`
  }

  if (quoteObj.tags != '') { //Add tags to HTML if available
    html += `</br><span class = "tags"> Tags: ${quoteObj.tags} </span>`
  }

  html += "</p>" //Close HTML /p tag

  document.getElementById('quote-box').innerHTML = html; //Print Quote to HTML
  document.getElementById('main').style.backgroundColor = getBackgroundColor(); //Change Background Color
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

setInterval(printQuote, 5000); //New Quote every 5 seconds
document.getElementById('load-quote').addEventListener("click", printQuote, false);