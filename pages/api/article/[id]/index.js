import { useRouter } from "next/router";
import Link from "next/link";

const article = ({}) => {
    return(
        <>
        <h1>This article {article.id}</h1>
        <Link href="/"><button>Go Back</button>
            </Link>
        </>
    )
}

export const getServerSideProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`) 

const article = await res.json()

return {
    props: {
        article
    }
}

}

export const getStaticPaths = async() => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/}`) 

    const article = await res.json()

    const ids = article.map(article => article.id)

   return{
    paths: {
        params: {id: '1', id: '2'}
    }
   }

}


export default article