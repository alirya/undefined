import Guard from "../boolean/not-undefined";
import Callback from "@dikac/t-function/assert/callback-parameters";
import NotUndefinedError from "./throwable/not-undefined-parameters";
export default function NotUndefined(value, error = NotUndefinedError) {
    Callback(value, Guard, error);
}
//# sourceMappingURL=not-undefined.js.map