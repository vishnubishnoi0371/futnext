import { Insta, TikTok, Twiter, Discord, Youtube, Multi, Star } from "./Icon";

  // =========NavData==========//

  export const navData = [
    { name: "Home", to: "/" },
    { name: "SBC", to: "/about" },
    { name: "Evolution", to: "/services" },
    { name: "Packs", to: "/contact" },
    { name: "Subscription", to: "/packs" }, 
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
    icon: '',
    number: "13,000 Cost",
  },
];
