import UndefinedValidatable from "../validatable/undefined";
export default function Undefined(message) {
    return function (value) {
        return UndefinedValidatable(value, message);
    };
}
//# sourceMappingURL=undefined.js.map