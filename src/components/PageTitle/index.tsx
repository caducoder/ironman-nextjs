import Head from "next/head";

function PageTitle({ title }: {title: string}) {
    return ( 
        <Head>
            <title>{title}</title>
        </Head>
     );
}

export default PageTitle;