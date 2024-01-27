export default function Productdetail({params}:{
    params: {reviewid: string}
}){
    return (
        <>
        <h1>Details product .{params.reviewid}</h1>
        </>
    )
}