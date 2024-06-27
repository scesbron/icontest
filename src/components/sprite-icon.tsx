import Icons from './icons/icons.svg'
const SpriteIcon = ({ name, color, size = 16 }) => {
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 512 512">
      <use href={`${Icons}#icon-${name}`} />
    </svg>
  )
}

export default SpriteIcon;
