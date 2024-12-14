import React, { useEffect, useState } from "react";

import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  background-color: white;
  transition: box-shadow 0.3s ease;
  box-shadow: ${(props) =>
    props.$isScrolled ? "0 2px 4px rgba(0,0,0,0.1)" : "none"};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: #003366;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #004d99;
  }
`;

const DesktopNav = styled.nav`
  display: none;
  align-items: center;
  gap: 2rem;

  @media (min-width: 1024px) {
    display: flex;
  }
`;

const NavLink = styled(Link)`
  color: #4a5568;
  font-weight: 500;
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #003366;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #003366;
    &::after {
      width: 100%;
    }
  }
`;

const MobileMenuButton = styled.button`
  display: flex;
  padding: 0.5rem;
  color: #4a5568;
  transition: color 0.3s ease;

  @media (min-width: 1024px) {
    display: none;
  }

  &:hover {
    color: #003366;
  }
`;

const MobileMenu = styled.div`
  display: ${(props) => (props.$isOpen ? "block" : "none")};
  background-color: white;
  border-top: 1px solid #e2e8f0;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const MobileNav = styled.nav`
  padding: 1rem 0;
`;

const MobileNavLink = styled(Link)`
  display: block;
  padding: 0.75rem 0;
  color: #4a5568;
  font-weight: 500;
  text-decoration: none;
  border-bottom: 1px solid #f1f5f9;
  transition: color 0.3s ease;

  &:hover {
    color: #003366;
  }

  &:last-child {
    border-bottom: none;
  }
`;

const LanguageSelector = styled.div`
  position: relative;
  margin-left: 2rem;
`;

const LanguageButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  color: #4a5568;
  font-weight: 500;
  transition: color 0.3s ease;
  border-radius: 0.375rem;

  &:hover {
    color: #003366;
    background-color: #f1f5f9;
  }
`;

const LanguageDropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
  background-color: white;
  border-radius: 0.375rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  display: ${(props) => (props.$isOpen ? "block" : "none")};
  min-width: 160px;
  z-index: 50;
`;

const LanguageOption = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  color: #4a5568;
  text-decoration: none;
  transition: all 0.2s ease;
  font-size: 0.875rem;

  &:hover {
    background-color: #f1f5f9;
    color: #003366;
  }

  ${(props) =>
    props.$isActive &&
    `
    background-color: #f1f5f9;
    color: #003366;
    font-weight: 500;
  `}
`;

const LanguageFlag = styled.img`
  width: 20px;
  height: 15px;
  object-fit: cover;
  border-radius: 2px;
`;

