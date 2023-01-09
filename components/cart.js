import Link from "next/link";
import Image from "next/image";


const Cart=(props)=>{
    return(
        <>
       <Link legacyBehavior href = {props.href}>
            <div>
                <div className="py-32 px-44">
                    <Image src ={props.imgUrl}
                           width={260}
                           height={160}/>
                    <h1 className="text-2xl font-bold">{props.name}</h1>
                </div>
            </div>
       </Link>
        </>
    )
};


export default Cart;