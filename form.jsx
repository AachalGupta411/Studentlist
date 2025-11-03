import React, { useState } from 'react';

export default function Form() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [course, setCourse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !age.trim() || !course.trim()) return;

    const newStudent = {
      id: Date.now(),
      name: name.trim(),
      age: age.trim(),
      course: course.trim(),
    };

    setStudents((prev) => [...prev, newStudent]);
    setName('');
    setAge('');
    setCourse('');
  };

  return (
    <div style={{ maxWidth: 600, margin: '1rem auto', padding: 12 }}>
      <h2>Student Form</h2>

      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <input
          type="text"
          placeholder="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />

        <button type="submit">Add</button>
      </form>

      <div>
        {students.length === 0 ? (
          <p>No students yet.</p>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', borderBottom: '1px solid #ccc', padding: 8 }}>Name</th>
                <th style={{ textAlign: 'left', borderBottom: '1px solid #ccc', padding: 8 }}>Age</th>
                <th style={{ textAlign: 'left', borderBottom: '1px solid #ccc', padding: 8 }}>Course</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s) => (
                <tr key={s.id}>
                  <td style={{ padding: 8, borderBottom: '1px solid #eee' }}>{s.name}</td>
                  <td style={{ padding: 8, borderBottom: '1px solid #eee' }}>{s.age}</td>
                  <td style={{ padding: 8, borderBottom: '1px solid #eee' }}>{s.course}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
