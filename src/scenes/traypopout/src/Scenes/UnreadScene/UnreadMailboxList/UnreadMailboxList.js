import React from 'react'
import PropTypes from 'prop-types'
import shallowCompare from 'react-addons-shallow-compare'
import { mailboxStore, mailboxActions } from 'stores/mailbox'
import { List, Divider } from 'material-ui'
import UnreadMailboxListItem from './UnreadMailboxListItem'
import { WB_FOCUS_MAILBOXES_WINDOW } from 'shared/ipcEvents'
import { ipcRenderer } from 'electron'

const styles = {
  main: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    overflowY: 'auto'
  },
  list: {
    paddingTop: 0,
    paddingBottom: 0
  },
  noneItem: {
    textAlign: 'center',
    paddingTop: 16,
    paddingBottom: 16,
    fontSize: 14,
    cursor: 'default'
  }
}

export default class UnreadMailboxList extends React.Component {
  /* **************************************************************************/
  // Class
  /* **************************************************************************/

  static propTypes = {
    requestShowMailbox: PropTypes.func.isRequired
  }

  /* **************************************************************************/
  // Component Lifecycle
  /* **************************************************************************/

  componentDidMount () {
    mailboxStore.listen(this.mailboxesChanged)
  }

  componentWillUnmount () {
    mailboxStore.unlisten(this.mailboxesChanged)
  }

  /* **************************************************************************/
  // Data Lifecycle
  /* **************************************************************************/

  state = (() => {
    const mailboxState = mailboxStore.getState()

    return {
      mailboxIds: mailboxState.mailboxIds()
    }
  })()

  mailboxesChanged = (mailboxState) => {
    this.setState({
      mailboxIds: mailboxState.mailboxIds()
    })
  }

  /* **************************************************************************/
  // UI Events
  /* **************************************************************************/

  /**
  * Handles showing a mailbox
  * @param evt: the event that fired
  * @param mailboxId: the id of the mailbox
  */
  handleRequestShowMailbox = (evt, mailboxId) => {
    this.props.requestShowMailbox(mailboxId)
  }

  /**
  * Handles switching to a mailbox
  * @param evt: the event that fired
  * @param mailboxId: the id of the mailbox
  */
  handleRequestSwitchMailbox = (evt, mailboxId) => {
    ipcRenderer.send(WB_FOCUS_MAILBOXES_WINDOW, {})
    mailboxActions.changeActive(mailboxId)
  }

  /* **************************************************************************/
  // Rendering
  /* **************************************************************************/

  shouldComponentUpdate (nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState)
  }

  render () {
    const { style, requestShowMailbox, ...passProps } = this.props
    const { mailboxIds } = this.state

    return (
      <div
        style={{...styles.main, ...style}}
        {...passProps}>
        <List style={styles.list}>
          {mailboxIds.length ? (
            mailboxIds.reduce((acc, id, index, arr) => {
              return acc.concat([
                (<UnreadMailboxListItem
                  key={id}
                  mailboxId={id}
                  requestShowMailbox={this.handleRequestShowMailbox}
                  requestSwitchMailbox={this.handleRequestSwitchMailbox} />
                ),
                index === arr.length - 1 ? undefined : (<Divider key={`inset-${id}`} />)
              ])
            }, [])
          ) : (
            <div style={styles.noneItem}>You haven't added any accounts yet</div>
          )}
        </List>
      </div>
    )
  }
}