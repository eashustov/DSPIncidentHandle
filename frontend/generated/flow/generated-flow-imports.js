import { injectGlobalCss } from 'Frontend/generated/jar-resources/theme-util.js';

import { css, unsafeCSS, registerStyles } from '@vaadin/vaadin-themable-mixin';
import $cssFromFile_0 from 'Frontend/generated/jar-resources/com/github/appreciated/apexcharts/apexcharts-wrapper-styles.css?inline';
const $css_0 = typeof $cssFromFile_0  === 'string' ? unsafeCSS($cssFromFile_0) : $cssFromFile_0;
registerStyles('', $css_0, {moduleId: 'apex-charts-style'});
import '@vaadin/polymer-legacy-adapter/style-modules.js';
import '@vaadin/login/src/vaadin-login-form.js';
import '@vaadin/vertical-layout/src/vaadin-vertical-layout.js';
import 'Frontend/generated/jar-resources/flow-component-renderer.js';
import '@vaadin/combo-box/src/vaadin-combo-box.js';
import 'Frontend/generated/jar-resources/comboBoxConnector.js';
import 'Frontend/generated/jar-resources/vaadin-grid-flow-selection-column.js';
import '@vaadin/radio-group/src/vaadin-radio-group.js';
import '@vaadin/radio-group/src/vaadin-radio-button.js';
import '@vaadin/app-layout/src/vaadin-app-layout.js';
import '@vaadin/tooltip/src/vaadin-tooltip.js';
import '@vaadin/icon/src/vaadin-icon.js';
import '@vaadin/context-menu/src/vaadin-context-menu.js';
import 'Frontend/generated/jar-resources/contextMenuConnector.js';
import 'Frontend/generated/jar-resources/contextMenuTargetConnector.js';
import '@vaadin/form-layout/src/vaadin-form-item.js';
import '@vaadin/multi-select-combo-box/src/vaadin-multi-select-combo-box.js';
import '@vaadin/grid/src/vaadin-grid.js';
import '@vaadin/grid/src/vaadin-grid-column.js';
import '@vaadin/grid/src/vaadin-grid-sorter.js';
import '@vaadin/checkbox/src/vaadin-checkbox.js';
import 'Frontend/generated/jar-resources/gridConnector.js';
import '@vaadin/button/src/vaadin-button.js';
import 'Frontend/generated/jar-resources/buttonFunctions.js';
import 'Frontend/generated/jar-resources/menubarConnector.js';
import '@vaadin/menu-bar/src/vaadin-menu-bar.js';
import '@vaadin/text-field/src/vaadin-text-field.js';
import '@vaadin/icons/vaadin-iconset.js';
import '@vaadin/date-picker/src/vaadin-date-picker.js';
import 'Frontend/generated/jar-resources/datepickerConnector.js';
import '@vaadin/form-layout/src/vaadin-form-layout.js';
import '@vaadin/dialog/src/vaadin-dialog.js';
import '@vaadin/app-layout/src/vaadin-drawer-toggle.js';
import 'Frontend/generated/jar-resources/com/github/appreciated/apexcharts/apexcharts-wrapper.ts';
import '@vaadin/horizontal-layout/src/vaadin-horizontal-layout.js';
import '@vaadin/grid/src/vaadin-grid-column-group.js';
import 'Frontend/generated/jar-resources/lit-renderer.ts';
import '@vaadin/common-frontend/ConnectionIndicator.js';
import '@vaadin/vaadin-lumo-styles/color-global.js';
import '@vaadin/vaadin-lumo-styles/typography-global.js';
import '@vaadin/vaadin-lumo-styles/sizing.js';
import '@vaadin/vaadin-lumo-styles/spacing.js';
import '@vaadin/vaadin-lumo-styles/style.js';
import '@vaadin/vaadin-lumo-styles/vaadin-iconset.js';

const loadOnDemand = (key) => {
  const pending = [];
  if (key === '04b2cca43b3f400e2ac1a265fb5a013775f43707b4ff050b3c4ca1c8af4b5e51') {
    pending.push(import('./chunks/chunk-379e8552596da0a7286d1b50e2b794c28e04d628493c5721724a742ce369b37e.js'));
  }
  return Promise.all(pending);
}

window.Vaadin = window.Vaadin || {};
window.Vaadin.Flow = window.Vaadin.Flow || {};
window.Vaadin.Flow.loadOnDemand = loadOnDemand;
window.Vaadin.Flow.resetFocus = () => {
 let ae=document.activeElement;
 while(ae&&ae.shadowRoot) ae = ae.shadowRoot.activeElement;
 return !ae || ae.blur() || ae.focus() || true;
}