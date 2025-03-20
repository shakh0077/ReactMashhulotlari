
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import GlobalContext from './Context/GlobalContext'


createRoot(document.getElementById('root')).render(
    <GlobalContext>
         <App/>
    </GlobalContext>

)