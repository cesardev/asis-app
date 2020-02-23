const isDeploy = false;
const txtApp = 'NEOJUPITER';
const resource = 'resources/neoCrm';
const urlWs = isDeploy ? `${location.origin}/${txtApp}` : `http://180.119.201.36:8181/${txtApp}`;
const assets = isDeploy ? `${urlWs}/${resource}/assets` : `${location.origin}/assets`;
const skipWsLoader = [ '/anything.do' ];

export const environment = {
  production: false,
  isDeploy,
  urlWs,
  assets,
  skipWsLoader
};
