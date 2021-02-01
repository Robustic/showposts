import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from './App'

test('renders Hello world', () => {
  const component = render(
    <App/>
  )

  expect(component.container).toHaveTextContent(
    'Hello world'
  )
})
