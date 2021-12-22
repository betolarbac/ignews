import Prismic from "@prismicio/client"

//config de prismic token para poder receber dados 
export function getPrismicClient(req?: unknown){
    const prismic = Prismic.client(
        process.env.PRISMIC_ENDPOINT,
        {
            req,
            accessToken: process.env.PRISMIC_ACCESS_TOKEN
        }
    )

    return prismic;
}



