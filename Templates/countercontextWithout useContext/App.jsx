


import Counter from "./components/Counter"
import CounterProvider from "./context/CounterContext"

const App = () => {
  return (
    <section id="mainContainer">
    <article>
    <CounterProvider>
    <Counter/> {/*child of counter provider*/}
    </CounterProvider>
    </article>
     
    </section>
  )
}

export default App
