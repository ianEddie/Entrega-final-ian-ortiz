'use client'
import useFirebaseForm from '@/hooks/useFirebaseForm'
import { useForm } from 'react-hook-form'
import useGetDate from '@/hooks/useGetDate'
import { useEffect, useState } from 'react'
import FormInputList from './FormInputList'
import FormSubmitButton from './FormSubmitButton'
import { useLoading } from '@/hooks/useLoading'
import LoaderTwo from '../icons/LoaderTwo'
import FormSucces from '../products/FormSucces'

export default function FormItem({ initialValues }) {
  const { createProduct, handleChange, updateProduct } = useFirebaseForm()
  const { splitDate } = useGetDate()
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
    setValue
  } = useForm({ defaultValues: initialValues })
  const [succes, setSucces] = useState(null)
  const { isLoading, startLoading, stopLoading } = useLoading()
  // handle Submit
  const onSubmit = async (data, event) => {
    event.preventDefault()
    const date = splitDate(data.myDate)
    try {
      startLoading()
      if (initialValues) {
        await updateProduct(
          { ...data, image: initialValues.image },
          initialValues.slug
        )
      } else {
        await createProduct(data, date)
      }
      setSucces('Product saved')
      event.target.reset()
    } catch (error) {
      console.error('Error:', error)
    } finally {
      stopLoading()
    }
  }
  // useEffect to set initialValues
  useEffect(() => {
    // Set initial values on form
    if (initialValues) {
      Object.keys(initialValues).forEach((key) => {
        setValue(key, initialValues[key])
      })
    }
  }, [initialValues, setValue])
  //
  return (
    <form
      encType='multipart/form-data'
      className='bg-neutral-900/80 relative flex flex-col sm:w-1/2 sm:min-h-[70%] w-[95%] min-h-[80%] p-3 rounded-3xl z-30 border border-neutral-400 '
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormInputList
        register={register}
        errors={errors}
        control={control}
        handleChange={handleChange}
        className={`${
          succes
            ? 'hidden'
            : 'grid sm:grid-cols-3 grid-cols-2 sm:grid-rows-3 place-items-center gap-3'
        }`}
      />
      {succes && <FormSucces />}
      {isLoading && (
        <LoaderTwo className='absolute top-2 right-2' width='w-8' />
      )}
      <FormSubmitButton succes={succes} />
    </form>
  )
}
