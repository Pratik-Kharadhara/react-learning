export default function ListPicker({numbers}){
    const randIndx = Math.floor(Math.random()* numbers.length);
    const Picker = numbers[randIndx];
    return (
        
        <div>
            <h3>Number is {numbers}</h3> 
            <h3>random number is {Picker}</h3>
        </div>
    )
}