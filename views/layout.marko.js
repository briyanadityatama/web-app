// Compiled using marko@4.5.6 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    components_helpers = require("marko/src/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/back-office-temp$1.0.0/views/layout.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_escapeXmlAttr = marko_helpers.xa,
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag")),
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_escapeScript = marko_helpers.xs,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html><head><meta charset=\"utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0\"><title>" +
    marko_escapeXml(data.title) +
    " - " +
    marko_escapeXml(out.global.app.name) +
    "</title><meta name=\"description\" content=\"Getting up and running with Semantic UI\"><meta name=\"keywords\" content=\"html5, ui, library, framework, javascript\"><link href=\"https://fonts.googleapis.com/css?family=Roboto:100,400,700,900\" rel=\"stylesheet\" crossorigin=\"anonymous\"><link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.13/semantic.min.css\" crossorigin=\"anonymous\"><link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/6.11.4/sweetalert2.min.css\" integrity=\"sha256-0AEO0dmdWUZ8e17VwaCiLJ1k8VlFQq2jGRetjpVCr34=\" crossorigin=\"anonymous\"><link rel=\"stylesheet\" type=\"text/css\" href=\"" +
    marko_escapeXmlAttr(out.global.app.staticUrl) +
    "/css/main.css?" +
    marko_escapeXmlAttr(out.global.app.assetsVersion) +
    "\"><link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/datepicker/0.6.4/datepicker.min.css\">");

  include_tag({
      _target: input.head
    }, out, __component, "13");

  out.w("</head><body>");

  component_globals_tag({}, out);

  out.w("<div class=\"ui large top fixed hidden menu\"><div class=\"ui container\"><a class=\"active item\">Home</a><a class=\"item\">Work</a><a class=\"item\">Company</a><a class=\"item\">Careers</a><div class=\"right menu\"><div class=\"item\"><a class=\"ui button\">Log in</a></div><div class=\"item\"><a class=\"ui primary button\">Sign Up</a></div></div></div></div><div class=\"ui vertical inverted sidebar menu\"><a class=\"active item\">Home</a><a class=\"item\">Work</a><a class=\"item\">Company</a><a class=\"item\">Careers</a><a class=\"item\">Login</a><a class=\"item\">Signup</a></div><div class=\"pusher\"><div class=\"ui inverted vertical masthead center aligned segment\"><div class=\"ui container\"><div class=\"ui large secondary inverted pointing menu\"><a class=\"toc item\"><i class=\"sidebar icon\"></i></a><a class=\"active item\">Home</a><a class=\"item\">Work</a><a class=\"item\">Company</a><a class=\"item\">Careers</a><div class=\"right item\"><a class=\"ui inverted button\">Log in</a><a class=\"ui inverted button\">Sign Up</a></div></div></div><div class=\"ui text container\"><h1 class=\"ui inverted header\">Imagine-a-Company</h1><h2>Do whatever you want when you want to.</h2><div class=\"ui huge primary button\">Get Started <i class=\"right arrow icon\"></i></div></div></div>");

  include_tag({
      _target: input.body
    }, out, __component, "51");

  out.w("<div class=\"ui inverted vertical footer segment\"><div class=\"ui container\"><div class=\"ui stackable inverted divided equal height stackable grid\"><div class=\"three wide column\"><h4 class=\"ui inverted header\">About</h4><div class=\"ui inverted link list\"><a href=\"#\" class=\"item\">Sitemap</a><a href=\"#\" class=\"item\">Contact Us</a><a href=\"#\" class=\"item\">Religious Ceremonies</a><a href=\"#\" class=\"item\">Gazebo Plans</a></div></div><div class=\"three wide column\"><h4 class=\"ui inverted header\">Services</h4><div class=\"ui inverted link list\"><a href=\"#\" class=\"item\">Banana Pre-Order</a><a href=\"#\" class=\"item\">DNA FAQ</a><a href=\"#\" class=\"item\">How To Access</a><a href=\"#\" class=\"item\">Favorite X-Men</a></div></div><div class=\"seven wide column\"><h4 class=\"ui inverted header\">Footer Header</h4><p>Extra space for a call to action inside the footer that could help re-engage users.</p></div></div></div></div></div><script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script><script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js\" integrity=\"sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4\" crossorigin=\"anonymous\"></script><script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js\"></script><script src=\"https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.13/semantic.min.js\"></script><script src=\"https://cdnjs.cloudflare.com/ajax/libs/datepicker/0.6.4/datepicker.min.js\"></script><script src=\"http://semantic-ui.com/javascript/library/tablesort.js\"></script><script src=\"https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/6.11.4/sweetalert2.min.js\" integrity=\"sha256-gxrLQGTAWsRF+AR60wCn6BJeS9B6qU/udmfaN9ICOlc=\" crossorigin=\"anonymous\"></script><script src=\"https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.19.1/moment.min.js\"></script><script src=\"https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.4/lodash.min.js\"></script><script src=\"https://cdnjs.cloudflare.com/ajax/libs/numeral.js/2.0.6/numeral.min.js\"></script><script>\n      window._ = window._ || {};\n      window._.hostname = '" +
    marko_escapeScript(out.global.app.hostname) +
    "';\n      window._.url = '" +
    marko_escapeScript(out.global.url) +
    "';\n    </script><script src=\"" +
    marko_escapeXmlAttr(out.global.app.staticUrl) +
    "/js/main.js?" +
    marko_escapeXmlAttr(out.global.app.assetsVersion) +
    "\"></script>");

  include_tag({
      _target: input.tail
    }, out, __component, "84");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "85");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    tags: [
      "marko/src/taglibs/core/include-tag",
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
