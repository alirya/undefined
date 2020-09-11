(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-string/message/sentences-must"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const sentences_must_1 = require("@dikac/t-string/message/sentences-must");
    /**
     * string intended for not undefined message
     *
     * @param valid
     * @param value
     * @param subject
     */
    function NotUndefined(valid, value, subject = 'type') {
        let sentence = sentences_must_1.default(valid);
        sentence.expect.push('undefined');
        sentence.reject = ['must not'];
        sentence.accept = ['is not'];
        sentence.subject.push(subject);
        return sentence.message;
    }
    exports.default = NotUndefined;
});
//# sourceMappingURL=not-undefined.js.map