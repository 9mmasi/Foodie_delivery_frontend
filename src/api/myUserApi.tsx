import { useMutation } from "react-query";

type UserType = {
  auth0Id: string;
  email: string;
};

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useCreateMyUser = () => {
  const createMyUserRequest = async (user: UserType) => {
    const response = await fetch(`${API_BASE_URL}/api/create-user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Add authentication headers here if required
      },
      body: JSON.stringify(user),
    });
    if (!response.ok) {
       
        throw new Error(`Error on Creating User`);
      }

   
  };

  const {
    mutate: createUser,
    isLoading,
    isError,
    isSuccess,
  } = useMutation(createMyUserRequest);

  return {
    createUser,
    isLoading,
    isError,
    isSuccess,
  };
};
