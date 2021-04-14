import {
  GET_BLOG_LOAD,
  GET_BLOG_SUCCESS,
  GET_BLOG_FAIL,
  ADD_SUM,
} from "../constants/blog";
import axios from "axios";

export const getBlog = () => async (dispatch) => {
  dispatch({ type: GET_BLOG_LOAD });
  try {
    let result = await axios.get("http://localhost:8000/api/blog");
    console.log(result);
    dispatch({ type: GET_BLOG_SUCCESS, payload: result.data.response });
  } catch (error) {
    dispatch({ type: GET_BLOG_FAIL, payload: error });
    console.log(error);
  }
};

export const addArticle = (article) => async (dispatch) => {
  try {
    const result = await axios.post("http://localhost:8000/api/blog", article);
    dispatch(getBlog());
  } catch (error) {
    dispatch({ type: GET_BLOG_FAIL, payload: error });
  }
};
export const deleteArticle = (id) => async (dispatch) => {
  try {
    const result = await axios.delete(`http://localhost:8000/api/blog/${id}`);
    console.log(result);
    dispatch(getBlog());
  } catch (error) {
    dispatch({ type: GET_BLOG_FAIL, payload: error });
  }
};

export const addSumComment = () => async (dispatch) => {
  dispatch({ type: ADD_SUM });
};
