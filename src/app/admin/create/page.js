import CreateItem from '@/components/admin/CreateItem';
export const metadata = {
  title: 'Create a comic',
  description: 'Create your comic',
  author: 'Marvel comics',
};
export default function CreatePage() {
  return <CreateItem title='Create your product' />;
}
