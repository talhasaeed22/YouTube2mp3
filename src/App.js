import { useState } from 'react';
import './App.css';

function App() {
  const [download, setDownload] = useState("")
  const [id, setId] = useState(null)
  const url = 'http://localhost:5000'
  const handleInput= async ()=>{
    console.log(id.videoID)
    const response = await fetch(`${url}/convert-mp3`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({id:id.videoID})
  });
  const json = await response.json();
  const givenID = json.id
  console.log(givenID)

  const fetchAPI = await fetch(`https://youtube-mp36.p.rapidapi.com/dl?id=${givenID}`, {
    "method":"GET",
    "headers": {
      'x-rapidapi-host': 'youtube-mp36.p.rapidapi.com',
      'x-rapidapi-key': '0c77206198mshfedeafe1345fc80p19d3ecjsn48dd43210dbb'
    }
  });

  const apiResponse = await fetchAPI.json();
  console.log(apiResponse)
  setDownload(apiResponse.link)
  document.getElementById('link').style.display = 'block';
  }
  const onChange = (e)=>{
    setId({...id, [e.target.name] : e.target.value})
  }
  return (
    <>
      <div className="container">
        <label htmlFor="videoID">Enter Video ID</label> <br />
        <input type="text" name="videoID" id="videoID" onChange={onChange} />
        <button type="submit" onClick={handleInput}>Submit</button>

        <a id='link' style={{display:"none"}} href={download}>Click here to download</a>

      </div>
    </>
  );
}

export default App;
