export default function car({carName}){
    if (carName==="JCB")
    {
        throw new error("JCB is not a car")
    }
    return(
        <div>
{carName}

        </div>
    )
}