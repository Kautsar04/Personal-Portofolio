import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
  Button
} from "@heroui/react";
import { useTranslation } from "react-i18next";
import { useState } from "react";

interface NavbarProps {
  toggleDark: () => void;
  toggleLanguage: () => void;
}

export default function NavbarComponent({
  toggleDark,
  toggleLanguage
}: NavbarProps) {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Profile", href: "#" },
    { label: "Dashboard", href: "#", active: true },
    { label: "Activity", href: "#" },
    { label: "Analytics", href: "#" }
  ];

  return (
    <Navbar
  isBordered
  shouldHideOnScroll
  isMenuOpen={isMenuOpen}
  onMenuOpenChange={setIsMenuOpen}
  className="bg-white dark:bg-gray-900 text-black dark:text-white px-4 py-2"
>
      {/* Toggle + Brand (mobile) */}
      <NavbarContent className="md:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="md:hidden" justify="center">
        <NavbarBrand>
          <Link href="/" className="font-bold text-lg">
            {t("home")}
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Brand (desktop) */}
      <NavbarBrand className="hidden md:flex">
        <Link href="/" className="font-bold text-lg">
          {t("home")}
        </Link>
      </NavbarBrand>

      {/* Menu (desktop) */}
      <NavbarContent className="hidden md:flex" justify="center">
        {menuItems.map(({ label, href, active }, idx) => (
          <NavbarItem key={idx} isActive={!!active}>
            <Link href={href}>{label}</Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Theme & Lang Button (all viewports) */}
      <NavbarContent justify="end" className="gap-3 px-2">
  <NavbarItem>
    <Button onPress={toggleLanguage} size="md" className="min-w-[80px] px-4 py-2 text-sm">
      🌐 {i18n.language.toUpperCase()}
    </Button>
  </NavbarItem>
  <NavbarItem>
    <Button onPress={toggleDark} size="md" className="min-w-[80px] px-4 py-2 text-sm">
      🌓 Theme
    </Button>
  </NavbarItem>
</NavbarContent>

      {/* Dropdown Menu (mobile) */}
      <NavbarMenu>
        {menuItems.map(({ label, href }, index) => (
          <NavbarMenuItem key={index}>
            <Link
              href={href}
              className="w-full text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
