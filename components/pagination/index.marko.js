// Compiled using marko@4.5.6 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    components_helpers = require("marko/src/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/back-office-temp$1.0.0/components/pagination/index.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    marko_attrs = marko_helpers.as,
    marko_escapeXmlAttr = marko_helpers.xa;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div class=\"ui form bo-pagination\"><div class=\"inline fields\"><div class=\"field\"><select class=\"ui compact selection dropdown item pagelist\">");

  marko_forEach(data.data.list, function(page) {
    var selectedClass = page.number === data.data.page ? ' selected' : '';

    var value = page.number !== data.data.page ? ' value="' + page.url + '"': '';

    out.w("<option" +
      marko_attrs(value) +
      marko_attrs(selectedClass) +
      ">Page " +
      marko_escapeXml(page.number) +
      "</option>");
  });

  out.w("</select></div><div class=\"field\"><div class=\"ui buttons basic\">");

  if (data.data.prev) {
    out.w("<button class=\"ui button\" data-url=\"" +
      marko_escapeXmlAttr(data.data.prev) +
      "\">Prev</button>");
  }

  if (data.data.next) {
    out.w("<button class=\"ui button\" data-url=\"" +
      marko_escapeXmlAttr(data.data.next) +
      "\">Next</button>");
  }

  out.w("</div></div></div></div>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {};
