const isDeploy = true;
const txtApp = 'NEOJUPITER';
const resource = 'resources/appNeoUrls';
const urlWs = isDeploy ? `${location.origin}/${txtApp}` : `http://180.119.201.36:8181/${txtApp}`;
const assets = isDeploy ? `${urlWs}/${resource}/assets` : `http://localhost:4200/assets`;
const skipWsLoader = [ '/anything.do' ];

export const environment = {
  production: true,
  isDeploy,
  urlWs,
  assets,
  skipWsLoader
};
