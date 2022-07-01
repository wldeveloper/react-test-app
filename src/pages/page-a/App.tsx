// TODO @components别名ts不识别
import a from '@assets/logo.svg'

import './App.css'

const ComB = React.lazy(() => import('../../components/com-b'))

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ComB name="wl" />
      <header className="App-header">
        <img src={a} alt="xixixi" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((v) => v + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
