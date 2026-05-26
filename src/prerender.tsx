import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'

import App from './App'

export async function prerender({ url }: { url: string }) {
    // Don't prerender dynamic/live-data routes
    if (url.startsWith('/blog')) {
        return { html: '', links: new Set() }
    }

    const html = renderToString(
        <StaticRouter location={url}>
            <App />
        </StaticRouter>
    )

    const { parseLinks } = await import('vite-prerender-plugin/parse')

    return { html, links: new Set(parseLinks(html)) }
}