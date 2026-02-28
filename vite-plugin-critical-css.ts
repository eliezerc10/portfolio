import { Plugin } from 'vite';
import fs from 'node:fs';
import path from 'node:path';

export function criticalCssPlugin(): Plugin {
  return {
    name: 'vite-plugin-critical-css',
    transformIndexHtml: {
      order: 'post',
      handler(html) {
        // Read critical CSS file
        const criticalCssPath = path.resolve(__dirname, 'src/critical.css');
        
        if (fs.existsSync(criticalCssPath)) {
          const criticalCss = fs.readFileSync(criticalCssPath, 'utf-8');
          
          // Minify critical CSS (basic minification)
          const minifiedCss = criticalCss
            .replaceAll(/\/\*[\s\S]*?\*\//g, '') // Remove comments
            .replaceAll(/\s+/g, ' ') // Collapse whitespace
            .replaceAll(/\s*([{}:;,])\s*/g, '$1') // Remove spaces around special chars
            .trim();
          
          // Inject critical CSS inline in <head>
          return html.replace(
            '</title>',
            `</title>\n    <style>${minifiedCss}</style>`
          );
        }
        
        return html;
      }
    }
  };
}
