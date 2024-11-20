import { jsx as _jsx } from "react/jsx-runtime";
import styles from "./Alert.module.css";
export default function Alert({ children }) {
    return (_jsx("div", { className: styles.alert, children: children }));
}
