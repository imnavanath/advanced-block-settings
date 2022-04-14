/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./admin/assets/src/components/EntryContent.js":
/*!*****************************************************!*\
  !*** ./admin/assets/src/components/EntryContent.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Admin_components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Admin/components/Header */ "./admin/assets/src/components/Header.js");
/* harmony import */ var _Admin_pages_Main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Admin/pages/Main */ "./admin/assets/src/pages/Main.js");
/* harmony import */ var _Admin_pages_Support__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Admin/pages/Support */ "./admin/assets/src/pages/Support.js");
/* harmony import */ var _Admin_components_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Admin/components/Footer */ "./admin/assets/src/components/Footer.js");










function EntryContent() {
  const [saved, setSaved] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');

  function handleFormSubmit(e) {
    e.preventDefault();
    const formData = new window.FormData();

    for (let i = 1; i < e.target.length; i++) {
      formData.append(e.target[i].name, e.target[i].value);
    }

    formData.append('action', 'wp_bess_update_settings');
    formData.append('security', wp_bess_settings.update_nonce);
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default()({
      url: wp_bess_settings.ajax_url,
      method: 'POST',
      body: formData
    }).then(() => {
      setSaved('saved');
      setTimeout(() => {
        setSaved('');
        window.location.reload(false);
      }, 1000);
    });
  }

  const query = new URLSearchParams((0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useLocation)().search);
  const page = query.get('page');
  const path = query.get('path');
  return 'wp_bess_settings' === page && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
    className: "wpBlockSettings",
    id: "wpBlockSettings",
    method: "post",
    onSubmit: handleFormSubmit
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Admin_components_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    saved: saved
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("main", {
    className: "max-w-[80rem] px-1 py-1 mx-auto mt-[2.5rem] bg-white rounded-lg shadow"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "lg:grid lg:gap-x-0"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "relative m-0 sm:px-6 lg:px-0 lg:col-span-9"
  }, ('main' === path || null === path) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Admin_pages_Main__WEBPACK_IMPORTED_MODULE_5__["default"], null)), 'support' === path && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Admin_pages_Support__WEBPACK_IMPORTED_MODULE_6__["default"], null))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Admin_components_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    saved: saved
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (EntryContent);

/***/ }),

/***/ "./admin/assets/src/components/Footer.js":
/*!***********************************************!*\
  !*** ./admin/assets/src/components/Footer.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Admin_components_Icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Admin/components/Icons */ "./admin/assets/src/components/Icons.js");





function Footer(props) {
  const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setStatus(props.saved);
  }, [props.saved]);

  function processing() {
    setStatus('processing');
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "fixed bottom-0 right-0 left-0 bg-white border-b ml-[160px] px-2 py-2 border-t border-gray-200 sm:px-6 z-10"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex justify-between items-center flex-wrap sm:flex-nowrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mt-1 text-sm text-gray-500"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Thank you for using WP Block Essentials.', 'wp-bess')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "relative"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "relative container flex justify-center items-center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "submit",
    onClick: () => {
      processing();
    },
    className: "w-32 justify-center inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-wpcolor"
  }, '' === status && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Save', 'wp-bess')), 'processing' === status && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, _Admin_components_Icons__WEBPACK_IMPORTED_MODULE_3__["default"].spinner), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Saving', 'wp-bess')), 'saved' === status && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "pr-2"
  }, _Admin_components_Icons__WEBPACK_IMPORTED_MODULE_3__["default"]["checked-circle"]), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Saved', 'wp-bess')))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./admin/assets/src/components/Header.js":
/*!***********************************************!*\
  !*** ./admin/assets/src/components/Header.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Admin_components_Icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Admin/components/Icons */ "./admin/assets/src/components/Icons.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");






function classNames() {
  for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
    classes[_key] = arguments[_key];
  }

  return classes.filter(Boolean).join(' ');
}

function Header() {
  var _useLocation;

  const [tab, setTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('main');
  const navigation = [{
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Settings', 'wp-bess'),
    slug: 'wp_bess_settings',
    path: ''
  }, {
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Support', 'wp-bess'),
    slug: 'wp_bess_settings',
    path: 'support'
  }];
  const query = new URLSearchParams((_useLocation = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useLocation)()) === null || _useLocation === void 0 ? void 0 : _useLocation.search);
  const activePage = query.get('page') ? query.get('page') : cartflows_admin.home_slug;
  const activePath = query.get('path') ? query.get('path') : '';
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "sticky top-[30px] right-0 bg-white border-b -ml-5 px-2 py-2 border-t border-gray-200 sm:px-6 z-10"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex justify-between items-center flex-wrap sm:flex-nowrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "text-lg leading-6 font-medium text-gray-500"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "inline-block align-middle mr-2"
  }, _Admin_components_Icons__WEBPACK_IMPORTED_MODULE_3__["default"].wordpress), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "align-middle"
  }, " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Block Essentials', 'wp-bess'), " ")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "py-2 px-2 sm:px-6 lg:py-2 lg:px-0 lg:col-span-3"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("nav", {
    className: "flex"
  }, navigation.map(menu => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
    key: `?page=${menu.slug}&path=${menu.path}`,
    to: {
      pathname: 'admin.php',
      search: `?page=${menu.slug}${'' !== menu.path ? '&path=' + menu.path : ''}`
    },
    className: classNames(activePage === menu.slug && activePath === menu.path ? 'bg-gray-50 text-wpcolor fill-wpcolor wp-bess-menu--active' : 'text-gray-900 fill-gray-900 hover:text-gray-900 hover:bg-gray-50 wp-bess-menu', 'group cursor-pointer rounded-md px-3 py-2 flex items-center text-sm font-medium mx-1')
  }, menu.name)))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "relative flex rounded-md shadow-sm"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "https://github.com/imnavanath",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('GitHub Profile', 'wp-bess'),
    target: "_blank",
    id: "github",
    className: "cursor-pointer shadow-sm mr-1.5 px-1.5 py-1.5 text-wpcolor hover:text-gray-900 rounded-full hover:bg-gray-50 bg-gray-100 flex items-center justify-center focus:outline-none"
  }, _Admin_components_Icons__WEBPACK_IMPORTED_MODULE_3__["default"].github), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "https://www.linkedin.com/in/navanath-bhosale",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Connect via LinkedIn', 'wp-bess'),
    target: "_blank",
    id: "linkedin",
    className: "cursor-pointer shadow-sm mr-1.5 px-1.5 py-1.5 text-wpcolor hover:text-gray-900 rounded-full hover:bg-gray-50 bg-gray-100 flex items-center justify-center focus:outline-none"
  }, _Admin_components_Icons__WEBPACK_IMPORTED_MODULE_3__["default"].linkedin), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "mailto:navanath.bhosale95@gmail.com",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Email me', 'wp-bess'),
    target: "_blank",
    id: "email",
    className: "cursor-pointer shadow-sm mr-1.5 px-1.5 py-1.5 text-wpcolor hover:text-gray-900 rounded-full hover:bg-gray-50 bg-gray-100 flex items-center justify-center focus:outline-none"
  }, _Admin_components_Icons__WEBPACK_IMPORTED_MODULE_3__["default"].email), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "https://www.facebook.com/navnath.bhosale.3/",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Connect via Facebook', 'wp-bess'),
    target: "_blank",
    id: "facebook",
    className: "cursor-pointer shadow-sm mr-1.5 px-1.5 py-1.5 text-wpcolor hover:text-gray-900 rounded-full hover:bg-gray-50 bg-gray-100 flex items-center justify-center focus:outline-none"
  }, _Admin_components_Icons__WEBPACK_IMPORTED_MODULE_3__["default"].facebook), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "https://www.paypal.com/paypalme/NavanathBhosale",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Donation', 'wp-bess'),
    target: "_blank",
    id: "paypal",
    className: "cursor-pointer shadow-sm px-1.5 py-1.5 text-wpcolor hover:text-gray-900 rounded-full hover:bg-gray-50 bg-gray-100 flex items-center justify-center focus:outline-none"
  }, _Admin_components_Icons__WEBPACK_IMPORTED_MODULE_3__["default"].paypal))));
}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./admin/assets/src/components/Icons.js":
/*!**********************************************!*\
  !*** ./admin/assets/src/components/Icons.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const Icons = {
  main: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-6 w-6",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
  })),
  support: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-5 w-6 fill-current",
    fill: "none",
    viewBox: "0 0 384 512",
    stroke: "currentColor"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M120 72c0-39.765 32.235-72 72-72s72 32.235 72 72c0 39.764-32.235 72-72 72s-72-32.236-72-72zm254.627 1.373c-12.496-12.497-32.758-12.497-45.254 0L242.745 160H141.254L54.627 73.373c-12.496-12.497-32.758-12.497-45.254 0-12.497 12.497-12.497 32.758 0 45.255L104 213.254V480c0 17.673 14.327 32 32 32h16c17.673 0 32-14.327 32-32V368h16v112c0 17.673 14.327 32 32 32h16c17.673 0 32-14.327 32-32V213.254l94.627-94.627c12.497-12.497 12.497-32.757 0-45.254z"
  })),
  settings: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "feather inline-block feather-sliders mr-4"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("line", {
    x1: "4",
    y1: "21",
    x2: "4",
    y2: "14"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("line", {
    x1: "4",
    y1: "10",
    x2: "4",
    y2: "3"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("line", {
    x1: "12",
    y1: "21",
    x2: "12",
    y2: "12"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("line", {
    x1: "12",
    y1: "8",
    x2: "12",
    y2: "3"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("line", {
    x1: "20",
    y1: "21",
    x2: "20",
    y2: "16"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("line", {
    x1: "20",
    y1: "12",
    x2: "20",
    y2: "3"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("line", {
    x1: "1",
    y1: "14",
    x2: "7",
    y2: "14"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("line", {
    x1: "9",
    y1: "8",
    x2: "15",
    y2: "8"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("line", {
    x1: "17",
    y1: "16",
    x2: "23",
    y2: "16"
  })),
  spinner: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "animate-spin ml-2 mr-3 h-5 w-5 text-white",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
    className: "opacity-25",
    cx: "12",
    cy: "12",
    r: "10",
    stroke: "currentColor",
    strokeWidth: "4"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    className: "opacity-75",
    fill: "currentColor",
    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
  })),
  'checked-circle': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-6 w-6",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
  })),
  email: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "w-4 h-4 fill-current",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"
  })),
  facebook: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "w-4 h-4 fill-current",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 320 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
  })),
  github: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "w-4 h-4 fill-current",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 496 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
  })),
  linkedin: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "w-4 h-4 fill-current",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
  })),
  paypal: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "w-4 h-4 fill-current",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4.7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9.7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z"
  })),
  wordpress: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "w-6 h-6 fill-current",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M256 8C119.3 8 8 119.2 8 256c0 136.7 111.3 248 248 248s248-111.3 248-248C504 119.2 392.7 8 256 8zM33 256c0-32.3 6.9-63 19.3-90.7l106.4 291.4C84.3 420.5 33 344.2 33 256zm223 223c-21.9 0-43-3.2-63-9.1l66.9-194.4 68.5 187.8c.5 1.1 1 2.1 1.6 3.1-23.1 8.1-48 12.6-74 12.6zm30.7-327.5c13.4-.7 25.5-2.1 25.5-2.1 12-1.4 10.6-19.1-1.4-18.4 0 0-36.1 2.8-59.4 2.8-21.9 0-58.7-2.8-58.7-2.8-12-.7-13.4 17.7-1.4 18.4 0 0 11.4 1.4 23.4 2.1l34.7 95.2L200.6 393l-81.2-241.5c13.4-.7 25.5-2.1 25.5-2.1 12-1.4 10.6-19.1-1.4-18.4 0 0-36.1 2.8-59.4 2.8-4.2 0-9.1-.1-14.4-.3C109.6 73 178.1 33 256 33c58 0 110.9 22.2 150.6 58.5-1-.1-1.9-.2-2.9-.2-21.9 0-37.4 19.1-37.4 39.6 0 18.4 10.6 33.9 21.9 52.3 8.5 14.8 18.4 33.9 18.4 61.5 0 19.1-7.3 41.2-17 72.1l-22.2 74.3-80.7-239.6zm81.4 297.2l68.1-196.9c12.7-31.8 17-57.2 17-79.9 0-8.2-.5-15.8-1.5-22.9 17.4 31.8 27.3 68.2 27.3 107 0 82.3-44.6 154.1-110.9 192.7z"
  }))
};
/* harmony default export */ __webpack_exports__["default"] = (Icons);

/***/ }),

/***/ "./admin/assets/src/components/SupportForm.js":
/*!****************************************************!*\
  !*** ./admin/assets/src/components/SupportForm.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);



function SupportForm() {
  function supportFormSubmit(e) {
    e.preventDefault();
    const formData = new window.FormData();

    for (let i = 1; i < e.target.length; i++) {
      formData.append(e.target[i].name, e.target[i].value);
    }

    formData.append('action', 'wp_bess_update_settings');
    formData.append('security', wp_bess_settings.update_nonce);
    apiFetch({
      url: wp_bess_settings.ajax_url,
      method: 'POST',
      body: formData
    }).then(() => {
      setSaved('saved');
      setTimeout(() => {
        setSaved('');
        window.location.reload(false);
      }, 1000);
    });
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
    action: "#",
    method: "POST",
    onSubmit: supportFormSubmit
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-bess-supportform sm:overflow-hidden"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "px-4 py-5 bg-white space-y-6 sm:p-6"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "name",
    className: "block text-sm font-medium text-gray-700"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Name', 'wp-bess')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mt-1"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "name",
    id: "name",
    className: "focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 py-2",
    placeholder: ''
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "subject",
    className: "block text-sm font-medium text-gray-700"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Subject', 'wp-bess')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mt-1"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "subject",
    id: "subject",
    className: "focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 py-2",
    placeholder: ''
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "about",
    className: "block text-sm font-medium text-gray-700"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Description', 'wp-bess')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mt-1"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("textarea", {
    id: "about",
    name: "about",
    rows: 3,
    className: "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md",
    placeholder: '',
    defaultValue: ''
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mt-2 text-sm text-gray-500"
  }, "Brief description for your query."))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "px-4 py-3 bg-gray-50 text-right sm:px-6"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "submit",
    className: "inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Send', 'wp-bess'))))));
}

/* harmony default export */ __webpack_exports__["default"] = (SupportForm);

/***/ }),

/***/ "./admin/assets/src/components/extensions/EnableBackground.js":
/*!********************************************************************!*\
  !*** ./admin/assets/src/components/extensions/EnableBackground.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/headlessui.esm.js");





function classNames() {
  for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
    classes[_key] = arguments[_key];
  }

  return classes.filter(Boolean).join(' ');
}

function EnableBackground() {
  const [enable, setEnable] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(wp_bess_settings.wp_bess_setting.enable_background);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bg-white px-4 py-5 border-b border-r border-gray-200 sm:px-6"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ml-4 mt-4"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "text-lg leading-6 font-medium text-gray-900"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Enable Background', 'wp-bess')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mt-1 text-sm text-gray-500"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Enable Background block related options.', 'wp-bess'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ml-4 mt-4 flex-shrink-0"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Switch, {
    checked: enable,
    value: enable,
    name: "wp_bess_setting[enable_background]",
    onChange: setEnable,
    className: classNames(enable ? 'bg-wpcolor' : 'bg-gray-200', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-wpcolor')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "sr-only"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    "aria-hidden": "true",
    className: classNames(enable ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200')
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (EnableBackground);

/***/ }),

/***/ "./admin/assets/src/components/extensions/EnableBorder.js":
/*!****************************************************************!*\
  !*** ./admin/assets/src/components/extensions/EnableBorder.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/headlessui.esm.js");





function classNames() {
  for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
    classes[_key] = arguments[_key];
  }

  return classes.filter(Boolean).join(' ');
}

function EnableBorder() {
  const [enable, setEnable] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(wp_bess_settings.wp_bess_setting.enable_border);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bg-white px-4 py-5 border-b border-r border-gray-200 sm:px-6"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ml-4 mt-4"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "text-lg leading-6 font-medium text-gray-900"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Enable Border', 'wp-bess')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mt-1 text-sm text-gray-500"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Enable Border block related options.', 'wp-bess'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ml-4 mt-4 flex-shrink-0"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Switch, {
    checked: enable,
    value: enable,
    name: "wp_bess_setting[enable_border]",
    onChange: setEnable,
    className: classNames(enable ? 'bg-wpcolor' : 'bg-gray-200', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-wpcolor')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "sr-only"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    "aria-hidden": "true",
    className: classNames(enable ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200')
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (EnableBorder);

/***/ }),

/***/ "./admin/assets/src/components/extensions/EnableCustomCSS.js":
/*!*******************************************************************!*\
  !*** ./admin/assets/src/components/extensions/EnableCustomCSS.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/headlessui.esm.js");





function classNames() {
  for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
    classes[_key] = arguments[_key];
  }

  return classes.filter(Boolean).join(' ');
}

function EnableCustomCSS() {
  const [enable, setEnable] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(wp_bess_settings.wp_bess_setting.enable_custom_css);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bg-white px-4 py-5 border-r sm:px-6"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ml-4 mt-4"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "text-lg leading-6 font-medium text-gray-900"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Enable Custom CSS', 'wp-bess')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mt-1 text-sm text-gray-500"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Enable Custom CSS block specific.', 'wp-bess'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ml-4 mt-4 flex-shrink-0"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Switch, {
    checked: enable,
    value: enable,
    name: "wp_bess_setting[enable_custom_css]",
    onChange: setEnable,
    className: classNames(enable ? 'bg-wpcolor' : 'bg-gray-200', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-wpcolor')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "sr-only"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    "aria-hidden": "true",
    className: classNames(enable ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200')
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (EnableCustomCSS);

/***/ }),

/***/ "./admin/assets/src/components/extensions/EnableDisplay.js":
/*!*****************************************************************!*\
  !*** ./admin/assets/src/components/extensions/EnableDisplay.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/headlessui.esm.js");





function classNames() {
  for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
    classes[_key] = arguments[_key];
  }

  return classes.filter(Boolean).join(' ');
}

function EnableDisplay() {
  const [enable, setEnable] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(wp_bess_settings.wp_bess_setting.enable_display);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bg-white px-4 py-5 border-r sm:px-6"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ml-4 mt-4"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "text-lg leading-6 font-medium text-gray-900"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Enable Display', 'wp-bess')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mt-1 text-sm text-gray-500"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Enable Display related block options.', 'wp-bess'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ml-4 mt-4 flex-shrink-0"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Switch, {
    checked: enable,
    value: enable,
    name: "wp_bess_setting[enable_display]",
    onChange: setEnable,
    className: classNames(enable ? 'bg-wpcolor' : 'bg-gray-200', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-wpcolor')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "sr-only"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    "aria-hidden": "true",
    className: classNames(enable ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200')
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (EnableDisplay);

/***/ }),

