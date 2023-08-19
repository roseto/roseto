import{r as o}from"./index.453e6029.js";import{c as p,a as h}from"./index.46f1f68c.js";import{j as b}from"./jsx-runtime.4844db2a.js";function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function v(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function f(...e){return t=>e.forEach(n=>v(n,t))}function V(...e){return o.useCallback(f(...e),e)}const m=o.forwardRef((e,t)=>{const{children:n,...r}=e,s=o.Children.toArray(n),i=s.find($);if(i){const a=i.props.children,c=s.map(u=>u===i?o.Children.count(a)>1?o.Children.only(null):o.isValidElement(a)?a.props.children:null:u);return o.createElement(d,l({},r,{ref:t}),o.isValidElement(a)?o.cloneElement(a,void 0,c):null)}return o.createElement(d,l({},r,{ref:t}),n)});m.displayName="Slot";const d=o.forwardRef((e,t)=>{const{children:n,...r}=e;return o.isValidElement(n)?o.cloneElement(n,{...x(r,n.props),ref:t?f(t,n.ref):n.ref}):o.Children.count(n)>1?o.Children.only(null):null});d.displayName="SlotClone";const g=({children:e})=>o.createElement(o.Fragment,null,e);function $(e){return o.isValidElement(e)&&e.type===g}function x(e,t){const n={...t};for(const r in t){const s=e[r],i=t[r];/^on[A-Z]/.test(r)?s&&i?n[r]=(...c)=>{i(...c),s(...c)}:s&&(n[r]=s):r==="style"?n[r]={...s,...i}:r==="className"&&(n[r]=[s,i].filter(Boolean).join(" "))}return{...e,...n}}const y=h("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),E=o.forwardRef(({className:e,variant:t,size:n,asChild:r=!1,...s},i)=>{const a=r?m:"button";return b.jsx(a,{className:p(y({variant:t,size:n,className:e})),ref:i,...s})});E.displayName="Button";export{V as $,E as B,l as _,m as a};
