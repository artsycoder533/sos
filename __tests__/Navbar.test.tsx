import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "@/app/components/Navbar";

describe("Navbar", () => {
  test("should render without crashing", () => {
    render(<Navbar />);

    const navbar = screen.getByRole("navigation");

    expect(navbar).toBeInTheDocument();
  });

  test("should display all navigation links with correct text and href", () => {
    render(<Navbar />);

    const expectedLinks = [
      { text: "Home", href: "/" },
      { text: "Business Directory", href: "/business-directory" },
      { text: "List Your Business", href: "/list-your-business" },
      { text: "Contact", href: "/contact" },
    ];

    const navLinks = screen.getByRole("list").querySelectorAll("li > a");

    expectedLinks.forEach((expectedLink, index) => {
      const navLink = navLinks[index];
      expect(navLink).toHaveTextContent(expectedLink.text);
      expect(navLink).toHaveAttribute("href", expectedLink.href);
    });

    const brandLink = screen.getByRole('link', { name: /shades of service/i});
    expect(brandLink).toBeInTheDocument();
    expect(brandLink).toHaveAttribute("href", "/");
  });

  test("should render login button when user is not logged in", () => {
    render(<Navbar />);

    const loginButtons = screen.getAllByRole('button', {name: /member login/i});
    loginButtons.forEach(button => expect(button).toBeInTheDocument());
  });

  test("should open and close the mobile menu when hamburger button is clicked", async () => {
    render(<Navbar />);

    const hamburgerButton = screen.getByLabelText("menu");
    const menu = screen.getByRole("list");

    expect(menu).toHaveClass('translate-x-[100vh]')

    const user = userEvent.setup();
    await user.click(hamburgerButton);
    expect(menu).toHaveClass('translate-x-0')

    await user.click(hamburgerButton);
    expect(menu).toHaveClass('translate-x-[100vh]');
  });

  test("clicking on a navbar link should close the mobile menu", async () => {
    render(<Navbar />);

    const menu = screen.getByRole("list");

    const hamburgerButton = screen.getByLabelText("menu");
    const user = userEvent.setup();
    await user.click(hamburgerButton);

    waitFor(() => {
      expect(menu).toBeVisible();
    });

    const navLinks = screen.getAllByRole("link");
    await user.click(navLinks[1]);

    waitFor(() => {
      expect(menu).not.toBeVisible();
    });
  });
});
