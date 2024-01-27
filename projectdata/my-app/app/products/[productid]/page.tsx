export default function Productdetail({params}:{
    params: {productid: string}
}){
    return (
        <>
        <h1>Details product .{params.productid}</h1>
        </>
    )
}