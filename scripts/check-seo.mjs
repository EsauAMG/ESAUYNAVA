import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {pages} from '../src/data/pages.js';
const root=path.resolve('dist');
const routes=['/',...pages.map(p=>'/'+p.slug+'/'),'/demos/restaurante/','/demos/lavanderia/','/demos/inmobiliaria/'];
const titles=new Set(),descriptions=new Set();
for(const route of routes){
 const file=path.join(root,route,'index.html'),html=fs.readFileSync(file,'utf8');
 assert.equal((html.match(/<h1(?:\s|>)/g)||[]).length,1,route+' needs one h1');
 const title=html.match(/<title>(.*?)<\/title>/s)?.[1],description=html.match(/<meta name="description" content="([^"]+)"/)?.[1];
 assert(title&&!titles.has(title),route+' unique title');titles.add(title);
 assert(description&&!descriptions.has(description),route+' unique description');descriptions.add(description);
 assert(html.includes('rel="canonical" href="https://esau-estudio-web-portfolio.cocoaamber21.chatgpt.site'+route+'"'),route+' canonical');
 for(const match of html.matchAll(/(?:href|src)="([^"#]+)(?:#[^"]*)?"/g)){
  const value=match[1];if(!value.startsWith('/'))continue;
  let target=value.split('?')[0].split('#')[0];
  if(target.endsWith('/'))target+='index.html';
  assert(fs.existsSync(path.join(root,target)),route+' missing local target '+target);
 }
 const demo=route.startsWith('/demos/')&&route!=='/demos/';
 assert(html.includes(demo?'noindex,follow':'index,follow,max-image-preview:large'),route+' robots');
 if(!demo){const json=html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)?.[1];assert(json,route+' schema');JSON.parse(json);}
 console.log('OK '+route);
}
const sitemap=fs.readFileSync('dist/sitemap.xml','utf8');
assert.equal((sitemap.match(/<loc>/g)||[]).length,8);
assert(!sitemap.includes('/demos/restaurante/'));
assert(fs.readFileSync('dist/robots.txt','utf8').includes('/sitemap.xml'));
console.log('SEO checks passed: headings, metadata, canonicals, links, assets, JSON-LD and sitemap.');
