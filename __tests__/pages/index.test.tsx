import { render, screen, findByText } from '@testing-library/react'

import IndexPage from '@/pages/index'
import '@testing-library/jest-dom'

describe('IndexPage', () => {
  it('renders a welcome box', async () => {
    render(<IndexPage />)
    expect(await findByText(screen.getByRole('heading'), /home/i,))
  })
})