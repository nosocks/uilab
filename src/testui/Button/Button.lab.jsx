/* eslint-disable no-console */
import Button from './Button'

export const asDefault = (
  <Button onClick={() => console.log('cleck')} text="btn" />
)

export const asDisabled = (
  <Button onClick={() => console.log('cleck')} text="btn disabled" disabled />
)
