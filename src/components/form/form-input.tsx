import React, { Fragment } from 'react'

import { IInput, Input, Label } from 'components'
import { FormTextError } from './form-text-error'

export type IFormInput = React.InputHTMLAttributes<HTMLInputElement> &
  IInput & {
    as?: 'input' | 'textarea'
    type?: string
    name: string
    alt?: string
    errors?: any
    register?: any
    color?: string
    onChange?: any
    label?: string
    noLabel?: boolean
  }

export const FormInput: React.FC<IFormInput> = ({
  name,
  alt,
  errors,
  register,
  label,
  noLabel,
  ...props
}: IFormInput) => {
  const options = {
    name,
    id: name,
    title: alt,
    alt,
    placeholder: alt,
  }

  const opts = { ...options, ...props }

  return (
    <Fragment>
      {noLabel ? null : <Label htmlFor={name}>{label || alt}</Label>}
      <Input ref={register} {...opts} />
      <FormTextError errors={errors} name={name} />
    </Fragment>
  )
}
