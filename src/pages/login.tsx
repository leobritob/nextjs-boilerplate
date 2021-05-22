import React, { Fragment, useCallback, useState } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { Column, FormColumn, Input, Label, SEO, Button, TextError } from 'components'

interface IForm {
  email: string
  password: string
}

const schema = yup.object().shape({
  email: yup.string().email('Informe um e-mail válido').required('Preencha seu e-mail').nullable(),
  password: yup.string().required('Informe sua senha').nullable(),
})

export const Login: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<IForm>({ resolver: yupResolver(schema) })

  const onSubmit = useCallback(
    async (value) => {
      setIsLoading(true)

      router.push({ pathname: '/admin' })

      setIsLoading(false)
    },
    [router]
  )

  return (
    <Fragment>
      <SEO title="Login" />
      <Column as="form" method="post" width="100%" onSubmit={handleSubmit(onSubmit)}>
        <FormColumn>
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="E-mail"
            autoComplete="off"
            {...register('email')}
            autoFocus
          />
          {errors?.email && <TextError>{errors.email.message}</TextError>}
        </FormColumn>
        <FormColumn>
          <Label htmlFor="password">Senha</Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Senha"
            autoComplete="off"
            {...register('password')}
          />
          {errors?.password && <TextError>{errors.password.message}</TextError>}
        </FormColumn>
        <Button type="submit" label="Conectar" isLoading={isLoading} />
      </Column>
    </Fragment>
  )
}

export default Login
