import Image, { type ImageProps } from "next/image";

import  "@repo/ui/styles.css"

import { Card } from "@repo/ui/card";

import CardWrapper from "@repo/ui/CardWrap";





export default function Home() {
  const handlefunction=()=>{
    
  }
  return (
   <>
   <CardWrapper>
   <Card className="bg-black ">
    <div className="text-3xl  text-white ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, itaque ipsum eius nostrum laudantium unde sapiente. Numquam explicabo quasi dolorum itaque facere ea nobis est ab eius, cum a minima laudantium reprehenderit vero quas suscipit porro fuga veritatis molestiae autem expedita molestias sint sequi ratione. Laudantium voluptas atque soluta natus!</div>
   </Card>
   </CardWrapper>
   {/* <CardWrapper>
   <Card className="bg-zinc-800 ">
    <Card className="bg-slate-900 rounded-2xl">
      <div className="text-3xl  text-white h-96">Hello world</div>
    </Card>
   </Card>
   </CardWrapper>
   <CardWrapper>
   <Card className="bg-zinc-800 ">
    <Card className="bg-slate-900 rounded-2xl">
      <div className="text-3xl  text-white h-96">Hello world</div>
    </Card>
   </Card>
   </CardWrapper>
   <CardWrapper>
<Card className="bg-zinc-800 ">
<Card className="bg-slate-900 rounded-2xl">
  <div className="text-3xl  text-white h-96">Hello world</div>
</Card>
</Card>
</CardWrapper> */}

  




   
   
   
   
   
   {/* <div className="text-3xl  text-primary h-96">Hello world</div>
   <div className="text-3xl  text-primary h-96">Hello world</div> */}
   </>
  );
}
