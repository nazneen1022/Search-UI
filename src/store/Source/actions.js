import axios from "axios";

export const fetchData = (data) => {
  return { type: "FETCH_DATA", payload: data };
};

export const fetchDatafromJSON = () => async (dispatch, getState) => {
  try {
    const response = await axios.get("https://files-imwbhvksg.now.sh/");
    dispatch(fetchData(response.data));
  } catch (error) {
    console.log(error);
  }
};
