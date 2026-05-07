"use client"

import { Toaster as Sonner, type ToasterProps } from "sonner"

const Toaster = (props: ToasterProps) => {
  return (
    <Sonner
      theme="light"
      className="toaster group"
      style={
        {
          "--normal-bg": "#ffffff",
          "--normal-text": "#1a1a1a",
          "--normal-border": "#e7e5e4",
          "--success-bg": "#ffffff",
          "--success-text": "#1a1a1a",
          "--success-border": "#e7e5e4",
          "--border-radius": "12px",
        } as React.CSSProperties
      }
      toastOptions={{
        classNames: {
          icon: "text-[#C09A4E]",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
