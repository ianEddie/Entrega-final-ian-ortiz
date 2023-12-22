'use client'
import { createContext, useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from '@firebase/auth'

import { auth } from '@/firebase/config'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  // State
  const [user, setUser] = useState({
    logged: false,
    email: null,
    uid: null
  })
  const [error, setError] = useState(null)
  // User register
  const registerUser = async (data) => {
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password)
    } catch (error) {
      console.error('Error at register user:', error.message)
      setError('Error registering user')
    }
  }
  // Login user
  const loginUser = async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password)
    } catch (error) {
      console.error('Error at init session:', error.message)
      setError('Incorrect username or password')
    }
  }
  // Logout user
  const logoutUser = async () => {
    try {
      await signOut(auth)
    } catch (error) {
      console.error('Error at close session:', error.message)
      setError(error.message)
    }
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const newUser = {
          logged: true,
          email: user.email,
          uid: user.uid
        }
        setUser(newUser)
      } else {
        setUser({
          logged: false,
          email: null,
          uid: null
        })
      }
    })
  }, [])

  return (
    <AuthContext.Provider
      value={{ user, registerUser, loginUser, logoutUser, error }}
    >
      {children}
    </AuthContext.Provider>
  )
}
