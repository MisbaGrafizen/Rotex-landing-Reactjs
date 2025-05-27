export default async function uploadToHPanel(file) {
    const formData = new FormData();
    formData.append("file", file);
  
    try {
      const response = await fetch("https://storage.server.grafizen.in/upload.php", {
        method: "POST",
        body: formData,
      });
  
      const result = await response.json();
  
      if (response.ok && result.url) {
        return result.url; // Ensure your PHP returns `{ "url": "uploaded_link_here" }`
      } else {
        throw new Error("Upload failed");
      }
    } catch (error) {
      throw new Error("Image upload error: " + error.message);
    }
  }
  