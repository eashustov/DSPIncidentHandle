export const addCssBlock = function(block, before = false) {
 const tpl = document.createElement('template');
 tpl.innerHTML = block;
 document.head[before ? 'insertBefore' : 'appendChild'](tpl.content, document.head.firstChild);
};

import { css, unsafeCSS, registerStyles } from '@vaadin/vaadin-themable-mixin';
import $cssFromFile_0 from 'Frontend/generated/jar-resources/com/github/appreciated/apexcharts/apexcharts-wrapper-styles.css?inline';
const $css_0 = typeof $cssFromFile_0  === 'string' ? unsafeCSS($cssFromFile_0) : $cssFromFile_0;
registerStyles('', $css_0, {moduleId: 'apex-charts-style'});

import '@vaadin/grid/theme/lumo/vaadin-grid.js';
import '@vaadin/tooltip/theme/lumo/vaadin-tooltip.js';
import '@vaadin/grid/theme/lumo/vaadin-grid-column.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-list/iron-list.js';
import '@vaadin/accordion/theme/lumo/vaadin-accordion-panel.js';
import '@vaadin/accordion/theme/lumo/vaadin-accordion.js';
import '@vaadin/app-layout/theme/lumo/vaadin-app-layout.js';
import '@vaadin/app-layout/theme/lumo/vaadin-drawer-toggle.js';
import '@vaadin/avatar-group/theme/lumo/vaadin-avatar-group.js';
import '@vaadin/avatar/theme/lumo/vaadin-avatar.js';
import '@vaadin/button/theme/lumo/vaadin-button.js';
import '@vaadin/checkbox-group/theme/lumo/vaadin-checkbox-group.js';
import '@vaadin/checkbox/theme/lumo/vaadin-checkbox.js';
import '@vaadin/combo-box/theme/lumo/vaadin-combo-box.js';
import '@vaadin/common-frontend/ConnectionIndicator.js';
import '@vaadin/confirm-dialog/theme/lumo/vaadin-confirm-dialog.js';
import '@vaadin/context-menu/theme/lumo/vaadin-context-menu.js';
import '@vaadin/custom-field/theme/lumo/vaadin-custom-field.js';
import '@vaadin/date-picker/theme/lumo/vaadin-date-picker.js';
import '@vaadin/date-time-picker/theme/lumo/vaadin-date-time-picker.js';
import '@vaadin/details/theme/lumo/vaadin-details.js';
import '@vaadin/dialog/theme/lumo/vaadin-dialog.js';
import '@vaadin/email-field/theme/lumo/vaadin-email-field.js';
import '@vaadin/field-highlighter/theme/lumo/vaadin-field-highlighter.js';
import '@vaadin/form-layout/theme/lumo/vaadin-form-item.js';
import '@vaadin/form-layout/theme/lumo/vaadin-form-layout.js';
import '@vaadin/grid/theme/lumo/vaadin-grid-column-group.js';
import '@vaadin/grid/theme/lumo/vaadin-grid-sorter.js';
import '@vaadin/grid/theme/lumo/vaadin-grid-tree-toggle.js';
import '@vaadin/horizontal-layout/theme/lumo/vaadin-horizontal-layout.js';
import '@vaadin/icon/theme/lumo/vaadin-icon.js';
import '@vaadin/icons/vaadin-iconset.js';
import '@vaadin/integer-field/theme/lumo/vaadin-integer-field.js';
import '@vaadin/item/theme/lumo/vaadin-item.js';
import '@vaadin/list-box/theme/lumo/vaadin-list-box.js';
import '@vaadin/login/theme/lumo/vaadin-login-form.js';
import '@vaadin/login/theme/lumo/vaadin-login-overlay.js';
import '@vaadin/menu-bar/theme/lumo/vaadin-menu-bar.js';
import '@vaadin/message-input/theme/lumo/vaadin-message-input.js';
import '@vaadin/message-list/theme/lumo/vaadin-message-list.js';
import '@vaadin/multi-select-combo-box/theme/lumo/vaadin-multi-select-combo-box.js';
import '@vaadin/notification/theme/lumo/vaadin-notification.js';
import '@vaadin/number-field/theme/lumo/vaadin-number-field.js';
import '@vaadin/password-field/theme/lumo/vaadin-password-field.js';
import '@vaadin/polymer-legacy-adapter/style-modules.js';
import '@vaadin/polymer-legacy-adapter/template-renderer.js';
import '@vaadin/progress-bar/theme/lumo/vaadin-progress-bar.js';
import '@vaadin/radio-group/theme/lumo/vaadin-radio-button.js';
import '@vaadin/radio-group/theme/lumo/vaadin-radio-group.js';
import '@vaadin/scroller/theme/lumo/vaadin-scroller.js';
import '@vaadin/select/theme/lumo/vaadin-select.js';
import '@vaadin/split-layout/theme/lumo/vaadin-split-layout.js';
import '@vaadin/tabs/theme/lumo/vaadin-tab.js';
import '@vaadin/tabs/theme/lumo/vaadin-tabs.js';
import '@vaadin/tabsheet/theme/lumo/vaadin-tabsheet.js';
import '@vaadin/text-area/theme/lumo/vaadin-text-area.js';
import '@vaadin/text-field/theme/lumo/vaadin-text-field.js';
import '@vaadin/time-picker/theme/lumo/vaadin-time-picker.js';
import '@vaadin/upload/src/vaadin-upload-file.js';
import '@vaadin/upload/theme/lumo/vaadin-upload.js';
import '@vaadin/vaadin-lumo-styles/color.js';
import '@vaadin/vaadin-lumo-styles/sizing.js';
import '@vaadin/vaadin-lumo-styles/spacing.js';
import '@vaadin/vaadin-lumo-styles/style.js';
import '@vaadin/vaadin-lumo-styles/typography.js';
import '@vaadin/vaadin-lumo-styles/vaadin-iconset.js';
import '@vaadin/vertical-layout/theme/lumo/vaadin-vertical-layout.js';
import '@vaadin/virtual-list/theme/lumo/vaadin-virtual-list.js';
import 'Frontend/generated/jar-resources/com/github/appreciated/apexcharts/apexcharts-wrapper.ts';
import 'Frontend/generated/jar-resources/comboBoxConnector.js';
import 'Frontend/generated/jar-resources/confirmDialogConnector.js';
import 'Frontend/generated/jar-resources/contextMenuConnector.js';
import 'Frontend/generated/jar-resources/contextMenuTargetConnector.js';
import 'Frontend/generated/jar-resources/datepickerConnector.js';
import 'Frontend/generated/jar-resources/dialogConnector.js';
import 'Frontend/generated/jar-resources/dndConnector-es6.js';
import 'Frontend/generated/jar-resources/flow-component-renderer.js';
import 'Frontend/generated/jar-resources/gridConnector.js';
import 'Frontend/generated/jar-resources/ironListConnector.js';
import 'Frontend/generated/jar-resources/ironListStyles.js';
import 'Frontend/generated/jar-resources/lit-renderer.ts';
import 'Frontend/generated/jar-resources/loginOverlayConnector.js';
import 'Frontend/generated/jar-resources/lumo-includes.ts';
import 'Frontend/generated/jar-resources/menubarConnector.js';
import 'Frontend/generated/jar-resources/messageListConnector.js';
import 'Frontend/generated/jar-resources/notificationConnector.js';
import 'Frontend/generated/jar-resources/selectConnector.js';
import 'Frontend/generated/jar-resources/tooltip.ts';
import 'Frontend/generated/jar-resources/vaadin-big-decimal-field.js';
import 'Frontend/generated/jar-resources/vaadin-grid-flow-selection-column.js';
import 'Frontend/generated/jar-resources/vaadin-time-picker/timepickerConnector.js';
import 'Frontend/generated/jar-resources/virtualListConnector.js';