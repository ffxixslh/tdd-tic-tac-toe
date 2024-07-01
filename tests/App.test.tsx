import { it, describe, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../src/App'
import React from 'react'

describe('App', () => {
  it('should render', () => {
    render(<App />)
    const element = screen.getByText('hello world')
    expect(element).toBeInTheDocument()
  })
})

