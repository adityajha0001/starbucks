import {useRouter} from "next/router";
import Link from "next/link";






const CoffeeStore =()=>{

    const router = useRouter();
    console.log("router", router);
    return(
       <>
       <h1>hello it is a coffee page {router.query.id}</h1>
       
       <Link  legacyBehavior href="/">
       <a> Back to home</a>
       </Link>
       
       </>
    )
};

export default CoffeeStore;