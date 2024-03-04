


import Container from "./components/Container"
import { themeContextApi } from "./context/themeContext"
import {theme} from "./context/themeContext"



const App = () => {
  return (
    <themeContextApi.Provider value={theme}>
        <Container/>
    </themeContextApi.Provider>
  )
}

export default App
