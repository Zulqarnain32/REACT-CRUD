import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { useData } from './DataContext';

const CreateData = () => {
  const { dispatch } = useData();
  const [formData, setFormData] = useState({ name: '', rollNo: '', fees: '', age: '' });
  const navigate = useNavigate()

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_DATA', payload: formData });
    setFormData({ name: '', rollNo: '', fees: '', age: '' });
    navigate("/")
  };


  return (
    <div>
      <h1>Create Student Data</h1>
      <Link to="/" className='back'>Back to Data</Link>
      <form onSubmit={handleFormSubmit}>
        <label>
          Student Name:
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </label>
        <label>
          Roll No:
          <input
            type="text"
            value={formData.rollNo}
            onChange={(e) => setFormData({ ...formData, rollNo: e.target.value })}
          />
        </label>
        <label>
          Fees:
          <input
            type="text"
            value={formData.fees}
            onChange={(e) => setFormData({ ...formData, fees: e.target.value })}
          />
        </label>
        <label>
          Age:
          <input
            type="text"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateData;
