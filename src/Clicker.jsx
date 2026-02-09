export default function Clicker(params){
    function handleClick2(){
        
                alert(params.msg);
           
        }
    function handleClick3(e){
        //as we know submit button will refresh the page
        // so we will use prevent dafault to prevent that
        e.preventDefault();
        alert('the form is submited');
         console.log('the form is submited');

    }

   return (
        <div>
            <h2 onMouseOver={handleOver}>hello!!</h2>
            <button onClick={handleClick}>CLick me</button>
            <form action="submit">
                <button onClick={handleClick3}> {/*as we know submit button will refresh the page*/}
                    submit !
                </button>
            </form>
             
            <button onClick={handleClick2}>{params.buttonTxt}</button>
        </div>
        
    )
}
 function handleClick(){
    
            console.log("You just clicked me!!")
       
    }
function handleOver(){
         alert("Don't Come near me !!!")
           
      
    }