import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { List, WhiteSpace } from 'antd-mobile'
import { FormattedMessage } from 'react-intl'

class HomeSettingList extends Component {
  render() {
    return (
      <div>
        <List className="home-setting__list">
          <List.Item
            thumb={require('../assets/images/setting-schedule.png')}
            onClick={() => {
              const { history } = this.props
              history.push('/agenda')
              history.goForward()
            }}
          >
            <FormattedMessage id="Home.SettingTab.listText0" />
          </List.Item>
          {/* <List.Item
            thumb={require('../assets/images/setting-edit.png')}
            onClick={() => {}}
          >
            <FormattedMessage id="Home.SettingTab.listText1" />
          </List.Item> */}
          <List.Item
            thumb={require('../assets/images/setting-plan.png')}
            onClick={() => {}}
          >
            <FormattedMessage id="Home.SettingTab.listText2" />
          </List.Item>
        </List>
        <WhiteSpace />
        <List className="home-setting__list">
          <List.Item
            thumb={require('../assets/images/setting-stat.png')}
            onClick={() => {}}
          >
            <FormattedMessage id="Home.SettingTab.listText3" />
          </List.Item>
        </List>
      </div>
    )
  }
}

HomeSettingList.propTypes = {
  history: PropTypes.object.isRequired,
}

export default HomeSettingList
