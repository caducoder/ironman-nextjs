import NextLink from 'next/link'

function Link({children, href, target = "_self", styleSheet, ...props}: {children: string | JSX.Element, href: string, target?: string, styleSheet?: any}) {
    return ( 
        <NextLink href={href}>
            <a target={target} {...props}>{children}</a>
        </NextLink>
     );
}

export default Link;