import React from 'react';
import { Link } from 'react-router-dom';
import { useData } from './DataContext';

const Data = () => {
  const { state, dispatch } = useData();

  const handleDelete = (index) => {
    dispatch({ type: 'DELETE_DATA', payload: index });
  };



  return (
    <div>
      <h1>Student Data</h1>
      <Link to="/create" className='back'>Add Data</Link>
      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Roll No</th>
            <th>Fees</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {state.data.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.rollNo}</td>
              <td>{student.fees}</td>
              <td>{student.age}</td>
              <td>
                <Link to={`/update/${index}`}><button>Update</button></Link>
                <button onClick={() => handleDelete(index)} className='delete'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Data;
