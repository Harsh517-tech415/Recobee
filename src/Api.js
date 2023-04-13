import { CognitoUser } from "amazon-cognito-identity-js";
import axios from "axios";
import UserPool from "./UserPool";

const axiosInstance = axios.create({
  baseURL: "https://developapifree.reco-bee.com/common/v1/",
});

export function trending(id, setId, email, refresh) {
  axiosInstance.interceptors.request.use(
    (config) => {
      config.headers = {
        Authorization: `Bearer ${id}`,
      };
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );

  return axiosInstance.get("trending")
    .then(response => {
      console.log(response.data);
      return response.data;
    })
    .catch(res => {
      if (res.response && res.response.status === 401) {
        const user = new CognitoUser({
          Username: email,
          Pool: UserPool,
        });
        user.refreshSession(refresh, (err, refreshedSession) => {
          if (err) {
            console.error(err);
          } else {
            setId(refreshedSession.accessToken["jwtToken"]);
          }
        });
      } else {
        console.log(res);
        console.log(1);
      }
    });
}


export function insertMovie(id, setId, email, refresh,imbd) {
    axiosInstance.interceptors.request.use(
      (config) => {
        config.headers = {
          Authorization: `Bearer ${id}`,
        };
        return config;
      },
      (error) => {
        Promise.reject(error);
      }
    );
  
    return axiosInstance.post(`insertdetails/${imbd}`)
      .then(response => {
        console.log(response.data)
        return response.data;
      })
      .catch(res => {
        if (res.response && res.response.status === 401) 
        {
          const user = new CognitoUser({
            Username: email,
            Pool: UserPool,
          });
          user.refreshSession(refresh, (err, refreshedSession) => {
            if (err) {
              console.error(err);
            } else {
              setId(refreshedSession.accessToken["jwtToken"]);
            }
          });
        } else {
          console.log(res);
        }
      });
  }