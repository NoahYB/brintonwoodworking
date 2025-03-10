import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import "../styles/Admin.css";

const Admin = () => {
  const { logout } = useAuth();
  const [selectedFile, setSelectedFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("furniture");
  const [materials, setMaterials] = useState("");
  const [uploads, setUploads] = useState([]);

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // In a real app, you would upload to a server
    // This is just a simulation
    if (selectedFile && title && description) {
      const newUpload = {
        id: Date.now(),
        title,
        description,
        category,
        materials,
        file: selectedFile.name,
        preview: URL.createObjectURL(selectedFile),
      };

      setUploads([newUpload, ...uploads]);

      // Reset form
      setSelectedFile(null);
      setTitle("");
      setDescription("");
      setMaterials("");
      document.getElementById("file-upload").value = "";
    }
  };

  return (
    <div className="admin-page">
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <button onClick={logout} className="logout-btn">
          Logout
        </button>
      </div>

      <div className="admin-content">
        <section className="upload-section">
          <h2>Add New Project</h2>
          <form onSubmit={handleSubmit} className="upload-form">
            <div className="form-group">
              <label htmlFor="file-upload">Project Image</label>
              <input
                type="file"
                id="file-upload"
                accept="image/*"
                onChange={handleFileChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="title">Project Title</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="furniture">Furniture</option>
                <option value="cabinetry">Cabinetry</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="materials">Materials</label>
              <input
                type="text"
                id="materials"
                value={materials}
                onChange={(e) => setMaterials(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={!selectedFile}
            >
              Upload Project
            </button>
          </form>
        </section>

        <section className="recent-uploads">
          <h2>Recent Uploads</h2>
          {uploads.length === 0 ? (
            <p>No recent uploads</p>
          ) : (
            <div className="uploads-grid">
              {uploads.map((upload) => (
                <div key={upload.id} className="upload-item">
                  <img src={upload.preview} alt={upload.title} />
                  <h3>{upload.title}</h3>
                  <p>Category: {upload.category}</p>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Admin;
