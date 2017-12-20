// Compiled using marko@4.5.6 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    components_helpers = require("marko/src/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/back-office-temp$1.0.0/views/home/index.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    layout_template = marko_loadTemplate(require.resolve("./../layout.marko")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_escapeXmlAttr = marko_helpers.xa,
    hasRenderBodyKey = Symbol.for("hasRenderBody"),
    marko_merge = require("marko/src/runtime/helper-merge"),
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  include_tag({
      _target: layout_template,
      _arg: marko_merge({
          body: {
              renderBody: function renderBody(out) {
                out.w("<div class=\"ui vertical stripe segment\"><div class=\"ui middle aligned stackable grid container\"><div class=\"row\"><div class=\"eight wide column\"><h3 class=\"ui header\">We Help " +
                  marko_escapeXml(data.data.people.foo) +
                  " and " +
                  marko_escapeXml(data.data.people.bar) +
                  "</h3><p>We can give your company superpowers to do things that they never thought possible. Let us delight your customers and empower your needs...through pure data analytics.</p><h3 class=\"ui header\">We Make Bananas That Can Dance</h3><p>Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered.</p></div><div class=\"six wide right floated column\"><img src=\"" +
                  marko_escapeXmlAttr(out.global.app.staticUrl) +
                  "/img/siberian_husky.png\" class=\"ui large bordered rounded image\"></div></div><div class=\"row\"><div class=\"center aligned column\"><a class=\"ui huge button\">Check Them Out</a></div></div></div></div><div class=\"ui vertical stripe quote segment\"><div class=\"ui equal width stackable internally celled grid\"><div class=\"center aligned row\"><div class=\"column\"><h3>\"What a Company\"</h3><p>That is what they all say about us</p></div><div class=\"column\"><h3>\"I shouldn't have gone with their competitor.\"</h3><p><img src=\"" +
                  marko_escapeXmlAttr(out.global.app.staticUrl) +
                  "/img/siberian_husky.png\" class=\"ui avatar image\"><b>Nan</b> Chief Fun Officer Acme Toys</p></div></div></div></div><div class=\"ui vertical stripe segment\"><div class=\"ui text container\"><h3 class=\"ui header\">Breaking The Grid, Grabs Your Attention</h3><p>Instead of focusing on content creation and hard work, we have learned how to master the art of doing nothing by providing massive amounts of whitespace and generic content that can seem massive, monolithic and worth your attention.</p><a class=\"ui large button\">Read More</a><h4 class=\"ui horizontal header divider\"><a href=\"#\">Case Studies</a></h4><h3 class=\"ui header\">Did We Tell You About Our Bananas?</h3><p>Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but its really true. It took years of gene splicing and combinatory DNA research, but our bananas can really dance.</p><a class=\"ui large button\">I'm Still Quite Interested</a></div></div>");
              }
            },
          tail: {
              renderBody: function renderBody(out) {
                out.w("<script>\n      // tail snippet\n    </script>");
              }
            },
          [hasRenderBodyKey]: true
        }, data)
    }, out, __component, "0");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    tags: [
      "./../layout.marko",
      "marko/src/taglibs/core/include-tag"
    ]
  };
