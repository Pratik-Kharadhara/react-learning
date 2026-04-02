/*
useEffect is a React Hook used to perform side effects in functional components.
use Effect - also known as Side effect its used to 
do some effects(or to run functions) between a re-render 
caused by a useState hook.

useEffect(() => {
    console.log("Runs on every render");
}); // using this will give us this whenevr ther component re renders

-ONly runs once
useEffect(() => {
    console.log("Runs only once");
}, []); // [] denotes null array so it will give the answe
at first and then it wont run as the null array [] never be changed

-Only runs when Dependency changes
useEffect(() => {
    console.log("Runs when count changes");
}, [count]); //when the count will change it will also change 



eg: 
below example where we are fetching the quote from the api 
now we are using useState which help us to set the evry new \
Quote that is generated from the api.

now we want to Load the Quote in the first Render ,
when someone open the page the quote will be displayed at first load

*/









import { useState , useEffect } from "react";

export default function Quote(){

   const quote_url = "https://inspo-quotes-api.herokuapp.com/quotes/random"
   const [crtQuote,setcrtQuote]=useState('')
/*note- useState and useEffect dont take async functions
    so instead of that in useEffect we have to pass a synchronus function and inside
    that we can give async
    we can't 
*/
    useEffect(() => {
   Quote_fetcher();
},[]); //this useEffect will fetch the Quote from the 
//api at the first load



   const Quote_fetcher =async ()=>{
    const response = await fetch(quote_url);
    const responseJson = await response.json();
    const randomQuote= responseJson.quote;
    // console.log(randomQuote)
    setcrtQuote(
        <div className="quote">
            <h1>{randomQuote.text}</h1>
                <p>- {randomQuote.author}</p>
        </div>
    )
   }
   
     
   
   
   return (
        <div>
                <main>
                    <h2>The Quote for the Day</h2>
                    <>{crtQuote}</>
                    <button onClick={Quote_fetcher}>get the Quote</button>
                </main>
        </div>
    )
}