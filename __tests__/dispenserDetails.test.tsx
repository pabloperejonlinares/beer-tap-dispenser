import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import DispenserDetails from '@/app/components/dispenserDetails'
 
describe('DispenserDetails', () => {
  it('should render dispenser details page with dispenser opened', () => {
    render(<DispenserDetails id='dfef6838-3c5b-4800-9e7f-a3ed71e4d8e1' status='Opened' />)

    expect(screen.getByText('Close')).toBeInTheDocument()
  })

  it('should render dispenser details page with dispenser closed', () => {
    render(<DispenserDetails id='dfef6838-3c5b-4800-9e7f-a3ed71e4d8e1' status='Closed' />)

    expect(screen.getByText('Open')).toBeInTheDocument()
  })
})