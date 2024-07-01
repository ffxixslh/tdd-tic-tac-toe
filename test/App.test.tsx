import { it, describe, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import App from '../src/App'
import React from 'react'

describe('App', () => {
  it('should render', () => {
    const { getByText } = render(<App />)
    const element = getByText('hello world')
    expect(element).toBeDefined()
  })
})

