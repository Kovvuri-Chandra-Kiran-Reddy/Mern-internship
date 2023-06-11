import React from 'react'
import './App.css'

const App = () => {
  const handleClick = () => {
    var dob = new Date(document.getElementById("date").value);
    var month_diff = Date.now() - dob.getTime();
    if (isNaN(dob) || month_diff<0) alert("Please enter valid Date of birth")
    else {
      var age_dt = new Date(month_diff);
      var year = age_dt.getUTCFullYear();
      var age = Math.abs(year - 1970);
      if (age == 1)
        document.getElementById("age").innerText = age + " year";
      else
        document.getElementById("age").innerText = age + " years";
    }

  }

  return (
    <>
      <div className="outer">
        <h2 style={{ marginBottom: "0px" }}>Age Calculator</h2>
        <p>Enter you date of birth</p>
        <input type="date" id='date' />
        <input type='submit' value="Calculate Age" onClick={handleClick} />
        <p id="age"></p>
      </div>
    </>
  )
}

export default App
