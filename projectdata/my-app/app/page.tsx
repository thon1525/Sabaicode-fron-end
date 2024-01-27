import Image from "next/image";
import Link from 'next/link';
import Card from "./Card";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card />
      <Link href="/about">about</Link>
      <Image
                    src="/download.jpg" // Use a relative path starting with a leading slash
                    alt="Description of the image"
                    width={200}
                    height={100}
                />
    </main>
  );
}
