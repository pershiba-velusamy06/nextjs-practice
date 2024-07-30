
export default function productDetails({ params }: {
    params: { productId: string }
}) {
    return <h1>product details Page {params.productId}</h1>
}
