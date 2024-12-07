import User from "./User";


function App(){

  const UserData ={
    name : "Melvin",
    age: 25,
    phone: 7373335558,
    email: 'me@2026',
  }
  return(
    <div>
        <h1>Welcome</h1>
        <User 
          /* name = {UserData.name} 
          age = {UserData.age} 
          phnumber = {UserData.phone} 
          email = {UserData.email} */

          // Spread Operator

          {...UserData}
          
          />
    </div>
  )
}


export default App;