/***/ "./admin/assets/src/components/extensions/EnableMotionEffects.js":
/*!***********************************************************************!*\
  !*** ./admin/assets/src/components/extensions/EnableMotionEffects.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/headlessui.esm.js");





function classNames() {
  for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
    classes[_key] = arguments[_key];
  }

  return classes.filter(Boolean).join(' ');
}

function EnableMotionEffects() {
  const [enable, setEnable] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(wp_bess_settings.wp_bess_setting.enable_motion_effects);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bg-white px-4 py-5 border-b border-gray-200 sm:px-6"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ml-4 mt-4"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "text-lg leading-6 font-medium text-gray-900"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Enable Motion Effects', 'wp-bess')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mt-1 text-sm text-gray-500"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Enable Motion Effects block related options.', 'wp-bess'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ml-4 mt-4 flex-shrink-0"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Switch, {
    checked: enable,
    value: enable,
    name: "wp_bess_setting[enable_motion_effects]",
    onChange: setEnable,
    className: classNames(enable ? 'bg-wpcolor' : 'bg-gray-200', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-wpcolor')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "sr-only"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    "aria-hidden": "true",
    className: classNames(enable ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200')
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (EnableMotionEffects);

/***/ }),

/***/ "./admin/assets/src/components/extensions/EnableSpacings.js":
/*!******************************************************************!*\
  !*** ./admin/assets/src/components/extensions/EnableSpacings.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/headlessui.esm.js");





function classNames() {
  for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
    classes[_key] = arguments[_key];
  }

  return classes.filter(Boolean).join(' ');
}

function EnableSpacings() {
  const [enable, setEnable] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(wp_bess_settings.wp_bess_setting.enable_spacings);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bg-white px-4 py-5 border-b border-gray-200 sm:px-6"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ml-4 mt-4"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "text-lg leading-6 font-medium text-gray-900"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Enable Spacings', 'wp-bess')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mt-1 text-sm text-gray-500"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Enable Spacings block related options.', 'wp-bess'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ml-4 mt-4 flex-shrink-0"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Switch, {
    checked: enable,
    value: enable,
    name: "wp_bess_setting[enable_spacings]",
    onChange: setEnable,
    className: classNames(enable ? 'bg-wpcolor' : 'bg-gray-200', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-wpcolor')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "sr-only"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    "aria-hidden": "true",
    className: classNames(enable ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200')
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (EnableSpacings);

/***/ }),

/***/ "./admin/assets/src/components/extensions/EnableTransform.js":
/*!*******************************************************************!*\
  !*** ./admin/assets/src/components/extensions/EnableTransform.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/headlessui.esm.js");





function classNames() {
  for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
    classes[_key] = arguments[_key];
  }

  return classes.filter(Boolean).join(' ');
}

function EnableTransform() {
  const [enable, setEnable] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(wp_bess_settings.wp_bess_setting.enable_transform);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bg-white px-4 py-5 border-b border-r border-gray-200 sm:px-6"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ml-4 mt-4"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "text-lg leading-6 font-medium text-gray-900"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Enable Transforms', 'wp-bess')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mt-1 text-sm text-gray-500"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Enable Transforms block related options.', 'wp-bess'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ml-4 mt-4 flex-shrink-0"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Switch, {
    checked: enable,
    value: enable,
    name: "wp_bess_setting[enable_transform]",
    onChange: setEnable,
    className: classNames(enable ? 'bg-wpcolor' : 'bg-gray-200', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-wpcolor')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "sr-only"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    "aria-hidden": "true",
    className: classNames(enable ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200')
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (EnableTransform);

/***/ }),

/***/ "./admin/assets/src/components/extensions/EnableWidth.js":
/*!***************************************************************!*\
  !*** ./admin/assets/src/components/extensions/EnableWidth.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/headlessui.esm.js");





function classNames() {
  for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
    classes[_key] = arguments[_key];
  }

  return classes.filter(Boolean).join(' ');
}

function EnableWidth() {
  const [enable, setEnable] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(wp_bess_settings.wp_bess_setting.enable_width);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bg-white px-4 py-5 border-b border-r border-gray-200 sm:px-6"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ml-4 mt-4"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "text-lg leading-6 font-medium text-gray-900"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Enable Width', 'wp-bess')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mt-1 text-sm text-gray-500"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Enable Width block related options.', 'wp-bess'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ml-4 mt-4 flex-shrink-0"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Switch, {
    checked: enable,
    value: enable,
    name: "wp_bess_setting[enable_width]",
    onChange: setEnable,
    className: classNames(enable ? 'bg-wpcolor' : 'bg-gray-200', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-wpcolor')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "sr-only"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    "aria-hidden": "true",
    className: classNames(enable ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200')
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (EnableWidth);

/***/ }),

/***/ "./admin/assets/src/pages/Main.js":
/*!****************************************!*\
  !*** ./admin/assets/src/pages/Main.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Admin_components_extensions_EnableBackground__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Admin/components/extensions/EnableBackground */ "./admin/assets/src/components/extensions/EnableBackground.js");
/* harmony import */ var _Admin_components_extensions_EnableBorder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Admin/components/extensions/EnableBorder */ "./admin/assets/src/components/extensions/EnableBorder.js");
/* harmony import */ var _Admin_components_extensions_EnableMotionEffects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Admin/components/extensions/EnableMotionEffects */ "./admin/assets/src/components/extensions/EnableMotionEffects.js");
/* harmony import */ var _Admin_components_extensions_EnableTransform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Admin/components/extensions/EnableTransform */ "./admin/assets/src/components/extensions/EnableTransform.js");
/* harmony import */ var _Admin_components_extensions_EnableWidth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Admin/components/extensions/EnableWidth */ "./admin/assets/src/components/extensions/EnableWidth.js");
/* harmony import */ var _Admin_components_extensions_EnableSpacings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Admin/components/extensions/EnableSpacings */ "./admin/assets/src/components/extensions/EnableSpacings.js");
/* harmony import */ var _Admin_components_extensions_EnableDisplay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Admin/components/extensions/EnableDisplay */ "./admin/assets/src/components/extensions/EnableDisplay.js");
/* harmony import */ var _Admin_components_extensions_EnableCustomCSS__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @Admin/components/extensions/EnableCustomCSS */ "./admin/assets/src/components/extensions/EnableCustomCSS.js");











function Main() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("dl", {
    className: "space-y-10 md:space-y-0 md:grid md:grid-cols-3"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Admin_components_extensions_EnableBackground__WEBPACK_IMPORTED_MODULE_2__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Admin_components_extensions_EnableBorder__WEBPACK_IMPORTED_MODULE_3__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Admin_components_extensions_EnableMotionEffects__WEBPACK_IMPORTED_MODULE_4__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Admin_components_extensions_EnableTransform__WEBPACK_IMPORTED_MODULE_5__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Admin_components_extensions_EnableWidth__WEBPACK_IMPORTED_MODULE_6__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Admin_components_extensions_EnableSpacings__WEBPACK_IMPORTED_MODULE_7__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Admin_components_extensions_EnableDisplay__WEBPACK_IMPORTED_MODULE_8__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Admin_components_extensions_EnableCustomCSS__WEBPACK_IMPORTED_MODULE_9__["default"], null)));
}

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./admin/assets/src/pages/Support.js":
/*!*******************************************!*\
  !*** ./admin/assets/src/pages/Support.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Admin_components_SupportForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Admin/components/SupportForm */ "./admin/assets/src/components/SupportForm.js");




function Support() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Admin_components_SupportForm__WEBPACK_IMPORTED_MODULE_2__["default"], null));
}

/* harmony default export */ __webpack_exports__["default"] = (Support);

/***/ }),

/***/ "./node_modules/history/esm/history.js":
/*!*********************************************!*\
  !*** ./node_modules/history/esm/history.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createBrowserHistory": function() { return /* binding */ createBrowserHistory; },
/* harmony export */   "createHashHistory": function() { return /* binding */ createHashHistory; },
/* harmony export */   "createLocation": function() { return /* binding */ createLocation; },
/* harmony export */   "createMemoryHistory": function() { return /* binding */ createMemoryHistory; },
/* harmony export */   "createPath": function() { return /* binding */ createPath; },
/* harmony export */   "locationsAreEqual": function() { return /* binding */ locationsAreEqual; },
/* harmony export */   "parsePath": function() { return /* binding */ parsePath; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var resolve_pathname__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! resolve-pathname */ "./node_modules/resolve-pathname/esm/resolve-pathname.js");
/* harmony import */ var value_equal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! value-equal */ "./node_modules/value-equal/esm/value-equal.js");
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tiny-invariant */ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js");






function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
}
function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
}
function hasBasename(path, prefix) {
  return path.toLowerCase().indexOf(prefix.toLowerCase()) === 0 && '/?#'.indexOf(path.charAt(prefix.length)) !== -1;
}
function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
}
function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
}
function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';
  var hashIndex = pathname.indexOf('#');

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
}
function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;
  var path = pathname || '/';
  if (search && search !== '?') path += search.charAt(0) === '?' ? search : "?" + search;
  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : "#" + hash;
  return path;
}

function createLocation(path, state, key, currentLocation) {
  var location;

  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = parsePath(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, path);
    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = (0,resolve_pathname__WEBPACK_IMPORTED_MODULE_1__["default"])(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
}
function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && (0,value_equal__WEBPACK_IMPORTED_MODULE_2__["default"])(a.state, b.state);
}

function createTransitionManager() {
  var prompt = null;

  function setPrompt(nextPrompt) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(prompt == null, 'A history supports only one prompt at a time') : 0;
    prompt = nextPrompt;
    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  }

  function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
           true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(false, 'A history needs a getUserConfirmation function in order to use a prompt message') : 0;
          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  }

  var listeners = [];

  function appendListener(fn) {
    var isActive = true;

    function listener() {
      if (isActive) fn.apply(void 0, arguments);
    }

    listeners.push(listener);
    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function notifyListeners() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(void 0, args);
    });
  }

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function getConfirmation(message, callback) {
  callback(window.confirm(message)); // eslint-disable-line no-alert
}
/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */

function supportsHistory() {
  var ua = window.navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;
  return window.history && 'pushState' in window.history;
}
/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */

function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
}
/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
}
/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */

function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
}

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
}
/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */


function createBrowserHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Browser history needs a DOM') : 0 : void 0;
  var globalHistory = window.history;
  var canUseHistory = supportsHistory();
  var needsHashChangeListener = !supportsPopStateOnHashChange();
  var _props = props,
      _props$forceRefresh = _props.forceRefresh,
      forceRefresh = _props$forceRefresh === void 0 ? false : _props$forceRefresh,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';

  function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;
    var path = pathname + search + hash;
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".') : 0;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path, state, key);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (isExtraneousPopstateEvent(event)) return;
    handlePop(getDOMLocation(event.state));
  }

  function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  }

  var forceNextPop = false;

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allKeys.indexOf(fromLocation.key);
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  }

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key]; // Public interface

  function createHref(location) {
    return basename + createPath(location);
  }

  function push(path, state) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : 0;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.pushState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex + 1);
          nextKeys.push(location.key);
          allKeys = nextKeys;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history') : 0;
        window.location.href = href;
      }
    });
  }

  function replace(path, state) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : 0;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.replaceState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          if (prevIndex !== -1) allKeys[prevIndex] = location.key;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history') : 0;
        window.location.replace(href);
      }
    });
  }

  function go(n) {
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.addEventListener(HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.removeEventListener(HashChangeEvent, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

var HashChangeEvent$1 = 'hashchange';
var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + stripLeadingSlash(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: stripLeadingSlash,
    decodePath: addLeadingSlash
  },
  slash: {
    encodePath: addLeadingSlash,
    decodePath: addLeadingSlash
  }
};

function stripHash(url) {
  var hashIndex = url.indexOf('#');
  return hashIndex === -1 ? url : url.slice(0, hashIndex);
}

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
}

function pushHashPath(path) {
  window.location.hash = path;
}

function replaceHashPath(path) {
  window.location.replace(stripHash(window.location.href) + '#' + path);
}

function createHashHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Hash history needs a DOM') : 0 : void 0;
  var globalHistory = window.history;
  var canGoWithoutReload = supportsGoWithoutReloadUsingHash();
  var _props = props,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$hashType = _props.hashType,
      hashType = _props$hashType === void 0 ? 'slash' : _props$hashType;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';
  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;

  function getDOMLocation() {
    var path = decodePath(getHashPath());
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".') : 0;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  var forceNextPop = false;
  var ignorePath = null;

  function locationsAreEqual$$1(a, b) {
    return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash;
  }

  function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;
      if (!forceNextPop && locationsAreEqual$$1(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === createPath(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;
      handlePop(location);
    }
  }

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf(createPath(toLocation));
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  } // Ensure the hash is encoded properly before doing anything else.


  var path = getHashPath();
  var encodedPath = encodePath(path);
  if (path !== encodedPath) replaceHashPath(encodedPath);
  var initialLocation = getDOMLocation();
  var allPaths = [createPath(initialLocation)]; // Public interface

  function createHref(location) {
    var baseTag = document.querySelector('base');
    var href = '';

    if (baseTag && baseTag.getAttribute('href')) {
      href = stripHash(window.location.href);
    }

    return href + '#' + encodePath(basename + createPath(location));
  }

  function push(path, state) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(state === undefined, 'Hash history cannot push state; it is ignored') : 0;
    var action = 'PUSH';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);
        var prevIndex = allPaths.lastIndexOf(createPath(history.location));
        var nextPaths = allPaths.slice(0, prevIndex + 1);
        nextPaths.push(path);
        allPaths = nextPaths;
        setState({
          action: action,
          location: location
        });
      } else {
         true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack') : 0;
        setState();
      }
    });
  }

  function replace(path, state) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(state === undefined, 'Hash history cannot replace state; it is ignored') : 0;
    var action = 'REPLACE';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf(createPath(history.location));
      if (prevIndex !== -1) allPaths[prevIndex] = path;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser') : 0;
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(HashChangeEvent$1, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(HashChangeEvent$1, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
}
/**
 * Creates a history object that stores locations in memory.
 */


function createMemoryHistory(props) {
  if (props === void 0) {
    props = {};
  }

  var _props = props,
      getUserConfirmation = _props.getUserConfirmation,
      _props$initialEntries = _props.initialEntries,
      initialEntries = _props$initialEntries === void 0 ? ['/'] : _props$initialEntries,
      _props$initialIndex = _props.initialIndex,
      initialIndex = _props$initialIndex === void 0 ? 0 : _props$initialIndex,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var transitionManager = createTransitionManager();

  function setState(nextState) {
    (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(history, nextState);

    history.length = history.entries.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? createLocation(entry, undefined, createKey()) : createLocation(entry, undefined, entry.key || createKey());
  }); // Public interface

  var createHref = createPath;

  function push(path, state) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : 0;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;
      var nextEntries = history.entries.slice(0);

      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  }

  function replace(path, state) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : 0;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      history.entries[history.index] = location;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);
    var action = 'POP';
    var location = history.entries[nextIndex];
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  }

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    return transitionManager.setPrompt(prompt);
  }

  function listen(listener) {
    return transitionManager.appendListener(listener);
  }

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };
  return history;
}




/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/mini-create-react-context/dist/esm/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/mini-create-react-context/dist/esm/index.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");





var MAX_SIGNED_31_BIT_INT = 1073741823;
var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : {};

function getUniqueId() {
  var key = '__global_unique_id__';
  return commonjsGlobal[key] = (commonjsGlobal[key] || 0) + 1;
}

function objectIs(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function (h) {
        return h !== handler;
      });
    },
    get: function get() {
      return value;
    },
    set: function set(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function (handler) {
        return handler(value, changedBits);
      });
    }
  };
}

function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}

function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;

  var contextProp = '__create-react-context-' + getUniqueId() + '__';

  var Provider = /*#__PURE__*/function (_Component) {
    (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Provider, _Component);

    function Provider() {
      var _this;

      _this = _Component.apply(this, arguments) || this;
      _this.emitter = createEventEmitter(_this.props.value);
      return _this;
    }

    var _proto = Provider.prototype;

    _proto.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
    };

    _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits;

        if (objectIs(oldValue, newValue)) {
          changedBits = 0;
        } else {
          changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;

          if (true) {
            (0,tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])((changedBits & MAX_SIGNED_31_BIT_INT) === changedBits, 'calculateChangedBits: Expected the return value to be a ' + '31-bit integer. Instead received: ' + changedBits);
          }

          changedBits |= 0;

          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };

    _proto.render = function render() {
      return this.props.children;
    };

    return Provider;
  }(react__WEBPACK_IMPORTED_MODULE_0__.Component);

  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object.isRequired), _Provider$childContex);

  var Consumer = /*#__PURE__*/function (_Component2) {
    (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Consumer, _Component2);

    function Consumer() {
      var _this2;

      _this2 = _Component2.apply(this, arguments) || this;
      _this2.state = {
        value: _this2.getValue()
      };

      _this2.onUpdate = function (newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;

        if ((observedBits & changedBits) !== 0) {
          _this2.setState({
            value: _this2.getValue()
          });
        }
      };

      return _this2;
    }

    var _proto2 = Consumer.prototype;

    _proto2.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;
      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
    };

    _proto2.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }

      var observedBits = this.props.observedBits;
      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
    };

    _proto2.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };

    _proto2.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };

    _proto2.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };

    return Consumer;
  }(react__WEBPACK_IMPORTED_MODULE_0__.Component);

  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object), _Consumer$contextType);
  return {
    Provider: Provider,
    Consumer: Consumer
  };
}

var index = (react__WEBPACK_IMPORTED_MODULE_0___default().createContext) || createReactContext;

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./admin/assets/src/Settings.scss":
/*!****************************************!*\
  !*** ./admin/assets/src/Settings.scss ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ (function(module) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) { /**/ }
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/***/ (function(module) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/prop-types/lib/has.js":
/*!********************************************!*\
  !*** ./node_modules/prop-types/lib/has.js ***!
  \********************************************/
/***/ (function(module) {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-router-dom/esm/react-router-dom.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-router-dom/esm/react-router-dom.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrowserRouter": function() { return /* binding */ BrowserRouter; },
/* harmony export */   "HashRouter": function() { return /* binding */ HashRouter; },
/* harmony export */   "Link": function() { return /* binding */ Link; },
/* harmony export */   "MemoryRouter": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.MemoryRouter; },
/* harmony export */   "NavLink": function() { return /* binding */ NavLink; },
/* harmony export */   "Prompt": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.Prompt; },
/* harmony export */   "Redirect": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.Redirect; },
/* harmony export */   "Route": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.Route; },
/* harmony export */   "Router": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.Router; },
/* harmony export */   "StaticRouter": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.StaticRouter; },
/* harmony export */   "Switch": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.Switch; },
/* harmony export */   "generatePath": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.generatePath; },
/* harmony export */   "matchPath": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.matchPath; },
/* harmony export */   "useHistory": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.useHistory; },
/* harmony export */   "useLocation": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.useLocation; },
/* harmony export */   "useParams": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.useParams; },
/* harmony export */   "useRouteMatch": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.useRouteMatch; },
/* harmony export */   "withRouter": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.withRouter; }
/* harmony export */ });
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tiny-invariant */ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js");











/**
 * The public API for a <Router> that uses HTML5 history.
 */

var BrowserRouter = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = (0,history__WEBPACK_IMPORTED_MODULE_5__.createBrowserHistory)(_this.props);
    return _this;
  }

  var _proto = BrowserRouter.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router__WEBPACK_IMPORTED_MODULE_0__.Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return BrowserRouter;
}((react__WEBPACK_IMPORTED_MODULE_2___default().Component));

