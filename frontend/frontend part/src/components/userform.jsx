import React, { useState } from "react";
import axios from "axios";

const UserForm = () => {
  const [name, setName] = useState("");
  const [socialMedia, setSocialMedia] = useState("");
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    setImages((prevImages) => [...prevImages, ...Array.from(e.target.files)]);
    //setImages([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("socialMedia", socialMedia);
    Array.from(images).forEach((file) => {
      formData.append("images", file);
    });

    try {
      await axios.post("http://localhost:5000/api/users", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Data submitted successfully");
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <br />
      <label>Social Media Handle:</label>
      <div>
        <input
          type="text"
          value={socialMedia}
          onChange={(e) => setSocialMedia(e.target.value)}
          required
        />
      </div>
      <br />
      <div>
        <label>Upload Images:</label>
        <input type="file" multiple onChange={handleImageChange} required />
      </div>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
