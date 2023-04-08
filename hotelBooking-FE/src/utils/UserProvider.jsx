import { createContext, useContext, useEffect, useState } from "react";
import { url_base } from ".";
export const UserContext = createContext();
import axios from "axios";

export default function UserProvider({children}) {

  const [userInfo, setUserInfo] = useState(null);
    const fetchUserInfo = (token) => {
    axios.get(`${url_base}/users`, { headers: {
        'Authorization': `Bearer ${token}`}})
    .then((response) => {
      setUserInfo(response.data)
    })
    .catch(error =>
      {
        console.log(error.response.data);
        localStorage.removeItem('token');
      })
  }

  return (
        <UserContext.Provider value={{ userInfo, setUserInfo, fetchUserInfo }}>
          {children}
        </UserContext.Provider>
      )
}
