// Code Keypad Component Here

function Keypad (){
    function  handleEvent (){
        
        console.log("Entering password...")
    
    }
    return (
        <div>
        <input type="password" onChange={handleEvent} placeholder='Enter password' />
        
        </div>
    )
}

export default Keypad;