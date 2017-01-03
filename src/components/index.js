import { module } from 'angular';

import authenticateModal from './authenticate-modal/authenticate-modal';
import connectModal from './connect-modal/connect-modal';
import home from './home/home';
import languageDropdown from './language-dropdown/language-dropdown';
import loadFileButton from './load-file-button/load-file-button';
import navbar from './navbar/navbar';
import statusOlsr from './status-olsr/status-olsr';
import wizard from './wizard/wizard';
import wizardContact from './wizard-contact/wizard-contact';
import wizardInternet from './wizard-internet/wizard-internet';
import wizardLocation from './wizard-location/wizard-location';
import wizardMonitoring from './wizard-monitoring/wizard-monitoring';
import wizardRouter from './wizard-router/wizard-router';

export default module('app.components', [
  authenticateModal.name,
  connectModal.name,
  home.name,
  languageDropdown.name,
  loadFileButton.name,
  navbar.name,
  statusOlsr.name,
  wizard.name,
  wizardContact.name,
  wizardInternet.name,
  wizardLocation.name,
  wizardMonitoring.name,
  wizardRouter.name,
]);
