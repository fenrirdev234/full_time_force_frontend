/* import { useIsLoginQuery } from "../../../api/auth/apiSlice"; */
import { useAppSelector } from "../../../hook/store";
import { API_ENDPOINTS } from "../../../services/endpoint";

export const LogButton = () => {
  const google = () => {
    window.open(
      `${process.env.REACT_APP_API_ENDPOINT}${API_ENDPOINTS.GOOGLE_LOGIN}`,
      "_self"
    );
  };
  const state = useAppSelector((state) => state);
  console.log(state);
  /* const data = useIsLoginQuery();
  console.log(data); */
  /*  if (!data) {
    if (data) {
      return <button>Log out</button>;
    } else {
      return <button>Log In</button>;
    }
  } else {
    return <button>Log In</button>;
  } */

  return (
    <div>
      <button onClick={google}>Login with google</button>
    </div>
  );
};
