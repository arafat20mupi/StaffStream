import axios from "axios"


export const imageUpload = async image => {

    const formData = new FormData()
    formData.append('image',image)
      // Upload user Pic
      const {data} = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGEBB_API_URL}`,formData)
      return data.data.display_url

}