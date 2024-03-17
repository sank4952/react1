// import React, { useState } from 'react';
// import './Uploads.css';

// const Uploads = () => {
//   const [file, setFile] = useState(null);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleFileUpload = async () => {
//     if (file) {
//       const formData = new FormData();
//       formData.append('file', file);

//       try {
//         const response = await fetch('http://localhost:5008/upload', {
//           method: 'POST',
//           body: formData,
//         });

//         const result = await response.json();

//         if (result.success) {
//           alert('File uploaded and processed successfully');
//         } else {
//           alert('Error uploading file');
//         }
//       } catch (error) {
//         console.error('File upload error:', error);
//       }
//     } else {
//       alert('Please select a file');
//     }
//   };

//   return (
//     <div className="upload-container">
//       <div className="upload-card">
//         <div className="upload-title">Upload File</div>
//         <input type="file" onChange={handleFileChange} accept=".xlsx" />
//         <button onClick={handleFileUpload}>Upload File</button>
//       </div>
//     </div>
//   );
// };

// export default Uploads;
import React, { useState } from 'react';
import './Uploads.css';

const Uploads = () => {
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileUpload = async () => {
    setIsLoading(true); // Start the loader

    try {
      if (file) {
        const formData = new FormData();
        formData.append('file', file);

        const response = await fetch('http://localhost:5008/upload', {
          method: 'POST',
          body: formData,
        });

        const result = await response.json();

        if (result.success) {
          alert('File uploaded and processed successfully');
        } else {
          alert('Error uploading file');
        }
      } else {
        alert('Please select a file');
      }
    } catch (error) {
      console.error('File upload error:', error);
      alert('An error occurred during file upload.');
    } finally {
      setIsLoading(false); // Stop the loader
      setFile(null); // Reset file selection
    }
  };

  return (
    <div className="upload-container">
      <div className="upload-card">
        <div className="upload-title">Upload File</div>
        <input type="file" onChange={handleFileChange} accept=".xlsx" />
        <button onClick={handleFileUpload} disabled={isLoading}>
          {isLoading ? 'Uploading...' : 'Upload File'}
        </button>
        {isLoading && <div className="loader">Loading...</div>}
      </div>
    </div>
  );
};

export default Uploads;

