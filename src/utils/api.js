import router from "@/router";
import store from "@/store";
import axios from "axios";
import swal from "sweetalert";

async function api(endpoint, method, data) {
  store.dispatch("setloading", true);
  let result = null,
    error = null;
  await axios
    .create({
      baseURL: `https://asks/${endpoint}`,
      headers: {
        Authorization: `Bearer ${localStorage["token"]}`,
      },
    })
    .request({ method: method.toUpperCase(), data: data })
    .then((res) => {
      result = res.data;
    })
    .catch((err) => {
      error = err;
      catchError(err);
    })
    .finally(() => {
      store.dispatch("setloading", false);
    });
  return new Promise((resolve, reject) => {
    if (result) {
      resolve(result);
    } else {
      reject(error);
    }
  });
}

function catchError(error) {
  console.error(error);
  if (error.response?.status == 401) {
    swal({
      icon: "warning",
      title: "Ism yoki parolda xatolik !",
      timer: 2000,
    }).then(() => {
      if (location.pathname !== "/") {
        router.push("/");
      }
    });
  } else if (error.response?.status == 400) {
    swal({
      icon: "warning",
      title: error.response?.data.detail,
      timer: 2500,
    });
  } else if (error.response?.status == 404) {
    swal({
      icon: "warning",
      title: "URL manzili noto'g'ri !",
      timer: 2000,
    });
  } else if (error.response?.status == 422) {
    swal({
      icon: "warning",
      title: "Ma'lumotlar to'liq emas !",
      timer: 2000,
    });
  } else if (error.message == "Network Error") {
    swal({
      icon: "warning",
      title: "Server bilan aloqa mavjud emas !",
      timer: 2000,
    });
  }
}

export function success(target) {
  if (target !== undefined) {
    document.querySelector(`[${target}]`).click();
  }
  return swal({
    icon: "success",
    title: " ",
    buttons: false,
    timer: 800,
    closeOnEsc: false,
    closeOnClickOutside: false,
  });
}

// token

export function token(data) {
  let form_data = new FormData();
  form_data.append("username", data.username);
  form_data.append("password", data.password);
  return api(`token`, `POST`, form_data);
}

export function getChats(user_id, ) {

}