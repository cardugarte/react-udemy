import PropTypes from 'prop-types'




export const Tarea = ({ title, subTitle })  => {
  // console.log(props);
  if(!title) {
    throw new Error('No existe la propiedad title');
  }

  return(
    <>
      <h2>{ title }</h2>
      <p>{ subTitle }</p>
    </>
  )
}

Tarea.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number.isRequired
}

Tarea.defaultProps = {
  title: 'no existe un título',
  subTitle: 'no existe un subtítulo'
}
