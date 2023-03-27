import { IconType } from 'react-icons/lib/esm/iconBase';
import {
  TbBrandFacebook,
  TbBrandInstagram,
  TbBrandTwitter,
  TbBrandYoutube,
} from 'react-icons/tb';
interface IFooterLink {
  title: string;
  href: string;
}
type IFooterLinks = IFooterLink[];
interface SocialLink extends IFooterLink {
  icon: IconType;
}
type SocialLinks = SocialLink[];
const socialLinks: SocialLinks = [
  {
    title: 'Instagram',
    icon: TbBrandInstagram,
    href: '#',
  },
  { href: '#', title: 'Twitter', icon: TbBrandTwitter },
  {
    href: '#',
    title: 'Facebook',
    icon: TbBrandFacebook,
  },
  {
    href: '#',
    title: 'Youtube',
    icon: TbBrandYoutube,
  },
];
const aboutLinks: IFooterLinks = [
  { href: '#', title: 'Support Center' },
  { href: '#', title: 'Customer Support' },
  { href: '#', title: 'About Us' },
  { href: '#', title: 'Copyright' },
];
const contactLinks: IFooterLinks = [
  { href: '#', title: 'Contact Us' },
  { href: '#', title: 'yourexample@email.com' },
  { href: '#', title: 'examplae@email.com' },
  { href: '#', title: 'call us : +999mmm999' },
];
const customerLinks: IFooterLinks = [
  { href: '#', title: 'FAQ & Helps' },
  { href: '#', title: 'Shipping & Delivery' },
  { href: '#', title: 'Return & Exchanges' },
];

const cateogryLinks: IFooterLinks = [
  { href: '#', title: 'Mens wear' },
  { href: '#', title: 'Kids wear' },
  { href: '#', title: 'Sports wear' },
];
export const allFooterLinks: (
  | {
      title: string;
      links: IFooterLinks;
    }
  | {
      title: string;
      links: SocialLinks;
    }
)[] = [
  {
    title: 'Social',
    links: socialLinks,
  },
  {
    title: 'Contact',
    links: contactLinks,
  },
  {
    title: 'About',
    links: aboutLinks,
  },
  {
    title: 'Customer Care',
    links: customerLinks,
  },
  {
    title: 'Top Categories',
    links: cateogryLinks,
  },
];
