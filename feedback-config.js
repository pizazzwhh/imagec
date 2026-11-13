/* Public feedback endpoint config. Loaded before chrome.js. */
window.IMAGEC_FEEDBACK = {
  /* Same-origin API served by `npm run preview` (scripts/preview.mjs). */
  endpoint: "/api/feedback",
  /* Optional: also email via Web3Forms (https://web3forms.com). Leave empty to skip. */
  web3formsAccessKey: ""
};
