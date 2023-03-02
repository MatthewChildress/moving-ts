import StyledComponentsRegistry from "./lib/registry";
import NavBar from "./components/layout/navbar/NavBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          <NavBar />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
