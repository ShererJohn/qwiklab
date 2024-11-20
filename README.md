### Enviroment

```
  System:
    OS: Linux 6.10 Fedora Linux 40 (Workstation Edition)
    CPU: (4) x64 Intel(R) Core(TM) i5-3320M CPU @ 2.60GHz
    Memory: 5.31 GB / 15.48 GB
    Container: Yes
    Shell: 5.2.26 - /bin/bash
  Binaries:
    Node: 22.5.1 - ~/.nvm/versions/node/v22.5.1/bin/node
    Yarn: 1.22.22 - /usr/bin/yarn
    npm: 10.9.0 - ~/.nvm/versions/node/v22.5.1/bin/npm
    bun: 1.1.22 - ~/.bun/bin/bun
  npmPackages:
    @auth/qwik: 0.2.2 => 0.2.2 
```

### Reproduction URL

https://github.com/ShererJohn/qwiklab

### Describe the issue

Whenever a `Link` element goes to a page that imports `plugin@auth` it breaks. 

```
SyntaxError: The requested module '/node_modules/cookie/index.js?v=da1814f6' does not provide an export named 'parse' (at jwt.js?v=da1814f6:42:10)
```

- This bug only effects the link component. If you use an `a` element instead of a `Link` component the page will load and the functionality of the plugin will be uneffected.

- This bug presists even if you're not using the jwt session strategy

### Expected behavior

The link component should load the linked page.