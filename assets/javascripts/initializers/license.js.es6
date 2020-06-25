import { withPluginApi } from 'discourse/lib/plugin-api';

function initializeDiscourseLicense(api) {
  const currentUser = api.getCurrentUser();

  console.log(currentUser);
}

export default {
  name: "discourse-license",

  initialize() {
    withPluginApi("0.8.31", initializeDiscourseLicense);
  }
};
