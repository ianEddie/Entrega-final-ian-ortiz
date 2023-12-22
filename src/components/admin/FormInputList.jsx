import FormInput from './FormInput'
import UploadIcon from '../icons/Upload-icon'
import styles from './admin.module.css'
import { Controller } from 'react-hook-form'
import ErrorMessage from './ErrorMessage'

export default function FormInputList({
  register,
  errors,
  control,
  handleChange,
  className
}) {
  return (
    <div className={className}>
      {/* Name */}
      <FormInput
        name='name'
        label='Name'
        type='text'
        register={register}
        errors={errors}
      />
      {/* Writer   */}
      <FormInput
        name='writer'
        label='Writer'
        type='text'
        register={register}
        errors={errors}
      />
      {/* Artist   */}
      <FormInput
        name='artist'
        label='Artist'
        type='text'
        register={register}
        errors={errors}
      />
      {/* Price   */}
      <FormInput
        name='price'
        label='Price'
        type='number'
        register={register}
        errors={errors}
      />
      {/* Slug   */}
      <FormInput
        name='slug'
        label='Slug'
        type='text'
        register={register}
        errors={errors}
      />
      {/* Date   */}
      <FormInput
        name='myDate'
        label='Date'
        type='date'
        register={register}
        errors={errors}
        className='cursor-pointer'
      />
      {/* Category */}
      <div className={styles.container}>
        <label className={styles.label}>Category</label>
        <Controller
          name='category'
          control={control}
          defaultValue=''
          {...register('category', { required: true })}
          render={({ field }) => (
            <select
              {...field}
              className='rounded-lg bg-neutral-100/20 px-1 py-[2px] text-neutral-900'
            >
              <option value=''>Select a category</option>
              <option value='Spiderman'>Spiderman</option>
              <option value='Silver'>Silver Surfer</option>
            </select>
          )}
        ></Controller>
        {errors.category?.type === 'required' && (
          <ErrorMessage>Select a option</ErrorMessage>
        )}
      </div>
      {/* Image */}
      <div className={styles.container}>
        <label className={styles.label}>Image</label>
        <label
          htmlFor='file-upload'
          className='bg-neutral-100/20 text-neutral-300 rounded-lg flex items-center gap-x-3 px-3'
        >
          <UploadIcon />
          <span>Select some file</span>
        </label>
        <input
          id='file-upload'
          type='file'
          accept='image/*'
          onChange={handleChange}
          className='hidden'
          name='image'
        />
        {errors.name && <ErrorMessage>Select some file</ErrorMessage>}
      </div>
      {/* Description */}
      <div className={`${styles.container} sm:col-auto col-span-2`}>
        <label className={styles.label}>Description</label>
        <textarea
          className='w-[90%] bg-neutral-100/20 rounded-lg text-center p-1'
          placeholder='Type a description'
          {...register('description', {
            required: true,
            minLength: 10
          })}
        />
        {errors.description?.type === 'required' && (
          <ErrorMessage>Description is requiered</ErrorMessage>
        )}
      </div>
    </div>
  )
}
