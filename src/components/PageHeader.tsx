import Link from "next/link";
import styles from "@/styles/PageHeader.module.scss";

const navigationItems = [
  { href: "/page01", label: "About" },
  { href: "/page02", label: "Services" },
  { href: "/page03", label: "Contact" },
  { href: "/page04", label: "Customer" },
];

export default function PageHeader(){
  return(
    <div className={styles.pageHeader}>
      <header>
        <h1><Link href="/">Logo Here</Link></h1>
        <ul>
          {navigationItems.map((item, index) => (
            <li key={index}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </header>
    </div>
  )
}