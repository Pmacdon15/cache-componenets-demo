import { getDelayedData } from "@/lib/DAL/dal"

export default async function Page(){
    await getDelayedData()
    return (
        <p>Renders fallback then contents after promise resolves</p>
    )
}