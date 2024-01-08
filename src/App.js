import { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState({name: "", email: "", phone: "", message: ""});
  
  const handleChange = (e) =>{
    const name = e.target.name
    const value = e.target.value
    setData({...data, [name]: value})
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(data.name){
      alert(data.name)
      alert(data.email)
      alert(data.phone)
      alert(data.message)
      console.log(data)
    }
    setData({name: "", email: "", phone: "", message: ""})
  }

  return (
    <div className="container">
      <form method='post' onSubmit={handleSubmit}>
        <h1>Contact Us</h1>
        <input type="text" name="name" value={data.name} onChange={handleChange}  placeholder='Enter name'/>
        <input type="email" name="email" placeholder='example@email.com' value={data.email} onChange={handleChange}/>
        <input type="phone" name="phone" placeholder='+91' value={data.phone} onChange={handleChange}/>
        <textarea name="message" cols="30" rows="10" placeholder='your message.....' value={data.message} onChange={handleChange}></textarea>
        <button type="submit">Send</button>
      </form>
    
      
    </div>
  );
}

export default App;
