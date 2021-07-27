(function() {
var exports = {};
exports.id = 460;
exports.ids = [460];
exports.modules = {

/***/ 2367:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ contact; }
});

;// CONCATENATED MODULE: external "nodemailer"
var external_nodemailer_namespaceObject = require("nodemailer");;
var external_nodemailer_default = /*#__PURE__*/__webpack_require__.n(external_nodemailer_namespaceObject);
;// CONCATENATED MODULE: external "nodemailer-smtp-transport"
var external_nodemailer_smtp_transport_namespaceObject = require("nodemailer-smtp-transport");;
var external_nodemailer_smtp_transport_default = /*#__PURE__*/__webpack_require__.n(external_nodemailer_smtp_transport_namespaceObject);
;// CONCATENATED MODULE: external "email-validator"
var external_email_validator_namespaceObject = require("email-validator");;
var external_email_validator_default = /*#__PURE__*/__webpack_require__.n(external_email_validator_namespaceObject);
;// CONCATENATED MODULE: external "sanitize-html"
var external_sanitize_html_namespaceObject = require("sanitize-html");;
var external_sanitize_html_default = /*#__PURE__*/__webpack_require__.n(external_sanitize_html_namespaceObject);
// EXTERNAL MODULE: ./lib/processEnv.ts
var processEnv = __webpack_require__(264);
;// CONCATENATED MODULE: ./pages/api/v1/contact.ts





const smtp = {
  port: 465,
  secure: true,
  tls: {
    rejectUnauthorized: false
  },
  debug: false,
  host: process.env.SMTP_HOST || '',
  auth: {
    user: process.env.SMTP_USER || '',
    pass: process.env.SMTP_PASS || ''
  }
};
const transporter = external_nodemailer_default().createTransport(external_nodemailer_smtp_transport_default()(smtp));

const sendEmail = async ({
  name,
  email,
  subject,
  message
}) => {
  const output = `
      <p>Hello,<p>
      <p>You got a new contact request.</p>
      <h3>Contact Details</h3>
      <ul><li>Name: ${name}</li><li>Email: ${email}</li></ul>
      <h3>Message:</h3>
      <p>${message}</p>
  `;
  const sendData = {
    from: email,
    to: process.env.EMAIL_TO || '',
    subject: 'Jamify Contact Request - ' + (subject && subject.toUpperCase() || ''),
    html: external_sanitize_html_default()(output, {
      allowedTags: external_sanitize_html_default().defaults.allowedTags.concat(['img'])
    })
  };
  return await transporter.sendMail(sendData);
};

const Contact = async (req, res) => {
  const {
    origin
  } = req.headers;
  const {
    contactPage,
    siteUrl
  } = processEnv/* processEnv */.DD;

  if (!contactPage) {
    return res.status(404).json({
      error: 404,
      message: 'Endpoint not found.'
    });
  }

  if (origin !== siteUrl) {
    return res.status(400).json({
      error: 400,
      message: 'Wrong origin. Check your siteUrl.'
    });
  }

  if (req.method !== 'POST') {
    return res.status(400).json({
      error: 400,
      message: 'Wrong request method.'
    });
  }

  const {
    body
  } = req;

  if (!external_email_validator_default().validate(body.email)) {
    return res.status(400).json({
      error: 400,
      message: 'Wrong email.'
    });
  }

  try {
    await sendEmail(body);
  } catch (error) {
    console.warn(error);
    return res.status(404).json({
      error: 404,
      message: 'Sending message failed.'
    });
  }

  res.json({
    status: 'ok'
  });
};

/* harmony default export */ var contact = (Contact);

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [264], function() { return __webpack_exec__(2367); });
module.exports = __webpack_exports__;

})();