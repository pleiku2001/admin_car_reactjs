import "./newUser.css";
import { getStorage, ref, listAll } from "firebase/storage";
import app from "../../";
import { useState } from "react";
import { useEffect } from "react";

export default function NewUser() {
  
  const storage = getStorage();

  // Create a reference under which you want to list
  const listRef = ref(storage, '/');
  console.log(listRef)
  
  // Find all the prefixes and items.
  listAll(listRef)
    .then((res) => {
      res.prefixes.forEach((folderRef) => {
        console.log(res)
        // All the prefixes under listRef.
        // You may call listAll() recursively on them.
      });
      res.items.forEach((itemRef) => {
        // All the items under listRef.
        console.log(itemRef)

      });
    }).catch((error) => {
      // Uh-oh, an error occurred!
      console.log(error)
    });
    
 
  
 
  return (
    <>
     
    </>
    // <div className="newUser">
    //   <h1 className="newUserTitle">New User</h1>
    //   <form className="newUserForm">
    //     <div className="newUserItem">
    //       <label>Username</label>
    //       <input type="text" placeholder="john" />
    //     </div>
    //     <div className="newUserItem">
    //       <label>Full Name</label>
    //       <input type="text" placeholder="John Smith" />
    //     </div>
    //     <div className="newUserItem">
    //       <label>Email</label>
    //       <input type="email" placeholder="john@gmail.com" />
    //     </div>
    //     <div className="newUserItem">
    //       <label>Password</label>
    //       <input type="password" placeholder="password" />
    //     </div>
    //     <div className="newUserItem">
    //       <label>Phone</label>
    //       <input type="text" placeholder="+1 123 456 78" />
    //     </div>
    //     <div className="newUserItem">
    //       <label>Address</label>
    //       <input type="text" placeholder="New York | USA" />
    //     </div>
    //     <div className="newUserItem">
    //       <label>Gender</label>
    //       <div className="newUserGender">
    //         <input type="radio" name="gender" id="male" value="male" />
    //         <label for="male">Male</label>
    //         <input type="radio" name="gender" id="female" value="female" />
    //         <label for="female">Female</label>
    //         <input type="radio" name="gender" id="other" value="other" />
    //         <label for="other">Other</label>
    //       </div>
    //     </div>
    //     <div className="newUserItem">
    //       <label>Active</label>
    //       <select className="newUserSelect" name="active" id="active">
    //         <option value="yes">Yes</option>
    //         <option value="no">No</option>
    //       </select>
    //     </div>
    //     <button className="newUserButton">Create</button>
    //   </form>
    // </div>
  );
}
