import axios from "axios";

export const createPost = async (postData) => {
  console.log(postData);

  await axios
    .post("http://127.0.0.1:8000/cadastro/", postData)
    .catch((error) => {
      if (error != undefined) {
        console.log(error);
      }
    });
};
