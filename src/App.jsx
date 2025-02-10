import './App.css'
import { AuthProvider } from './auth/auth'
import Root from './routing/Index'
import "react-quill/dist/quill.snow.css";

function App() {

  return (
   <AuthProvider>
        {/* <AlertProvider> */}
            <Root />
        {/* </AlertProvider> */}
      </AuthProvider>
  )
}

export default App
