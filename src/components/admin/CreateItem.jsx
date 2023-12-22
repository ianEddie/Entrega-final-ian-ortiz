import FormItem from './FormItem';
import FormTitle from './FormTitle';

export default function CreateItem({ title, initialValues }) {
  return (
    <main className='h-full w-full flex flex-col items-center justify-center gap-y-5'>
      <FormTitle>{title}</FormTitle>
      <FormItem initialValues={initialValues} />
    </main>
  );
}
