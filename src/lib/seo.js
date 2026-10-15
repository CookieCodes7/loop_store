

export const DESC={home:'Minimal accessories designed for everyday style.',shop:'Shop rings, necklaces and bracelets by LOOP.',collections:'Shop LOOP by style: everyday, statement, essentials and stack.',about:'About LOOP: minimal accessories, intentional details.',contact:'Get in touch with LOOP.',checkout:'Complete your LOOP order.',order:'Your LOOP order confirmation.'};

export function setMeta(t,d){document.title=t;[['name','description',d],['property','og:title',t],['property','og:description',d]].forEach(([a,n,c])=>{const m=document.querySelector('meta['+a+'="'+n+'"]');m&&m.setAttribute('content',c)})}
