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
     * string intended for undefined message
     *
     * @param valid
     * @param value
     * @param subject
     * @param conversion
     */
    function Undefined(valid, value, subject = 'type', conversion = value => typeof value) {
        let sentence = sentences_must_1.default(valid);
        sentence.expect.push('undefined');
        sentence.subject.push(subject);
        sentence.comma.push('expect');
        if (!valid) {
            sentence.actual.push('actual', conversion(value));
        }
        return sentence.message;
    }
    exports.default = Undefined;
});
//# sourceMappingURL=undefined.js.map