if (true) {
  BrowserRouter.propTypes = {
    basename: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
    children: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().node),
    forceRefresh: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
    getUserConfirmation: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),
    keyLength: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().number)
  };

  BrowserRouter.prototype.componentDidMount = function () {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_7__["default"])(!this.props.history, "<BrowserRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { BrowserRouter as Router }`.") : 0;
  };
}

/**
 * The public API for a <Router> that uses window.location.hash.
 */

var HashRouter = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(HashRouter, _React$Component);

  function HashRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = (0,history__WEBPACK_IMPORTED_MODULE_5__.createHashHistory)(_this.props);
    return _this;
  }

  var _proto = HashRouter.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router__WEBPACK_IMPORTED_MODULE_0__.Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return HashRouter;
}((react__WEBPACK_IMPORTED_MODULE_2___default().Component));

if (true) {
  HashRouter.propTypes = {
    basename: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
    children: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().node),
    getUserConfirmation: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),
    hashType: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(["hashbang", "noslash", "slash"])
  };

  HashRouter.prototype.componentDidMount = function () {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_7__["default"])(!this.props.history, "<HashRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { HashRouter as Router }`.") : 0;
  };
}

var resolveToLocation = function resolveToLocation(to, currentLocation) {
  return typeof to === "function" ? to(currentLocation) : to;
};
var normalizeToLocation = function normalizeToLocation(to, currentLocation) {
  return typeof to === "string" ? (0,history__WEBPACK_IMPORTED_MODULE_5__.createLocation)(to, null, null, currentLocation) : to;
};

var forwardRefShim = function forwardRefShim(C) {
  return C;
};

var forwardRef = (react__WEBPACK_IMPORTED_MODULE_2___default().forwardRef);

if (typeof forwardRef === "undefined") {
  forwardRef = forwardRefShim;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

var LinkAnchor = forwardRef(function (_ref, forwardedRef) {
  var innerRef = _ref.innerRef,
      navigate = _ref.navigate,
      _onClick = _ref.onClick,
      rest = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__["default"])(_ref, ["innerRef", "navigate", "onClick"]);

  var target = rest.target;

  var props = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, rest, {
    onClick: function onClick(event) {
      try {
        if (_onClick) _onClick(event);
      } catch (ex) {
        event.preventDefault();
        throw ex;
      }

      if (!event.defaultPrevented && // onClick prevented default
      event.button === 0 && ( // ignore everything but left clicks
      !target || target === "_self") && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
          event.preventDefault();
          navigate();
        }
    }
  }); // React 15 compat


  if (forwardRefShim !== forwardRef) {
    props.ref = forwardedRef || innerRef;
  } else {
    props.ref = innerRef;
  }
  /* eslint-disable-next-line jsx-a11y/anchor-has-content */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("a", props);
});

if (true) {
  LinkAnchor.displayName = "LinkAnchor";
}
/**
 * The public API for rendering a history-aware <a>.
 */


var Link = forwardRef(function (_ref2, forwardedRef) {
  var _ref2$component = _ref2.component,
      component = _ref2$component === void 0 ? LinkAnchor : _ref2$component,
      replace = _ref2.replace,
      to = _ref2.to,
      innerRef = _ref2.innerRef,
      rest = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__["default"])(_ref2, ["component", "replace", "to", "innerRef"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router__WEBPACK_IMPORTED_MODULE_0__.__RouterContext.Consumer, null, function (context) {
    !context ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_8__["default"])(false, "You should not use <Link> outside a <Router>") : 0 : void 0;
    var history = context.history;
    var location = normalizeToLocation(resolveToLocation(to, context.location), context.location);
    var href = location ? history.createHref(location) : "";

    var props = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, rest, {
      href: href,
      navigate: function navigate() {
        var location = resolveToLocation(to, context.location);
        var isDuplicateNavigation = (0,history__WEBPACK_IMPORTED_MODULE_5__.createPath)(context.location) === (0,history__WEBPACK_IMPORTED_MODULE_5__.createPath)(normalizeToLocation(location));
        var method = replace || isDuplicateNavigation ? history.replace : history.push;
        method(location);
      }
    }); // React 15 compat


    if (forwardRefShim !== forwardRef) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(component, props);
  });
});

if (true) {
  var toType = prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_6___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func)]);
  var refType = prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_6___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func), prop_types__WEBPACK_IMPORTED_MODULE_6___default().shape({
    current: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().any)
  })]);
  Link.displayName = "Link";
  Link.propTypes = {
    innerRef: refType,
    onClick: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),
    replace: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
    target: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
    to: toType.isRequired
  };
}

var forwardRefShim$1 = function forwardRefShim(C) {
  return C;
};

var forwardRef$1 = (react__WEBPACK_IMPORTED_MODULE_2___default().forwardRef);

if (typeof forwardRef$1 === "undefined") {
  forwardRef$1 = forwardRefShim$1;
}

function joinClassnames() {
  for (var _len = arguments.length, classnames = new Array(_len), _key = 0; _key < _len; _key++) {
    classnames[_key] = arguments[_key];
  }

  return classnames.filter(function (i) {
    return i;
  }).join(" ");
}
/**
 * A <Link> wrapper that knows if it's "active" or not.
 */


var NavLink = forwardRef$1(function (_ref, forwardedRef) {
  var _ref$ariaCurrent = _ref["aria-current"],
      ariaCurrent = _ref$ariaCurrent === void 0 ? "page" : _ref$ariaCurrent,
      _ref$activeClassName = _ref.activeClassName,
      activeClassName = _ref$activeClassName === void 0 ? "active" : _ref$activeClassName,
      activeStyle = _ref.activeStyle,
      classNameProp = _ref.className,
      exact = _ref.exact,
      isActiveProp = _ref.isActive,
      locationProp = _ref.location,
      sensitive = _ref.sensitive,
      strict = _ref.strict,
      styleProp = _ref.style,
      to = _ref.to,
      innerRef = _ref.innerRef,
      rest = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__["default"])(_ref, ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "sensitive", "strict", "style", "to", "innerRef"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router__WEBPACK_IMPORTED_MODULE_0__.__RouterContext.Consumer, null, function (context) {
    !context ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_8__["default"])(false, "You should not use <NavLink> outside a <Router>") : 0 : void 0;
    var currentLocation = locationProp || context.location;
    var toLocation = normalizeToLocation(resolveToLocation(to, currentLocation), currentLocation);
    var path = toLocation.pathname; // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202

    var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
    var match = escapedPath ? (0,react_router__WEBPACK_IMPORTED_MODULE_0__.matchPath)(currentLocation.pathname, {
      path: escapedPath,
      exact: exact,
      sensitive: sensitive,
      strict: strict
    }) : null;
    var isActive = !!(isActiveProp ? isActiveProp(match, currentLocation) : match);
    var className = typeof classNameProp === "function" ? classNameProp(isActive) : classNameProp;
    var style = typeof styleProp === "function" ? styleProp(isActive) : styleProp;

    if (isActive) {
      className = joinClassnames(className, activeClassName);
      style = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, style, activeStyle);
    }

    var props = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({
      "aria-current": isActive && ariaCurrent || null,
      className: className,
      style: style,
      to: toLocation
    }, rest); // React 15 compat


    if (forwardRefShim$1 !== forwardRef$1) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Link, props);
  });
});

if (true) {
  NavLink.displayName = "NavLink";
  var ariaCurrentType = prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(["page", "step", "location", "date", "time", "true", "false"]);
  NavLink.propTypes = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, Link.propTypes, {
    "aria-current": ariaCurrentType,
    activeClassName: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
    activeStyle: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object),
    className: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_6___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func)]),
    exact: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
    isActive: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),
    location: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object),
    sensitive: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
    strict: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
    style: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_6___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func)])
  });
}


//# sourceMappingURL=react-router-dom.js.map


/***/ }),

/***/ "./node_modules/react-router/esm/react-router.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-router/esm/react-router.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MemoryRouter": function() { return /* binding */ MemoryRouter; },
/* harmony export */   "Prompt": function() { return /* binding */ Prompt; },
/* harmony export */   "Redirect": function() { return /* binding */ Redirect; },
/* harmony export */   "Route": function() { return /* binding */ Route; },
/* harmony export */   "Router": function() { return /* binding */ Router; },
/* harmony export */   "StaticRouter": function() { return /* binding */ StaticRouter; },
/* harmony export */   "Switch": function() { return /* binding */ Switch; },
/* harmony export */   "__HistoryContext": function() { return /* binding */ historyContext; },
/* harmony export */   "__RouterContext": function() { return /* binding */ context; },
/* harmony export */   "generatePath": function() { return /* binding */ generatePath; },
/* harmony export */   "matchPath": function() { return /* binding */ matchPath; },
/* harmony export */   "useHistory": function() { return /* binding */ useHistory; },
/* harmony export */   "useLocation": function() { return /* binding */ useLocation; },
/* harmony export */   "useParams": function() { return /* binding */ useParams; },
/* harmony export */   "useRouteMatch": function() { return /* binding */ useRouteMatch; },
/* harmony export */   "withRouter": function() { return /* binding */ withRouter; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");
/* harmony import */ var mini_create_react_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mini-create-react-context */ "./node_modules/mini-create-react-context/dist/esm/index.js");
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tiny-invariant */ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! path-to-regexp */ "./node_modules/react-router/node_modules/path-to-regexp/index.js");
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(path_to_regexp__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_7__);













// TODO: Replace with React.createContext once we can assume React 16+

var createNamedContext = function createNamedContext(name) {
  var context = (0,mini_create_react_context__WEBPACK_IMPORTED_MODULE_2__["default"])();
  context.displayName = name;
  return context;
};

var historyContext = /*#__PURE__*/createNamedContext("Router-History");

var context = /*#__PURE__*/createNamedContext("Router");

/**
 * The public API for putting history on context.
 */

var Router = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Router, _React$Component);

  Router.computeRootMatch = function computeRootMatch(pathname) {
    return {
      path: "/",
      url: "/",
      params: {},
      isExact: pathname === "/"
    };
  };

  function Router(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      location: props.history.location
    }; // This is a bit of a hack. We have to start listening for location
    // changes here in the constructor in case there are any <Redirect>s
    // on the initial render. If there are, they will replace/push when
    // they mount and since cDM fires in children before parents, we may
    // get a new location before the <Router> is mounted.

    _this._isMounted = false;
    _this._pendingLocation = null;

    if (!props.staticContext) {
      _this.unlisten = props.history.listen(function (location) {
        if (_this._isMounted) {
          _this.setState({
            location: location
          });
        } else {
          _this._pendingLocation = location;
        }
      });
    }

    return _this;
  }

  var _proto = Router.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this._isMounted = true;

    if (this._pendingLocation) {
      this.setState({
        location: this._pendingLocation
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.unlisten) {
      this.unlisten();
      this._isMounted = false;
      this._pendingLocation = null;
    }
  };

  _proto.render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(context.Provider, {
      value: {
        history: this.props.history,
        location: this.state.location,
        match: Router.computeRootMatch(this.state.location.pathname),
        staticContext: this.props.staticContext
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(historyContext.Provider, {
      children: this.props.children || null,
      value: this.props.history
    }));
  };

  return Router;
}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));

if (true) {
  Router.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().node),
    history: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object.isRequired),
    staticContext: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object)
  };

  Router.prototype.componentDidUpdate = function (prevProps) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_9__["default"])(prevProps.history === this.props.history, "You cannot change <Router history>") : 0;
  };
}

/**
 * The public API for a <Router> that stores location in memory.
 */

var MemoryRouter = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(MemoryRouter, _React$Component);

  function MemoryRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = (0,history__WEBPACK_IMPORTED_MODULE_10__.createMemoryHistory)(_this.props);
    return _this;
  }

  var _proto = MemoryRouter.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return MemoryRouter;
}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));

if (true) {
  MemoryRouter.propTypes = {
    initialEntries: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().array),
    initialIndex: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().number),
    getUserConfirmation: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),
    keyLength: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().number),
    children: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().node)
  };

  MemoryRouter.prototype.componentDidMount = function () {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_9__["default"])(!this.props.history, "<MemoryRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { MemoryRouter as Router }`.") : 0;
  };
}

var Lifecycle = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Lifecycle, _React$Component);

  function Lifecycle() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Lifecycle.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (this.props.onMount) this.props.onMount.call(this, this);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.onUpdate) this.props.onUpdate.call(this, this, prevProps);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.props.onUnmount) this.props.onUnmount.call(this, this);
  };

  _proto.render = function render() {
    return null;
  };

  return Lifecycle;
}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));

/**
 * The public API for prompting the user before navigating away from a screen.
 */

function Prompt(_ref) {
  var message = _ref.message,
      _ref$when = _ref.when,
      when = _ref$when === void 0 ? true : _ref$when;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(context.Consumer, null, function (context) {
    !context ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_11__["default"])(false, "You should not use <Prompt> outside a <Router>") : 0 : void 0;
    if (!when || context.staticContext) return null;
    var method = context.history.block;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Lifecycle, {
      onMount: function onMount(self) {
        self.release = method(message);
      },
      onUpdate: function onUpdate(self, prevProps) {
        if (prevProps.message !== message) {
          self.release();
          self.release = method(message);
        }
      },
      onUnmount: function onUnmount(self) {
        self.release();
      },
      message: message
    });
  });
}

if (true) {
  var messageType = prop_types__WEBPACK_IMPORTED_MODULE_8___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_8___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string)]);
  Prompt.propTypes = {
    when: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool),
    message: messageType.isRequired
  };
}

var cache = {};
var cacheLimit = 10000;
var cacheCount = 0;

function compilePath(path) {
  if (cache[path]) return cache[path];
  var generator = path_to_regexp__WEBPACK_IMPORTED_MODULE_4___default().compile(path);

  if (cacheCount < cacheLimit) {
    cache[path] = generator;
    cacheCount++;
  }

  return generator;
}
/**
 * Public API for generating a URL pathname from a path and parameters.
 */


function generatePath(path, params) {
  if (path === void 0) {
    path = "/";
  }

  if (params === void 0) {
    params = {};
  }

  return path === "/" ? path : compilePath(path)(params, {
    pretty: true
  });
}

/**
 * The public API for navigating programmatically with a component.
 */

function Redirect(_ref) {
  var computedMatch = _ref.computedMatch,
      to = _ref.to,
      _ref$push = _ref.push,
      push = _ref$push === void 0 ? false : _ref$push;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(context.Consumer, null, function (context) {
    !context ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_11__["default"])(false, "You should not use <Redirect> outside a <Router>") : 0 : void 0;
    var history = context.history,
        staticContext = context.staticContext;
    var method = push ? history.push : history.replace;
    var location = (0,history__WEBPACK_IMPORTED_MODULE_10__.createLocation)(computedMatch ? typeof to === "string" ? generatePath(to, computedMatch.params) : (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, to, {
      pathname: generatePath(to.pathname, computedMatch.params)
    }) : to); // When rendering in a static context,
    // set the new location immediately.

    if (staticContext) {
      method(location);
      return null;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Lifecycle, {
      onMount: function onMount() {
        method(location);
      },
      onUpdate: function onUpdate(self, prevProps) {
        var prevLocation = (0,history__WEBPACK_IMPORTED_MODULE_10__.createLocation)(prevProps.to);

        if (!(0,history__WEBPACK_IMPORTED_MODULE_10__.locationsAreEqual)(prevLocation, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, location, {
          key: prevLocation.key
        }))) {
          method(location);
        }
      },
      to: to
    });
  });
}

if (true) {
  Redirect.propTypes = {
    push: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool),
    from: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),
    to: prop_types__WEBPACK_IMPORTED_MODULE_8___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_8___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object)]).isRequired
  };
}

var cache$1 = {};
var cacheLimit$1 = 10000;
var cacheCount$1 = 0;

function compilePath$1(path, options) {
  var cacheKey = "" + options.end + options.strict + options.sensitive;
  var pathCache = cache$1[cacheKey] || (cache$1[cacheKey] = {});
  if (pathCache[path]) return pathCache[path];
  var keys = [];
  var regexp = path_to_regexp__WEBPACK_IMPORTED_MODULE_4___default()(path, keys, options);
  var result = {
    regexp: regexp,
    keys: keys
  };

  if (cacheCount$1 < cacheLimit$1) {
    pathCache[path] = result;
    cacheCount$1++;
  }

  return result;
}
/**
 * Public API for matching a URL pathname to a path.
 */


function matchPath(pathname, options) {
  if (options === void 0) {
    options = {};
  }

  if (typeof options === "string" || Array.isArray(options)) {
    options = {
      path: options
    };
  }

  var _options = options,
      path = _options.path,
      _options$exact = _options.exact,
      exact = _options$exact === void 0 ? false : _options$exact,
      _options$strict = _options.strict,
      strict = _options$strict === void 0 ? false : _options$strict,
      _options$sensitive = _options.sensitive,
      sensitive = _options$sensitive === void 0 ? false : _options$sensitive;
  var paths = [].concat(path);
  return paths.reduce(function (matched, path) {
    if (!path && path !== "") return null;
    if (matched) return matched;

    var _compilePath = compilePath$1(path, {
      end: exact,
      strict: strict,
      sensitive: sensitive
    }),
        regexp = _compilePath.regexp,
        keys = _compilePath.keys;

    var match = regexp.exec(pathname);
    if (!match) return null;
    var url = match[0],
        values = match.slice(1);
    var isExact = pathname === url;
    if (exact && !isExact) return null;
    return {
      path: path,
      // the path used to match
      url: path === "/" && url === "" ? "/" : url,
      // the matched portion of the URL
      isExact: isExact,
      // whether or not we matched exactly
      params: keys.reduce(function (memo, key, index) {
        memo[key.name] = values[index];
        return memo;
      }, {})
    };
  }, null);
}

function isEmptyChildren(children) {
  return react__WEBPACK_IMPORTED_MODULE_1___default().Children.count(children) === 0;
}

function evalChildrenDev(children, props, path) {
  var value = children(props);
   true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_9__["default"])(value !== undefined, "You returned `undefined` from the `children` function of " + ("<Route" + (path ? " path=\"" + path + "\"" : "") + ">, but you ") + "should have returned a React element or `null`") : 0;
  return value || null;
}
/**
 * The public API for matching a single path and rendering.
 */


var Route = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Route, _React$Component);

  function Route() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Route.prototype;

  _proto.render = function render() {
    var _this = this;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(context.Consumer, null, function (context$1) {
      !context$1 ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_11__["default"])(false, "You should not use <Route> outside a <Router>") : 0 : void 0;
      var location = _this.props.location || context$1.location;
      var match = _this.props.computedMatch ? _this.props.computedMatch // <Switch> already computed the match for us
      : _this.props.path ? matchPath(location.pathname, _this.props) : context$1.match;

      var props = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, context$1, {
        location: location,
        match: match
      });

      var _this$props = _this.props,
          children = _this$props.children,
          component = _this$props.component,
          render = _this$props.render; // Preact uses an empty array as children by
      // default, so use null if that's the case.

      if (Array.isArray(children) && isEmptyChildren(children)) {
        children = null;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(context.Provider, {
        value: props
      }, props.match ? children ? typeof children === "function" ?  true ? evalChildrenDev(children, props, _this.props.path) : 0 : children : component ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(component, props) : render ? render(props) : null : typeof children === "function" ?  true ? evalChildrenDev(children, props, _this.props.path) : 0 : null);
    });
  };

  return Route;
}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));

