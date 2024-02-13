import './index.css'

const ThumbNailsList = props => {
  const {eachImage, onChangeMatchImage} = props
  const {thumbnailUrl, id} = eachImage

  const onClickThumbnailButton = () => {
    onChangeMatchImage(id)
  }

  return (
    <li className="thumbnail-list-item">
      <button type="button" className="button" onClick={onClickThumbnailButton}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
      </button>
    </li>
  )
}

export default ThumbNailsList
