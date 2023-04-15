import axios from 'axios'
import  Card from '../Card'
import React, { useState, useEffect } from 'react';
export default function Contoh() {
    const baseURL = "http://api1.test/api/category";
    const [items, setItems] = useState([]);
    const [a, setA] = useState("");
console.log(items)
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setItems(response.data.data);
    });
  }, []);

  function createPost() {
    axios.post(baseURL, {
        name: 'Fred'
      })
      .then(function (response) {
        console.log('berhasil');
        setA("berhasil create")
      })
      .catch(function (error) {
        console.log(error);
      },[]);
        
  }

//   if (!items) return null;

  return (
    <div>
        {a}
      {/* {items[0].name} */}
      <button onClick={createPost}>aaaa</button>
    </div>
  );
}


// function updatePost() {
//     axios
//       .put(`${baseURL}/1`, {
//         title: "Hello World!",
//         body: "This is an updated post."
//       })
//       .then((response) => {
//         setPost(response.data);
//       });
//   }


// function deletePost() {
//     axios
//       .delete(`${baseURL}/1`)
//       .then(() => {
//         alert("Post deleted!");
//         setPost(null)
//       });
//   }