import Link, { type LinkProps } from 'next/link';

type CustLink = LinkProps & { children: React.ReactNode } & { target?: string} & {id?: string} & { rel?: string } & { className?: string } & { style?: React.CSSProperties } & { href: string } & { prefetch?: boolean };

export function ApLink({ href, prefetch = false, children, ...rest }: CustLink) {
  return (
    <Link href={href} prefetch={prefetch} {...rest}>
      {children}
    </Link>
  );
}