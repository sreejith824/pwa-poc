Start API

..\offline-app\1603_lci_csi-pwa-poc>cd offline-demo-api

..\offline-app\1603_lci_csi-pwa-poc\offline-demo-api>node index.js
Server running on port 3000


..\offline-app\1603_lci_csi-pwa-poc>cd offline-demo-app

..\offline-app\1603_lci_csi-pwa-poc\offline-demo-app>ng build --prod

Date: 2019-02-04T15:49:50.682Z
Hash: 7aadafbc741be9847a71
Time: 28857ms
chunk {0} runtime.b57bf819d5bdce77f1c7.js (runtime) 1.41 kB [entry] [rendered]
chunk {1} main.bd23e3f7f2faa31039ea.js (main) 451 kB [initial] [rendered]
chunk {2} polyfills.f5ce8ecea387adbb1689.js (polyfills) 41 kB [initial] [rendered]
chunk {3} styles.d9c7ef31625b4f970066.css (styles) 61.2 kB [initial] [rendered]

C:\ws\offline-app\1603_lci_csi-pwa-poc\offline-demo-app>cd dist

C:\ws\offline-app\1603_lci_csi-pwa-poc\offline-demo-app\dist>cd offline-demo-app

C:\ws\offline-app\1603_lci_csi-pwa-poc\offline-demo-app\dist\offline-demo-app>http-server -o
Starting up http-server, serving ./
Available on:
  http://10.219.189.222:8080
  http://127.0.0.1:8080
Hit CTRL-C to stop the server

Searach for Case details
================================================================================

Shut down both http://127.0.0.1:8080 and http://127.0.0.1:3000
Refresh : http://127.0.0.1:8080
