/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/XErQGR4ckyA
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import Image from "next/image";

export type CarouselItemType = {
  url: string;
  title: string;
  description?: string;
}

export function CarouselMain({ url, title, description }: CarouselItemType) {
  return (
    <Carousel className="w-full max-w-4xl">
      <CarouselContent>
        <CarouselItem>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <Image
              src={url}
              width={800}
              height={500}
              alt="Carousel Image 1"
              className="rounded-lg object-cover aspect-[16/10]"
            />
            <div className="space-y-4">
              <h3 className="text-3xl font-bold">{ title }</h3>
              <p className="text-muted-foreground">
                { description }
              </p>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <img
              src="/placeholder.svg"
              width={800}
              height={500}
              alt="Carousel Image 2"
              className="rounded-lg object-cover aspect-[16/10]"
            />
            <div className="space-y-4">
              <h3 className="text-3xl font-bold">Sustainable Solutions</h3>
              <p className="text-muted-foreground">
                Explore our eco-friendly products that prioritize environmental responsibility without compromising
                quality.
              </p>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <img
              src="/placeholder.svg"
              width={800}
              height={500}
              alt="Carousel Image 3"
              className="rounded-lg object-cover aspect-[16/10]"
            />
            <div className="space-y-4">
              <h3 className="text-3xl font-bold">Timeless Elegance</h3>
              <p className="text-muted-foreground">
                Discover our collection of timeless products that blend classic design with modern functionality.
              </p>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2">
        <Button variant="ghost" size="icon">
          <ChevronLeftIcon className="w-6 h-6" />
          <span className="sr-only">Previous</span>
        </Button>
      </CarouselPrevious>
      <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2">
        <Button variant="ghost" size="icon">
          <ChevronRightIcon className="w-6 h-6" />
          <span className="sr-only">Next</span>
        </Button>
      </CarouselNext>
    </Carousel>
  )
}

function ChevronLeftIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}


function ChevronRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}