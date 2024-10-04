import "./globals.css";

export const metadata = {
    title: "Helby",
    description: "Helby",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`max-w-[1600px] relative mx-auto`}>
                {children}
            </body>
        </html>
    );
}
