import Icons from "@/components/Icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Phone from "@/components/Phone";
import { TwitterLogoIcon } from "@radix-ui/react-icons";
import { Check, Radar, Send } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
   <div className="bg-slate-50">
    <section>
      <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
        <div className="col-span-2 px-6 pb-6 lg:px-0 lg:pt-4">
          <div className="relative max-auto text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className='absolute sm:fle-col w-28 left-0 -top-20 hidden lg:block items-center'>
              <img src="/mars.png" alt="" className="w-full" />
             
         </div>
         <div className="mt-12 flex-row items-start sm:items-center">
            <div className="flex space-x-4">
              <code>ca: BiStEkoYoAfPJCKe33Hkossq3oXM52tS9m1BuP9g6H8c </code>
            </div>
          </div>
            <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">Mars Coin, Universal <span className="bg-orange-600 px-2 text-white"> Currency</span> for Mars</h1>
            <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-left">
            Sky fire will fall on the <span className="font-semibold">Royal Mansion</span>. Then the light of Mars will be extinguished. <span className="font-semibold">Elon Musk</span> and his <span className="font-semibold">Space X</span> launch every week, the first manned mission to Mars is getting closer, and <span className="font-semibold">MarsCoin</span> will eventually become the currency of the Red Planet.
            </p>
            <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
              <div className="space-y-2">
                <li className="flex gap-1.5 items-center text-left">
                  <Check className="h-5 w-5 shrink-0 text-green-600" />
                  Total issuance of 9 billion, Sent to 20% of the black hole address
                </li>
                <li className="flex gap-1.5 items-center text-left">
                  <Check className="h-5 w-5 shrink-0 text-green-600" />
                  Powering Musk and SpaceX's Mars vision
                </li>
                <li className="flex gap-1.5 items-center text-left">
                  <Check className="h-5 w-5 shrink-0 text-green-600" />
                  Middle East project, favored by the prince of Dubai
                </li>
              </div>
            </ul>
            <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
              <div className="flex space-x-4">
              <Link href='https://twitter.com/MarsCoinToken' className="flex z-40 font-semibold">
              <TwitterLogoIcon className="inline-block h-8 w-8"></TwitterLogoIcon>
              </Link>
              <Link href='https://t.me/+694PzfxDm3E3NTFl' className="flex z-40 font-semibold">
              <Send className="inline-block h-8 w-8"></Send>
              </Link>
              <Link href='https://solscan.io/token/BiStEkoYoAfPJCKe33Hkossq3oXM52tS9m1BuP9g6H8c' className="flex z-40 font-semibold">
              <Radar className="inline-block h-8 w-8"></Radar>
              </Link>
              </div>
            </div>
          </div>
          
        </div>
        <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 ,t-32 lh:mx-0 lg:mt-20 h-auto">
          <div className="relative md:max-w-xl">
            <img src="/spacextext.png" className="absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block" alt="" />
            <img src="/line.png" alt=""
              className="absolute w-20 -left-6 -bottom-6 select-none" />
            <Phone className="w-67" imgSrc="spacex.jpg" />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>

    {/* the desc */}
    <section className="bg-slate-100 py-24">
      <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
        <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
          <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
            The {' '}
            <span className="relative px-2">
            birth <Icons.Underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-orange-600" /></span>
            {' '}of Mars Coin
          </h2>
          <img src="/mars.png" className="w-24 order-0 lg:order-2" alt="" />
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
          <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
            <div className="flex gap-0.5 mb-2">
              <div className="text-lg leading-8">
                <p>
                I read in Sagan's book, "Our planet is but a single speck in a universe shrouded in darkness." We are anonymous, immersed in the endless vastness, without a clue as to who can save us but ourselves. Earth is the only known habitat for life so far, and in the near future, life will have nowhere to go." But that's not right. He's wrong. We still have Mars.
                </p>
                <div className="flex gap-4 mt-2">
                  <img className="rounded-full h-12 w-12 object-cover" src="/musk.jpg" alt="" />
                  <div className="flex flex-col">
                    <p className="font-semibold">Elon Musk</p>
                    <div className="flex gap-1.5 items-center text-zinc-600">
                      <p className="text-sm"> "The richest man in the world, the Godfather of Mars" </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
            <div className="flex gap-0.5 mb-2">
              <div className="text-lg leading-8">
                <p>
                A self-sustaining city needs about a million people, a few million tons of goods, and we can do that in 20 years.
                </p>
                <div className="flex gap-4 mt-2">
                  <img className="rounded-full h-12 w-12 object-cover" src="/spacexavator.jpg" alt="" />
                  <div className="flex flex-col">
                    <p className="font-semibold">SpaceX</p>
                    <div className="flex gap-1.5 items-center text-zinc-600">
                      <p className="text-sm">SpaceX designs, manufactures and launches the world’s most advanced rockets and spacecraft</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
   </div>
  );
}
