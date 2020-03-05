"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Api = /*#__PURE__*/function () {
  function Api(baseUrl) {
    var headers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var subUrl = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    var requestInterceptors = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

    _classCallCheck(this, Api);

    this.baseUrl = baseUrl;
    this.subUrl = subUrl;
    this.requestInterceptors = requestInterceptors;
    this.headers = headers;
  }

  _createClass(Api, [{
    key: "addRequestInterceptor",
    value: function addRequestInterceptor(interceptor) {
      this.requestInterceptors.push(interceptor);
    }
  }, {
    key: "get",
    value: function () {
      var _get2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.subUrl += '/' + id;
                _context.next = 3;
                return this._get();

              case 3:
                return _context.abrupt("return", _context.sent);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function get(_x) {
        return _get2.apply(this, arguments);
      }

      return get;
    }()
  }, {
    key: "getAll",
    value: function () {
      var _getAll = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this._get();

              case 2:
                return _context2.abrupt("return", _context2.sent);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getAll() {
        return _getAll.apply(this, arguments);
      }

      return getAll;
    }()
  }, {
    key: "_get",
    value: function () {
      var _get3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var headers, url, method, response;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                headers = this.headers;
                url = this.baseUrl + this.subUrl;
                method = 'GET';
                this.requestInterceptors.forEach(function (interceptor) {
                  var _options$headers, _options$url, _options$method;

                  var options = interceptor({
                    data: {},
                    // not yet supported, just for compatibility reasons
                    params: {},
                    // not yet supported, just for compatibility reasons
                    headers: headers,
                    url: url,
                    method: method
                  });
                  headers = (_options$headers = options.headers) !== null && _options$headers !== void 0 ? _options$headers : headers;
                  url = (_options$url = options.url) !== null && _options$url !== void 0 ? _options$url : url;
                  method = (_options$method = options.method) !== null && _options$method !== void 0 ? _options$method : method;
                });
                _context3.next = 6;
                return fetch(url, {
                  method: method,
                  headers: new Headers(headers)
                });

              case 6:
                response = _context3.sent;
                _context3.next = 9;
                return response.json();

              case 9:
                _context3.t0 = _context3.sent;
                _context3.t1 = response.status;
                return _context3.abrupt("return", {
                  body: _context3.t0,
                  status: _context3.t1
                });

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function _get() {
        return _get3.apply(this, arguments);
      }

      return _get;
    }()
  }, {
    key: "all",
    value: function all(name) {
      var newSubUrl = this.subUrl + this._normalizeSubUrl(name);

      return new Api(this.baseUrl, this.headers, newSubUrl, this.requestInterceptors);
    }
  }, {
    key: "one",
    value: function one(name, id) {
      var newSubUrl = this.subUrl + this._normalizeSubUrl(name) + '/' + id;
      return new Api(this.baseUrl, this.headers, newSubUrl, this.requestInterceptors);
    }
  }, {
    key: "post",
    value: function post() {}
  }, {
    key: "put",
    value: function put() {}
  }, {
    key: "delete",
    value: function _delete() {} /// ensures urlPart has a leading /

  }, {
    key: "_normalizeSubUrl",
    value: function _normalizeSubUrl(urlPart) {
      if (urlPart[0] === '/') return urlPart;
      return '/' + urlPart;
    }
  }, {
    key: "baseUrl",
    set: function set(val) {
      if (val.slice(-1) === '/') this._baseUrl = val.slice(0, -1);
      this._baseUrl = val;
    },
    get: function get() {
      return this._baseUrl;
    }
  }]);

  return Api;
}();

exports["default"] = Api;
