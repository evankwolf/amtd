import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import './styles/index.scss'
import 'uno.css'

/** to make sure Icon component functions normally */
library.add(fas)

export { default as Alert } from '@/components/Alert'
export { default as AutoComplete } from '@/components/AutoComplete'
export { default as Button } from '@/components/Button'
export { default as Form } from '@/components/Form'
export { default as Icon } from '@/components/Icon'
export { default as Input } from '@/components/Input'
export { default as Menu } from '@/components/Menu'
export { default as Progress } from '@/components/Progress'
export { default as Transition } from '@/components/Transition'
export { default as Upload } from '@/components/Upload'

// import React from 'react'

// import ReactDOM from 'react-dom/client'

// import App from './App'

// import './styles/index.scss'
// import 'uno.css'

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
