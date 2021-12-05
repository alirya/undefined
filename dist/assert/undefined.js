import Guard from "../boolean/undefined";
import Callback from "@dikac/t-function/assert/callback-parameters";
import UndefinedError from "./throwable/undefined-parameters";
export default function Undefined(value, error = UndefinedError) {
    Callback(value, Guard, error);
}
//# sourceMappingURL=undefined.js.map