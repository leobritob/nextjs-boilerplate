import React, { Fragment } from 'react'
import { Controller } from 'react-hook-form'

import { IInput, CurrencyInput, Label } from 'components'
import { FormTextError } from './form-text-error'

export type IFormCurrencyInput = React.InputHTMLAttributes<HTMLInputElement> &
  IInput & {
    format?: string
    control: any
    name: string
    alt: string
    errors?: any
    register?: any
    color?: string
    onChange?: any
    label?: string
    noLabel?: boolean
  }

export const FormCurrencyInput: React.FC<IFormCurrencyInput> = ({
  name,
  alt,
  errors,
  control,
  label,
  noLabel,
  ...props
}: IFormCurrencyInput) => {
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
      <Controller as={<CurrencyInput {...opts} />} control={control} name={name} />
      <FormTextError errors={errors} name={name} />
    </Fragment>
  )
}
