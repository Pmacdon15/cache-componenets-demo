import { getDelayedData } from "@/lib/DAL/dal"

export default async function Page(){
    await getDelayedData()
    return (
        <p>No content until promise resolves</p>
    )
}