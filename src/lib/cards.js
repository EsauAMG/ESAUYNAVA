import {properties} from '../data/properties.js';
const photo=n=>`/assets/${n}.jpg`;
const image=(n,alt,cls='')=>`<img class="${cls}" src="${photo(n)}" alt="${alt}" loading="lazy" width="800" height="600">`;
const arrow='↗';
const external=url=>url.startsWith('https:')?' target="_blank" rel="noopener noreferrer"':'';
function demoCard(d){return `<article class="demo-card reveal"><a href="${d.path}"${external(d.path)} aria-label="Ver demo ${d.name}"><div class="demo-art ${d.style||''}">${d.image?`<img src="/assets/${d.image}" alt="Captura real de la demo ${d.name}" width="1265" height="712" loading="lazy">`:`${image(d.photo,`Imagen ilustrativa para ${d.name}`)}<div class="art-title"><small>${d.label}</small><strong>${d.name}</strong></div>`}</div></a><div class="demo-body"><span class="eyebrow">${d.sector} · ${d.image?'Demo externa':'Demo navegable'}</span><h3>${d.name}</h3><p>${d.text}</p><a href="${d.path}"${external(d.path)}>Ver demo <span>${arrow}</span></a></div></article>`}
const money=n=>new Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN',maximumFractionDigits:0}).format(n);
function propertyCard(p){return `<article class="item">${image(p.img,p.name+' — fotografía ilustrativa, no corresponde a un inmueble real en oferta')}<div class="item-body"><span class="eyebrow">${p.op} · ${p.zone}</span><h3>${p.name}</h3><p class="item-price">${money(p.price)} MXN${p.op==='Renta'?' / mes':''}</p><p>${p.beds} recámaras · ${p.baths} baños · ${p.area} m²</p><button class="btn light" data-property="${p.id}">Ver propiedad ↗</button></div></article>`}
export {photo,image,demoCard,propertyCard,money};
