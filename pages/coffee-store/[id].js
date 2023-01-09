import {useRouter} from "next/router";
import Link from "next/link";
import Head from "next/head";

import CoffeeStoreData from "../../data/005 coffee-stores.json";
export function getStaticProps(staticProps){
    const params = staticProps.params;
    console.log("params",params)
    return{
        props: {
             CoffeeStore: CoffeeStoreData.find(CoffeeStore => {
                return CoffeeStore.id.toString()===params.id; 
             })
            }
    }
}

export function getStaticPaths(){
    const paths = CoffeeStoreData.map((coffeeStore) => {
        return {
            params : {
                id : CoffeeStore.id.toString(),
            },
        };
    });
    return {
        paths,
        fallback : true,
    };
}  

const CoffeeStore =(props)=>{ 

    const router = useRouter();
    console.log("router", router);

    if(router.isFallback){
        return<div>Loading....</div>
    }

    const {address , name , neighbourhood} = props.CoffeeStore;

    return(
       <> 
       <Head>
         <title>{name}</title>
       </Head>
       
       <Link  legacyBehavior href="/">
       <a> Back to home</a>
       </Link>
      
       <p>{address}</p>
       <p>{name}</p>
       <p>{neighbourhood}</p>
       
       </>
    );
};

export default CoffeeStore;