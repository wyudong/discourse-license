# name: discourse-device-license
# about: Add device license
# version: 1.0.0
# authors: Yudong <yudong@fydeos.io>

register_svg_icon "laptop" if respond_to?(:register_svg_icon)

after_initialize do
  load File.expand_path('../app/controllers/license_controller.rb', __FILE__)

  Discourse::Application.routes.append do
    get 'u/:username/license' => 'license#index', constraints: { username: RouteFormat.username }
  end
end
