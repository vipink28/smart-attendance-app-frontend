import { Toaster } from "react-hot-toast"
import AppRouter from "./AppRouter"

//app
const App = () => {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <AppRouter />
    </>
  )
}

export default App