if (true) {
  Route.propTypes = {
    children: prop_types__WEBPACK_IMPORTED_MODULE_8___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_8___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_8___default().node)]),
    component: function component(props, propName) {
      if (props[propName] && !(0,react_is__WEBPACK_IMPORTED_MODULE_5__.isValidElementType)(props[propName])) {
        return new Error("Invalid prop 'component' supplied to 'Route': the prop is not a valid React component");
      }
    },
    exact: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool),
    location: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object),
    path: prop_types__WEBPACK_IMPORTED_MODULE_8___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_8___default().string), prop_types__WEBPACK_IMPORTED_MODULE_8___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_8___default().string))]),
    render: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),
    sensitive: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool),
    strict: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool)
  };

  Route.prototype.componentDidMount = function () {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_9__["default"])(!(this.props.children && !isEmptyChildren(this.props.children) && this.props.component), "You should not use <Route component> and <Route children> in the same route; <Route component> will be ignored") : 0;
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_9__["default"])(!(this.props.children && !isEmptyChildren(this.props.children) && this.props.render), "You should not use <Route render> and <Route children> in the same route; <Route render> will be ignored") : 0;
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_9__["default"])(!(this.props.component && this.props.render), "You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored") : 0;
  };

  Route.prototype.componentDidUpdate = function (prevProps) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_9__["default"])(!(this.props.location && !prevProps.location), '<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.') : 0;
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_9__["default"])(!(!this.props.location && prevProps.location), '<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.') : 0;
  };
}

function addLeadingSlash(path) {
  return path.charAt(0) === "/" ? path : "/" + path;
}

function addBasename(basename, location) {
  if (!basename) return location;
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, location, {
    pathname: addLeadingSlash(basename) + location.pathname
  });
}

function stripBasename(basename, location) {
  if (!basename) return location;
  var base = addLeadingSlash(basename);
  if (location.pathname.indexOf(base) !== 0) return location;
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, location, {
    pathname: location.pathname.substr(base.length)
  });
}

function createURL(location) {
  return typeof location === "string" ? location : (0,history__WEBPACK_IMPORTED_MODULE_10__.createPath)(location);
}

function staticHandler(methodName) {
  return function () {
      true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_11__["default"])(false, "You cannot %s with <StaticRouter>", methodName) : 0 ;
  };
}

function noop() {}
/**
 * The public top-level API for a "static" <Router>, so-called because it
 * can't actually change the current location. Instead, it just records
 * location changes in a context object. Useful mainly in testing and
 * server-rendering scenarios.
 */


var StaticRouter = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(StaticRouter, _React$Component);

  function StaticRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handlePush = function (location) {
      return _this.navigateTo(location, "PUSH");
    };

    _this.handleReplace = function (location) {
      return _this.navigateTo(location, "REPLACE");
    };

    _this.handleListen = function () {
      return noop;
    };

    _this.handleBlock = function () {
      return noop;
    };

    return _this;
  }

  var _proto = StaticRouter.prototype;

  _proto.navigateTo = function navigateTo(location, action) {
    var _this$props = this.props,
        _this$props$basename = _this$props.basename,
        basename = _this$props$basename === void 0 ? "" : _this$props$basename,
        _this$props$context = _this$props.context,
        context = _this$props$context === void 0 ? {} : _this$props$context;
    context.action = action;
    context.location = addBasename(basename, (0,history__WEBPACK_IMPORTED_MODULE_10__.createLocation)(location));
    context.url = createURL(context.location);
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        _this$props2$basename = _this$props2.basename,
        basename = _this$props2$basename === void 0 ? "" : _this$props2$basename,
        _this$props2$context = _this$props2.context,
        context = _this$props2$context === void 0 ? {} : _this$props2$context,
        _this$props2$location = _this$props2.location,
        location = _this$props2$location === void 0 ? "/" : _this$props2$location,
        rest = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__["default"])(_this$props2, ["basename", "context", "location"]);

    var history = {
      createHref: function createHref(path) {
        return addLeadingSlash(basename + createURL(path));
      },
      action: "POP",
      location: stripBasename(basename, (0,history__WEBPACK_IMPORTED_MODULE_10__.createLocation)(location)),
      push: this.handlePush,
      replace: this.handleReplace,
      go: staticHandler("go"),
      goBack: staticHandler("goBack"),
      goForward: staticHandler("goForward"),
      listen: this.handleListen,
      block: this.handleBlock
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Router, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, rest, {
      history: history,
      staticContext: context
    }));
  };

  return StaticRouter;
}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));

if (true) {
  StaticRouter.propTypes = {
    basename: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),
    context: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object),
    location: prop_types__WEBPACK_IMPORTED_MODULE_8___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_8___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object)])
  };

  StaticRouter.prototype.componentDidMount = function () {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_9__["default"])(!this.props.history, "<StaticRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { StaticRouter as Router }`.") : 0;
  };
}

/**
 * The public API for rendering the first <Route> that matches.
 */

var Switch = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Switch, _React$Component);

  function Switch() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Switch.prototype;

  _proto.render = function render() {
    var _this = this;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(context.Consumer, null, function (context) {
      !context ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_11__["default"])(false, "You should not use <Switch> outside a <Router>") : 0 : void 0;
      var location = _this.props.location || context.location;
      var element, match; // We use React.Children.forEach instead of React.Children.toArray().find()
      // here because toArray adds keys to all child elements and we do not want
      // to trigger an unmount/remount for two <Route>s that render the same
      // component at different URLs.

      react__WEBPACK_IMPORTED_MODULE_1___default().Children.forEach(_this.props.children, function (child) {
        if (match == null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().isValidElement(child)) {
          element = child;
          var path = child.props.path || child.props.from;
          match = path ? matchPath(location.pathname, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, child.props, {
            path: path
          })) : context.match;
        }
      });
      return match ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(element, {
        location: location,
        computedMatch: match
      }) : null;
    });
  };

  return Switch;
}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));

if (true) {
  Switch.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().node),
    location: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object)
  };

  Switch.prototype.componentDidUpdate = function (prevProps) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_9__["default"])(!(this.props.location && !prevProps.location), '<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.') : 0;
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_9__["default"])(!(!this.props.location && prevProps.location), '<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.') : 0;
  };
}

/**
 * A public higher-order component to access the imperative API
 */

function withRouter(Component) {
  var displayName = "withRouter(" + (Component.displayName || Component.name) + ")";

  var C = function C(props) {
    var wrappedComponentRef = props.wrappedComponentRef,
        remainingProps = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__["default"])(props, ["wrappedComponentRef"]);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(context.Consumer, null, function (context) {
      !context ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_11__["default"])(false, "You should not use <" + displayName + " /> outside a <Router>") : 0 : void 0;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, remainingProps, context, {
        ref: wrappedComponentRef
      }));
    });
  };

  C.displayName = displayName;
  C.WrappedComponent = Component;

  if (true) {
    C.propTypes = {
      wrappedComponentRef: prop_types__WEBPACK_IMPORTED_MODULE_8___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_8___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object)])
    };
  }

  return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_7___default()(C, Component);
}

var useContext = (react__WEBPACK_IMPORTED_MODULE_1___default().useContext);
function useHistory() {
  if (true) {
    !(typeof useContext === "function") ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_11__["default"])(false, "You must use React >= 16.8 in order to use useHistory()") : 0 : void 0;
  }

  return useContext(historyContext);
}
function useLocation() {
  if (true) {
    !(typeof useContext === "function") ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_11__["default"])(false, "You must use React >= 16.8 in order to use useLocation()") : 0 : void 0;
  }

  return useContext(context).location;
}
function useParams() {
  if (true) {
    !(typeof useContext === "function") ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_11__["default"])(false, "You must use React >= 16.8 in order to use useParams()") : 0 : void 0;
  }

  var match = useContext(context).match;
  return match ? match.params : {};
}
function useRouteMatch(path) {
  if (true) {
    !(typeof useContext === "function") ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_11__["default"])(false, "You must use React >= 16.8 in order to use useRouteMatch()") : 0 : void 0;
  }

  var location = useLocation();
  var match = useContext(context).match;
  return path ? matchPath(location.pathname, path) : match;
}

if (true) {
  if (typeof window !== "undefined") {
    var global = window;
    var key = "__react_router_build__";
    var buildNames = {
      cjs: "CommonJS",
      esm: "ES modules",
      umd: "UMD"
    };

    if (global[key] && global[key] !== "esm") {
      var initialBuildName = buildNames[global[key]];
      var secondaryBuildName = buildNames["esm"]; // TODO: Add link to article that explains in detail how to avoid
      // loading 2 different builds.

      throw new Error("You are loading the " + secondaryBuildName + " build of React Router " + ("on a page that is already running the " + initialBuildName + " ") + "build, so things won't work right.");
    }

    global[key] = "esm";
  }
}


//# sourceMappingURL=react-router.js.map


/***/ }),

/***/ "./node_modules/react-router/node_modules/isarray/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-router/node_modules/isarray/index.js ***!
  \*****************************************************************/
/***/ (function(module) {

module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/react-router/node_modules/path-to-regexp/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-router/node_modules/path-to-regexp/index.js ***!
  \************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isarray = __webpack_require__(/*! isarray */ "./node_modules/react-router/node_modules/isarray/index.js")

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var defaultDelimiter = options && options.delimiter || '/'
  var res

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      continue
    }

    var next = str[index]
    var prefix = res[2]
    var name = res[3]
    var capture = res[4]
    var group = res[5]
    var modifier = res[6]
    var asterisk = res[7]

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
    }

    var partial = prefix != null && next != null && next !== prefix
    var repeat = modifier === '+' || modifier === '*'
    var optional = modifier === '?' || modifier === '*'
    var delimiter = res[2] || defaultDelimiter
    var pattern = capture || group

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    })
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index)
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path)
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options), options)
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens, options) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options))
    }
  }

  return function (obj, opts) {
    var path = ''
    var data = obj || {}
    var options = opts || {}
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token

        continue
      }

      var value = data[token.name]
      var segment

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j])

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options && options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      })
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  var strict = options.strict
  var end = options.end !== false
  var route = ''

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
    } else {
      var prefix = escapeString(token.prefix)
      var capture = '(?:' + token.pattern + ')'

      keys.push(token)

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*'
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?'
        } else {
          capture = prefix + '(' + capture + ')?'
        }
      } else {
        capture = prefix + '(' + capture + ')'
      }

      route += capture
    }
  }

  var delimiter = escapeString(options.delimiter || '/')
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?'
  }

  if (end) {
    route += '$'
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)'
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}


/***/ }),

/***/ "./node_modules/resolve-pathname/esm/resolve-pathname.js":
/*!***************************************************************!*\
  !*** ./node_modules/resolve-pathname/esm/resolve-pathname.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
}

// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

// This implementation is based heavily on node's url.parse
function resolvePathname(to, from) {
  if (from === undefined) from = '';

  var toParts = (to && to.split('/')) || [];
  var fromParts = (from && from.split('/')) || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) fromParts.unshift('..');

  if (
    mustEndAbs &&
    fromParts[0] !== '' &&
    (!fromParts[0] || !isAbsolute(fromParts[0]))
  )
    fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (resolvePathname);


/***/ }),

/***/ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js":
/*!****************************************************************!*\
  !*** ./node_modules/tiny-invariant/dist/tiny-invariant.esm.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ invariant; }
/* harmony export */ });
var isProduction = "development" === 'production';
var prefix = 'Invariant failed';
function invariant(condition, message) {
    if (condition) {
        return;
    }
    if (isProduction) {
        throw new Error(prefix);
    }
    var provided = typeof message === 'function' ? message() : message;
    var value = provided ? prefix + ": " + provided : prefix;
    throw new Error(value);
}




/***/ }),

/***/ "./node_modules/tiny-warning/dist/tiny-warning.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/tiny-warning/dist/tiny-warning.esm.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isProduction = "development" === 'production';
function warning(condition, message) {
  if (!isProduction) {
    if (condition) {
      return;
    }

    var text = "Warning: " + message;

    if (typeof console !== 'undefined') {
      console.warn(text);
    }

    try {
      throw Error(text);
    } catch (x) {}
  }
}

/* harmony default export */ __webpack_exports__["default"] = (warning);


/***/ }),

