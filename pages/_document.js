import { Html, Head, Main, NextScript } from "next/document"
import Script from "next/script"

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <script
          async
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7182528185795867"
          crossorigin="anonymous"
        ></script>

        <script id="init-ga" async src="https://www.googletagmanager.com/gtag/js?id=G-0529X1RN3D"></script>

        <Script id="google-analytics" >
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', G-0529X1RN3D);
          `}
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (window.netlifyIdentity) {
                window.netlifyIdentity.on("init", user => {
                  if (!user) {
                    window.netlifyIdentity.on("login", () => {
                      document.location.href = "/admin/";
                    });
                  }
                });
              }
          `,
          }}
        />
      </body>
    </Html>
  )
}
