(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[903],{9517:(e,t,s)=>{Promise.resolve().then(s.bind(s,2084))},7030:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});var n=s(5155),o=s(7825),i=s(2051),a=s(1640);function r(){return(0,n.jsxs)("footer",{className:"mt-6 text-center text-gray-400 text-sm",children:[(0,n.jsxs)("p",{className:"mb-2",children:["Created by ",(0,n.jsx)("a",{className:"text-cyan-300",target:"_blank",href:"https://www.purutuladhar.com",children:"Puru Tuladhar"})," – Sharpen your skills and keep learning!"]}),(0,n.jsxs)("a",{href:"https://tally.so/r/3N4O8W",target:"_blank",className:"text-underline",children:["Leave a ",(0,n.jsx)("span",{className:"text-cyan-300",children:"feedback"})]})," | ",(0,n.jsxs)("a",{href:"https://patreon.com/puru",target:"_blank",className:"",children:["Support me on ",(0,n.jsx)("span",{className:"text-cyan-300",children:"Patreon"})]}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsxs)("div",{className:"flex justify-center space-x-4",children:[(0,n.jsx)("a",{href:"https://twitter.com/ptuladhar3",target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 hover:text-cyan-400 transition-colors duration-300","aria-label":"",children:(0,n.jsx)(o.A,{size:24})}),(0,n.jsx)("a",{href:"https://www.linkedin.com/in/ptuladhar3/",target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 hover:text-cyan-400 transition-colors duration-300","aria-label":"",children:(0,n.jsx)(i.A,{size:24})}),(0,n.jsx)("a",{href:"https://github.com/tuladhar",target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 hover:text-cyan-400 transition-colors duration-300","aria-label":"",children:(0,n.jsx)(a.A,{size:24})})]})]})}},6708:(e,t,s)=>{"use strict";function n(e){for(let t=e.length-1;t>0;t--){let s=Math.floor(Math.random()*(t+1));[e[t],e[s]]=[e[s],e[t]]}return e}s.d(t,{A:()=>n})},2084:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>b});var n=s(5155),o=s(8803),i=s.n(o),a=s(2115),r=s(5683),l=s(6899),c=s(3239),u=s(5340),m=s(5565),d=s(4918),g=s(7030),p=s(6708);let h=[{question:"Which security measures are essential for protecting the Kubernetes API Server? (Select all that apply)",options:["Using TLS encryption for all API traffic","Implementing strong authentication mechanisms","Enabling audit logging","Configuring appropriate RBAC policies"],correctAnswers:["Using TLS encryption for all API traffic","Implementing strong authentication mechanisms","Configuring appropriate RBAC policies"],multipleAllowed:!0,maxSelections:3},{question:"Which security measure is essential for protecting the API Server from unauthorized access?",options:["Using a firewall","Encrypting network traffic","Implementing Role-Based Access Control (RBAC)","Isolating it in a separate namespace"],correctAnswers:["Implementing Role-Based Access Control (RBAC)"],multipleAllowed:!1,maxSelections:1},{question:"How can you secure communication between the API Server and other components?",options:["By using HTTP instead of HTTPS","By allowing all IP addresses to access it","By disabling authentication","By implementing mTLS (mutual TLS)"],correctAnswers:["By implementing mTLS (mutual TLS)"],multipleAllowed:!1,maxSelections:1},{question:"What is a common vulnerability associated with the Kubernetes Controller Manager?",options:["Exposing sensitive data in logs","Insecure API endpoints","Lack of resource quotas","Unrestricted access to etcd"],correctAnswers:["Insecure API endpoints"],multipleAllowed:!1,maxSelections:1},{question:"What is the primary function of the Kubernetes Scheduler?",options:["To manage network traffic","To monitor cluster health","To assign pods to nodes based on resource availability","To store configuration data"],correctAnswers:["To assign pods to nodes based on resource availability"],multipleAllowed:!1,maxSelections:1},{question:"Which component is responsible for monitoring and managing node health?",options:["Kubelet","Scheduler","Controller Manager","API Server"],correctAnswers:["Kubelet"],multipleAllowed:!1,maxSelections:1},{question:"How can you enhance security for the Kubelet?",options:["By allowing unauthenticated access","By disabling logging","By using Node Authorizer and Node Restriction admission controller","By exposing it to public networks"],correctAnswers:["By using Node Authorizer and Node Restriction admission controller"],multipleAllowed:!1,maxSelections:1},{question:"Container Runtime refers to which of the following?",options:["The software that runs containers on a host system","The network layer for container communication","The storage solution for container images","The API used to manage container lifecycles"],correctAnswers:["The software that runs containers on a host system"],multipleAllowed:!1,maxSelections:1},{question:"kube-proxy is primarily responsible for what function in a Kubernetes cluster?",options:["Managing pod lifecycle events","Storing configuration data in etcd","Monitoring resource usage across nodes","Routing network traffic to pods based on services"],correctAnswers:["Routing network traffic to pods based on services"],multipleAllowed:!1,maxSelections:1},{question:"Etcd is critical for which aspect of Kubernetes security?",options:["Managing user authentication and authorization","Serving as a database for cluster state information","Handling network policies","Monitoring resource utilization"],correctAnswers:["Serving as a database for cluster state information"],multipleAllowed:!1,maxSelections:1},{question:"Pod Security Standards are used for what purpose?",options:["Managing resource quotas","Routing traffic between services","Enforcing security standards on pod specifications","Storing sensitive data securely"],correctAnswers:["Enforcing security standards on pod specifications"],multipleAllowed:!1,maxSelections:1},{question:"Which of the following is NOT a best practice for securing etcd?",options:["Limiting access to trusted users","Using encryption for data at rest","Implementing mTLS for client connections","Exposing etcd to public networks"],correctAnswers:["Exposing etcd to public networks"],multipleAllowed:!1,maxSelections:1},{question:"What is a key feature of Kubernetes networking that enhances security?",options:["Flat networking model","Network segmentation through Network Policies","Direct pod-to-pod communication without restrictions","Using public IPs for all pods"],correctAnswers:["Network segmentation through Network Policies"],multipleAllowed:!1,maxSelections:1},{question:"Client security in Kubernetes primarily involves which of the following?",options:["Managing pod configurations","Monitoring node health","Securing API access and authentication","Storing secrets"],correctAnswers:["Securing API access and authentication"],multipleAllowed:!1,maxSelections:1},{question:"What is an effective way to secure storage in Kubernetes?",options:["Using unencrypted volumes","Implementing RBAC for storage access","Allowing all pods unrestricted access to storage","Disabling audit logging"],correctAnswers:["Implementing RBAC for storage access"],multipleAllowed:!1,maxSelections:1},{question:"Which component of Kubernetes is responsible for managing the state of the cluster?",options:["API Server","Kubelet","Controller Manager","Scheduler"],correctAnswers:["Controller Manager"],multipleAllowed:!1,maxSelections:1},{question:"What is a potential security risk when using the Kubernetes API?",options:["Exposing sensitive data through API responses","Using strong authentication methods","Implementing rate limiting","Restricting access to trusted IPs"],correctAnswers:["Exposing sensitive data through API responses"],multipleAllowed:!1,maxSelections:1},{question:"Which of the following is a best practice for securing the Kubelet?",options:["Allowing unauthenticated access","Using TLS for communication","Disabling authorization checks","Running Kubelet as a root user"],correctAnswers:["Using TLS for communication"],multipleAllowed:!1,maxSelections:1},{question:"Pod Security Standards help enforce which of the following?",options:["Resource limits on pods","Network policies for pod communication","Security contexts and capabilities","Storage class definitions"],correctAnswers:["Security contexts and capabilities"],multipleAllowed:!1,maxSelections:1},{question:"kube-proxy primarily operates at which layer of the OSI model?",options:["Layer 7 (Application layer)","Layer 4 (Transport layer)","Layer 3 (Network layer)","Layer 2 (Data link layer)"],correctAnswers:["Layer 4 (Transport layer)"],multipleAllowed:!1,maxSelections:1},{question:"Etcd should be secured by which of the following methods?",options:["Disabling authentication","Allowing public access for ease of use","Using encryption at rest and in transit","Storing backup data in plain text"],correctAnswers:["Using encryption at rest and in transit"],multipleAllowed:!1,maxSelections:1},{question:"Container Runtime security can be enhanced by which practice?",options:["Running containers as root","Using unverified images from public repositories","Disabling resource limits","Implementing image scanning tools"],correctAnswers:["Implementing image scanning tools"],multipleAllowed:!1,maxSelections:1},{question:"Network Policies in Kubernetes are used to control what?",options:["Pod-to-pod communication","Resource allocation to pods","Access to the API Server","Storage access permissions"],correctAnswers:["Pod-to-pod communication"],multipleAllowed:!1,maxSelections:1},{question:"RBAC stands for what in Kubernetes security context?",options:["Resource-Based Access Control","Role-Based Access Control","Role-Bound Authentication Control","Remote Backup Access Control"],correctAnswers:["Role-Based Access Control"],multipleAllowed:!1,maxSelections:1},{question:"Which of the following are components that can be secured using RBAC? (Select all that apply)",options:["Users and groups","Namespaces","Services","Pods"],correctAnswers:["Users and groups","Namespaces","Pods"],multipleAllowed:!0,maxSelections:3},{question:"What is a common method to protect sensitive data in Kubernetes?",options:["Storing secrets in plain text within pods","Exposing secrets through environment variables","Using Kubernetes Secrets to manage sensitive information","Disabling secret encryption"],correctAnswers:["Using Kubernetes Secrets to manage sensitive information"],multipleAllowed:!1,maxSelections:1},{question:"Which command can be used to view RBAC roles in a Kubernetes cluster?",options:["kubectl get roles","kubectl describe roles","kubectl view roles","kubectl list roles"],correctAnswers:["kubectl get roles"],multipleAllowed:!1,maxSelections:1},{question:"What is a primary function of the Scheduler in Kubernetes?",options:["Scheduling backups of pods","Scheduling network traffic management tasks","Scheduling security audits","Scheduling pods onto nodes based on resource availability"],correctAnswers:["Scheduling pods onto nodes based on resource availability"],multipleAllowed:!1,maxSelections:1},{question:"Which of the following practices can help secure container networking? (Select all that apply)",options:["Implementing Network Policies","Avoiding encryption for internal traffic","Using private container registries","Using public container registries"],correctAnswers:["Implementing Network Policies","Using private container registries"],multipleAllowed:!0,maxSelections:2},{question:"Which component is responsible for ensuring that containers are running as expected?",options:["API Server","Kubelet","Controller Manager","Scheduler"],correctAnswers:["Kubelet"],multipleAllowed:!1,maxSelections:1},{question:"In terms of client security, what does 'authentication' refer to?",options:["Controlling user permissions","Logging user actions","Verifying user identity","Encrypting user data"],correctAnswers:["Verifying user identity"],multipleAllowed:!1,maxSelections:1},{question:"What is an important aspect of securing storage in Kubernetes?",options:["Allowing all users access to storage","Storing secrets in plain text","Using public storage services","Encrypting data at rest"],correctAnswers:["Encrypting data at rest"],multipleAllowed:!1,maxSelections:1},{question:"Which command would you use to create a new role in RBAC?",options:["kubectl create role <role-name> --verb=<verb> --resource=<resource>","kubectl create rbac role <role-name> --verb=<verb> --resource=<resource>","kubectl create rolebinding <role-name> --user=<user>","kubectl create clusterrole <role-name> --verb=<verb> --resource=<resource>"],correctAnswers:["kubectl create role <role-name> --verb=<verb> --resource=<resource>"],multipleAllowed:!1,maxSelections:1},{question:"Which of the following are valid methods to enhance API Server security? (Select all that apply)",options:["Implementing RBAC","Using API rate limiting","Allowing anonymous access","Enabling audit logging"],correctAnswers:["Implementing RBAC","Using API rate limiting","Enabling audit logging"],multipleAllowed:!0,maxSelections:3},{question:"What is a key benefit of using namespaces in Kubernetes?",options:["Simplified network policies","Centralized logging","Isolation of resources between teams","Automatic scaling"],correctAnswers:["Isolation of resources between teams"],multipleAllowed:!1,maxSelections:1}],x=["A","B","C","D","E","F","G","H"],w=1e3/h.length;function b(){let[e,t]=(0,a.useState)(0),[s,o]=(0,a.useState)(0),[b,f]=(0,a.useState)([]),[y,A]=(0,a.useState)(!1),[S,v]=(0,a.useState)([]),[j,k]=(0,a.useState)(!1),[N,C]=(0,a.useState)(0),I=t=>{let s=h[e];s.multipleAllowed?b.includes(t)?f(e=>e.filter(e=>e!==t)):b.length<(s.maxSelections||1/0)&&f(e=>[...e,t]):f([t])},q=h[e],P=q.multipleAllowed&&b.length>=(q.maxSelections||1/0),R=q.multipleAllowed?b.length!==q.maxSelections:0===b.length;return(0,n.jsxs)("div",{className:"jsx-5aaa0a84c2479658 min-h-screen pt-5 pb-5 flex items-center justify-center bg-[#0a0f18] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]",children:[(0,n.jsx)(i(),{id:"5aaa0a84c2479658",children:".bg-pattern{background-image:url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E\")}"}),(0,n.jsxs)("div",{className:"jsx-5aaa0a84c2479658 w-full max-w-2xl p-4 sm:p-6 md:p-8 border bg-[#1a1f2e]/50 shadow-lg shadow-cyan-500/20 border-cyan-800 rounded-lg",children:[(0,n.jsx)("div",{className:"jsx-5aaa0a84c2479658 flex justify-center mb-6",children:(0,n.jsx)(m.default,{src:"/logo.svg",alt:"Quiz Logo",width:160,height:160,className:"rounded-3xl p-2 "})}),(0,n.jsx)("h1",{className:"jsx-5aaa0a84c2479658 text-3xl md:text-4xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-500 animate-gradient-text",children:"Kubernetes Cluster Component Security"}),(0,n.jsx)(r.N,{mode:"wait",children:y?(0,n.jsxs)(l.P.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.5},className:"text-center",children:[(0,n.jsx)("h2",{className:"jsx-5aaa0a84c2479658 text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-green-300",children:"Quiz Completed!"}),(0,n.jsxs)("p",{className:"jsx-5aaa0a84c2479658 text-xl sm:text-2xl mb-4 sm:mb-6 text-cyan-300",children:["Your score: ",Math.round(s)," / ",1e3]}),(0,n.jsx)("p",{className:"jsx-5aaa0a84c2479658 "+"text-xl sm:text-2xl mb-2 ".concat(j?"text-green-300":"text-red-400"),children:j?"Congratulations! You passed with ".concat(N,"%"):"Sorry, you did not pass. You scored ".concat(N,"%")}),(0,n.jsxs)("div",{className:"jsx-5aaa0a84c2479658 mt-6 sm:mt-8 text-left",children:[(0,n.jsx)("h3",{className:"jsx-5aaa0a84c2479658 text-lg sm:text-xl font-semibold mb-4 text-cyan-300",children:"Question Summary:"}),h.map((e,t)=>(0,n.jsxs)("div",{className:"jsx-5aaa0a84c2479658 mb-4 sm:mb-6 bg-gray-700 bg-opacity-50 rounded-lg p-3 sm:p-4",children:[(0,n.jsxs)("p",{className:"jsx-5aaa0a84c2479658 font-medium mb-2 text-gray-100",children:[t+1,". ",e.question]}),(0,n.jsx)("div",{className:"jsx-5aaa0a84c2479658 mb-2",children:e.options.map((t,s)=>(0,n.jsxs)("p",{className:"jsx-5aaa0a84c2479658 "+"".concat(e.correctAnswers.includes(t)?"text-green-300":"text-gray-300"),children:[x[s],". ",t]},s))}),(0,n.jsxs)("p",{className:"jsx-5aaa0a84c2479658 "+"flex items-center ".concat(JSON.stringify(S[t].sort())===JSON.stringify(e.correctAnswers.sort())?"text-green-300":"text-red-400"),children:["Your Answer(s): ",S[t].map(t=>x[e.options.indexOf(t)]).join(", "),JSON.stringify(S[t].sort())===JSON.stringify(e.correctAnswers.sort())?(0,n.jsx)(c.A,{className:"ml-2 w-5 h-5"}):(0,n.jsx)(u.A,{className:"ml-2 w-5 h-5"})]})]},t))]}),(0,n.jsx)("button",{onClick:()=>{t(0),o(0),f([]),A(!1),v([]),k(!1),C(0),h=(0,p.A)(h)},className:"jsx-5aaa0a84c2479658 mt-4 sm:mt-6 p-3 sm:p-4 bg-cyan-600 hover:bg-cyan-700 rounded-lg text-lg font-semibold transition-all duration-300 text-white w-full",children:"Restart Quiz"})]},"results"):(0,n.jsxs)(l.P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.5},children:[(0,n.jsxs)("div",{className:"jsx-5aaa0a84c2479658 mb-4 text-lg font-semibold  text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-500 animate-gradient-text",children:["Question ",e+1," of ",h.length]}),(0,n.jsx)("h2",{className:"jsx-5aaa0a84c2479658 text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-cyan-500",children:q.question}),(0,n.jsx)("div",{className:"jsx-5aaa0a84c2479658 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6",children:q.options.map((e,t)=>(0,n.jsxs)("button",{onClick:()=>I(e),disabled:P&&!b.includes(e),className:"jsx-5aaa0a84c2479658 "+"p-3 sm:p-4 rounded-lg text-left transition-all duration-300 ".concat(b.includes(e)?"bg-cyan-600 text-white":P?"bg-gray-600 text-gray-400 cursor-not-allowed":"bg-gray-700 hover:bg-gray-600 text-gray-100"),children:[(0,n.jsxs)("span",{className:"jsx-5aaa0a84c2479658 font-bold mr-2",children:[x[t],"."]})," ",e]},e))}),q.multipleAllowed&&(0,n.jsxs)("p",{className:"jsx-5aaa0a84c2479658 text-sm text-cyan-300 mb-4",children:["This question requires ",q.maxSelections," selections. You have selected ",b.length," out of ",q.maxSelections,"."]}),(0,n.jsx)("button",{onClick:()=>{let n=h[e],i=n.multipleAllowed?n.correctAnswers.every(e=>b.includes(e))&&b.length===n.correctAnswers.length:b[0]===n.correctAnswers[0];if(i&&o(s+w),v([...S,b]),e+1<h.length)t(e+1),f([]);else{let e=s+(i?w:0),t=e>=700;k(t),C(Math.round(e/1e3*100)),A(!0),t&&setTimeout(()=>{(0,d.A)({particleCount:100,spread:70,origin:{y:.6}})},500)}},disabled:R,className:"jsx-5aaa0a84c2479658 "+"w-full p-3 sm:p-4 rounded-lg text-lg font-semibold transition-all duration-300 ".concat(R?"bg-gray-700 cursor-not-allowed text-gray-400":"bg-cyan-600 hover:bg-cyan-700 text-white"),children:e===h.length-1?"Finish Quiz":"Next Question"})]},"question")}),(0,n.jsx)(g.A,{})]})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[6,379,441,517,358],()=>t(9517)),_N_E=e.O()}]);