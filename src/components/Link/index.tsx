import NextLink from 'next/link'

function Link({children, href, styleSheet, ...props}: {children: string | JSX.Element, href: string, styleSheet?: any}) {
    return ( 
        <NextLink href={href}>
            <a {...props}>{children}</a>
        </NextLink>
     );
}

export default Link;