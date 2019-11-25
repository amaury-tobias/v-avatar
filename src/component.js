import {
  constructStyle,
  background,
  fontColor,
  lightenColor,
  randomBackgroundColor,
  getUsernameInitials
} from './utils'

export default {
  name: 'VAvatar',
  functional: true,
  props: {
    username: {
      type: String,
      default: 'V-A'
    },
    initials: {
      type: String,
      default: undefined
    },
    backgroundColor: {
      type: String,
      default: undefined
    },
    color: {
      type: String,
      default: undefined
    },
    inline: {
      type: Boolean
    },
    size: {
      type: Number,
      default: 50
    },
    src: {
      type: String,
      default: ''
    },
    rounded: {
      type: Boolean
    },
    lighten: {
      type: Number,
      default: 80
    },
    backgroundColors: {
      type: Array,
      default: () => [
        '#F44336',
        '#FF4081',
        '#9C27B0',
        '#673AB7',
        '#3F51B5',
        '#2196F3',
        '#03A9F4',
        '#00BCD4',
        '#009688',
        '#4CAF50',
        '#8BC34A',
        '#CDDC39',
        '#FFC107',
        '#FF9800',
        '#FF5722',
        '#795548',
        '#9E9E9E',
        '#607D8B'
      ]
    }
  },
  render(h, context) {
    const props = context.props

    return h(
      'div',
      {
        style: constructStyle(
          props.inline,
          props.size,
          props.rounded,
          props.src,
          background(
            props.backgroundColor,
            randomBackgroundColor(props.username, props.backgroundColors)
          ),
          fontColor(
            props.color,
            lightenColor(
              props.lighten,
              background(
                props.backgroundColor,
                randomBackgroundColor(props.username, props.backgroundColors)
              )
            )
          )
        ),
        attrs: {
          'aria-hidden': true
        }
      },
      [
        props.src
          ? h()
          : h('span', getUsernameInitials(props.username, props.initials))
      ]
    )
  }
}
