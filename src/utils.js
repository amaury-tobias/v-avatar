export function constructStyle(
  inline,
  size,
  rounded,
  src,
  background,
  fontColor
) {
  const style = {
    display: inline ? 'inline-flex' : 'flex',
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: rounded ? '50%' : 0,
    lineHeight: `${size + Math.floor(size / 20)}px`,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  }

  const imgBackgroundAndFontStyle = {
    'background-image': `url(${src})`,
    'background-position': 'center',
    'background-repeat': 'no-repeat',
    'background-size': 'cover'
  }
  //background: `transparent url('${this.src}') no-repeat scroll 0% 0% / ${this.size}px ${this.size}px content-box border-box`
  const initialBackgroundAndFontStyle = {
    backgroundColor: background,
    font: `${Math.floor(size / 2.5)}px/${size}px Helvetica, Arial, sans-serif`,
    color: fontColor
  }

  const backgroundAndFontStyle = src
    ? imgBackgroundAndFontStyle
    : initialBackgroundAndFontStyle

  Object.assign(style, backgroundAndFontStyle)

  return style
}

export function background(backgroundColor, randomBackgroundColor) {
  return backgroundColor || randomBackgroundColor
}

export function fontColor(color, lightenColor) {
  return color || lightenColor
}

export function lightenColor(amt, hex) {
  var usePound = false

  if (hex[0] === '#') {
    hex = hex.slice(1)
    usePound = true
  }

  var num = parseInt(hex, 16)
  var r = (num >> 16) + amt

  if (r > 255) r = 255
  else if (r < 0) r = 0

  var b = ((num >> 8) & 0x00ff) + amt

  if (b > 255) b = 255
  else if (b < 0) b = 0

  var g = (num & 0x0000ff) + amt

  if (g > 255) g = 255
  else if (g < 0) g = 0

  return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16)
}

export function randomBackgroundColor(username, colors) {
  const seed = username.length || Math.floor(Math.random() * 10 + 1)
  return colors[seed % colors.length]
}

export function getUsernameInitials(username, propInitials) {
  if (propInitials && propInitials.length > 0) return propInitials
  const parts = username.split(/[ -]/)
  let initials = ''

  for (var i = 0; i < parts.length; i++) {
    initials += parts[i].charAt(0)
  }

  if (initials.length > 3 && initials.search(/[A-Z]/) !== -1) {
    initials = initials.replace(/[a-z]+/g, '')
  }

  initials = initials.substr(0, 3).toUpperCase()

  return initials
}

export default {
  constructStyle,
  background,
  fontColor,
  lightenColor,
  randomBackgroundColor,
  getUsernameInitials
}
