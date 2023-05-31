const ROUTES = {
  home: '/',
  aboutUs: '/about-us',
  statistics: '/statistics',

  auth: '/auth',

  services: '/services',
  serviceSfc: '/services/sfc-analyse',
  serviceVuln: '/services/vulnerabilities-list',
  serviceVulnSelect: '/services/vulnerabilities-list/select-sfc',
  serviceVector: '/services/attack-vector',
  serviceThreat: '/services/threat-model',

  tdo: '/threats-data-base',

  objectsList: '/threats-data-base/objects',
  objectItem: '/threats-data-base/objects/:id',
  sfcList: '/threats-data-base/SFC',
  sfcItem: '/threats-data-base/SFC/:id',
  createCardSfc: '/threats-data-base/SFC/create-card',
  attacksList: '/threats-data-base/attacks',
  attackItem: '/threats-data-base/attacks/:id',
  vulnerabilitiesList: '/threats-data-base/vulnerabilities',
  vulnerabilityItem: '/threats-data-base/vulnerabilities/:id',
  risksList: '/threats-data-base/risks',
  riskItem: '/threats-data-base/risks/:id',
  threatsList: '/threats-data-base/threats',
  threatItem: '/threats-data-base/threats/:id',
  incidentList: '/threats-data-base/incidents',
  incidentItem: '/threats-data-base/incidents/:id'

}

export {
  ROUTES
}



