import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs'

cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET 
});

const uploadOnCloudinary = async (localfile)=>{
  try {
    if(!localfile) return null
    const response = await cloudinary.uploader.upload((localfile),{
      resource_type:"auto"
    })
    console.log("file is uploaded on cloudinary",response.url);
    return response;
    
  } catch (error) {
      fs.unlinkSync(localfile)
      console.log(error)
      return null
  }
}

export {uploadOnCloudinary};