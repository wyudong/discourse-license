/**
 * Links the path `/license` to a route named `license`. Named like this, a
 * route with the same name needs to be created in the `routes` directory.
 */
export default {
  resource: 'user',
  map () {
    this.route('license', { resetNamespace: true })
  }
}
