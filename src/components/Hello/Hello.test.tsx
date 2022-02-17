import { render, screen } from '@testing-library/react'
import { Hello } from './Hello'


it('should render wthout error', () => {
    render(<Hello />)
    const element = screen.getByText('Hello there!')
    expect(element).toBeInTheDocument()
})