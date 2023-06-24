'use client'
import { Button } from "@/components/flowbite"

export default function Increment({method}:{method: ()=>Promise<void>}){
    return (
        <Button onClick={async ()=> await method()}>Advance</Button>
    )
}