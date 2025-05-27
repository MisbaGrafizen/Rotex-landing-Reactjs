import axios from "axios";
const cloudinaryUpload = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "CDH_image_unsigned");
  try {
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/dhercezab/image/upload`,
      formData
    );
    return response.data.secure_url;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};
export default cloudinaryUpload;
