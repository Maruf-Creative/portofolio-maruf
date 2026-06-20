import{c as s,h as l,j as e,L as r,O as d,f as o,i as h,t as x}from"./index-B7mG8JaK.js";import{B as y}from"./button-B9Y2CWzl.js";import"./utils-DjqsqOe8.js";/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],g=s("briefcase",m);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],f=s("layout-dashboard",u);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]],b=s("log-out",p);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],j=s("user",k);function L(){const t=l(),n=async()=>{o&&(await h(o),x.success("Logged out successfully"))},c=[{name:"Dashboard",path:"/admin",icon:e.jsx(f,{className:"h-5 w-5"})},{name:"Projects",path:"/admin/projects",icon:e.jsx(g,{className:"h-5 w-5"})},{name:"Profile & Skills",path:"/admin/profile",icon:e.jsx(j,{className:"h-5 w-5"})}];return e.jsxs("div",{className:"flex h-screen w-full overflow-hidden bg-gray-50 dark:bg-gray-900",children:[e.jsxs("aside",{className:"w-64 flex-shrink-0 border-r bg-white dark:bg-gray-950 dark:border-gray-800 flex flex-col",children:[e.jsx("div",{className:"h-16 flex items-center px-6 border-b dark:border-gray-800",children:e.jsx("h1",{className:"text-xl font-bold tracking-tight",children:"Admin Panel"})}),e.jsx("nav",{className:"flex-1 overflow-y-auto py-4 px-3 space-y-1",children:c.map(a=>{const i=t.pathname===a.path||a.path!=="/admin"&&t.pathname.startsWith(a.path);return e.jsxs(r,{to:a.path,className:`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${i?"bg-primary text-primary-foreground":"text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"}`,children:[a.icon,a.name]},a.name)})}),e.jsxs("div",{className:"p-4 border-t dark:border-gray-800",children:[e.jsxs(y,{variant:"outline",className:"w-full flex items-center justify-center gap-2",onClick:n,children:[e.jsx(b,{className:"h-4 w-4"}),"Logout"]}),e.jsx("div",{className:"mt-2 text-center",children:e.jsx(r,{to:"/",className:"text-xs text-muted-foreground hover:underline",children:"Buka Website"})})]})]}),e.jsxs("main",{className:"flex-1 flex flex-col overflow-hidden",children:[e.jsx("div",{className:"h-16 flex flex-shrink-0 items-center justify-between px-6 border-b bg-white dark:bg-gray-950 dark:border-gray-800",children:e.jsx("h2",{className:"text-lg font-medium",children:"Dashboard"})}),e.jsx("div",{className:"flex-1 overflow-auto p-6",children:e.jsx(d,{})})]})]})}export{L as AdminLayout};
