import './index.css'

const TabItems = props => {
  const {eachTab, onChangeTab, isActive} = props
  const {displayText, tabId} = eachTab

  const onClickTabButton = () => {
    onChangeTab(tabId)
  }

  const activeTab = isActive ? 'active-tab' : ''

  return (
    <li className="tab-list-item">
      <button
        type="button"
        className={`tab-button ${activeTab}`}
        onClick={onClickTabButton}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItems
