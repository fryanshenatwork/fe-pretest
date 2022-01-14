export default (function () {
  const api = window.location.origin.split(".");
  api[0] += "-3000";
  return api.join(".") + "/ajaxserver";
})();
