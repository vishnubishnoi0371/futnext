import { Insta, TikTok, Twiter, Discord, Youtube } from "./Icon";
import { Multi, Star, UtCoin } from "./Icon";

  // =========NavData==========//

export const navData = [
    {
      name: "Home",
      to: "#aboutus",
    },
    {
      name: "SBC",
      to: "#ourservices",
    },
 
    {
      name: "Packs",
      to: "#testimonials",
    },
    {
      name: "Subscription",
      to: "#contactus",
    },
  ];
  // =========FooterData==========//
export const footerData = [
    {
      name: "SBC's",
      to: "#aboutus",
    },
    {
      name: "Evolutions",
      to: "#ourservices",
    },
 
    {
      name: "Packs",
      to: "#testimonials",
    },
    {
      name: "Privacy Policy",
      to: "#contactus",
    },
    {
      name: "Terms of service",
      to: "#contactus",
    },
  ];
 export const SocialMediaLinks = [
    { name: 'TikTok', url: 'https://www.tiktok.com/about', icon: TikTok },
    { name: 'Instagram', url: 'https://www.instagram.com/', icon: Insta },
    { name: 'Twitter', url: 'https://x.com/', icon: Twiter },
    { name: 'Discord', url: 'https://support.discord.com/hc/en-us/community/posts/360056220432-Login', icon: Discord },
    { name: 'YouTube', url: 'https://www.youtube.com/', icon: Youtube },
  ];
  


// ================================= SOLUTION ============================================//
export const rateingList = [
  {
    icon: <Star />,
    number: "93.08",
  },
  {
    icon: <Multi />,
    number: "4-3-3",
  },
  {
    icon: <UtCoin />,
    number: "13,000 Cost",
  },
];

export const SbcsList = [
  {
  title:'Upgrades',
  heading:'Weekly 90+ TOTS Player Pick',
  cost:'13,000 Cost',
  img:'/assets/images/webp/upgradeshield1.webp'
  },
  {
    title:'Exchanges',
    heading:'Hybrid Leagues',
    cost:'12,000 Cost',
    img:'/assets/images/webp/exchangeshield.webp'
    }
]
