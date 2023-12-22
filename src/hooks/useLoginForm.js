'use client'

import { useState } from 'react'
import useAuthContext from './useAuthContext'

export default function useLoginForm() {
  const { registerUser, loginUser } = useAuthContext()

  const [data, setData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await loginUser(data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleRegister = () => {
    registerUser(data)
  }

  const handleSignin = () => {
    loginUser(data)
  }
  return { handleChange, handleRegister, handleSubmit, handleSignin }
}
