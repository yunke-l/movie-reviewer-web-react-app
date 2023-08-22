import { fetchUserByIdApi } from "./users-service";

export const fetchUserById = (userId) => async (dispatch) => {
    try {
        const user = await fetchUserByIdApi(userId);
        // Dispatch success action or return the user data
        return user;
    } catch (error) {
        // Dispatch error action or handle the error
        throw error;
    }
};
