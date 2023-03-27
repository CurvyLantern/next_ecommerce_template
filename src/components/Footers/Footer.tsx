import Link from 'next/link';
import { useState } from 'react';
import Container from '../containers/Container';
import { allFooterLinks } from './mock.footer';
const Footer = () => {
  return (
    <footer className=''>
      <Container className='grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-7 py-10'>
        {allFooterLinks.map((linkObj, index) => {
          return (
            <div key={index}>
              <p className='text-xl font-semibold mb-2'>{linkObj.title}</p>
              <ul className='flex flex-col text-sm px-2 gap-1'>
                {linkObj.links.map((link, idx) => {
                  //@ts-ignore
                  // TODO: figure out why types not working
                  const LinkIcon = link.icon ?? (() => null);
                  return (
                    <li key={idx} className='flex items-center gap-3'>
                      <LinkIcon />
                      <LinkTitle href={link.href} title={link.title} />
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </Container>
      <p className='py-8 text-center text-sm border-2'>
        Copyright &#169; 2023 hmmmm, Inc. All rights reserved
      </p>
    </footer>
  );
};

const LinkTitle: React.FC<{
  href: string;
  title: string;
}> = ({ title, href }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <span
      className={`relative ${hovered ? 'scale-105' : 'scale-100'} transition`}
      onPointerOver={() => {
        setHovered(true);
      }}
      onPointerOut={() => {
        setHovered(false);
      }}>
      <Link href={href}>{title}</Link>
      <span
        className='w-full h-[1px] bg-black absolute -bottom-[2px] left-0 transition origin-left'
        style={{
          transform: `scaleX(${hovered ? 1 : 0})`,
        }}></span>
    </span>
  );
};

export default Footer;
