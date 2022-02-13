import Link from "next/link";

interface ListItemProps {
  title: string;
  href?: string;
}

export default function FooterItem(props: ListItemProps) {
  const { title, href = "/" } = props;

  return (
    <li className="mb-6">
      <Link href={href}>
        <a className="text-lg color-palette-1 text-decoration-none">{title}</a>
      </Link>
    </li>
  );
}
