"use client"

import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

export function CarouselBlock() {
    const images = [
        { url: '/images/img1.png', title: "Planejamento", description: 'Descrição 1' },
        { url: '/images/img2.png', title: "Organização", description: 'Descrição 2' },
        { url: '/images/img3.png', title: "Lançamentos", description: 'Descrição 3' },
        { url: '/images/img4.png', title: "Frenquência", description: 'Descrição 4' },
        { url: '/images/img5.png', title: "Horários", description: 'Descrição 5' }
    ]
    return (
        <section className="flex flex-row items-center justify-center">
            <Carousel
                className="w-full max-w-5xl"
                opts={{
                    loop: true
                }}
                plugins={[
                    Autoplay({
                    delay: 4000,
                    }),
                ]}
                >
                    <CarouselContent>
                        {
                            images.map((item, index) => (
                                <CarouselItem key={index} className="flex justify-center items-center">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                                        <Image src={item.url} alt={item.description} width="350" height="350" className="rounded-lg object-cover aspect-[18/15]" />
                                        <div className="space-y-4">
                                        <h3 className="text-3xl font-bold">{ item.title }</h3>
                                        <p className="text-muted-foreground">
                                            { item.description }
                                        </p>
                                        </div>
                                    </div>
                                    {/* <div className='flex items-center justify-center'>
                                        <Card className='h-3/4 p-1 w-[250px] ml-4'>
                                        <CardHeader>
                                            <CardTitle>{ item.title }</CardTitle>
                                            <CardDescription>{ item.description }</CardDescription>
                                        </CardHeader>
                                            <CardContent className='flex items-center justify-center p-6'>
                                                <Image src={item.url} alt={item.description} width="800" height="800" className="rounded-md" />
                                            </CardContent>
                                        </Card>
                                    </div> */}
                                </CarouselItem>
                            ))
                        }
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
        </section>
    )
}