const pageLoad = () => {
  document.addEventListener(
    "DOMContentLoaded",
    function () {
      console.log("page is ready");
    },
    false
  );
};

export { pageLoad };
