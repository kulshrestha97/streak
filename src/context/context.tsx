import { type } from "os";
import { createContext } from "react";
type contextType = {
  currentValue: string | undefined;
  setCurrentValue: Function;
};
const ThemeContext = createContext<contextType>({
  currentValue: "light",
  setCurrentValue: () => {},
});
export default ThemeContext;
