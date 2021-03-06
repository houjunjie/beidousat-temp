import React from 'react'
// import PropTypes from 'prop-types'
import { Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'
import { arrayToTree, queryArray } from '@/utils/utils'
import pathToRegexp from 'path-to-regexp'
import styles from './index.less'

const { SubMenu } = Menu
let openKeysFlag = false
interface Props {
  menu: any[],
  darkTheme?: any,
  siderFold: boolean,
  navOpenKeys: any[],
  changeOpenKeys: any,
  location: any,
}

const Menus = ({
  siderFold, darkTheme, navOpenKeys, changeOpenKeys, menu, location,
}: Props) => {
  // 生成树状
  const menuTree = arrayToTree(menu.filter(_ => Number(_.mpid) !== -1), 'id', 'mpid')
  const levelMap = {}

  // 递归生成菜单
  const getMenus = (menuTreeN: any, siderFoldN: any) => {
    return menuTreeN.map((item: any) => {
      if (item.children) {
        if (item.mpid) {
          levelMap[item.id] = item.mpid
        }
        return (
          <SubMenu
            key={item.id}
            title={<span>
              {item.icon && <Icon type={item.icon} />}
              {(!siderFoldN || !menuTree.includes(item)) && item.name}
            </span>}
          >
            {getMenus(item.children, siderFoldN)}
          </SubMenu>
        )
      }
      return (
        <Menu.Item key={item.id}>
          <Link to={item.route || '#'} style={siderFoldN ? { width: 10 } : {}}>
            {item.icon && <Icon type={item.icon} />}
            {item.name}
          </Link>
        </Menu.Item>
      )
    })
  }
  const menuItems = getMenus(menuTree, siderFold)

  // 保持选中
  const getAncestorKeys = (key: any) => {
    let map = {}
    const getParent = (index: any) => {
      const result = [String(levelMap[index])]
      if (levelMap[result[0]]) {
        result.unshift(getParent(result[0])[0])
      }
      return result
    }
    for (let index in levelMap) {
      if ({}.hasOwnProperty.call(levelMap, index)) {
        map[index] = getParent(index)
      }
    }
    return map[key] || []
  }

  const onOpenChange = (openKeys: any) => {
    if (navOpenKeys.length) changeOpenKeys([]), openKeysFlag = true
    const latestOpenKey = openKeys.find((key: any) => !navOpenKeys.includes(key))
    const latestCloseKey = navOpenKeys.find(key => !openKeys.includes(key))
    let nextOpenKeys = []
    if (latestOpenKey) {
      nextOpenKeys = getAncestorKeys(latestOpenKey).concat(latestOpenKey)
    }
    if (latestCloseKey) {
      nextOpenKeys = getAncestorKeys(latestCloseKey)
    }
    changeOpenKeys(nextOpenKeys)
  }

  let menuProps = !siderFold ? {
    onOpenChange,
    openKeys: navOpenKeys,
  } : {}


  // 寻找选中路由
  let currentMenu
  let defaultSelectedKeys
  for (let item of menu) {
    if (item.route && pathToRegexp(item.route).exec(location.pathname)) {
      if (!navOpenKeys.length && item.mpid && !openKeysFlag) changeOpenKeys([String(item.mpid)])
      currentMenu = item
      break
    }
  }
  const getPathArray = (array: any, current: any, pid: any, id: any) => {
    let result = [String(current[id])]
    const getPath = (item: any) => {
      if (item && item[pid]) {
        if (Number(item[pid]) === -1) {
          result.unshift(String(item['bpid']))
        } else {
          result.unshift(String(item[pid]))
          getPath(queryArray(array, item[pid], id))
        }
      }
    }
    getPath(current)
    return result
  }
  if (currentMenu) {
    defaultSelectedKeys = getPathArray(menu, currentMenu, 'mpid', 'id')
  }

  if (!defaultSelectedKeys) {
    defaultSelectedKeys = ['1']
  }

  return (
    <Menu
      {...menuProps}
      mode={siderFold ? 'vertical' : 'inline'}
      theme='dark'
      selectedKeys={defaultSelectedKeys}
      className={styles.sidemenu}
    >
      {menuItems}
    </Menu>
  )
}

// Menus.propTypes = {
//   menu: PropTypes.array,
//   siderFold: PropTypes.bool,
//   darkTheme: PropTypes.bool,
//   navOpenKeys: PropTypes.array,
//   changeOpenKeys: PropTypes.func,
//   location: PropTypes.object,
// }

export default Menus
