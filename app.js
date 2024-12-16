import React, { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    userId: "",
    title: "",
    id: "",
    body: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const onSubmitF = async (e) => {
    e.preventDefault();
    
    const data = {
      userId: formData.name,
      title: formData.age,
      id: formData.id,
      body: formData.profile,
    };

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Form data successfully submitted:", result);
        alert("Form submitted successfully!");
      } else {
        console.error("Error submitting form:", response.statusText);
        alert("There was an error submitting the form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form.");
    }
  };

  return (
    <div className="form">
      <h1>Signup</h1>
      <form onSubmit={onSubmitF}>
        <div>
          <label htmlFor="name">UserId</label>
          <input
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="age">Title</label>
          <input
            id="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="id">ID</label>
          <input
            id="id"
            value={formData.id}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="profile">Body</label>
          <input
            id="profile"
            value={formData.profile}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