const CurrentFlag = styled(LanguageFlag)`
  margin-right: 0.5rem;
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const languages = [
    {
      code: "fi",
      name: "Suomi",
      flag: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxODAwIDExMDAiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMTgwMHYxMTAwSDB6Ii8+PHBhdGggZmlsbD0iIzAwMjg1NSIgZD0iTTUwMCAwaDQwMHYxMTAwSDUwMHoiLz48cGF0aCBmaWxsPSIjMDAyODU1IiBkPSJNMCA0MDBoMTgwMHYzMDBIMHoiLz48L3N2Zz4=",
    },
    {
      code: "sv",
      name: "Svenska",
      flag: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNjAwIDEwMDAiPjxwYXRoIGZpbGw9IiMwMDZhYTciIGQ9Ik0wIDBoMTYwMHYxMDAwSDB6Ii8+PHBhdGggZmlsbD0iI2ZlY2IwMCIgZD0iTTUwMCAwaDIwMHYxMDAwSDUwMHoiLz48cGF0aCBmaWxsPSIjZmVjYjAwIiBkPSJNMCA0MDBoMTYwMHYyMDBIMHoiLz48L3N2Zz4=",
    },
    {
      code: "en",
      name: "English",
      flag: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MCAzMCI+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBkPSJNMCAwdjMwaDYwVjB6Ii8+PC9jbGlwUGF0aD48cGF0aCBmaWxsPSIjMDAyNDdkIiBkPSJNMCAwdjMwaDYwVjB6Ii8+PHBhdGggc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjYiIGQ9Ik0wIDB2MzBtMC0xNWg2ME0wIDE1bDYwLTMwbTAtMTVMMCAzMCIgY2xpcC1wYXRoPSJ1cmwoI2EpIi8+PHBhdGggc3Ryb2tlPSIjY2YxNDJiIiBzdHJva2Utd2lkdGg9IjQiIGQ9Ik0wIDB2MzBtMC0xNWg2ME0wIDE1bDYwLTMwbTAtMTVMMCAzMCIgY2xpcC1wYXRoPSJ1cmwoI2EpIi8+PHBhdGggc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEwIiBkPSJNMzAgMHYzME0wIDE1aDYwIiBjbGlwLXBhdGg9InVybCgjYSkiLz48cGF0aCBzdHJva2U9IiNjZjE0MmIiIHN0cm9rZS13aWR0aD0iNiIgZD0iTTMwIDB2MzBNMCAxNWg2MCIgY2xpcC1wYXRoPSJ1cmwoI2EpIi8+PC9zdmc+",
    },
  ];

  const navItems = [
    { path: "", label: t("nav.home") },
    { path: "products", label: t("nav.products") },
    { path: "about", label: t("nav.about") },
    { path: "contact", label: t("nav.contact") },
  ];

  const getCurrentLanguage = () => {
    const path = location.pathname;
    const langMatch = path.match(/^\/(en|fi|sv)/);
    return langMatch ? langMatch[1] : "fi";
  };

  const currentLang = getCurrentLanguage();

  useEffect(() => {
    i18n.changeLanguage(currentLang);
  }, [currentLang, i18n]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsLanguageOpen(false);
  }, [location]);

  const createLanguagePath = (langCode) => {
    const currentPath = location.pathname;
    const pathWithoutLang = currentPath.replace(/^\/(en|fi|sv)/, "");
    return `/${langCode}${pathWithoutLang || ""}`;
  };

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isLanguageOpen && !event.target.closest(".language-selector")) {
        setIsLanguageOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isLanguageOpen]);

  return (
    <HeaderWrapper $isScrolled={isScrolled}>
      <Container>
        <NavBar>
          <Logo to={`/${currentLang}`}>M.A.T-FISH</Logo>

          <DesktopNav>
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={`/${currentLang}${item.path ? "/" + item.path : ""}`}
              >
                {item.label}
              </NavLink>
            ))}

            <LanguageSelector className="language-selector">
              <LanguageButton
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              >
                <CurrentFlag
                  src={
                    languages.find((lang) => lang.code === currentLang)?.flag
                  }
                  alt={`${currentLang} flag`}
                />
                {languages.find((lang) => lang.code === currentLang)?.name}
              </LanguageButton>

              <LanguageDropdown $isOpen={isLanguageOpen}>
                {languages.map((lang) => (
                  <LanguageOption
                    key={lang.code}
                    to={createLanguagePath(lang.code)}
                    $isActive={currentLang === lang.code}
                    onClick={() => setIsLanguageOpen(false)}
                  >
                    <LanguageFlag src={lang.flag} alt={`${lang.code} flag`} />
                    {lang.name}
                  </LanguageOption>
                ))}
              </LanguageDropdown>
            </LanguageSelector>
          </DesktopNav>

          <MobileMenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </MobileMenuButton>
        </NavBar>

        <MobileMenu $isOpen={isMenuOpen}>
          <Container>
            <MobileNav>
              {navItems.map((item) => (
                <MobileNavLink
                  key={item.path}
                  to={`/${currentLang}${item.path ? "/" + item.path : ""}`}
                >
                  {item.label}
                </MobileNavLink>
              ))}
              {languages.map((lang) => (
                <MobileNavLink
                  key={lang.code}
                  to={createLanguagePath(lang.code)}
                  style={{
                    fontWeight: currentLang === lang.code ? "600" : "400",
                    color: currentLang === lang.code ? "#003366" : "#4a5568",
                  }}
                >
                  <LanguageFlag src={lang.flag} alt={`${lang.code} flag`} />
                  {lang.name}
                </MobileNavLink>
              ))}
            </MobileNav>
          </Container>
        </MobileMenu>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
