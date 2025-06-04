import { url, postImage1080x1920, postImage1080x1152 } from "./index.js";

const postImages1080x1920 = async (file) => {
  try {
    const formData = new FormData();
    formData.append("myImages", file);
    const resp = await fetch(`${url}${postImage1080x1920}`, {
      method: "POST",
      body: formData,
    });

    if (resp.ok) {
      const data = await resp.json();
      return data;
    } else throw "Fallo la solicitud";
  } catch (error) {
    throw error;
  }
};

const postImages1080x1152 = async (file) => {
  try {
    const formData = new FormData();
    formData.append("myImages", file);

    const resp = await fetch(`${url}${postImage1080x1152}`, {
      method: "POST",
      body: formData,
    });

    if (resp.ok) {
      const data = await resp.json();
      return data;
    } else throw "Fallo la solicitud";
  } catch (error) {
    throw error;
  }
};

export { 
    postImages1080x1920,
    postImages1080x1152
};
