import axios from "axios";
import {
  GET_COURSES_LOAD,
  GET_COURSES_FAIL,
  GET_COURSE_BY_ID,
  GET_COURSES_BY_CATEGORY,
  GET_ALL_COURSES,
} from "../constants/course";
export const getCourses = (category, name, pageNumber) => async (dispatch) => {
  dispatch({ type: GET_COURSES_LOAD });
  try {
    const res = await axios.get(
      `http://localhost:8000/api/course?category=${category}&search=${name}&page=${pageNumber}`
    );

    dispatch({
      type: GET_COURSES_BY_CATEGORY,
      payload: { courses: res.data.result, pages: res.data.totalPages },
    });
  } catch (error) {
    dispatch({
      type: GET_COURSES_FAIL,
      payload: error,
    });
    console.log(error);
  }
};
export const getCourseById = (id) => async (dispatch) => {
  dispatch({ type: GET_COURSES_LOAD });
  try {
    const res = await axios.get(`http://localhost:8000/api/course/${id}`);
    dispatch({
      type: GET_COURSE_BY_ID,
      payload: res.data.result,
    });
  } catch (error) {
    dispatch({
      type: GET_COURSES_FAIL,
      payload: error,
    });
    console.log(error);
  }
};

export const deleteCourse = (id) => (dispatch) => {
  axios
    .delete(`http://localhost:8000/api/course/${id}`)
    .then((response) => dispatch(getAllCourses()))
    .catch((err) => console.log(err));
};

export const addCourse = (course) => async (dispatch) => {
  try {
    const result = await axios.post("http://localhost:8000/api/course", course);
    dispatch(getAllCourses());
  } catch (error) {
    dispatch({ type: GET_COURSES_FAIL, payload: error });
  }
};

export const getAllCourses = () => async (dispatch) => {
  dispatch({ type: GET_COURSES_LOAD });
  try {
    const res = await axios.get("http://localhost:8000/api/courses");

    dispatch({
      type: GET_ALL_COURSES,
      payload: res.data.result,
    });
  } catch (error) {
    dispatch({
      type: GET_COURSES_FAIL,
      payload: error,
    });
    console.log(error);
  }
};
