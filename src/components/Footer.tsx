import {Radar, Send } from "lucide-react"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { TwitterLogoIcon } from "@radix-ui/react-icons"
import Link from "next/link"

const Footer =() => {
    return <footer className="bg-white h-20 relative">
        <MaxWidthWrapper>
            <div className="border-t border-gray-200" />
            <div className="h-full flex flex-col md:flex-row md:justify-between justify-center items-center">
                <div className="text-center md:text-left pb-2 md:pb-0">
                    <p className="text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} All rigths reserved
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <div className="flex space-x-8">
                    <Link href='https://twitter.com/MarsCoinToken' className="text-sm text-muted-foreground">
                <TwitterLogoIcon className="inline-block  h-6 w-6"></TwitterLogoIcon>
              </Link>
              <Link href='https://t.me/+694PzfxDm3E3NTFl' className="text-sm text-muted-foreground">
              <Send className="inline-block h-6 w-6"></Send>
              </Link>
              <Link href='https://solscan.io/token/BiStEkoYoAfPJCKe33Hkossq3oXM52tS9m1BuP9g6H8c' className="text-sm text-muted-foreground">
              <Radar className="inline-block h-6 w-6"></Radar>
              </Link>
                    </div>
                </div>
            </div>
        </MaxWidthWrapper>
    </footer>
}

export default Footer