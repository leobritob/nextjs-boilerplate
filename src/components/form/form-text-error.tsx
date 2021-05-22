import React from 'react'

import { TextError } from 'components'

export interface IFormTextError {
  errors: any[]
  name: string
}

export const FormTextError: React.FC<IFormTextError> = ({ errors, name }: IFormTextError) => {
  if (!errors || !errors[name] || !errors[name]?.message) return null
  return <TextError>{errors[name].message}</TextError>
}
