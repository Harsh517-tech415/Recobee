import { CognitoUser } from "amazon-cognito-identity-js";
import axios from "axios";
import UserPool from "./UserPool";

const axiosInstance = axios.create({
  baseURL: "https://developapifree.reco-bee.com/common/v1/",
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers = {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export function trending( email, refresh) {

  return axiosInstance
    .get("trending")
    .then((response) => {
      return response.data;
    })
    .catch((res) => {
      if (res.response && res.response.status === 401) {
        const user = new CognitoUser({
          Username: email,
          Pool: UserPool,
        });
        user.refreshSession(localStorage.getItem('refresh'), (err, refreshedSession) => {
          if (err) {
            console.error(err);
          } else {
            localStorage.setItem('token',`${refreshedSession.accessToken["jwtToken"]}`);
          }
        });
      } else {
        console.log(res);
      }
    });
}

export async function insertMovie( email, imbd) {

  return await axiosInstance
    .post(`insertdetails/${imbd}`)
    .then((response) => {
      return response.data;
    })
    .catch((res) => {
      if (res.response && res.response.status === 401) {
        const user = new CognitoUser({
          Username: email,
          Pool: UserPool,
        });
        user.refreshSession(localStorage.getItem('refresh'), (err, refreshedSession) => {
          if (err) {
            console.error(err);
          } else {
            localStorage.setItem('token',`${refreshedSession.accessToken["jwtToken"]}`);
          }
        });
      } else {
        console.log(res);
      }
    });
}

export function handleUpdateTrailer(e,  email) {
  e.preventDefault();
  const form = e.target;
  const formData = {};
  for (let i = 0; i < form.elements.length; i++) {
    const element = form.elements[i];
    if (!element.name) continue;
    formData[element.name] = element.value;
  }
  console.log(formData);

  return axiosInstance
    .post("trailer", formData)
    .then((response) => {
      console.log(response);
    })
    .catch((res) => {
      if (res.response && res.response.status === 401) {
        const user = new CognitoUser({
          Username: email,
          Pool: UserPool,
        });
        user.refreshSession(localStorage.getItem('refresh'), (err, refreshedSession) => {
          if (err) {
            console.error(err);
          } else {
            localStorage.setItem('token',`${refreshedSession.accessToken["jwtToken"]}`);
          }
        });
      } else {
        console.log(res);
      }
    });
}

export function handleUpdateTrailerKey(e,email) {
  e.preventDefault();
  const form = e.target;
  const formData = {};
  for (let i = 0; i < form.elements.length; i++) {
    const element = form.elements[i];
    if (!element.name) continue;
    formData[element.name] = element.value;
  }
  console.log(formData);

  return axiosInstance
    .put("trailer", formData)
    .then((response) => {
      console.log(response);
    })
    .catch((res) => {
      if (res.response && res.response.status === 401) {
        const user = new CognitoUser({
          Username: email,
          Pool: UserPool,
        });
        user.refreshSession(localStorage.getItem('refresh'), (err, refreshedSession) => {
          if (err) {
            console.error(err);
          } else {
            localStorage.setItem('token',`${refreshedSession.accessToken["jwtToken"]}`);
          }
        });
      } else {
        console.log(res);
      }
    });
}



// axiosInstance.interceptors.response.use((response) => {
//   // Return a successful response back to the calling service
//   return response;
// }, (error) => {

//   //extendedLog.error(`Error making API Call ${error.request._url} RC:${retryCount++} TR:${tokenRetry}  `, error);
//   // Return any error which is not due to authentication back to the calling service

//   //It is possible that the error does not have response and the status object, the code will not get into this. 
//   //Hence check those objects and default to 0 and then check 401.
//   //If we have retries the token then do not refresh again. 
//   if (error == undefined || error.response == undefined || (error.response.status || 0) != 401) {
//       return new Promise((resolve, reject) => {
//           reject(error);
//       });
//   }

//   //if we have done the token refresh then lets exit, dont keep trying to refresh again and again. 
//   // Need to refactor this code to handle the token refresh by check the expiration. 
//   if (tokenRetry && error.response.status == 401) {
//       tokenRetry = false;
//       return new Promise((resolve, reject) => reject(error));
//   }
//   // Try request again with new token
//   return SecureStore.getItemAsync("secure_refresh_token").then((refreshToken) => {
//       return axios.post('https://' + AUTH_API_URL + '/Refresh', {
//           "RToken": refreshToken
//       }).then(response => {
//           if (response && response.data) {
//               if (response.data.Cookie) {
//                   SecureStore.setItemAsync('image_cookie', response.data.Cookie);
//               }
//               if (response.data.AuthVerifyResponse && response.data.AuthVerifyResponse.AuthenticationResult) {
//                   return SecureStore.setItemAsync('secure_id_token', response.data.AuthVerifyResponse.AuthenticationResult.IdToken).then(() => {
//                       const config = error.config;
//                       config.headers['Authorization'] = 'Bearer ' + response.data.AuthVerifyResponse.AuthenticationResult.IdToken;
//                       tokenRetry = true;
//                       return new Promise((resolve, reject) => {
//                           instance.request(config).then(response => {
//                               resolve(response);
//                           }).catch((error) => {
//                               reject(error);
//                           })
//                       });
//                   })
//               } else if (response.data.errorType == 'NotAuthorizedException' || response.data.errorType == 'InvalidParameterException') {
//                   //Invalid Refresh token - redirect to login page
//                   //extendedLog.error("Invalid refresh token. Need to login again. ");
//                   clearLocalStorage().then(() => {
//                       return new Promise((resolve, reject) => reject(response.data.errorType));
//                   })
//               }
//               else if (response.data.errorType) {
//                   //Invalid Refresh token - redirect to login page
//                   //extendedLog.error("Invalid refresh token. Need to login again. ");
//                   clearLocalStorage().then(() => {
//                       return new Promise((resolve, reject) => reject(response.data.errorType));
//                   })
//               }
//           }
//       });
//   }).catch((error) => {
//       //extendedLog.error("Error in executing SecureStore.getItemAsync with message:", error);
//       return new Promise((resolve, reject) => reject(error));
//   });
// });