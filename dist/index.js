!(function(e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], t)
    : t(((e = e || self).webworkerFile = {}));
})(this, function(e) {
  "use strict";
  (e.default = function e(t) {
    if (
      ((function(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      })(this, e),
      "function" != typeof t)
    )
      throw new Error("File content must export a function");
    var n = t.toString(),
      o = new Blob(["(" + n + ")()"], { type: "application/javascript" });
    return new Worker(URL.createObjectURL(o));
  }),
    Object.defineProperty(e, "__esModule", { value: !0 });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBXZWJXb3JrZXIge1xuICBjb25zdHJ1Y3Rvcih3b3JrZXIpIHtcbiAgICBpZiAodHlwZW9mIHdvcmtlciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGaWxlIGNvbnRlbnQgbXVzdCBleHBvcnQgYSBmdW5jdGlvblwiKTtcbiAgICB9XG4gICAgY29uc3QgY29kZSA9IHdvcmtlci50b1N0cmluZygpO1xuICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbXCIoXCIgKyBjb2RlICsgXCIpKClcIl0sIHtcbiAgICAgIHR5cGU6IFwiYXBwbGljYXRpb24vamF2YXNjcmlwdFwiXG4gICAgfSk7XG4gICAgcmV0dXJuIG5ldyBXb3JrZXIoVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJ3b3JrZXIiLCJFcnJvciIsImNvZGUiLCJ0b1N0cmluZyIsImJsb2IiLCJCbG9iIiwidHlwZSIsIldvcmtlciIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCJdLCJtYXBwaW5ncyI6Im9OQUNFLFdBQVlBLDJHQUNZLG1CQUFYQSxRQUNILElBQUlDLE1BQU0sMkNBRVpDLEVBQU9GLEVBQU9HLFdBQ2RDLEVBQU8sSUFBSUMsS0FBSyxDQUFDLElBQU1ILEVBQU8sT0FBUSxDQUMxQ0ksS0FBTSxrQ0FFRCxJQUFJQyxPQUFPQyxJQUFJQyxnQkFBZ0JMIn0=
