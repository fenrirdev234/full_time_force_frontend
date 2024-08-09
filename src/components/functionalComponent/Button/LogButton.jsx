/* import { useIsLoginQuery } from "../../../api/auth/apiSlice"; */
import { useEffect } from "react";
import {
  useIsLoginQuery,
  useLoginCheckerMutation,
  useLogoutMutation,
} from "../../../api/auth/apiSlice";

import styles from "./LogButton.module.scss";

import { API_ENDPOINTS } from "../../../services/endpoint";

export const LogButton = () => {
  const { data, refetch } = useIsLoginQuery();
  const [loginCheck] = useLoginCheckerMutation();
  const [logoutM] = useLogoutMutation();

  const login = (event) => {
    window.open(
      `${process.env.REACT_APP_API_ENDPOINT}${API_ENDPOINTS.GOOGLE_LOGIN}`,
      "_self"
    );
  };

  /*  const login = () => {
    window.open(
      `${process.env.REACT_APP_API_ENDPOINT}${API_ENDPOINTS.GOOGLE_LOGIN}`,
      "targetWindow",
      `toolbar=no,
          location=no,
          status=no,
          menubar=no,
          scrollbars=yes,
          resizable=yes,
          width=620,
          height=700`
    );
  }; */

  const logout = () => {
    logoutM();
    /* window.open(
      `${process.env.REACT_APP_API_ENDPOINT}${API_ENDPOINTS.LOGOUT}`,
      "_self"
    ); */
  };

  console.log(data);

  useEffect(() => {
    refetch();
    const preData = async () => {
      const dataFetch = await fetch(
        `${process.env.REACT_APP_API_ENDPOINT}${API_ENDPOINTS.LOGIN_CHECK}`
      );
      return dataFetch;
    };

    console.log(preData());
    loginCheck();
  }, []);
  return (
    <div>
      {data?.success ? (
        <button onClick={logout} className={styles.buttonLog}>
          Logout
        </button>
      ) : (
        <button onClick={login} className={styles.buttonLog}>
          Login with google
        </button>
      )}
      <button onClick={logout} className={styles.buttonLog}>
        Logout
      </button>
    </div>
  );
};
