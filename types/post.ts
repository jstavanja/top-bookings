import { StaticImageData } from "next/image";

export interface Post {
  id: string;
  ctaText: string;
  imageSrc: string | StaticImageData;
  text: string;
  title: string;
}
