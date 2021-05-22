import React from 'react'
import DatePicker, { ReactDatePickerProps, registerLocale } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import ptBR from 'date-fns/locale/pt-BR'
import { Controller } from 'react-hook-form'
registerLocale('pt-BR', ptBR)

import { Input } from 'components'

type IDatePickerInput = Pick<ReactDatePickerProps, 'minDate'> & {
  name: string
  control: any
}

export const DatePickerInput: React.FC<IDatePickerInput> = ({ name, control, ...props }: IDatePickerInput) => {
  return (
    <Controller
      as={({ value, ...innerProps }) => (
        <DatePicker
          {...innerProps}
          {...props}
          dateFormat="Pp"
          locale="pt-BR"
          selected={value || new Date()}
          showTimeSelect
          customInput={<Input />}
        />
      )}
      control={control}
      name={name}
    />
  )
}
