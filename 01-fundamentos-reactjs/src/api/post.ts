import axios from "axios";

export async function getPosts() {
    const response = await axios.get("http://localhost:3000/posts");
    return response.data;
}