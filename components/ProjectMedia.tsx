import Image from "next/image";

/** Shows a project screenshot, or a title tile until one is added. */
export default function ProjectMedia({ src, alt, label, sizes }: { src?: string; alt: string; label: string; sizes: string }) {
  if (!src) {
    return <div className="media-placeholder">{label}</div>;
  }
  return <Image src={src} alt={alt} fill sizes={sizes} className="media-img" />;
}
