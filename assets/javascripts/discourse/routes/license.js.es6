/**
 * Route for the path `/license` as defined in `../license-route-map.js.es6`.
 */
export default Discourse.Route.extend({
  renderTemplate() {
    // Renders the template `../templates/license.hbs`
    this.render('license');
  },

  model() {
    return this.modelFor("user");
  },
});
