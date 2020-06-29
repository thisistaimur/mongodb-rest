module.exports = {
  "db": process.env.MONGODB || process.env.MONGOLAB_URI || "mongodb://tk:halle.2020@ds119524.mlab.com:19524/heroku_wkgp9q03",
  "server": {
    "port": process.env.PORT || 3000,
    "address": "0.0.0.0"
  },
  "accessControl": {
    "allowOrigin": "*",
    "allowMethods": "GET,POST,PUT,DELETE,HEAD,OPTIONS",
    "allowCredentials": false
  },
  "mongoOptions": {
    "serverOptions": {},
    "dbOptions": {
      "w": 1
    }
  },
  "humanReadableOutput": true,
  "collectionOutputType": "json",
  "urlPrefix": ""
}
