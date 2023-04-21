import { CognitoUser } from "amazon-cognito-identity-js";
import axios from "axios";
import UserPool from "./UserPool";

const axiosInstance = axios.create({
  baseURL: "https://developapifree.reco-bee.com/common/v1/",
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  function (err) {
    if (err.response.status === 401 && err.response) {
      const user = new CognitoUser({
        Username: localStorage.getItem("email"),
        Pool: UserPool,
      });
      user.refreshSession(
        localStorage.getItem("refresh"),
        (err, refreshedSession) => {
          if (err) {
            console.error(err);
          } else {
            localStorage.setItem(
              "token",
              `${refreshedSession.accessToken["jwtToken"]}`
            );
          }
        }
      );
    } else {
      console.log(err);
    }
  }
);

export function getGraphData(item) {
  return axiosInstance
    .get(`dashboard/${item}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}
export function trending() {
  return axiosInstance
    .get("trending")
    .then((response) => {
      return response.data;
    })
    .catch((res) => {
      console.log(res);
    });
}

export async function insertMovie(imbd) {
  return await axiosInstance
    .post(`insertdetails/${imbd}`)
    .then((response) => {
      return response.data;
    })
    .catch((res) => {
      console.log(res);
    });
}

export function handleUpdateTrailer(e) {
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
      console.log(res);
    });
}

export function handleUpdateTrailerKey(e) {
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
      console.log(res);
    });
}

export function handleVote(e) {
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
    .post(`upsertdetails/${formData.Vote}`)
    .then((response) => {
      console.log(response);
    })
    .catch((res) => {
      console.log(res);
    });
}
