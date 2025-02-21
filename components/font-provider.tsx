"use client"

import type React from "react"

import { Grey_Qo, Roboto_Slab } from "next/font/google"

const greyQo = Grey_Qo({ weight: "400", subsets: ["latin"] })
const robotoSlab = Roboto_Slab({ subsets: ["latin"] })

export function FontProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-grey-qo: ${greyQo.style.fontFamily};
          --font-roboto-slab: ${robotoSlab.style.fontFamily};
        }
      `}</style>
      {children}
    </>
  )
}