/***/ "./node_modules/value-equal/esm/value-equal.js":
/*!*****************************************************!*\
  !*** ./node_modules/value-equal/esm/value-equal.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function valueOf(obj) {
  return obj.valueOf ? obj.valueOf() : Object.prototype.valueOf.call(obj);
}

function valueEqual(a, b) {
  // Test for strict equality first.
  if (a === b) return true;

  // Otherwise, if either of them == null they are not equal.
  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return (
      Array.isArray(b) &&
      a.length === b.length &&
      a.every(function(item, index) {
        return valueEqual(item, b[index]);
      })
    );
  }

  if (typeof a === 'object' || typeof b === 'object') {
    var aValue = valueOf(a);
    var bValue = valueOf(b);

    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

    return Object.keys(Object.assign({}, a, b)).every(function(key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
}

/* harmony default export */ __webpack_exports__["default"] = (valueEqual);


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = window["ReactDOM"];

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _inheritsLoose; }
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _objectWithoutPropertiesLoose; }
/* harmony export */ });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _setPrototypeOf; }
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@headlessui/react/dist/headlessui.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/headlessui.esm.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Combobox": function() { return /* binding */ Na; },
/* harmony export */   "Dialog": function() { return /* binding */ An; },
/* harmony export */   "Disclosure": function() { return /* binding */ Ye; },
/* harmony export */   "FocusTrap": function() { return /* binding */ yu; },
/* harmony export */   "Listbox": function() { return /* binding */ Ee; },
/* harmony export */   "Menu": function() { return /* binding */ Ze; },
/* harmony export */   "Popover": function() { return /* binding */ Te; },
/* harmony export */   "Portal": function() { return /* binding */ We; },
/* harmony export */   "RadioGroup": function() { return /* binding */ lt; },
/* harmony export */   "Switch": function() { return /* binding */ Qt; },
/* harmony export */   "Tab": function() { return /* binding */ De; },
/* harmony export */   "Transition": function() { return /* binding */ mt; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
function k(){let e=[],t=[],r={enqueue(o){t.push(o)},requestAnimationFrame(...o){let n=requestAnimationFrame(...o);r.add(()=>cancelAnimationFrame(n))},nextFrame(...o){r.requestAnimationFrame(()=>{r.requestAnimationFrame(...o)})},setTimeout(...o){let n=setTimeout(...o);r.add(()=>clearTimeout(n))},add(o){e.push(o)},dispose(){for(let o of e.splice(0))o()},async workQueue(){for(let o of t.splice(0))await o()}};return r}function Q(){let[e]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(k);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>()=>e.dispose(),[e]),e}var x=typeof window!="undefined"?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect;var yt={serverHandoffComplete:!1};function q(){let[e,t]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(yt.serverHandoffComplete);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{e!==!0&&t(!0)},[e]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{yt.serverHandoffComplete===!1&&(yt.serverHandoffComplete=!0)},[]),e}var or=0;function to(){return++or}function A(){let e=q(),[t,r]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(e?to:null);return x(()=>{t===null&&r(to())},[t]),t!=null?""+t:void 0}function ke(e){let t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(e);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{t.current=e},[e]),t}function ee(e,t){let[r,o]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(e),n=ke(e);return x(()=>o(n.current),[n,o,...t]),r}function I(...e){let t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(e);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{t.current=e},[e]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(r=>{for(let o of t.current)o!=null&&(typeof o=="function"?o(r):o.current=r)},[t])}function S(e,t,...r){if(e in t){let n=t[e];return typeof n=="function"?n(...r):n}let o=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(n=>`"${n}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,S),o}function E({props:e,slot:t,defaultTag:r,features:o,visible:n=!0,name:i}){if(n)return _e(e,t,r,i);let a=o!=null?o:0;if(a&2){let{static:l=!1,...s}=e;if(l)return _e(s,t,r,i)}if(a&1){let{unmount:l=!0,...s}=e;return S(l?0:1,{[0](){return null},[1](){return _e({...s,hidden:!0,style:{display:"none"}},t,r,i)}})}return _e(e,t,r,i)}function _e(e,t={},r,o){let{as:n=r,children:i,refName:a="ref",...l}=gt(e,["unmount","static"]),s=e.ref!==void 0?{[a]:e.ref}:{},u=typeof i=="function"?i(t):i;if(l.className&&typeof l.className=="function"&&(l.className=l.className(t)),n===react__WEBPACK_IMPORTED_MODULE_0__.Fragment&&Object.keys(l).length>0){if(!(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(u)||Array.isArray(u)&&u.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${o} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(l).map(c=>`  - ${c}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(c=>`  - ${c}`).join(`
`)].join(`
`));return (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(u,Object.assign({},fr(mr(gt(l,["ref"])),u.props,["onClick"]),s))}return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(n,Object.assign({},gt(l,["ref"]),n!==react__WEBPACK_IMPORTED_MODULE_0__.Fragment&&s),u)}function fr(e,t,r){let o=Object.assign({},e);for(let n of r)e[n]!==void 0&&t[n]!==void 0&&Object.assign(o,{[n](i){i.defaultPrevented||e[n](i),i.defaultPrevented||t[n](i)}});return o}function D(e){var t;return Object.assign((0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(e),{displayName:(t=e.displayName)!=null?t:e.name})}function mr(e){let t=Object.assign({},e);for(let r in t)t[r]===void 0&&delete t[r];return t}function gt(e,t=[]){let r=Object.assign({},e);for(let o of t)o in r&&delete r[o];return r}function br(e){throw new Error("Unexpected object: "+e)}function ae(e,t){let r=t.resolveItems();if(r.length<=0)return null;let o=t.resolveActiveIndex(),n=o!=null?o:-1,i=(()=>{switch(e.focus){case 0:return r.findIndex(a=>!t.resolveDisabled(a));case 1:{let a=r.slice().reverse().findIndex((l,s,u)=>n!==-1&&u.length-s-1>=n?!1:!t.resolveDisabled(l));return a===-1?a:r.length-1-a}case 2:return r.findIndex((a,l)=>l<=n?!1:!t.resolveDisabled(a));case 3:{let a=r.slice().reverse().findIndex(l=>!t.resolveDisabled(l));return a===-1?a:r.length-1-a}case 4:return r.findIndex(a=>t.resolveId(a)===e.id);case 5:return null;default:br(e)}})();return i===-1?o:i}function G(e){let t=e.parentElement,r=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(r=t),t=t.parentElement;let o=(t==null?void 0:t.getAttribute("disabled"))==="";return o&&Tr(r)?!1:o}function Tr(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}function w(e,t,r){let o=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(t);o.current=t,(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{function n(i){o.current.call(window,i)}return window.addEventListener(e,n,r),()=>window.removeEventListener(e,n,r)},[e,r])}var Pt=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);Pt.displayName="OpenClosedContext";function _(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Pt)}function W({value:e,children:t}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Pt.Provider,{value:e},t)}function ro(e){var r;if(e.type)return e.type;let t=(r=e.as)!=null?r:"button";if(typeof t=="string"&&t.toLowerCase()==="button")return"button"}function U(e,t){let[r,o]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>ro(e));return x(()=>{o(ro(e))},[e.type,e.as]),x(()=>{r||!t.current||t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&o("button")},[r,t]),r}function se({container:e,accept:t,walk:r,enabled:o=!0}){let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(t),i=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(r);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{n.current=t,i.current=r},[t,r]),x(()=>{if(!e||!o)return;let a=n.current,l=i.current,s=Object.assign(c=>a(c),{acceptNode:a}),u=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,s,!1);for(;u.nextNode();)l(u.currentNode)},[e,o,n,i])}var Ar={[1](e){return e.disabled||e.comboboxState===1?e:{...e,activeOptionIndex:null,comboboxState:1}},[0](e){return e.disabled||e.comboboxState===0?e:{...e,comboboxState:0}},[2](e,t){return e.disabled===t.disabled?e:{...e,disabled:t.disabled}},[3](e,t){if(e.disabled||e.optionsRef.current&&!e.optionsPropsRef.current.static&&e.comboboxState===1)return e;let r=ae(t,{resolveItems:()=>e.options,resolveActiveIndex:()=>e.activeOptionIndex,resolveId:o=>o.id,resolveDisabled:o=>o.dataRef.current.disabled});return e.activeOptionIndex===r?e:{...e,activeOptionIndex:r}},[4]:(e,t)=>{var i;let r=e.activeOptionIndex!==null?e.options[e.activeOptionIndex]:null,o=Array.from((i=e.optionsRef.current)==null?void 0:i.querySelectorAll('[id^="headlessui-combobox-option-"]')).reduce((a,l,s)=>Object.assign(a,{[l.id]:s}),{}),n=[...e.options,{id:t.id,dataRef:t.dataRef}].sort((a,l)=>o[a.id]-o[l.id]);return{...e,options:n,activeOptionIndex:(()=>r===null?null:n.indexOf(r))()}},[5]:(e,t)=>{let r=e.options.slice(),o=e.activeOptionIndex!==null?r[e.activeOptionIndex]:null,n=r.findIndex(i=>i.id===t.id);return n!==-1&&r.splice(n,1),{...e,options:r,activeOptionIndex:(()=>n===e.activeOptionIndex||o===null?null:r.indexOf(o))()}}},vt=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);vt.displayName="ComboboxContext";function pe(e){let t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(vt);if(t===null){let r=new Error(`<${e} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,pe),r}return t}var Rt=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);Rt.displayName="ComboboxActions";function Ue(){let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Rt);if(e===null){let t=new Error("ComboboxActions is missing a parent <Combobox /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(t,Ue),t}return e}function hr(e,t){return S(t.type,Ar,e,t)}var Or=react__WEBPACK_IMPORTED_MODULE_0__.Fragment,Ir=D(function(t,r){let{value:o,onChange:n,disabled:i=!1,...a}=t,l=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({value:o,onChange:n}),s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({static:!1,hold:!1}),u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({displayValue:void 0}),c=(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(hr,{comboboxState:1,comboboxPropsRef:l,optionsPropsRef:s,inputPropsRef:u,labelRef:(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)(),inputRef:(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)(),buttonRef:(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)(),optionsRef:(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)(),disabled:i,options:[],activeOptionIndex:null}),[{comboboxState:m,options:b,activeOptionIndex:T,optionsRef:y,inputRef:p,buttonRef:f},d]=c;x(()=>{l.current.value=o},[o,l]),x(()=>{l.current.onChange=n},[n,l]),x(()=>d({type:2,disabled:i}),[i]),w("mousedown",O=>{var N,K,V;let L=O.target;m===0&&(((N=f.current)==null?void 0:N.contains(L))||((K=p.current)==null?void 0:K.contains(L))||((V=y.current)==null?void 0:V.contains(L))||d({type:1}))});let P=T===null?null:b[T].dataRef.current.value,C=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:m===0,disabled:i,activeIndex:T,activeOption:P}),[m,i,b,T]),R=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{if(!p.current||o===void 0)return;let O=u.current.displayValue;typeof O=="function"?p.current.value=O(o):typeof o=="string"&&(p.current.value=o)},[o,p,u]),g=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(O=>{let L=b.find(K=>K.id===O);if(!L)return;let{dataRef:N}=L;l.current.onChange(N.current.value),R()},[b,l,p]),v=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{if(T!==null){let{dataRef:O}=b[T];l.current.onChange(O.current.value),R()}},[T,b,l,p]),h=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({selectOption:g,selectActiveOption:v}),[g,v]);return x(()=>{m===1&&R()},[R,m]),x(R,[R]),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Rt.Provider,{value:h},react__WEBPACK_IMPORTED_MODULE_0__.createElement(vt.Provider,{value:c},react__WEBPACK_IMPORTED_MODULE_0__.createElement(W,{value:S(m,{[0]:0,[1]:1})},E({props:r===null?a:{...a,ref:r},slot:C,defaultTag:Or,name:"Combobox"}))))}),Lr="input",Dr=D(function(t,r){var R,g;let{value:o,onChange:n,displayValue:i,...a}=t,[l,s]=pe("Combobox.Input"),u=Ue(),c=I(l.inputRef,r),m=l.inputPropsRef,b=`headlessui-combobox-input-${A()}`,T=Q(),y=ke(n);x(()=>{m.current.displayValue=i},[i,m]);let p=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(v=>{switch(v.key){case"Enter":v.preventDefault(),v.stopPropagation(),u.selectActiveOption(),s({type:1});break;case"ArrowDown":return v.preventDefault(),v.stopPropagation(),S(l.comboboxState,{[0]:()=>s({type:3,focus:2}),[1]:()=>{s({type:0}),T.nextFrame(()=>{l.comboboxPropsRef.current.value||s({type:3,focus:0})})}});case"ArrowUp":return v.preventDefault(),v.stopPropagation(),S(l.comboboxState,{[0]:()=>s({type:3,focus:1}),[1]:()=>{s({type:0}),T.nextFrame(()=>{l.comboboxPropsRef.current.value||s({type:3,focus:3})})}});case"Home":case"PageUp":return v.preventDefault(),v.stopPropagation(),s({type:3,focus:0});case"End":case"PageDown":return v.preventDefault(),v.stopPropagation(),s({type:3,focus:3});case"Escape":return v.preventDefault(),l.optionsRef.current&&!l.optionsPropsRef.current.static&&v.stopPropagation(),s({type:1});case"Tab":u.selectActiveOption(),s({type:1});break}},[T,s,l,u]),f=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(v=>{var h;s({type:0}),(h=y.current)==null||h.call(y,v)},[s,y]),d=ee(()=>{if(!!l.labelRef.current)return[l.labelRef.current.id].join(" ")},[l.labelRef.current]),P=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:l.comboboxState===0,disabled:l.disabled}),[l]),C={ref:c,id:b,role:"combobox",type:"text","aria-controls":(R=l.optionsRef.current)==null?void 0:R.id,"aria-expanded":l.disabled?void 0:l.comboboxState===0,"aria-activedescendant":l.activeOptionIndex===null||(g=l.options[l.activeOptionIndex])==null?void 0:g.id,"aria-labelledby":d,disabled:l.disabled,onKeyDown:p,onChange:f};return E({props:{...a,...C},slot:P,defaultTag:Lr,name:"Combobox.Input"})}),Mr="button",Fr=D(function(t,r){var p;let[o,n]=pe("Combobox.Button"),i=Ue(),a=I(o.buttonRef,r),l=`headlessui-combobox-button-${A()}`,s=Q(),u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(f=>{switch(f.key){case"ArrowDown":return f.preventDefault(),f.stopPropagation(),o.comboboxState===1&&(n({type:0}),s.nextFrame(()=>{o.comboboxPropsRef.current.value||n({type:3,focus:0})})),s.nextFrame(()=>{var d;return(d=o.inputRef.current)==null?void 0:d.focus({preventScroll:!0})});case"ArrowUp":return f.preventDefault(),f.stopPropagation(),o.comboboxState===1&&(n({type:0}),s.nextFrame(()=>{o.comboboxPropsRef.current.value||n({type:3,focus:3})})),s.nextFrame(()=>{var d;return(d=o.inputRef.current)==null?void 0:d.focus({preventScroll:!0})});case"Escape":return f.preventDefault(),o.optionsRef.current&&!o.optionsPropsRef.current.static&&f.stopPropagation(),n({type:1}),s.nextFrame(()=>{var d;return(d=o.inputRef.current)==null?void 0:d.focus({preventScroll:!0})})}},[s,n,o,i]),c=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(f=>{if(G(f.currentTarget))return f.preventDefault();o.comboboxState===0?n({type:1}):(f.preventDefault(),n({type:0})),s.nextFrame(()=>{var d;return(d=o.inputRef.current)==null?void 0:d.focus({preventScroll:!0})})},[n,s,o]),m=ee(()=>{if(!!o.labelRef.current)return[o.labelRef.current.id,l].join(" ")},[o.labelRef.current,l]),b=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:o.comboboxState===0,disabled:o.disabled}),[o]),T=t,y={ref:a,id:l,type:U(t,o.buttonRef),tabIndex:-1,"aria-haspopup":!0,"aria-controls":(p=o.optionsRef.current)==null?void 0:p.id,"aria-expanded":o.disabled?void 0:o.comboboxState===0,"aria-labelledby":m,disabled:o.disabled,onClick:c,onKeyDown:u};return E({props:{...T,...y},slot:b,defaultTag:Mr,name:"Combobox.Button"})}),wr="label";function kr(e){let[t]=pe("Combobox.Label"),r=`headlessui-combobox-label-${A()}`,o=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{var a;return(a=t.inputRef.current)==null?void 0:a.focus({preventScroll:!0})},[t.inputRef]),n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:t.comboboxState===0,disabled:t.disabled}),[t]),i={ref:t.labelRef,id:r,onClick:o};return E({props:{...e,...i},slot:n,defaultTag:wr,name:"Combobox.Label"})}var _r="ul",Gr=1|2,Hr=D(function(t,r){var y;let{hold:o=!1,...n}=t,[i]=pe("Combobox.Options"),{optionsPropsRef:a}=i,l=I(i.optionsRef,r),s=`headlessui-combobox-options-${A()}`,u=_(),c=(()=>u!==null?u===0:i.comboboxState===0)();x(()=>{var p;a.current.static=(p=t.static)!=null?p:!1},[a,t.static]),x(()=>{a.current.hold=o},[o,a]),se({container:i.optionsRef.current,enabled:i.comboboxState===0,accept(p){return p.getAttribute("role")==="option"?NodeFilter.FILTER_REJECT:p.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(p){p.setAttribute("role","none")}});let m=ee(()=>{var p,f,d;return(d=(p=i.labelRef.current)==null?void 0:p.id)!=null?d:(f=i.buttonRef.current)==null?void 0:f.id},[i.labelRef.current,i.buttonRef.current]),b=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:i.comboboxState===0}),[i]),T={"aria-activedescendant":i.activeOptionIndex===null||(y=i.options[i.activeOptionIndex])==null?void 0:y.id,"aria-labelledby":m,role:"listbox",id:s,ref:l};return E({props:{...n,...T},slot:b,defaultTag:_r,features:Gr,visible:c,name:"Combobox.Options"})}),Ur="li";function Br(e){let{disabled:t=!1,value:r,...o}=e,[n,i]=pe("Combobox.Option"),a=Ue(),l=`headlessui-combobox-option-${A()}`,s=n.activeOptionIndex!==null?n.options[n.activeOptionIndex].id===l:!1,u=n.comboboxPropsRef.current.value===r,c=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({disabled:t,value:r});x(()=>{c.current.disabled=t},[c,t]),x(()=>{c.current.value=r},[c,r]),x(()=>{var P,C;c.current.textValue=(C=(P=document.getElementById(l))==null?void 0:P.textContent)==null?void 0:C.toLowerCase()},[c,l]);let m=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>a.selectOption(l),[a,l]);x(()=>(i({type:4,id:l,dataRef:c}),()=>i({type:5,id:l})),[c,l]),x(()=>{n.comboboxState===0&&(!u||i({type:3,focus:4,id:l}))},[n.comboboxState,u,l]),x(()=>{if(n.comboboxState!==0||!s)return;let P=k();return P.requestAnimationFrame(()=>{var C,R;(R=(C=document.getElementById(l))==null?void 0:C.scrollIntoView)==null||R.call(C,{block:"nearest"})}),P.dispose},[l,s,n.comboboxState,n.activeOptionIndex]);let b=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(P=>{if(t)return P.preventDefault();m(),i({type:1}),k().nextFrame(()=>{var C;return(C=n.inputRef.current)==null?void 0:C.focus({preventScroll:!0})})},[i,n.inputRef,t,m]),T=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{if(t)return i({type:3,focus:5});i({type:3,focus:4,id:l})},[t,l,i]),y=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{t||s||i({type:3,focus:4,id:l})},[t,s,l,i]),p=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{t||!s||n.optionsPropsRef.current.hold||i({type:3,focus:5})},[t,s,i,n.comboboxState,n.comboboxPropsRef]),f=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({active:s,selected:u,disabled:t}),[s,u,t]);return E({props:{...o,...{id:l,role:"option",tabIndex:t===!0?void 0:-1,"aria-disabled":t===!0?!0:void 0,"aria-selected":u===!0?!0:void 0,disabled:void 0,onClick:b,onFocus:T,onPointerMove:y,onMouseMove:y,onPointerLeave:p,onMouseLeave:p}},slot:f,defaultTag:Ur,name:"Combobox.Option"})}var Na=Object.assign(Ir,{Input:Dr,Button:Fr,Label:kr,Options:Hr,Option:Br});var Et=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");function xe(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(Et))}function de(e,t=0){return e===document.body?!1:S(t,{[0](){return e.matches(Et)},[1](){let r=e;for(;r!==null;){if(r.matches(Et))return!0;r=r.parentElement}return!1}})}function ce(e){e==null||e.focus({preventScroll:!0})}function M(e,t){let r=Array.isArray(e)?e.slice().sort((c,m)=>{let b=c.compareDocumentPosition(m);return b&Node.DOCUMENT_POSITION_FOLLOWING?-1:b&Node.DOCUMENT_POSITION_PRECEDING?1:0}):xe(e),o=document.activeElement,n=(()=>{if(t&(1|4))return 1;if(t&(2|8))return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),i=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,r.indexOf(o))-1;if(t&4)return Math.max(0,r.indexOf(o))+1;if(t&8)return r.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),a=t&32?{preventScroll:!0}:{},l=0,s=r.length,u;do{if(l>=s||l+s<=0)return 0;let c=i+l;if(t&16)c=(c+s)%s;else{if(c<0)return 3;if(c>=s)return 1}u=r[c],u==null||u.focus(a),l+=n}while(u!==document.activeElement);return u.hasAttribute("tabindex")||u.setAttribute("tabindex","0"),2}function Be(){let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function Ne(e,t=30,{initialFocus:r,containers:o}={}){let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(typeof window!="undefined"?document.activeElement:null),i=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),a=Be(),l=Boolean(t&16),s=Boolean(t&2);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{!l||(n.current=document.activeElement)},[l]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(!!l)return()=>{ce(n.current),n.current=null}},[l]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(!s||!e.current)return;let u=document.activeElement;if(r==null?void 0:r.current){if((r==null?void 0:r.current)===u){i.current=u;return}}else if(e.current.contains(u)){i.current=u;return}(r==null?void 0:r.current)?ce(r.current):M(e.current,1)===0&&console.warn("There are no focusable elements inside the <FocusTrap />"),i.current=document.activeElement},[e,r,s]),w("keydown",u=>{!(t&4)||!e.current||u.key==="Tab"&&(u.preventDefault(),M(e.current,(u.shiftKey?2:4)|16)===2&&(i.current=document.activeElement))}),w("focus",u=>{if(!(t&8))return;let c=new Set(o==null?void 0:o.current);if(c.add(e),!c.size)return;let m=i.current;if(!m||!a.current)return;let b=u.target;b&&b instanceof HTMLElement?Kr(c,b)?(i.current=b,ce(b)):(u.preventDefault(),u.stopPropagation(),ce(m)):ce(i.current)},!0)}function Kr(e,t){var r;for(let o of e)if((r=o.current)==null?void 0:r.contains(t))return!0;return!1}var fe=new Set,J=new Map;function po(e){e.setAttribute("aria-hidden","true"),e.inert=!0}function co(e){let t=J.get(e);!t||(t["aria-hidden"]===null?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",t["aria-hidden"]),e.inert=t.inert)}function fo(e,t=!0){x(()=>{if(!t||!e.current)return;let r=e.current;fe.add(r);for(let o of J.keys())o.contains(r)&&(co(o),J.delete(o));return document.querySelectorAll("body > *").forEach(o=>{if(o instanceof HTMLElement){for(let n of fe)if(o.contains(n))return;fe.size===1&&(J.set(o,{"aria-hidden":o.getAttribute("aria-hidden"),inert:o.inert}),po(o))}}),()=>{if(fe.delete(r),fe.size>0)document.querySelectorAll("body > *").forEach(o=>{if(o instanceof HTMLElement&&!J.has(o)){for(let n of fe)if(o.contains(n))return;J.set(o,{"aria-hidden":o.getAttribute("aria-hidden"),inert:o.inert}),po(o)}});else for(let o of J.keys())co(o),J.delete(o)}},[t])}var mo=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(!1);function bo(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(mo)}function At(e){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(mo.Provider,{value:e.force},e.children)}function Xr(){let e=bo(),t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Po),[r,o]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>{if(!e&&t!==null||typeof window=="undefined")return null;let n=document.getElementById("headlessui-portal-root");if(n)return n;let i=document.createElement("div");return i.setAttribute("id","headlessui-portal-root"),document.body.appendChild(i)});return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{r!==null&&(document.body.contains(r)||document.body.appendChild(r))},[r]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{e||t!==null&&o(t.current)},[t,o,e]),r}var Jr=react__WEBPACK_IMPORTED_MODULE_0__.Fragment;function We(e){let t=e,r=Xr(),[o]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>typeof window=="undefined"?null:document.createElement("div")),n=q();return x(()=>{if(!!r&&!!o)return r.appendChild(o),()=>{var i;!r||!o||(r.removeChild(o),r.childNodes.length<=0&&((i=r.parentElement)==null||i.removeChild(r)))}},[r,o]),n?!r||!o?null:(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(E({props:t,defaultTag:Jr,name:"Portal"}),o):null}var Zr=react__WEBPACK_IMPORTED_MODULE_0__.Fragment,Po=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);function en(e){let{target:t,...r}=e;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Po.Provider,{value:t},E({props:r,defaultTag:Zr,name:"Popover.Group"}))}We.Group=en;var vo=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);function Ro(){let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(vo);if(e===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,Ro),t}return e}function re(){let[e,t]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);return[e.length>0?e.join(" "):void 0,(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>function(o){let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(a=>(t(l=>[...l,a]),()=>t(l=>{let s=l.slice(),u=s.indexOf(a);return u!==-1&&s.splice(u,1),s})),[]),i=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({register:n,slot:o.slot,name:o.name,props:o.props}),[n,o.slot,o.name,o.props]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(vo.Provider,{value:i},o.children)},[t])]}var an="p";function me(e){let t=Ro(),r=`headlessui-description-${A()}`;x(()=>t.register(r),[r,t.register]);let o=e,n={...t.props,id:r};return E({props:{...o,...n},slot:t.slot||{},defaultTag:an,name:t.name||"Description"})}var ht=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(()=>{});ht.displayName="StackContext";function cn(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ht)}function Eo({children:e,onUpdate:t,type:r,element:o}){let n=cn(),i=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((...a)=>{t==null||t(...a),n(...a)},[n,t]);return x(()=>(i(0,r,o),()=>i(1,r,o)),[i,r,o]),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ht.Provider,{value:i},e)}var yn={[0](e,t){return e.titleId===t.id?e:{...e,titleId:t.id}}},Ve=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);Ve.displayName="DialogContext";function It(e){let t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Ve);if(t===null){let r=new Error(`<${e} /> is missing a parent <${An.displayName} /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,It),r}return t}function gn(e,t){return S(t.type,yn,e,t)}var Pn="div",xn=1|2,vn=D(function(t,r){let{open:o,onClose:n,initialFocus:i,...a}=t,[l,s]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),u=_();o===void 0&&u!==null&&(o=S(u,{[0]:!0,[1]:!1}));let c=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(new Set),m=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),b=I(m,r),T=t.hasOwnProperty("open")||u!==null,y=t.hasOwnProperty("onClose");if(!T&&!y)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!T)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!y)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(typeof o!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${o}`);if(typeof n!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${n}`);let p=o?0:1,f=(()=>u!==null?u===0:p===0)(),[d,P]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(gn,{titleId:null,descriptionId:null}),C=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>n(!1),[n]),R=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(F=>P({type:0,id:F}),[P]),v=q()&&p===0,h=l>1,O=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Ve)!==null;Ne(m,v?S(h?"parent":"leaf",{parent:16,leaf:30}):1,{initialFocus:i,containers:c}),fo(m,h?v:!1),w("mousedown",F=>{var H;let $=F.target;p===0&&(h||((H=m.current)==null?void 0:H.contains($))||C())}),w("keydown",F=>{F.key==="Escape"&&p===0&&(h||(F.preventDefault(),F.stopPropagation(),C()))}),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(p!==0||O)return;let F=document.documentElement.style.overflow,$=document.documentElement.style.paddingRight,H=window.innerWidth-document.documentElement.clientWidth;return document.documentElement.style.overflow="hidden",document.documentElement.style.paddingRight=`${H}px`,()=>{document.documentElement.style.overflow=F,document.documentElement.style.paddingRight=$}},[p,O]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(p!==0||!m.current)return;let F=new IntersectionObserver($=>{for(let H of $)H.boundingClientRect.x===0&&H.boundingClientRect.y===0&&H.boundingClientRect.width===0&&H.boundingClientRect.height===0&&C()});return F.observe(m.current),()=>F.disconnect()},[p,m,C]);let[N,K]=re(),V=`headlessui-dialog-${A()}`,Fe=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>[{dialogState:p,close:C,setTitleId:R},d],[p,d,C,R]),ge=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:p===0}),[p]),we={ref:b,id:V,role:"dialog","aria-modal":p===0?!0:void 0,"aria-labelledby":d.titleId,"aria-describedby":N,onClick(F){F.stopPropagation()}},X=a;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Eo,{type:"Dialog",element:m,onUpdate:(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((F,$,H)=>{$==="Dialog"&&S(F,{[0](){c.current.add(H),s(Pe=>Pe+1)},[1](){c.current.add(H),s(Pe=>Pe-1)}})},[])},react__WEBPACK_IMPORTED_MODULE_0__.createElement(At,{force:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement(We,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Ve.Provider,{value:Fe},react__WEBPACK_IMPORTED_MODULE_0__.createElement(We.Group,{target:m},react__WEBPACK_IMPORTED_MODULE_0__.createElement(At,{force:!1},react__WEBPACK_IMPORTED_MODULE_0__.createElement(K,{slot:ge,name:"Dialog.Description"},E({props:{...X,...we},slot:ge,defaultTag:Pn,features:xn,visible:f,name:"Dialog"}))))))))}),Rn="div",En=D(function(t,r){let[{dialogState:o,close:n}]=It("Dialog.Overlay"),i=I(r),a=`headlessui-dialog-overlay-${A()}`,l=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(m=>{if(m.target===m.currentTarget){if(G(m.currentTarget))return m.preventDefault();m.preventDefault(),m.stopPropagation(),n()}},[n]),s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:o===0}),[o]);return E({props:{...t,...{ref:i,id:a,"aria-hidden":!0,onClick:l}},slot:s,defaultTag:Rn,name:"Dialog.Overlay"})}),Cn="h2";function Sn(e){let[{dialogState:t,setTitleId:r}]=It("Dialog.Title"),o=`headlessui-dialog-title-${A()}`;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>(r(o),()=>r(null)),[o,r]);let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:t===0}),[t]);return E({props:{...e,...{id:o}},slot:n,defaultTag:Cn,name:"Dialog.Title"})}var An=Object.assign(vn,{Overlay:En,Title:Sn,Description:me});var Ln={[0]:e=>({...e,disclosureState:S(e.disclosureState,{[0]:1,[1]:0})}),[1]:e=>e.disclosureState===1?e:{...e,disclosureState:1},[4](e){return e.linkedPanel===!0?e:{...e,linkedPanel:!0}},[5](e){return e.linkedPanel===!1?e:{...e,linkedPanel:!1}},[2](e,t){return e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId}},[3](e,t){return e.panelId===t.panelId?e:{...e,panelId:t.panelId}}},Mt=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);Mt.displayName="DisclosureContext";function Ft(e){let t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Mt);if(t===null){let r=new Error(`<${e} /> is missing a parent <${Ye.name} /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,Ft),r}return t}var wt=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);wt.displayName="DisclosureAPIContext";function Ao(e){let t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(wt);if(t===null){let r=new Error(`<${e} /> is missing a parent <${Ye.name} /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,Ao),r}return t}var kt=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);kt.displayName="DisclosurePanelContext";function Dn(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(kt)}function Mn(e,t){return S(t.type,Ln,e,t)}var Fn=react__WEBPACK_IMPORTED_MODULE_0__.Fragment;function Ye(e){let{defaultOpen:t=!1,...r}=e,o=`headlessui-disclosure-button-${A()}`,n=`headlessui-disclosure-panel-${A()}`,i=(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(Mn,{disclosureState:t?0:1,linkedPanel:!1,buttonId:o,panelId:n}),[{disclosureState:a},l]=i;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>l({type:2,buttonId:o}),[o,l]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>l({type:3,panelId:n}),[n,l]);let s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(m=>{l({type:1});let b=(()=>m?m instanceof HTMLElement?m:m.current instanceof HTMLElement?m.current:document.getElementById(o):document.getElementById(o))();b==null||b.focus()},[l,o]),u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({close:s}),[s]),c=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:a===0,close:s}),[a,s]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Mt.Provider,{value:i},react__WEBPACK_IMPORTED_MODULE_0__.createElement(wt.Provider,{value:u},react__WEBPACK_IMPORTED_MODULE_0__.createElement(W,{value:S(a,{[0]:0,[1]:1})},E({props:r,slot:c,defaultTag:Fn,name:"Disclosure"}))))}var wn="button",kn=D(function(t,r){let[o,n]=Ft("Disclosure.Button"),i=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),a=I(i,r),l=Dn(),s=l===null?!1:l===o.panelId,u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(f=>{var d;if(s){if(o.disclosureState===1)return;switch(f.key){case" ":case"Enter":f.preventDefault(),f.stopPropagation(),n({type:0}),(d=document.getElementById(o.buttonId))==null||d.focus();break}}else switch(f.key){case" ":case"Enter":f.preventDefault(),f.stopPropagation(),n({type:0});break}},[n,s,o.disclosureState,o.buttonId]),c=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(f=>{switch(f.key){case" ":f.preventDefault();break}},[]),m=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(f=>{var d;G(f.currentTarget)||t.disabled||(s?(n({type:0}),(d=document.getElementById(o.buttonId))==null||d.focus()):n({type:0}))},[n,t.disabled,o.buttonId,s]),b=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:o.disclosureState===0}),[o]),T=U(t,i),y=t,p=s?{ref:a,type:T,onKeyDown:u,onClick:m}:{ref:a,id:o.buttonId,type:T,"aria-expanded":t.disabled?void 0:o.disclosureState===0,"aria-controls":o.linkedPanel?o.panelId:void 0,onKeyDown:u,onKeyUp:c,onClick:m};return E({props:{...y,...p},slot:b,defaultTag:wn,name:"Disclosure.Button"})}),_n="div",Gn=1|2,Hn=D(function(t,r){let[o,n]=Ft("Disclosure.Panel"),{close:i}=Ao("Disclosure.Panel"),a=I(r,()=>{o.linkedPanel||n({type:4})}),l=_(),s=(()=>l!==null?l===0:o.disclosureState===0)();(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>()=>n({type:5}),[n]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{var b;o.disclosureState===1&&((b=t.unmount)!=null?b:!0)&&n({type:5})},[o.disclosureState,t.unmount,n]);let u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:o.disclosureState===0,close:i}),[o,i]),c={ref:a,id:o.panelId},m=t;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(kt.Provider,{value:o.panelId},E({props:{...m,...c},slot:u,defaultTag:_n,features:Gn,visible:s,name:"Disclosure.Panel"}))});Ye.Button=kn;Ye.Panel=Hn;var Bn="div";function yu(e){let t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),{initialFocus:r,...o}=e,n=q();return Ne(t,n?30:1,{initialFocus:r}),E({props:{...o,...{ref:t}},defaultTag:Bn,name:"FocusTrap"})}var $n={[1](e){return e.disabled||e.listboxState===1?e:{...e,activeOptionIndex:null,listboxState:1}},[0](e){return e.disabled||e.listboxState===0?e:{...e,listboxState:0}},[2](e,t){return e.disabled===t.disabled?e:{...e,disabled:t.disabled}},[3](e,t){return e.orientation===t.orientation?e:{...e,orientation:t.orientation}},[4](e,t){if(e.disabled||e.listboxState===1)return e;let r=ae(t,{resolveItems:()=>e.options,resolveActiveIndex:()=>e.activeOptionIndex,resolveId:o=>o.id,resolveDisabled:o=>o.dataRef.current.disabled});return e.searchQuery===""&&e.activeOptionIndex===r?e:{...e,searchQuery:"",activeOptionIndex:r}},[5]:(e,t)=>{if(e.disabled||e.listboxState===1)return e;let o=e.searchQuery!==""?0:1,n=e.searchQuery+t.value.toLowerCase(),a=(e.activeOptionIndex!==null?e.options.slice(e.activeOptionIndex+o).concat(e.options.slice(0,e.activeOptionIndex+o)):e.options).find(s=>{var u;return!s.dataRef.current.disabled&&((u=s.dataRef.current.textValue)==null?void 0:u.startsWith(n))}),l=a?e.options.indexOf(a):-1;return l===-1||l===e.activeOptionIndex?{...e,searchQuery:n}:{...e,searchQuery:n,activeOptionIndex:l}},[6](e){return e.disabled||e.listboxState===1||e.searchQuery===""?e:{...e,searchQuery:""}},[7]:(e,t)=>{var n;let r=Array.from((n=e.optionsRef.current)==null?void 0:n.querySelectorAll('[id^="headlessui-listbox-option-"]')).reduce((i,a,l)=>Object.assign(i,{[a.id]:l}),{}),o=[...e.options,{id:t.id,dataRef:t.dataRef}].sort((i,a)=>r[i.id]-r[a.id]);return{...e,options:o}},[8]:(e,t)=>{let r=e.options.slice(),o=e.activeOptionIndex!==null?r[e.activeOptionIndex]:null,n=r.findIndex(i=>i.id===t.id);return n!==-1&&r.splice(n,1),{...e,options:r,activeOptionIndex:(()=>n===e.activeOptionIndex||o===null?null:r.indexOf(o))()}}},Gt=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);Gt.displayName="ListboxContext";function Re(e){let t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Gt);if(t===null){let r=new Error(`<${e} /> is missing a parent <${Ee.name} /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,Re),r}return t}function Qn(e,t){return S(t.type,$n,e,t)}var qn=react__WEBPACK_IMPORTED_MODULE_0__.Fragment;function Ee(e){let{value:t,onChange:r,disabled:o=!1,horizontal:n=!1,...i}=e,a=n?"horizontal":"vertical",l=(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(Qn,{listboxState:1,propsRef:{current:{value:t,onChange:r}},labelRef:(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)(),buttonRef:(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)(),optionsRef:(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)(),disabled:o,orientation:a,options:[],searchQuery:"",activeOptionIndex:null}),[{listboxState:s,propsRef:u,optionsRef:c,buttonRef:m},b]=l;x(()=>{u.current.value=t},[t,u]),x(()=>{u.current.onChange=r},[r,u]),x(()=>b({type:2,disabled:o}),[o]),x(()=>b({type:3,orientation:a}),[a]),w("mousedown",y=>{var f,d,P;let p=y.target;s===0&&(((f=m.current)==null?void 0:f.contains(p))||((d=c.current)==null?void 0:d.contains(p))||(b({type:1}),de(p,1)||(y.preventDefault(),(P=m.current)==null||P.focus())))});let T=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:s===0,disabled:o}),[s,o]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Gt.Provider,{value:l},react__WEBPACK_IMPORTED_MODULE_0__.createElement(W,{value:S(s,{[0]:0,[1]:1})},E({props:i,slot:T,defaultTag:qn,name:"Listbox"})))}var zn="button",Yn=D(function(t,r){var p;let[o,n]=Re("Listbox.Button"),i=I(o.buttonRef,r),a=`headlessui-listbox-button-${A()}`,l=Q(),s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(f=>{switch(f.key){case" ":case"Enter":case"ArrowDown":f.preventDefault(),n({type:0}),l.nextFrame(()=>{o.propsRef.current.value||n({type:4,focus:0})});break;case"ArrowUp":f.preventDefault(),n({type:0}),l.nextFrame(()=>{o.propsRef.current.value||n({type:4,focus:3})});break}},[n,o,l]),u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(f=>{switch(f.key){case" ":f.preventDefault();break}},[]),c=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(f=>{if(G(f.currentTarget))return f.preventDefault();o.listboxState===0?(n({type:1}),l.nextFrame(()=>{var d;return(d=o.buttonRef.current)==null?void 0:d.focus({preventScroll:!0})})):(f.preventDefault(),n({type:0}))},[n,l,o]),m=ee(()=>{if(!!o.labelRef.current)return[o.labelRef.current.id,a].join(" ")},[o.labelRef.current,a]),b=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:o.listboxState===0,disabled:o.disabled}),[o]),T=t,y={ref:i,id:a,type:U(t,o.buttonRef),"aria-haspopup":!0,"aria-controls":(p=o.optionsRef.current)==null?void 0:p.id,"aria-expanded":o.disabled?void 0:o.listboxState===0,"aria-labelledby":m,disabled:o.disabled,onKeyDown:s,onKeyUp:u,onClick:c};return E({props:{...T,...y},slot:b,defaultTag:zn,name:"Listbox.Button"})}),Xn="label";function Jn(e){let[t]=Re("Listbox.Label"),r=`headlessui-listbox-label-${A()}`,o=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{var a;return(a=t.buttonRef.current)==null?void 0:a.focus({preventScroll:!0})},[t.buttonRef]),n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:t.listboxState===0,disabled:t.disabled}),[t]),i={ref:t.labelRef,id:r,onClick:o};return E({props:{...e,...i},slot:n,defaultTag:Xn,name:"Listbox.Label"})}var Zn="ul",ei=1|2,ti=D(function(t,r){var f;let[o,n]=Re("Listbox.Options"),i=I(o.optionsRef,r),a=`headlessui-listbox-options-${A()}`,l=Q(),s=Q(),u=_(),c=(()=>u!==null?u===0:o.listboxState===0)();x(()=>{let d=o.optionsRef.current;!d||o.listboxState===0&&d!==document.activeElement&&d.focus({preventScroll:!0})},[o.listboxState,o.optionsRef]);let m=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(d=>{switch(s.dispose(),d.key){case" ":if(o.searchQuery!=="")return d.preventDefault(),d.stopPropagation(),n({type:5,value:d.key});case"Enter":if(d.preventDefault(),d.stopPropagation(),n({type:1}),o.activeOptionIndex!==null){let{dataRef:P}=o.options[o.activeOptionIndex];o.propsRef.current.onChange(P.current.value)}k().nextFrame(()=>{var P;return(P=o.buttonRef.current)==null?void 0:P.focus({preventScroll:!0})});break;case S(o.orientation,{vertical:"ArrowDown",horizontal:"ArrowRight"}):return d.preventDefault(),d.stopPropagation(),n({type:4,focus:2});case S(o.orientation,{vertical:"ArrowUp",horizontal:"ArrowLeft"}):return d.preventDefault(),d.stopPropagation(),n({type:4,focus:1});case"Home":case"PageUp":return d.preventDefault(),d.stopPropagation(),n({type:4,focus:0});case"End":case"PageDown":return d.preventDefault(),d.stopPropagation(),n({type:4,focus:3});case"Escape":return d.preventDefault(),d.stopPropagation(),n({type:1}),l.nextFrame(()=>{var P;return(P=o.buttonRef.current)==null?void 0:P.focus({preventScroll:!0})});case"Tab":d.preventDefault(),d.stopPropagation();break;default:d.key.length===1&&(n({type:5,value:d.key}),s.setTimeout(()=>n({type:6}),350));break}},[l,n,s,o]),b=ee(()=>{var d,P,C;return(C=(d=o.labelRef.current)==null?void 0:d.id)!=null?C:(P=o.buttonRef.current)==null?void 0:P.id},[o.labelRef.current,o.buttonRef.current]),T=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:o.listboxState===0}),[o]),y={"aria-activedescendant":o.activeOptionIndex===null||(f=o.options[o.activeOptionIndex])==null?void 0:f.id,"aria-labelledby":b,"aria-orientation":o.orientation,id:a,onKeyDown:m,role:"listbox",tabIndex:0,ref:i};return E({props:{...t,...y},slot:T,defaultTag:Zn,features:ei,visible:c,name:"Listbox.Options"})}),oi="li";function ri(e){let{disabled:t=!1,value:r,...o}=e,[n,i]=Re("Listbox.Option"),a=`headlessui-listbox-option-${A()}`,l=n.activeOptionIndex!==null?n.options[n.activeOptionIndex].id===a:!1,s=n.propsRef.current.value===r,u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({disabled:t,value:r});x(()=>{u.current.disabled=t},[u,t]),x(()=>{u.current.value=r},[u,r]),x(()=>{var d,P;u.current.textValue=(P=(d=document.getElementById(a))==null?void 0:d.textContent)==null?void 0:P.toLowerCase()},[u,a]);let c=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>n.propsRef.current.onChange(r),[n.propsRef,r]);x(()=>(i({type:7,id:a,dataRef:u}),()=>i({type:8,id:a})),[u,a]),x(()=>{var d,P;n.listboxState===0&&(!s||(i({type:4,focus:4,id:a}),(P=(d=document.getElementById(a))==null?void 0:d.focus)==null||P.call(d)))},[n.listboxState]),x(()=>{if(n.listboxState!==0||!l)return;let d=k();return d.requestAnimationFrame(()=>{var P,C;(C=(P=document.getElementById(a))==null?void 0:P.scrollIntoView)==null||C.call(P,{block:"nearest"})}),d.dispose},[a,l,n.listboxState,n.activeOptionIndex]);let m=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(d=>{if(t)return d.preventDefault();c(),i({type:1}),k().nextFrame(()=>{var P;return(P=n.buttonRef.current)==null?void 0:P.focus({preventScroll:!0})})},[i,n.buttonRef,t,c]),b=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{if(t)return i({type:4,focus:5});i({type:4,focus:4,id:a})},[t,a,i]),T=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{t||l||i({type:4,focus:4,id:a})},[t,l,a,i]),y=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{t||!l||i({type:4,focus:5})},[t,l,i]),p=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({active:l,selected:s,disabled:t}),[l,s,t]);return E({props:{...o,...{id:a,role:"option",tabIndex:t===!0?void 0:-1,"aria-disabled":t===!0?!0:void 0,"aria-selected":s===!0?!0:void 0,disabled:void 0,onClick:m,onFocus:b,onPointerMove:T,onMouseMove:T,onPointerLeave:y,onMouseLeave:y}},slot:p,defaultTag:oi,name:"Listbox.Option"})}Ee.Button=Yn;Ee.Label=Jn;Ee.Options=ti;Ee.Option=ri;var ui={[1](e){return e.menuState===1?e:{...e,activeItemIndex:null,menuState:1}},[0](e){return e.menuState===0?e:{...e,menuState:0}},[2]:(e,t)=>{let r=ae(t,{resolveItems:()=>e.items,resolveActiveIndex:()=>e.activeItemIndex,resolveId:o=>o.id,resolveDisabled:o=>o.dataRef.current.disabled});return e.searchQuery===""&&e.activeItemIndex===r?e:{...e,searchQuery:"",activeItemIndex:r}},[3]:(e,t)=>{let o=e.searchQuery!==""?0:1,n=e.searchQuery+t.value.toLowerCase(),a=(e.activeItemIndex!==null?e.items.slice(e.activeItemIndex+o).concat(e.items.slice(0,e.activeItemIndex+o)):e.items).find(s=>{var u;return((u=s.dataRef.current.textValue)==null?void 0:u.startsWith(n))&&!s.dataRef.current.disabled}),l=a?e.items.indexOf(a):-1;return l===-1||l===e.activeItemIndex?{...e,searchQuery:n}:{...e,searchQuery:n,activeItemIndex:l}},[4](e){return e.searchQuery===""?e:{...e,searchQuery:"",searchActiveItemIndex:null}},[5]:(e,t)=>{var n;let r=Array.from((n=e.itemsRef.current)==null?void 0:n.querySelectorAll('[id^="headlessui-menu-item-"]')).reduce((i,a,l)=>Object.assign(i,{[a.id]:l}),{}),o=[...e.items,{id:t.id,dataRef:t.dataRef}].sort((i,a)=>r[i.id]-r[a.id]);return{...e,items:o}},[6]:(e,t)=>{let r=e.items.slice(),o=e.activeItemIndex!==null?r[e.activeItemIndex]:null,n=r.findIndex(i=>i.id===t.id);return n!==-1&&r.splice(n,1),{...e,items:r,activeItemIndex:(()=>n===e.activeItemIndex||o===null?null:r.indexOf(o))()}}},Ht=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);Ht.displayName="MenuContext";function Je(e){let t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Ht);if(t===null){let r=new Error(`<${e} /> is missing a parent <${Ze.name} /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,Je),r}return t}function pi(e,t){return S(t.type,ui,e,t)}var di=react__WEBPACK_IMPORTED_MODULE_0__.Fragment;function Ze(e){let t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(pi,{menuState:1,buttonRef:(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)(),itemsRef:(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)(),items:[],searchQuery:"",activeItemIndex:null}),[{menuState:r,itemsRef:o,buttonRef:n},i]=t;w("mousedown",l=>{var u,c,m;let s=l.target;r===0&&(((u=n.current)==null?void 0:u.contains(s))||((c=o.current)==null?void 0:c.contains(s))||(i({type:1}),de(s,1)||(l.preventDefault(),(m=n.current)==null||m.focus())))});let a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:r===0}),[r]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Ht.Provider,{value:t},react__WEBPACK_IMPORTED_MODULE_0__.createElement(W,{value:S(r,{[0]:0,[1]:1})},E({props:e,slot:a,defaultTag:di,name:"Menu"})))}var ci="button",fi=D(function(t,r){var y;let[o,n]=Je("Menu.Button"),i=I(o.buttonRef,r),a=`headlessui-menu-button-${A()}`,l=Q(),s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(p=>{switch(p.key){case" ":case"Enter":case"ArrowDown":p.preventDefault(),p.stopPropagation(),n({type:0}),l.nextFrame(()=>n({type:2,focus:0}));break;case"ArrowUp":p.preventDefault(),p.stopPropagation(),n({type:0}),l.nextFrame(()=>n({type:2,focus:3}));break}},[n,l]),u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(p=>{switch(p.key){case" ":p.preventDefault();break}},[]),c=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(p=>{if(G(p.currentTarget))return p.preventDefault();t.disabled||(o.menuState===0?(n({type:1}),l.nextFrame(()=>{var f;return(f=o.buttonRef.current)==null?void 0:f.focus({preventScroll:!0})})):(p.preventDefault(),p.stopPropagation(),n({type:0})))},[n,l,o,t.disabled]),m=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:o.menuState===0}),[o]),b=t,T={ref:i,id:a,type:U(t,o.buttonRef),"aria-haspopup":!0,"aria-controls":(y=o.itemsRef.current)==null?void 0:y.id,"aria-expanded":t.disabled?void 0:o.menuState===0,onKeyDown:s,onKeyUp:u,onClick:c};return E({props:{...b,...T},slot:m,defaultTag:ci,name:"Menu.Button"})}),mi="div",bi=1|2,Ti=D(function(t,r){var p,f;let[o,n]=Je("Menu.Items"),i=I(o.itemsRef,r),a=`headlessui-menu-items-${A()}`,l=Q(),s=_(),u=(()=>s!==null?s===0:o.menuState===0)();(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{let d=o.itemsRef.current;!d||o.menuState===0&&d!==document.activeElement&&d.focus({preventScroll:!0})},[o.menuState,o.itemsRef]),se({container:o.itemsRef.current,enabled:o.menuState===0,accept(d){return d.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:d.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(d){d.setAttribute("role","none")}});let c=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(d=>{var P;switch(l.dispose(),d.key){case" ":if(o.searchQuery!=="")return d.preventDefault(),d.stopPropagation(),n({type:3,value:d.key});case"Enter":if(d.preventDefault(),d.stopPropagation(),n({type:1}),o.activeItemIndex!==null){let{id:C}=o.items[o.activeItemIndex];(P=document.getElementById(C))==null||P.click()}k().nextFrame(()=>{var C;return(C=o.buttonRef.current)==null?void 0:C.focus({preventScroll:!0})});break;case"ArrowDown":return d.preventDefault(),d.stopPropagation(),n({type:2,focus:2});case"ArrowUp":return d.preventDefault(),d.stopPropagation(),n({type:2,focus:1});case"Home":case"PageUp":return d.preventDefault(),d.stopPropagation(),n({type:2,focus:0});case"End":case"PageDown":return d.preventDefault(),d.stopPropagation(),n({type:2,focus:3});case"Escape":d.preventDefault(),d.stopPropagation(),n({type:1}),k().nextFrame(()=>{var C;return(C=o.buttonRef.current)==null?void 0:C.focus({preventScroll:!0})});break;case"Tab":d.preventDefault(),d.stopPropagation();break;default:d.key.length===1&&(n({type:3,value:d.key}),l.setTimeout(()=>n({type:4}),350));break}},[n,l,o]),m=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(d=>{switch(d.key){case" ":d.preventDefault();break}},[]),b=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:o.menuState===0}),[o]),T={"aria-activedescendant":o.activeItemIndex===null||(p=o.items[o.activeItemIndex])==null?void 0:p.id,"aria-labelledby":(f=o.buttonRef.current)==null?void 0:f.id,id:a,onKeyDown:c,onKeyUp:m,role:"menu",tabIndex:0,ref:i};return E({props:{...t,...T},slot:b,defaultTag:mi,features:bi,visible:u,name:"Menu.Items"})}),yi=react__WEBPACK_IMPORTED_MODULE_0__.Fragment;function gi(e){let{disabled:t=!1,onClick:r,...o}=e,[n,i]=Je("Menu.Item"),a=`headlessui-menu-item-${A()}`,l=n.activeItemIndex!==null?n.items[n.activeItemIndex].id===a:!1;x(()=>{if(n.menuState!==0||!l)return;let p=k();return p.requestAnimationFrame(()=>{var f,d;(d=(f=document.getElementById(a))==null?void 0:f.scrollIntoView)==null||d.call(f,{block:"nearest"})}),p.dispose},[a,l,n.menuState,n.activeItemIndex]);let s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({disabled:t});x(()=>{s.current.disabled=t},[s,t]),x(()=>{var p,f;s.current.textValue=(f=(p=document.getElementById(a))==null?void 0:p.textContent)==null?void 0:f.toLowerCase()},[s,a]),x(()=>(i({type:5,id:a,dataRef:s}),()=>i({type:6,id:a})),[s,a]);let u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(p=>{if(t)return p.preventDefault();if(i({type:1}),k().nextFrame(()=>{var f;return(f=n.buttonRef.current)==null?void 0:f.focus({preventScroll:!0})}),r)return r(p)},[i,n.buttonRef,t,r]),c=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{if(t)return i({type:2,focus:5});i({type:2,focus:4,id:a})},[t,a,i]),m=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{t||l||i({type:2,focus:4,id:a})},[t,l,a,i]),b=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{t||!l||i({type:2,focus:5})},[t,l,i]),T=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({active:l,disabled:t}),[l,t]);return E({props:{...o,...{id:a,role:"menuitem",tabIndex:t===!0?void 0:-1,"aria-disabled":t===!0?!0:void 0,disabled:void 0,onClick:u,onFocus:c,onPointerMove:m,onMouseMove:m,onPointerLeave:b,onMouseLeave:b}},slot:T,defaultTag:yi,name:"Menu.Item"})}Ze.Button=fi;Ze.Items=Ti;Ze.Item=gi;var vi={[0]:e=>({...e,popoverState:S(e.popoverState,{[0]:1,[1]:0})}),[1](e){return e.popoverState===1?e:{...e,popoverState:1}},[2](e,t){return e.button===t.button?e:{...e,button:t.button}},[3](e,t){return e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId}},[4](e,t){return e.panel===t.panel?e:{...e,panel:t.panel}},[5](e,t){return e.panelId===t.panelId?e:{...e,panelId:t.panelId}}},Ut=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);Ut.displayName="PopoverContext";function ot(e){let t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Ut);if(t===null){let r=new Error(`<${e} /> is missing a parent <${Te.name} /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,ot),r}return t}var Bt=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);Bt.displayName="PopoverAPIContext";function Mo(e){let t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Bt);if(t===null){let r=new Error(`<${e} /> is missing a parent <${Te.name} /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,Mo),r}return t}var Nt=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);Nt.displayName="PopoverGroupContext";function Fo(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Nt)}var Wt=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);Wt.displayName="PopoverPanelContext";function Ri(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Wt)}function Ei(e,t){return S(t.type,vi,e,t)}var Ci="div";function Te(e){let t=`headlessui-popover-button-${A()}`,r=`headlessui-popover-panel-${A()}`,o=(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(Ei,{popoverState:1,button:null,buttonId:t,panel:null,panelId:r}),[{popoverState:n,button:i,panel:a},l]=o;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>l({type:3,buttonId:t}),[t,l]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>l({type:5,panelId:r}),[r,l]);let s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({buttonId:t,panelId:r,close:()=>l({type:1})}),[t,r,l]),u=Fo(),c=u==null?void 0:u.registerPopover,m=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{var p;return(p=u==null?void 0:u.isFocusWithinPopoverGroup())!=null?p:(i==null?void 0:i.contains(document.activeElement))||(a==null?void 0:a.contains(document.activeElement))},[u,i,a]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>c==null?void 0:c(s),[c,s]),w("focus",()=>{n===0&&(m()||!i||!a||l({type:1}))},!0),w("mousedown",p=>{let f=p.target;n===0&&((i==null?void 0:i.contains(f))||(a==null?void 0:a.contains(f))||(l({type:1}),de(f,1)||(p.preventDefault(),i==null||i.focus())))});let b=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(p=>{l({type:1});let f=(()=>p?p instanceof HTMLElement?p:p.current instanceof HTMLElement?p.current:i:i)();f==null||f.focus()},[l,i]),T=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({close:b}),[b]),y=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:n===0,close:b}),[n,b]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Ut.Provider,{value:o},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Bt.Provider,{value:T},react__WEBPACK_IMPORTED_MODULE_0__.createElement(W,{value:S(n,{[0]:0,[1]:1})},E({props:e,slot:y,defaultTag:Ci,name:"Popover"}))))}var Si="button",Ai=D(function(t,r){let[o,n]=ot("Popover.Button"),i=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),a=Fo(),l=a==null?void 0:a.closeOthers,s=Ri(),u=s===null?!1:s===o.panelId,c=I(i,r,u?null:g=>n({type:2,button:g})),m=I(i,r),b=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),T=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(typeof window=="undefined"?null:document.activeElement);w("focus",()=>{T.current=b.current,b.current=document.activeElement},!0);let y=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(g=>{var v,h;if(u){if(o.popoverState===1)return;switch(g.key){case" ":case"Enter":g.preventDefault(),g.stopPropagation(),n({type:1}),(v=o.button)==null||v.focus();break}}else switch(g.key){case" ":case"Enter":g.preventDefault(),g.stopPropagation(),o.popoverState===1&&(l==null||l(o.buttonId)),n({type:0});break;case"Escape":if(o.popoverState!==0)return l==null?void 0:l(o.buttonId);if(!i.current||!i.current.contains(document.activeElement))return;g.preventDefault(),g.stopPropagation(),n({type:1});break;case"Tab":if(o.popoverState!==0||!o.panel||!o.button)return;if(g.shiftKey){if(!T.current||((h=o.button)==null?void 0:h.contains(T.current))||o.panel.contains(T.current))return;let O=xe(),L=O.indexOf(T.current);if(O.indexOf(o.button)>L)return;g.preventDefault(),g.stopPropagation(),M(o.panel,8)}else g.preventDefault(),g.stopPropagation(),M(o.panel,1);break}},[n,o.popoverState,o.buttonId,o.button,o.panel,i,l,u]),p=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(g=>{var v;if(!u&&(g.key===" "&&g.preventDefault(),o.popoverState===0&&!!o.panel&&!!o.button))switch(g.key){case"Tab":if(!T.current||((v=o.button)==null?void 0:v.contains(T.current))||o.panel.contains(T.current))return;let h=xe(),O=h.indexOf(T.current);if(h.indexOf(o.button)>O)return;g.preventDefault(),g.stopPropagation(),M(o.panel,8);break}},[o.popoverState,o.panel,o.button,u]),f=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(g=>{var v,h;G(g.currentTarget)||t.disabled||(u?(n({type:1}),(v=o.button)==null||v.focus()):(o.popoverState===1&&(l==null||l(o.buttonId)),(h=o.button)==null||h.focus(),n({type:0})))},[n,o.button,o.popoverState,o.buttonId,t.disabled,l,u]),d=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:o.popoverState===0}),[o]),P=U(t,i),C=t,R=u?{ref:m,type:P,onKeyDown:y,onClick:f}:{ref:c,id:o.buttonId,type:P,"aria-expanded":t.disabled?void 0:o.popoverState===0,"aria-controls":o.panel?o.panelId:void 0,onKeyDown:y,onKeyUp:p,onClick:f};return E({props:{...C,...R},slot:d,defaultTag:Si,name:"Popover.Button"})}),hi="div",Oi=1|2,Ii=D(function(t,r){let[{popoverState:o},n]=ot("Popover.Overlay"),i=I(r),a=`headlessui-popover-overlay-${A()}`,l=_(),s=(()=>l!==null?l===0:o===0)(),u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(T=>{if(G(T.currentTarget))return T.preventDefault();n({type:1})},[n]),c=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:o===0}),[o]);return E({props:{...t,...{ref:i,id:a,"aria-hidden":!0,onClick:u}},slot:c,defaultTag:hi,features:Oi,visible:s,name:"Popover.Overlay"})}),Li="div",Di=1|2,Mi=D(function(t,r){let{focus:o=!1,...n}=t,[i,a]=ot("Popover.Panel"),{close:l}=Mo("Popover.Panel"),s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),u=I(s,r,p=>{a({type:4,panel:p})}),c=_(),m=(()=>c!==null?c===0:i.popoverState===0)(),b=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(p=>{var f;switch(p.key){case"Escape":if(i.popoverState!==0||!s.current||!s.current.contains(document.activeElement))return;p.preventDefault(),p.stopPropagation(),a({type:1}),(f=i.button)==null||f.focus();break}},[i,s,a]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>()=>a({type:4,panel:null}),[a]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{var p;t.static||i.popoverState===1&&((p=t.unmount)!=null?p:!0)&&a({type:4,panel:null})},[i.popoverState,t.unmount,t.static,a]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(!o||i.popoverState!==0||!s.current)return;let p=document.activeElement;s.current.contains(p)||M(s.current,1)},[o,s,i.popoverState]),w("keydown",p=>{var d;if(i.popoverState!==0||!s.current||p.key!=="Tab"||!document.activeElement||!s.current||!s.current.contains(document.activeElement))return;p.preventDefault();let f=M(s.current,p.shiftKey?2:4);if(f===3)return(d=i.button)==null?void 0:d.focus();if(f===1){if(!i.button)return;let P=xe(),C=P.indexOf(i.button),R=P.splice(C+1).filter(g=>{var v;return!((v=s.current)==null?void 0:v.contains(g))});M(R,1)===0&&M(document.body,1)}}),w("focus",()=>{var p;!o||i.popoverState===0&&(!s.current||((p=s.current)==null?void 0:p.contains(document.activeElement))||a({type:1}))},!0);let T=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:i.popoverState===0,close:l}),[i,l]),y={ref:u,id:i.panelId,onKeyDown:b};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Wt.Provider,{value:i.panelId},E({props:{...n,...y},slot:T,defaultTag:Li,features:Di,visible:m,name:"Popover.Panel"}))}),Fi="div";function wi(e){let t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),[r,o]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(b=>{o(T=>{let y=T.indexOf(b);if(y!==-1){let p=T.slice();return p.splice(y,1),p}return T})},[o]),i=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(b=>(o(T=>[...T,b]),()=>n(b)),[o,n]),a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{var T;let b=document.activeElement;return((T=t.current)==null?void 0:T.contains(b))?!0:r.some(y=>{var p,f;return((p=document.getElementById(y.buttonId))==null?void 0:p.contains(b))||((f=document.getElementById(y.panelId))==null?void 0:f.contains(b))})},[t,r]),l=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(b=>{for(let T of r)T.buttonId!==b&&T.close()},[r]),s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({registerPopover:i,unregisterPopover:n,isFocusWithinPopoverGroup:a,closeOthers:l}),[i,n,a,l]),u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({}),[]),c={ref:t},m=e;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Nt.Provider,{value:s},E({props:{...m,...c},slot:u,defaultTag:Fi,name:"Popover.Group"}))}Te.Button=Ai;Te.Overlay=Ii;Te.Panel=Mi;Te.Group=wi;function wo(e=0){let[t,r]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(e),o=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(l=>r(s=>s|l),[r]),n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(l=>Boolean(t&l),[t]),i=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(l=>r(s=>s&~l),[r]),a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(l=>r(s=>s^l),[r]);return{addFlag:o,hasFlag:n,removeFlag:i,toggleFlag:a}}var _o=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);function Go(){let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_o);if(e===null){let t=new Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,Go),t}return e}function Ae(){let[e,t]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);return[e.length>0?e.join(" "):void 0,(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>function(o){let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(a=>(t(l=>[...l,a]),()=>t(l=>{let s=l.slice(),u=s.indexOf(a);return u!==-1&&s.splice(u,1),s})),[]),i=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({register:n,slot:o.slot,name:o.name,props:o.props}),[n,o.slot,o.name,o.props]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_o.Provider,{value:i},o.children)},[t])]}var Ni="label";function nt(e){let{passive:t=!1,...r}=e,o=Go(),n=`headlessui-label-${A()}`;x(()=>o.register(n),[n,o.register]);let i={...o.props,id:n},a={...r,...i};return t&&delete a.onClick,E({props:a,slot:o.slot||{},defaultTag:Ni,name:o.name||"Label"})}var Vi={[0](e,t){return{...e,options:[...e.options,{id:t.id,element:t.element,propsRef:t.propsRef}]}},[1](e,t){let r=e.options.slice(),o=e.options.findIndex(n=>n.id===t.id);return o===-1?e:(r.splice(o,1),{...e,options:r})}},jt=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);jt.displayName="RadioGroupContext";function Ho(e){let t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(jt);if(t===null){let r=new Error(`<${e} /> is missing a parent <${lt.name} /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,Ho),r}return t}function $i(e,t){return S(t.type,Vi,e,t)}var Qi="div";function lt(e){let{value:t,onChange:r,disabled:o=!1,...n}=e,[{options:i},a]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)($i,{options:[]}),[l,s]=Ae(),[u,c]=re(),m=`headlessui-radiogroup-${A()}`,b=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),T=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>i.find(R=>!R.propsRef.current.disabled),[i]),y=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>i.some(R=>R.propsRef.current.value===t),[i,t]),p=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(R=>{var v;if(o||R===t)return!1;let g=(v=i.find(h=>h.propsRef.current.value===R))==null?void 0:v.propsRef.current;return(g==null?void 0:g.disabled)?!1:(r(R),!0)},[r,t,o,i]);se({container:b.current,accept(R){return R.getAttribute("role")==="radio"?NodeFilter.FILTER_REJECT:R.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(R){R.setAttribute("role","none")}});let f=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(R=>{if(!b.current)return;let v=i.filter(h=>h.propsRef.current.disabled===!1).map(h=>h.element.current);switch(R.key){case"ArrowLeft":case"ArrowUp":if(R.preventDefault(),R.stopPropagation(),M(v,2|16)===2){let O=i.find(L=>L.element.current===document.activeElement);O&&p(O.propsRef.current.value)}break;case"ArrowRight":case"ArrowDown":if(R.preventDefault(),R.stopPropagation(),M(v,4|16)===2){let O=i.find(L=>L.element.current===document.activeElement);O&&p(O.propsRef.current.value)}break;case" ":{R.preventDefault(),R.stopPropagation();let h=i.find(O=>O.element.current===document.activeElement);h&&p(h.propsRef.current.value)}break}},[b,i,p]),d=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(R=>(a({type:0,...R}),()=>a({type:1,id:R.id})),[a]),P=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({registerOption:d,firstOption:T,containsCheckedOption:y,change:p,disabled:o,value:t}),[d,T,y,p,o,t]),C={ref:b,id:m,role:"radiogroup","aria-labelledby":l,"aria-describedby":u,onKeyDown:f};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(c,{name:"RadioGroup.Description"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(s,{name:"RadioGroup.Label"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(jt.Provider,{value:P},E({props:{...n,...C},defaultTag:Qi,name:"RadioGroup"}))))}var qi="div";function zi(e){let t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),r=`headlessui-radiogroup-option-${A()}`,[o,n]=Ae(),[i,a]=re(),{addFlag:l,removeFlag:s,hasFlag:u}=wo(1),{value:c,disabled:m=!1,...b}=e,T=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({value:c,disabled:m});x(()=>{T.current.value=c},[c,T]),x(()=>{T.current.disabled=m},[m,T]);let{registerOption:y,disabled:p,change:f,firstOption:d,containsCheckedOption:P,value:C}=Ho("RadioGroup.Option");x(()=>y({id:r,element:t,propsRef:T}),[r,y,t,e]);let R=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{var V;!f(c)||(l(2),(V=t.current)==null||V.focus())},[l,f,c]),g=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>l(2),[l]),v=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>s(2),[s]),h=(d==null?void 0:d.id)===r,O=p||m,L=C===c,N={ref:t,id:r,role:"radio","aria-checked":L?"true":"false","aria-labelledby":o,"aria-describedby":i,"aria-disabled":O?!0:void 0,tabIndex:(()=>O?-1:L||!P&&h?0:-1)(),onClick:O?void 0:R,onFocus:O?void 0:g,onBlur:O?void 0:v},K=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({checked:L,disabled:O,active:u(2)}),[L,O,u]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(a,{name:"RadioGroup.Description"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(n,{name:"RadioGroup.Label"},E({props:{...b,...N},slot:K,defaultTag:qi,name:"RadioGroup.Option"})))}lt.Option=zi;lt.Label=nt;lt.Description=me;var $t=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);$t.displayName="GroupContext";var tl=react__WEBPACK_IMPORTED_MODULE_0__.Fragment;function ol(e){let[t,r]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),[o,n]=Ae(),[i,a]=re(),l=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({switch:t,setSwitch:r,labelledby:o,describedby:i}),[t,r,o,i]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(a,{name:"Switch.Description"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(n,{name:"Switch.Label",props:{onClick(){!t||(t.click(),t.focus({preventScroll:!0}))}}},react__WEBPACK_IMPORTED_MODULE_0__.createElement($t.Provider,{value:l},E({props:e,defaultTag:tl,name:"Switch.Group"}))))}var rl="button";function Qt(e){let{checked:t,onChange:r,...o}=e,n=`headlessui-switch-${A()}`,i=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)($t),a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),l=I(a,i===null?null:i.setSwitch),s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>r(!t),[r,t]),u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(y=>{if(G(y.currentTarget))return y.preventDefault();y.preventDefault(),s()},[s]),c=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(y=>{y.key!=="Tab"&&y.preventDefault(),y.key===" "&&s()},[s]),m=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(y=>y.preventDefault(),[]),b=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({checked:t}),[t]),T={id:n,ref:l,role:"switch",type:U(e,a),tabIndex:0,"aria-checked":t,"aria-labelledby":i==null?void 0:i.labelledby,"aria-describedby":i==null?void 0:i.describedby,onClick:u,onKeyUp:c,onKeyPress:m};return E({props:{...o,...T},slot:b,defaultTag:rl,name:"Switch"})}Qt.Group=ol;Qt.Label=nt;Qt.Description=me;var ul={[0](e,t){return e.selectedIndex===t.index?e:{...e,selectedIndex:t.index}},[1](e,t){return e.orientation===t.orientation?e:{...e,orientation:t.orientation}},[2](e,t){return e.activation===t.activation?e:{...e,activation:t.activation}},[3](e,t){return e.tabs.includes(t.tab)?e:{...e,tabs:[...e.tabs,t.tab]}},[4](e,t){return{...e,tabs:e.tabs.filter(r=>r!==t.tab)}},[5](e,t){return e.panels.includes(t.panel)?e:{...e,panels:[...e.panels,t.panel]}},[6](e,t){return{...e,panels:e.panels.filter(r=>r!==t.panel)}},[7](e){return{...e}}},zt=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);zt.displayName="TabsContext";function Le(e){let t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(zt);if(t===null){let r=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,Le),r}return t}function pl(e,t){return S(t.type,ul,e,t)}var dl=react__WEBPACK_IMPORTED_MODULE_0__.Fragment;function cl(e){let{defaultIndex:t=0,vertical:r=!1,manual:o=!1,onChange:n,selectedIndex:i=null,...a}=e,l=r?"vertical":"horizontal",s=o?"manual":"auto",[u,c]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(pl,{selectedIndex:null,tabs:[],panels:[],orientation:l,activation:s}),m=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({selectedIndex:u.selectedIndex}),[u.selectedIndex]),b=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(()=>{});(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{c({type:1,orientation:l})},[l]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{c({type:2,activation:s})},[s]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{typeof n=="function"&&(b.current=n)},[n]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(u.tabs.length<=0||i===null&&u.selectedIndex!==null)return;let p=u.tabs.map(P=>P.current).filter(Boolean),f=p.filter(P=>!P.hasAttribute("disabled")),d=i!=null?i:t;if(d<0)c({type:0,index:p.indexOf(f[0])});else if(d>u.tabs.length)c({type:0,index:p.indexOf(f[f.length-1])});else{let P=p.slice(0,d),R=[...p.slice(d),...P].find(g=>f.includes(g));if(!R)return;c({type:0,index:p.indexOf(R)})}},[t,i,u.tabs,u.selectedIndex]);let T=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(u.selectedIndex);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{T.current=u.selectedIndex},[u.selectedIndex]);let y=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>[u,{dispatch:c,change(p){T.current!==p&&b.current(p),T.current=p,c({type:0,index:p})}}],[u,c]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(zt.Provider,{value:y},E({props:{...a},slot:m,defaultTag:dl,name:"Tabs"}))}var fl="div";function ml(e){let[{selectedIndex:t,orientation:r}]=Le("Tab.List"),o={selectedIndex:t};return E({props:{...e,...{role:"tablist","aria-orientation":r}},slot:o,defaultTag:fl,name:"Tabs.List"})}var bl="button";function De(e){var C,R;let t=`headlessui-tabs-tab-${A()}`,[{selectedIndex:r,tabs:o,panels:n,orientation:i,activation:a},{dispatch:l,change:s}]=Le(De.name),u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),c=I(u,g=>{!g||l({type:7})});x(()=>(l({type:3,tab:u}),()=>l({type:4,tab:u})),[l,u]);let m=o.indexOf(u),b=m===r,T=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(g=>{let v=o.map(h=>h.current).filter(Boolean);if(g.key===" "||g.key==="Enter"){g.preventDefault(),g.stopPropagation(),s(m);return}switch(g.key){case"Home":case"PageUp":return g.preventDefault(),g.stopPropagation(),M(v,1);case"End":case"PageDown":return g.preventDefault(),g.stopPropagation(),M(v,8)}return S(i,{vertical(){if(g.key==="ArrowUp")return M(v,2|16);if(g.key==="ArrowDown")return M(v,4|16)},horizontal(){if(g.key==="ArrowLeft")return M(v,2|16);if(g.key==="ArrowRight")return M(v,4|16)}})},[o,i,m,s]),y=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{var g;(g=u.current)==null||g.focus()},[u]),p=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{var g;(g=u.current)==null||g.focus(),s(m)},[s,m,u]),f=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({selected:b}),[b]),d={ref:c,onKeyDown:T,onFocus:a==="manual"?y:p,onClick:p,id:t,role:"tab",type:U(e,u),"aria-controls":(R=(C=n[m])==null?void 0:C.current)==null?void 0:R.id,"aria-selected":b,tabIndex:b?0:-1};return E({props:{...e,...d},slot:f,defaultTag:bl,name:"Tabs.Tab"})}var Tl="div";function yl(e){let[{selectedIndex:t}]=Le("Tab.Panels"),r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({selectedIndex:t}),[t]);return E({props:e,slot:r,defaultTag:Tl,name:"Tabs.Panels"})}var gl="div",Pl=1|2;function xl(e){var T,y;let[{selectedIndex:t,tabs:r,panels:o},{dispatch:n}]=Le("Tab.Panel"),i=`headlessui-tabs-panel-${A()}`,a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),l=I(a,p=>{!p||n({type:7})});x(()=>(n({type:5,panel:a}),()=>n({type:6,panel:a})),[n,a]);let s=o.indexOf(a),u=s===t,c=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({selected:u}),[u]),m={ref:l,id:i,role:"tabpanel","aria-labelledby":(y=(T=r[s])==null?void 0:T.current)==null?void 0:y.id,tabIndex:u?0:-1};return E({props:{...e,...m},slot:c,defaultTag:gl,features:Pl,visible:u,name:"Tabs.Panel"})}De.Group=cl;De.List=ml;De.Panels=yl;De.Panel=xl;function Bo(){let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!0);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{e.current=!1},[]),e.current}function No(e){let t={called:!1};return(...r)=>{if(!t.called)return t.called=!0,e(...r)}}function Yt(e,...t){e&&t.length>0&&e.classList.add(...t)}function ut(e,...t){e&&t.length>0&&e.classList.remove(...t)}function El(e,t){let r=k();if(!e)return r.dispose;let{transitionDuration:o,transitionDelay:n}=getComputedStyle(e),[i,a]=[o,n].map(l=>{let[s=0]=l.split(",").filter(Boolean).map(u=>u.includes("ms")?parseFloat(u):parseFloat(u)*1e3).sort((u,c)=>c-u);return s});return i!==0?r.setTimeout(()=>{t("finished")},i+a):t("finished"),r.add(()=>t("cancelled")),r.dispose}function Xt(e,t,r,o,n,i){let a=k(),l=i!==void 0?No(i):()=>{};return ut(e,...n),Yt(e,...t,...r),a.nextFrame(()=>{ut(e,...r),Yt(e,...o),a.add(El(e,s=>(ut(e,...o,...t),Yt(e,...n),l(s))))}),a.add(()=>ut(e,...t,...r,...o,...n)),a.add(()=>l("cancelled")),a.dispose}function le(e=""){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>e.split(" ").filter(t=>t.trim().length>1),[e])}var dt=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);dt.displayName="TransitionContext";function Cl(){let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(dt);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}function Sl(){let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ct);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}var ct=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);ct.displayName="NestingContext";function ft(e){return"children"in e?ft(e.children):e.current.filter(({state:t})=>t==="visible").length>0}function $o(e){let t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(e),r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]),o=Be();(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{t.current=e},[e]);let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((a,l=1)=>{var u;let s=r.current.findIndex(({id:c})=>c===a);s!==-1&&(S(l,{[0](){r.current.splice(s,1)},[1](){r.current[s].state="hidden"}}),!ft(r)&&o.current&&((u=t.current)==null||u.call(t)))},[t,o,r]),i=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(a=>{let l=r.current.find(({id:s})=>s===a);return l?l.state!=="visible"&&(l.state="visible"):r.current.push({id:a,state:"visible"}),()=>n(a,0)},[r,n]);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({children:r,register:i,unregister:n}),[i,n,r])}function Al(){}var hl=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function Qo(e){var r;let t={};for(let o of hl)t[o]=(r=e[o])!=null?r:Al;return t}function Ol(e){let t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(Qo(e));return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{t.current=Qo(e)},[e]),t}var Il="div",qo=1;function zo(e){let{beforeEnter:t,afterEnter:r,beforeLeave:o,afterLeave:n,enter:i,enterFrom:a,enterTo:l,entered:s,leave:u,leaveFrom:c,leaveTo:m,...b}=e,T=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),[y,p]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("visible"),f=b.unmount?0:1,{show:d,appear:P,initial:C}=Cl(),{register:R,unregister:g}=Sl(),v=A(),h=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),O=$o(()=>{h.current||(p("hidden"),g(v),X.current.afterLeave())});x(()=>{if(!!v)return R(v)},[R,v]),x(()=>{if(f===1&&!!v){if(d&&y!=="visible"){p("visible");return}S(y,{hidden:()=>g(v),visible:()=>R(v)})}},[y,v,R,g,d,f]);let L=le(i),N=le(a),K=le(l),V=le(s),Fe=le(u),ge=le(c),we=le(m),X=Ol({beforeEnter:t,afterEnter:r,beforeLeave:o,afterLeave:n}),F=q();(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(F&&y==="visible"&&T.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[T,y,F]);let $=C&&!P;x(()=>{let bt=T.current;if(!!bt&&!$)return h.current=!0,d&&X.current.beforeEnter(),d||X.current.beforeLeave(),d?Xt(bt,L,N,K,V,Tt=>{h.current=!1,Tt==="finished"&&X.current.afterEnter()}):Xt(bt,Fe,ge,we,V,Tt=>{h.current=!1,Tt==="finished"&&(ft(O)||(p("hidden"),g(v),X.current.afterLeave()))})},[X,v,h,g,O,T,$,d,L,N,K,Fe,ge,we]);let H={ref:T},Pe=b;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ct.Provider,{value:O},react__WEBPACK_IMPORTED_MODULE_0__.createElement(W,{value:S(y,{visible:0,hidden:1})},E({props:{...Pe,...H},defaultTag:Il,features:qo,visible:y==="visible",name:"Transition.Child"})))}function mt(e){let{show:t,appear:r=!1,unmount:o,...n}=e,i=_();if(t===void 0&&i!==null&&(t=S(i,{[0]:!0,[1]:!1})),![!0,!1].includes(t))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[a,l]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(t?"visible":"hidden"),s=$o(()=>{l("hidden")}),u=Bo(),c=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({show:t,appear:r||!u,initial:u}),[t,r,u]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{t?l("visible"):ft(s)||l("hidden")},[t,s]);let m={unmount:o};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ct.Provider,{value:s},react__WEBPACK_IMPORTED_MODULE_0__.createElement(dt.Provider,{value:c},E({props:{...m,as:react__WEBPACK_IMPORTED_MODULE_0__.Fragment,children:react__WEBPACK_IMPORTED_MODULE_0__.createElement(zo,{...m,...n})},defaultTag:react__WEBPACK_IMPORTED_MODULE_0__.Fragment,features:qo,visible:a==="visible",name:"Transition"})))}mt.Child=function(t){let r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(dt)!==null,o=_()!==null;return!r&&o?react__WEBPACK_IMPORTED_MODULE_0__.createElement(mt,{...t}):react__WEBPACK_IMPORTED_MODULE_0__.createElement(zo,{...t})};mt.Root=mt;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!**************************************!*\
  !*** ./admin/assets/src/Settings.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Admin_Settings_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Admin/Settings.scss */ "./admin/assets/src/Settings.scss");
/* harmony import */ var _Admin_components_EntryContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Admin/components/EntryContent */ "./admin/assets/src/components/EntryContent.js");




/* Main Compnent */



react_dom__WEBPACK_IMPORTED_MODULE_2___default().render((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.BrowserRouter, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Admin_components_EntryContent__WEBPACK_IMPORTED_MODULE_4__["default"], null)), document.getElementById('wp-bess-settings'));
}();
/******/ })()
;
//# sourceMappingURL=settings.js.map