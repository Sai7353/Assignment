import axios from 'axios'
import React, { useEffect, useState } from 'react'
const ContenTerraAss = () => {
    let [data,setData]=useState([])
       useEffect(() => {
        axios.get('https://www.reddit.com/r/reactjs.json')
          .then(response => setData(response.data.data.children))
          .catch(error => console.error(error));
      },[])
      return (
        <div>
          {data.map(item => (
            <div key={item.data.id}>
              <h2>{item.data.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: item.data.selftext_html }} />
              <a href={item.data.url} target="_blank" rel="noreferrer">{item.data.url}</a>
              <p>Score: {item.data.score}</p>
            </div>
          ))}
        </div>
      )     
}
export default ContenTerraAss
