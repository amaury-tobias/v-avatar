<template functional>
  <div
    :class="data.staticClass"
    :style="
      $options.methods.constructStyle(
        props.inline,
        props.size,
        props.rounded,
        props.src,
        $options.methods.background(
          props.backgroundColor,
          $options.methods.randomBackgroundColor(
            props.username,
            props.backgroundColors
          )
        ),
        $options.methods.fontColor(
          props.color,
          $options.methods.lightenColor(
            $options.methods.background(
              props.backgroundColor,
              $options.methods.randomBackgroundColor(
                props.username,
                props.backgroundColors
              )
            ),
            props.lighten
          )
        )
      )
    "
    aria-hidden="true"
  >
    <span v-if="!props.src">
      {{ $options.methods.getUsernameInitials(props.username, props.initials) }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'VAvatar',
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
  methods: {
    getUsernameInitials(username, propInitials) {
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
    },

    randomBackgroundColor(username, colors) {
      const seed = username.length || Math.floor(Math.random() * 10 + 1)
      return colors[seed % colors.length]
    },

    lightenColor(hex, amt) {
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
    },

    background(backgroundColor, randomBackgroundColor) {
      return backgroundColor || randomBackgroundColor
    },

    fontColor(color, lightenColor) {
      return color || lightenColor
    },

    constructStyle(inline, size, rounded, src, background, fontColor) {
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
        font: `${Math.floor(
          size / 2.5
        )}px/${size}px Helvetica, Arial, sans-serif`,
        color: fontColor
      }

      const backgroundAndFontStyle = src
        ? imgBackgroundAndFontStyle
        : initialBackgroundAndFontStyle

      Object.assign(style, backgroundAndFontStyle)

      return style
    }
  }
}
</script>
