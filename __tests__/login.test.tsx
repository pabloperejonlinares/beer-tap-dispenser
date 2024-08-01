import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import LoginForm from '@/app/components/login-form'
 
// Mock useRouter
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null
    };
  }
}));

describe('Login', () => {
  it('should render login form', () => {
    render(<LoginForm />)

    expect(screen.getByText('Password')).toBeInTheDocument()
  })
})