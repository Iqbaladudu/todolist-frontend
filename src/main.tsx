import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import webFontLoader from 'webfontloader'
import { QueryClient, QueryClientProvider} from 'react-query'

const queryClient = new QueryClient()

webFontLoader.load({
  google: {
    families: ['Raleway:400,700:latin', 'Montserrat:700:latin']
  }
})

ReactDOM.render(
  <>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </>,
  document.getElementById('root')
)
