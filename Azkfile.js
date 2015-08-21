/* globals systems path sync persistent */
/* eslint camelcase: [2, {properties: "never"}] */
/* eslint comma-dangle: [0, {properties: "never"}] */

/* see Azkfile.md */
systems({

  "shout": {
    depends: [],
    image: {"docker": "azukiapp/node:0.10"},
    provision: [
      "npm install",
      "npm install grunt-cli",
      "node_modules/.bin/grunt",
    ],
    workdir: "/azk/#{manifest.dir}",
    shell: "/bin/bash",

    command: "node index.js",
    wait: { retry: 30, timeout: 1000 },
    mounts: {
      "/azk/#{manifest.dir}": path("."),
      "/azk/node_modules": persistent("#{manifest.dir}/node_modules"),
    },
    scalable: {"default": 1},
    http: {
      domains: [
        "#{system.name}.#{azk.default_domain}", // default azk
        '#{process.env.AZK_HOST_IP}'            // used if deployed
      ]
    },
    ports: {
      http: "8080/tcp"
    },
    envs: {
      DOMAIN: "#{system.name}.#{azk.default_domain}",
      HOST: "0.0.0.0",
      PORT: "8080",
    },
  },

});
