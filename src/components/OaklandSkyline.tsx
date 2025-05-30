import Image from 'next/image'

export default function OaklandSkyline() {
  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden pointer-events-none z-[-5]">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/cascade.svg"
          alt="Oakland Skyline"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
    </div>
  )
} 