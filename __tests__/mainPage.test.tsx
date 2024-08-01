import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import HomePage from '../app/page'
 
describe('HomePage', () => {
  it('should render home page', () => {
    render(<HomePage />)

    expect(screen.getByText('Go to beer tap dispensers')).toBeInTheDocument()
  })

  it('should render main in home page', () => {
    render(<HomePage />)

    expect(screen.getByRole('main')).toBeInTheDocument()
  })
})