export default {
  methods: {
    requestHeaders() {
      return new Headers({
        "x-csrf-token": document
          .querySelector('meta[name="csrf-token"]')
          .getAttribute("content"),
        "content-type": "application/json"
      });
    },
    get(path, cb, error) {
      return this.fetchBase(path, "GET", {}, cb, error);
    },
    post(path, data, cb, error) {
      return this.fetchBase(path, "POST", data, cb, error);
    },
    patch(path, data, cb, error) {
      data["_method"] = "PATCH";
      return this.fetchBase(path, "PUT", data, cb, error);
    },
    delete(path, data, cb, error) {
      return this.fetchBase(path, "DELETE", data, cb, error);
    },
    fetchBase(path, method, data, cb, errorCb) {
      errorCb =
        errorCb ||
        function(error) {
          console.log("error:", error);
        };
      var options = {
        method: method,
        credentials: "same-origin",
        headers: this.requestHeaders()
      };

      if (method !== "GET") {
        options.body = JSON.stringify(data);
      }

      return fetch(path, options);
      // .catch(error => errorCb(error))
      // .then(response => response.json())
      // .then(json => cb(json))
    }
  }
};
