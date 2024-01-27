import Image from 'next/image'
 
function Home() {
  return (
    <Image
      src="https://example.com/hero.jpg"
      alt="Landscape picture"
      width={800}
      height={500}
    />
  )
}
 
export default Home