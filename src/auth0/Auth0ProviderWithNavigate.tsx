import { useCreateMyUser } from "@/api/myUserApi";
import { AppState, Auth0Provider, User } from "@auth0/auth0-react"; // Ensure `User` is correctly imported
//import { useNavigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

const Auth0ProviderWithNavigate = ({ children }: Props) => {
  //const navigate = useNavigate();

  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;

  const { createUser } = useCreateMyUser(); // Destructure correctly

  if (!domain || !clientId || !redirectUri) {
    throw new Error("Unable to initialise auth");
  }

  // Correctly define the function with the two parameters
  const onRedirectCallback = (appState?: AppState, user?: User) => {
    //navigate(appState?.returnTo || "/auth-callback");

    if (user?.sub && user?.email) {
      createUser({
        auth0Id: user.sub,
        email: user.email,
      });
    }
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithNavigate;
