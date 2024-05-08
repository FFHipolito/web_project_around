export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getUser() {
    return fetch(
      "https://around.nomoreparties.co/v1/web-ptbr-cohort-10/users/me",
      {
        headers: {
          authorization: "e00364f1-af4a-4601-a0ac-2228485dc1a7",
        },
      }
    ).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }
}
