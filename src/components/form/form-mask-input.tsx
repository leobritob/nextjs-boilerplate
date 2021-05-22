import React, { Fragment } from 'react'
import { Controller } from 'react-hook-form'

import { IInput, MaskInput, Label } from 'components'
import { FormTextError } from './form-text-error'

export type IFormMaskInput = React.InputHTMLAttributes<HTMLInputElement> &
  IInput & {
    mask?: string
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

export const FormMaskInput: React.FC<IFormMaskInput> = ({ name, alt, errors, control, label, noLabel, ...props }: IFormMaskInput) => {
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
      <Controller as={<MaskInput {...opts} />} control={control} name={name} />
      <FormTextError errors={errors} name={name} />
    </Fragment>
  )
}
