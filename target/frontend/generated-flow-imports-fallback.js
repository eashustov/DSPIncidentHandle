export const addCssBlock = function(block, before = false) {
 const tpl = document.createElement('template');
 tpl.innerHTML = block;
 document.head[before ? 'insertBefore' : 'appendChild'](tpl.content, document.head.firstChild);
};
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-list/iron-list.js';
import '@vaadin/accordion/theme/lumo/vaadin-accordion.js';
import '@vaadin/app-layout/theme/lumo/vaadin-app-layout.js';
import '@vaadin/app-layout/theme/lumo/vaadin-drawer-toggle.js';
import '@vaadin/avatar-group/theme/lumo/vaadin-avatar-group.js';
import '@vaadin/avatar/theme/lumo/vaadin-avatar.js';
import '@vaadin/checkbox-group/theme/lumo/vaadin-checkbox-group.js';
import '@vaadin/custom-field/theme/lumo/vaadin-custom-field.js';
import '@vaadin/date-time-picker/theme/lumo/vaadin-date-time-picker.js';
import '@vaadin/details/theme/lumo/vaadin-details.js';
import '@vaadin/email-field/theme/lumo/vaadin-email-field.js';
import '@vaadin/flow-frontend/ironListConnector.js';
import '@vaadin/flow-frontend/ironListStyles.js';
import '@vaadin/flow-frontend/messageListConnector.js';
import '@vaadin/flow-frontend/selectConnector.js';
import '@vaadin/flow-frontend/timepickerConnector.js';
import '@vaadin/flow-frontend/vaadin-big-decimal-field.js';
import '@vaadin/flow-frontend/virtualListConnector.js';
import '@vaadin/grid/theme/lumo/vaadin-grid-tree-toggle.js';
import '@vaadin/integer-field/theme/lumo/vaadin-integer-field.js';
import '@vaadin/item/theme/lumo/vaadin-item.js';
import '@vaadin/list-box/theme/lumo/vaadin-list-box.js';
import '@vaadin/login/theme/lumo/vaadin-login-form.js';
import '@vaadin/login/theme/lumo/vaadin-login-overlay.js';
import '@vaadin/message-input/theme/lumo/vaadin-message-input.js';
import '@vaadin/message-list/theme/lumo/vaadin-message-list.js';
import '@vaadin/number-field/theme/lumo/vaadin-number-field.js';
import '@vaadin/password-field/theme/lumo/vaadin-password-field.js';
import '@vaadin/progress-bar/theme/lumo/vaadin-progress-bar.js';
import '@vaadin/scroller/vaadin-scroller.js';
import '@vaadin/select/theme/lumo/vaadin-select.js';
import '@vaadin/split-layout/theme/lumo/vaadin-split-layout.js';
import '@vaadin/tabs/theme/lumo/vaadin-tab.js';
import '@vaadin/tabs/theme/lumo/vaadin-tabs.js';
import '@vaadin/text-area/theme/lumo/vaadin-text-area.js';
import '@vaadin/time-picker/theme/lumo/vaadin-time-picker.js';
import '@vaadin/upload/src/vaadin-upload-file.js';
import '@vaadin/upload/theme/lumo/vaadin-upload.js';
import '@vaadin/virtual-list/vaadin-virtual-list.js';