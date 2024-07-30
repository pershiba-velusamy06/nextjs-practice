
import {notFound} from "next/navigation"

export default function productDetails({ params }: {
    params: { reviewId: string, productId: string }
}) {
    if(parseInt(params.reviewId)>1000){
        notFound()
    }
    return <h1>review {params.reviewId} of product {params.productId}</h1>
}
