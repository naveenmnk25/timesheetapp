// import { getAccessToken } from "../../utils/getAccessToken";

// Function to manipulate GraphQL data with axios
export const manipulateGraphQLData = async (axiosInstance, mutation, variables) => {
  try {
    // Dynamically get the access token before the request
    // let accessToken = sessionStorage.getItem("accessTokenRole");
    // if (!accessToken) {
      // accessToken = await getAccessToken(); // Ensure token is fetched if not available
    // }
    // Add the token to axios instance's headers if it's not set globally
    // axiosInstance.defaults.headers.Authorization = `Bearer ${accessToken}`;

    const response = await axiosInstance.post("", {
      query: mutation,
      variables: variables,
    });

    if (response?.data?.data) {
      return response.data.data;
    } else {
      console.error("No data found in response");
      return {};
    }
  } catch (error) {
    // Handle GraphQL errors
    if (error.response && error.response.data && error.response.data.errors) {
      error.response.data.errors.forEach((err) => {
        console.error("GraphQL Error:", err.message);
      });
    } else {
      console.error("Error manipulating data:", error.message);
    }

    throw error;
  }
};

// Function to manipulate GraphQL data for FormData with axios
export const manipulateGraphQLDataForFormData = async (axiosInstance, formData) => {
  try {
    // Dynamically get the access token before the request
    let accessToken = sessionStorage.getItem("accessTokenRole");

    // if ( accessToken === undefined ) {

      accessToken = await getAccessToken(); // Ensure token is fetched if not available
    // }
    ////console.log('accesstoken manipulate ann formdata  ', accessToken);

    const response = await axiosInstance.post(
      process.env.REACT_APP_GRAPHQL_API_URL,
      formData,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "multipart/form-data",
          "GraphQL-Preflight": "1",
          Accept: "application/json",
        },
      }
    );

    ////console.log('response axios', response);

    // Handle GraphQL errors in the response
    if (response?.data?.errors && response.data.errors.length > 0) {
      const errorMessage = response.data.errors[0].message;
      console.error("GraphQL error:", errorMessage);
      return { success: false, message: errorMessage };
    }

    if (response?.data?.data) {
      return { success: true, data: response.data.data };
    } else {
      console.error("No data found in response");
      return { success: false, message: "No data found in response" };
    }

  } catch (error) {
    console.error("Error manipulating data:", error.message);
    return { success: false, message: error.message };
  }
};