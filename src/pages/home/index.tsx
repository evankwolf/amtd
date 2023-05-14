import reactLogo from '@/assets/react.svg'
import Alert from '@/components/Alert/alert'
import Button from '@/components/Button/button'
import Menu from '@/components/Menu/menu'
import MenuItem from '@/components/Menu/menuItem'
import { useCountStore } from '@/store'

function Home() {
  const countStore = useCountStore()

  return (
    <>
      <div>
        This is home page
        <hr />
        <Menu defaultIndex={0} onSelect={(i) => console.log(`currentActive is ${i}`)}>
          <MenuItem index={0}>
            item0
          </MenuItem>
          <MenuItem index={1}>
            item1
          </MenuItem>
          <MenuItem index={2}>
            item2
          </MenuItem>
        </Menu>
        <hr />
        <Button btnType="default" className="custom">Default</Button>
        <Button btnType="link" href="https://www.baidu.com">test</Button>
        <Button btnType="primary">Primary</Button>
        <hr />
      </div>
      <div>
        <Alert header="header">
          hi
        </Alert>
      </div>
      <div className="App">
        <div>
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button type="button" onClick={() => countStore.increment()}>
            count is
            {' '}
            {countStore.count}
          </button>
          <p>
            Edit
            {' '}
            <code>src/App.tsx</code>
            {' '}
            and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  )
}

export default Home
