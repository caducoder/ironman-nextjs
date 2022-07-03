import NextLink from 'next/link'

function Link({children, href, ...props}: {children: string, href: string}) {
    return ( 
        <NextLink href={href}>
            <a {...props}>{children}</a>
        </NextLink>
     );
}

export default Link;