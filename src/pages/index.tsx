import { GetStaticProps } from "next";

import { Header } from "../components/Header";

export default function Home() {
    return (
        <h1>Index</h1>
    )
}

export const getStaticProps: GetStaticProps = async () => {


    return {
        props: {
            episodes: []
        },
        revalidate: 60 * 60 * 8 // 8 hours
    }
}
