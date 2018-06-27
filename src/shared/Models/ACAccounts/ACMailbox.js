import CoreACModel from './CoreACModel'
import uuid from 'uuid'

const DEFAULT_WINDOW_OPEN_MODES = Object.freeze({
  BROWSER: 'BROWSER',
  WAVEBOX: 'WAVEBOX'
})

const SERVICE_UI_LOCATIONS = Object.freeze({
  SIDEBAR: 'SIDEBAR',
  TOOLBAR_START: 'TOOLBAR_START',
  TOOLBAR_END: 'TOOLBAR_END'
})

class ACMailbox extends CoreACModel {
  /* **************************************************************************/
  // Class : Types
  /* **************************************************************************/

  static get DEFAULT_WINDOW_OPEN_MODES () { return DEFAULT_WINDOW_OPEN_MODES }
  static get SERVICE_UI_LOCATIONS () { return SERVICE_UI_LOCATIONS }

  /* **************************************************************************/
  // Class : Creating
  /* **************************************************************************/

  /**
  * Creates a blank js object that can used to instantiate this mailbox
  * @param id=autogenerate: the id of the mailbox
  * @param displayName=undefined: the name to use when displaying this mailbox
  * @param color=undefined: the color of the mailbox
  * @param templateType=undefined: a template type that was used to create this mailbox
  * @return a vanilla js object representing the data for this mailbox
  */
  static createJS (id = uuid.v4(), displayName = undefined, color = undefined, templateType = undefined) {
    return {
      id: id,
      changedTime: new Date().getTime(),
      displayName: displayName,
      templateType: templateType
    }
  }

  /* **************************************************************************/
  // Properties
  /* **************************************************************************/

  get partition () { return `persist:${this.id}` }
  get artificiallyPersistCookies () { return this._value_('artificiallyPersistCookies', false) }
  get defaultWindowOpenMode () { return this._value_('defaultWindowOpenMode', DEFAULT_WINDOW_OPEN_MODES.BROWSER) }
  get templateType () { return this._value_('templateType', undefined) }

  /* **************************************************************************/
  // Properties: Services
  /* **************************************************************************/

  get sidebarServices () { return this._value_('sidebarServices', []) }
  get toolbarStartServices () { return this._value_('toolbarStartServies', []) }
  get toolbarEndServices () { return this._value_('toolbarEndServies', []) }
  get allServices () {
    // Concat these in a visual way that makes sense in the UI
    return [].concat(
      this.toolbarStartServices,
      this.toolbarEndServices,
      this.sidebarServices
    )
  }
  get hasServices () {
    return !!this.sidebarServices.length ||
      !!this.toolbarStartServices.length ||
      !!this.toolbarEndServices.length
  }
  get hasMultipleServices () { return this.allServices.length > 1 }
  get hasSingleService () { return this.allServices.length === 1 }
  get singleService () { return this.hasSingleService ? this.allServices[0] : undefined }

  /**
  * Checks if there is a service with the given id
  * @param serviceId: the id of the service
  * @return true if there is a service, false otherwise
  */
  hasServiceWithId (serviceId) {
    return !!this.allServices.find((id) => id === serviceId)
  }

  /**
  * Checks if there is a service with the given id in the sidebar
  * @param serviceId: the id of the service
  * @return true if there is a service, false otherwise
  */
  sidebarHasServiceWithId (serviceId) {
    return !!this.sidebarServices.find((id) => id === serviceId)
  }

  /**
  * Checks if there is a service with the given id in the toolbar start
  * @param serviceId: the id of the service
  * @return true if there is a service, false otherwise
  */
  toolbarStartHasServiceWithId (serviceId) {
    return !!this.toolbarStartServices.find((id) => id === serviceId)
  }

  /**
  * Checks if there is a service with the given id in the toolbar end
  * @param serviceId: the id of the service
  * @return true if there is a service, false otherwise
  */
  toolbarEndHasServiceWithId (serviceId) {
    return !!this.toolbarEndServices.find((id) => id === serviceId)
  }

  /* **************************************************************************/
  // Properties : Display
  /* **************************************************************************/

  get displayName () { return this._value_('displayName', undefined) }
  get avatarId () { return this._value_('avatarId', undefined) }
  get hasAvatarId () { return !!this.avatarId }
  get color () { return this._value_('color', undefined) }
  get showAvatarColorRing () { return this._value_('showAvatarColorRing', true) }
  get collapseSidebarServices () { return this._value_('collapseSidebarServices', false) }
  get showSleepableServiceIndicator () { return this._value_('showSleepableServiceIndicator', true) }

  /* **************************************************************************/
  // Properties : Badge
  /* **************************************************************************/

  get showBadge () { return this._value_('showBadge', true) }
  get badgeColor () { return this._value_('badgeColor', 'rgba(238, 54, 55, 0.95)') }

  /* **************************************************************************/
  // Properties : Useragent
  /* **************************************************************************/

  get useCustomUserAgent () { return false }
  get customUserAgentString () { return '' }
}

export default ACMailbox