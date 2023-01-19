import Header from "@/components/Header";
import React from "react";

type LayoutProps = {
    children: React.ReactNode [] | React.ReactNode
}

export default function Layout ({children}: LayoutProps) {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    )
}