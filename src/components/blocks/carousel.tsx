"use client"

import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

export function CarouselBlock() {
    const images = [
        { url: '/images/img1.png', title: "Planejamento", description: 'Descrição 1' },
        { url: '/images/img2.png', title: "Organização", description: 'Descrição 2' },
        { url: '/images/img3.png', title: "Lançamentos", description: 'Descrição 3' },
        { url: '/images/img4.png', title: "Frenquência", description: 'Descrição 4' },
        { url: '/images/img5.png', title: "Horários", description: 'Descrição 5' }
    ]
    return (
        <section className="flex flex-col items-center justify-center mx-auto">
            <Carousel
                className="text-center"
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
                                    <div className='flex items-center justify-center'>
                                        <Card className='h-3/4 p-1 w-[230px]'>
                                        <CardHeader>
                                            <CardTitle>{ item.title }</CardTitle>
                                            <CardDescription>{ item.description }</CardDescription>
                                        </CardHeader>
                                            <CardContent className='flex items-center justify-center p-6'>
                                                <Image src={item.url} alt={item.description} width="800" height="800" className="rounded-md" />
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))
                        }
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
            </Carousel>
        </section>
    )
}