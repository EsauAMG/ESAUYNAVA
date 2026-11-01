import {portfolio} from './render.js';
// Reuse the existing content while each route renders only its own section.
const source=portfolio();
export function section(selector){
 const marker=source.indexOf(selector);
 if(marker<0)throw new Error('Unknown section: '+selector);
 const start=source.lastIndexOf('<section',marker);
 const tags=source.slice(start).matchAll(/<section\b[^>]*>|<\/section>/g);
 let depth=0;
 for(const tag of tags){depth+=tag[0].startsWith('</')?-1:1;if(!depth)return source.slice(start,start+tag.index+tag[0].length);}
 throw new Error('Unclosed section: '+selector);
}
export function links(html){return html.replace(/href="#(proyectos|demos|servicios|paquetes|contacto)"/g,(_,id)=>'href="/'+id+'/"').replace(/href="[/]contacto[/]" data-plan="([^"]+)"/g,(_,plan)=>'href="/contacto/?servicio='+encodeURIComponent(plan)+'" data-plan="'+plan+'"');}
export function pageSection(page){let html=section(page.selector);html=html.replace(/<h2>.*?<\/h2>/s,'<h1>'+page.heading+'</h1>');return links(html);}
export function homeHero(){return links(section('class="hero"'));}
export function homeProjects(){return links(section('id="proyectos"').replace('</section>','<a class="btn light" style="margin-top:28px" href="/proyectos/">Explorar proyectos reales ↗</a></section>'));}

