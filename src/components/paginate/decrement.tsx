'use client'
import { Button } from "@/components/flowbite"

export default function Decrement({method}:{method: ()=>Promise<void>}){
    return (
        <Button onClick={async ()=> await method()}>Decrement</Button>
    )
}