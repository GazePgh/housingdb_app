export const APP_CONFIG: any = {
  apiURL: 'http://localhost:23085',
  // apiURL: 'https://housingdb.surge.sh',
};

import { KeycloakConfig } from 'keycloak-angular';

export const KEYCLOAK_CONFIG: KeycloakConfig = {
  url: 'http://localhost:8081/auth',
  realm: 'gaze-accounts',
  clientId: 'housingdb',
};
