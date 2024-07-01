import { it, describe, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../src/App'
import React from 'react'

describe('App', () => {
  it('should render', () => {
    render(<App />)
    const element = screen.getByTestId('app')
    expect(element).toBeInTheDocument()

    expect(element).toHaveTextContent('Count: 0')

    fireEvent.click(screen.getByText('Increment'))
    expect(element).toHaveTextContent('Count: 1')

    fireEvent.click(screen.getByText('Decrement'))
    expect(element).toHaveTextContent('Count: 0')
  })
})

