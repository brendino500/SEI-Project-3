import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe,faPortrait,faFlag } from '@fortawesome/free-solid-svg-icons'


const SpotForm = ({  formData, handleChange, handleSubmit, submitText }) => {
  return (
    <div className="columns ">
      <form 
      onSubmit={handleSubmit} 
      className="column is full length "> 
        <main className="section">
        <h1 class="title is-2 spotHeading">SURF SPOT</h1>
            <div className="columns is-mobile">
            <div className="column is-4-tablet is-offset-4-tablet is-8-mobile is-offset-2-mobile box boxcolor">
            <div className="control list">
            <div className="field">
            <label className="label">Continent</label>
            <div className="control is-expanded">
            <div className="select is-fullwidth writehere">
            <select name="continent" onChange={handleChange} value={formData.value} defaultValue="">
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon={faGlobe} />
          </span>
          <option disabled value="">-
          </option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="North America">North America</option>
          <option value="Oceania">Oceania</option>
          <option value="South America">South America</option>
          </select>
          </div>
        </div>
        </div>
        <div className="field">
          <label className="label">Spot</label>
          <p className="control is-expanded">  
          <div className="control has-icons-left text">
            <input
              className="input user"
              placeholder="Spot"
              name="spot"
              onChange={handleChange}
              value={formData.spot}
            />
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon={faGlobe} />
            </span>
          </div>
          </p>
        </div>
        <div className="field">
          <label className="label">Region</label>
          <p className="control is-expanded">  
          <div className="control has-icons-left text">
            <input
              className="input user"
              placeholder="Region"
              name="region"
              onChange={handleChange}
              value={formData.region}
            />
            <span className="icon is-small is-left text">
              <FontAwesomeIcon icon={faGlobe} />
            </span>
          </div>
          </p>
        </div>
        <div className="field">
          <label className="label">Country</label>
          <p className="control is-expanded">  
          <div className="control has-icons-left text">
            <input
              className="input user"
              placeholder="Country"
              name="country"
              onChange={handleChange}
              value={formData.country}
            />
            <span className="icon is-small is-left text">
              <FontAwesomeIcon icon={faFlag} />
            </span>
          </div>
          </p>
        </div>
        <div className="field">
          <label className="label">Longtitude</label>
          <p className="control is-expanded">  
          <div className="control has-icons-left text">
            <input
              className="input user"
              placeholder="Longtitude"
              name="long"
              onChange={handleChange}
              value={formData.long}
            />
            <span className="icon is-small is-left text">
              <FontAwesomeIcon icon={faGlobe} />
            </span>
          </div>
          </p>
        </div>
        <div className="field">
          <label className="label">Latitude</label>
          <p className="control is-expanded">  
          <div className="control has-icons-left text">
            <input
              className="input user"
              placeholder="Latitude"
              name="lat"
              onChange={handleChange}
              value={formData.lat}
            />
            <span className="icon is-small is-left text">
              <FontAwesomeIcon icon={faGlobe} />
            </span>
          </div>
          </p>
        </div>
            <div className="field">
            <label className="label">Wave Types</label>
        <div className="control is-expanded">
        <div className="select is-fullwidth writehere">
          <select name="waveType" onChange={handleChange} value={formData.value} defaultValue="">
          <span className="icon is-small is-left">
              <FontAwesomeIcon icon={faGlobe} />
            </span>
          <option disabled value="">-</option>
          <option value="Beach Breaks">Beach Breaks</option>
          <option value="Reef Breaks">Reef Breaks</option>
          <option value="Point breaks">Point breaks</option>
          <option value="Rivermouth Waves">Rivermouth Waves</option>
          <option value="Reform Waves">Reform Waves</option>
          <option value="Crumbly Waves">Crumbly Waves</option>
          <option value="Double-up Waves">Double-up Waves</option>
          </select>
          </div>
        </div>
        </div> 
        <div className="field">
        <label className="label">Difficulty</label>
        <div className="control is-expanded">
        <div className="select is-fullwidth writehere">
          <select name="difficulty" onChange={handleChange} value={formData.value} defaultValue="">
          <span className="icon is-small is-left">
              <FontAwesomeIcon icon={faGlobe} />
            </span>
          <option disabled value="">-</option>
          <option value="All levels">All levels</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
          </select>
          </div>
        </div>
        </div> 
        <div className="field">
        <label className="label">Season</label>
        <div className="control is-expanded">
        <div className="select is-fullwidth writehere">
          <select name="season" onChange={handleChange} value={formData.value} defaultValue="">
          <option disabled value="">-</option>
          <option value="Summer">Summer</option>
          <option value="Winter">Winter</option>
          <option value="Autumn">Autumn</option>
          <option value="Spring">Spring</option>
          </select>
          </div>
        </div>
        </div> 
        <div className="field">
          <label className="label">Add an Image (URL)</label>
          <p className="control is-expanded">  
          <div className="control has-icons-left text">
            <input
              className="input user"
              placeholder="image"
              name="image"
              onChange={handleChange}
              value={formData.image}
            />
              <span className="icon is-small is-left text">
              <FontAwesomeIcon icon={faPortrait} />
            </span>
          </div>
          </p>
        </div>
        <div className="field">
          <label className="label">Profile Picture</label>
          <p className="control is-expanded">  
          <div className="control has-icons-left text">
            <input
              className="input user"
              placeholder="Profile Picture"
              name="profileImage"
              onChange={handleChange}
              value={formData.lat}
            />
              <span className="icon is-small is-left text">
              <FontAwesomeIcon icon={faGlobe} />
            </span>
          </div>
          </p>
        </div>
        <label className="label">Description</label>
          <div className="field text">
          <div className="control">
            <textarea 
              className="textarea" 
              placeholder="Description"  
              name="description"
              value={formData.description} 
              onChange={handleChange}>
            </textarea>
            <button type = "submit" className="button is-dark sendoff">
              Submit
              {submitText}  
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  </form>
</div>
    )
}
export default SpotForm