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
      }
    });
}


export async function insertMovie(id, setId, email, refresh,imbd) {
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
  
    return await axiosInstance.post(`insertdetails/${imbd}`)
      .then(response => {
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

  export function handleUpdateTrailer(e,id, setId, email, refresh)
  {
    e.preventDefault()
  const form = e.target;
  const formData = {};
  for (let i = 0; i < form.elements.length; i++) {
    const element = form.elements[i];
    if (!element.name) continue;
    formData[element.name] = element.value;
  }
  console.log(formData)
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
  
    return axiosInstance.post('trailer',formData)
      .then(response => {
        console.log(response);
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

  export function handleUpdateTrailerKey(e,id, setId, email, refresh)
  {
    e.preventDefault()
  const form = e.target;
  const formData = {};
  for (let i = 0; i < form.elements.length; i++) {
    const element = form.elements[i];
    if (!element.name) continue;
    formData[element.name] = element.value;
  }
  console.log(formData)
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
  
    return axiosInstance.put('trailer',formData)
      .then(response => {
        console.log(response);
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