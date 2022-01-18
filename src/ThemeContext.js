import { createContext } from "react";

const ThemeContext = createContext(["green", () => {}]); //this is an empty function

export default ThemeContext;