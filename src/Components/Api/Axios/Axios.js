import axios from 'axios';
import React, { useState, useEffect } from 'react';

const useAxios = (url) => {
    const [items, setItems] = useState([]);
  
  React.useEffect(() => {
    axios.get(url).then((response) => {
      setItems(response.data.results);
    });
  }, [url]);
  if (!items) return null;

  return {items}
  
}

export default useAxios

//   useEffect(() => {
//     const total = items.reduce((acc, row) => acc + row.amount, 0);
//     setTotalSum(total)
//     console.log(total)
//   }, [items]);
  
// 

//count array
// const storage = [
//     { data: '1', status: '0' },
//     { data: '2', status: '0' },
//     { data: '3', status: '0' },
//     { data: '4', status: '0' },
//     { data: '5', status: '0' },
//     { data: '6', status: '0' },
//     { data: '7', status: '1' },
//   ];
  
//   const count = storage.reduce((counter, obj) => obj.status === '0' ? counter += 1 : counter, 0); // 6
//   console.log(count)