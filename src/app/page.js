import Hero from '@/components/hero/Hero'
export async function generateMetadata() {
  return {
    title: `Marvel comics`,
    description: 'Explore the marvel store and enjoy the best comics',
    author: 'Marvel Comics'
  }
}
export default function Home() {
  return <Hero />
}
