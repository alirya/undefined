import NotUndefinedValidatable from "../validatable/not-undefined";
export default function NotUndefined(message) {
    return function (value) {
        return NotUndefinedValidatable(value, message);
    };
}
//# sourceMappingURL=not-undefined.js.map