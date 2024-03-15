import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"



export default function PropImage(){
return (
  <Carousel className="lg:mr-0 mx-10">
    <CarouselContent>
      <CarouselItem className="h-full">
        <img className="aspect-square" src="https://a0.muscache.com/im/pictures/miso/Hosting-803541464366243564/original/b9b52902-c95d-4960-a727-d2e05323d86b.jpeg?im_w=720" alt="Image 1" />
      </CarouselItem>
      <CarouselItem>
        <img className=" aspect-square" src="https://a0.muscache.com/im/pictures/miso/Hosting-803541464366243564/original/629784e9-f0e8-4902-b085-ade539dd5af0.jpeg?im_w=720" alt="Image 2" />
      </CarouselItem>
      <CarouselItem>
        <img className="aspect-square" src="https://a0.muscache.com/im/pictures/miso/Hosting-803541464366243564/original/ab7518aa-9b01-465a-9937-df971ec47ac9.jpeg?im_w=720" alt="Image 3" />
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
)
}
