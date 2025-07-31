// alx-project-0x03/interface/index.ts

export interface HeroSectionProps {
  title: string;
  subtitle: string;
}

export interface ButtonProps {
  text: string;
  onClick: () => void;
}

export interface LayoutProps {
  children: React.ReactNode;
}
