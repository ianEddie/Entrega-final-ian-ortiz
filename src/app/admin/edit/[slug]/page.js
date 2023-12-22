import EditForm from '@/components/admin/EditForm';
export const metadata = {
  title: 'Edit your comic',
  description: 'Marvel commics edit page',
  author: 'Marvel comics',
};
export default function EditPage({ params }) {
  const { slug } = params;
  return <EditForm slug={slug} />;
}
