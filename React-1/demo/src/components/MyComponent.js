

function Mycomponent(){

    const name = 'Steve'

    const showMessage =()=>{
       return 'Hello This is a message from ShowMessage function'
    }


    return (
        <div>
            <h2>Hello I am {name}  {10*20} {showMessage()}</h2>
        </div>
    )
}

export default Mycomponent