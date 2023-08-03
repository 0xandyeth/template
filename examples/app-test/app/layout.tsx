import React, { ReactNode } from 'react'
type Props ={
    children:ReactNode
}
export default function RootLayout({children}:Props) {
    return (
        <html lang='en'>
            <header>Victory</header>
            <body>{children}</body>
        </html>
    )
}
