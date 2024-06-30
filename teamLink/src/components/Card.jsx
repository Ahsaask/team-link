

// eslint-disable-next-line react/prop-types
const Card = ({children, bg = 'bg-gray-100'}) => {
  return (
    <div className={`${bg} p-6 shadow-md rounded-md`}>
        {children}
    </div>
  )
}

export default Card