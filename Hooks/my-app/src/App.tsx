// import UseEffectHook from "./components/useEffect";
// import UseMemoHook from "./components/useMemo";
// import UseStateHook from "./components/userstate";

import axios from "axios";
import { useState,useEffect, useMemo } from "react";
function App() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect (function(){
    
    const timer = setTimeout(function(){
      setLoading(false);
    },3000)
    
    return function(){
      clearTimeout(timer)
    }

  },[])
  useEffect(function(){
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(function(response){
        setUsers(response.data);
        })
        .catch(function(error){
          console.log("Error Fetching the Users!", error)
        })
  },[])

  const filteredUsers = useMemo(function(){
      return users.filter(function(user){
        return user.name.toLowerCase().includes(search.toLowerCase());
      })
  },[search,users])

  if(loading){
      return <h2>Loading Users....</h2>
    }
  return (
  <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">

    <h1 className="text-3xl font-bold mb-6">Users List</h1>

    <input
      type="text"
      value={search}
      placeholder="Search Users..."
      onChange={function(event){
        setSearch(event.target.value)
      }}
      className="w-72 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 mb-6"
    />

    <div className="w-full max-w-md space-y-3">

      {filteredUsers.map(function(user){
        return (
          <div
            key={user.id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-md transition"
          >
            <p className="text-lg font-semibold">{user.name}</p>
            <p className="text-gray-500 text-sm">{user.email}</p>
          </div>
        );
      })}

      {filteredUsers.length === 0 && search !== "" && (
        <p className="text-gray-500 text-center mt-4">
          No users found
        </p>
      )}

    </div>

  </div>
);
}
export default App;