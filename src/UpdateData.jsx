import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useData } from './DataContext';

const UpdateData = () => {
  const { state, dispatch } = useData();
  const { id } = useParams();
  const selectedData = state.data[id];
  const [formData, setFormData] = useState(selectedData);
  const navigate = useNavigate()


  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'UPDATE_DATA', payload: { ...formData, id: Number(id) } });
    navigate("/")
  };

  return (
    <div>
      <h1>Update Student Data</h1>
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
        <button type="submit" className='update'>Update</button>
      </form>
    </div>
  );
};

export default UpdateData;
