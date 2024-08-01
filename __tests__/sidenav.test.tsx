import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import SideNav from '@/app/components/sidenav'

// Mock useRouter
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null
    };
  },
  usePathname() {
    return {
      prefetch: () => null
    };
  }
}));

describe('Sidenav', () => {
  it('should render link in Sidenav', () => {
    render(<SideNav />)

    expect(screen.getByRole('link', {name: 'Logo'})).toBeInTheDocument()
  })
})