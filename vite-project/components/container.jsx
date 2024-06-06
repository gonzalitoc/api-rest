import PropTypes from 'prop-types'

export default function Container(props) {
  const { image, title, paragraph } = props

  return (
    <div>
      <h1 className="title" title={title}>
        {title}
      </h1>
      <img className="img" src={image} alt={title} />
      <p className="paragraph">{paragraph}</p>
    </div>
  )
}

Container.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
}
