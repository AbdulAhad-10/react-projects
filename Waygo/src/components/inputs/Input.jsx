import { useState } from 'react'
import './inputs.css'

const Input = () => {

  const[formData, setFormData] = useState({
    location: "",
    activity: "",
    budget: "",
    duration: ""
  })

  function handleChange(event) {
    const {name, value} = event.target

    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }))
  }

  return (
    <div className="inputs">
      <div>
        <select name="location" id="location" className="inputs__select" value={formData.location} onChange={handleChange}>
          <option value="" disabled selected>Location</option>
          <option value="North America">North America</option>
          <option value="Europe">Europe</option>
          <option value="Asia">Asia</option>
          <option value="Africa">Africa</option>
        </select>
      </div>
      

      <div>
        <select name="activity" id="activity" className="inputs__select" value={formData.activity} onChange={handleChange}>
          <option value="" disabled selected>Activity</option>
          <option value="Sightseeing">Sightseeing</option>
          <option value="Adventure">Adventure</option>
          <option value="Water Sports">Water Sports</option>
          <option value="Cruise">Cruise</option>
        </select>
      </div>

      <div>
        <select name="budget" id="budget" className="inputs__select" value={formData.budget} onChange={handleChange}>
          <option value="" disabled selected>Budget</option>
          <option value="Inexpensive">Inexpensive</option>
          <option value="Moderate">Moderate</option>
          <option value="Luxury">Luxury</option>
        </select>
      </div>


      <div>
        <select name="duration" id="duration" className="inputs__select" value={formData.duration} onChange={handleChange}>
          <option value="" disabled selected>Duration</option>
          <option value="Day Trip">Day Trip</option>
          <option value="Weekend">Weekend</option>
          <option value="Week">Week</option>
          <option value="2 Weeks">2 Weeks</option>
        </select>
      </div>
      
    </div>
  )
}

export default Input
