export interface HeroContent {
  heading: string;
  subheading: string;
  description: string;
  primaryButton: {
    label: string;
    href: string;
  };
  secondaryButton: {
    label: string;
    href: string;
  };
  imageAlt: string;
  imageSrc: string;
}
