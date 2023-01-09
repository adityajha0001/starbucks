import Link from "next/link";
import Image from "next/image";


const Cart=(params)=>{
    return(
        <>
       <Link legacyBehavior href={params.fsq_id}>
            <div>
                <div className="py-32 px-44">
                    <Image src ={params.imgUrl}
                           width={260}
                           height={160}/>
                    <h1 className="text-2xl font-bold">{params.name}</h1>
                </div>
            </div>
       </Link>
        </>
    )
};


export default Cart;