import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://googleads.g.doubleclick.net" />
        <link rel="dns-prefetch" href="https://identity.netlify.com" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (location.pathname.startsWith("/admin")) {
                var s = document.createElement("script");
                s.src = "https://identity.netlify.com/v1/netlify-identity-widget.js";
                s.async = true;
                s.onload = function () {
                  if (window.netlifyIdentity) {
                    window.netlifyIdentity.on("init", function (user) {
                      if (!user) {
                        window.netlifyIdentity.on("login", function () {
                          document.location.href = "/admin/";
                        });
                      }
                    });
                  }
                };
                document.head.appendChild(s);
              }
            `,
          }}
        />
      </body>
    </Html>
  )
}
