import { useState } from 'react'
import './App.css'
import './index.css'

const App = () => {
  const [count, setCount] = useState(0);
  const handleChange = () => {
    var str = document.getElementById("text").value;
    var c = str.split(' ').filter((num) => { return num != '' }).length;
    setCount(c);
  }

  return (
    <>
      <div className="outer">
        <h2>Responsive Paragraph Word Counter</h2>
        <textarea rows={10} onChange={handleChange} id="text"></textarea>
        <p>Word Count : {count} </p>
      </div>
    </>
  )
}

export default App
