import axios from "axios";

export async function postComment(comment) {
    await axios.post("http://localhost:3000/comments", comment);
}

export async function deleteOneComment(commentId) {
    await axios.delete(`http://localhost:3000/comments/${commentId}`);
}