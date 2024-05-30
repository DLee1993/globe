import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";

export default function Navbar() {
    return (
        <nav className="h-full flex justify-between items-center px-4 sm:px-8 md:px-12 lg:px-16">
            <Link href="/">
                <h1 className="text-xl uppercase dark:text-purple-600">Globe</h1>
            </Link>
            <ThemeSwitch />
        </nav>
    );
}
