This is a [Next.js](https://nextjs.org/) demo project rendering a PDF on the fly while content editors change content into Storyblok.

## Getting Started

Clone the repository, you can use the git client or the GitHub command line tool:

```shell
gh repo clone roberto-butti/storyblok-pdf-productsheet
```

Enter into the directory created:

```shell
cd storyblok-pdf-productsheet
```

Install the packages:

```shell
npm install
```

Create localhost self-signed certificates:

```shell
mkcert localhost
```

Run the local SSL proxy:

```shell
local-ssl-proxy --source 3010 --target 3000 --cert localhost.pem --key localhost-key.pem
```
The command opens port 3010 with HTTPS protocol and forwards the requests to 3000.

In another terminal, run  the local web server:

```shell
npm run dev
```
The webserver opens port 3000 with HTTP protocol.

Now via the web browser, you can open the page https://localhost:3010/pdf
