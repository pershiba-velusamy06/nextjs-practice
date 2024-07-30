export default function Docs({ params }: {
    params: { slug: string[] }
}) {
    if(params.slug?.length===2){
        return <h1>Viewing docs for feature of {params.slug[0]} and concept of {params.slug[1]}</h1>
       }
   else if(params.slug?.length===3){
    return <h1>Viewing docs for feature of {params.slug[0]}, concept of {params.slug[1]} and example of {params.slug[2]}</h1>
   }else if(params.slug?.length===1){
    return <h1>Viewing docs for feature of {params.slug[0]}</h1>
   }

   return <h1>Docs home page</h1>
}