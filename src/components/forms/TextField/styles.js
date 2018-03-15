export default theme => {
  const getColor = props =>
    props.reversed ? '#fff' : theme.palette.inverted.base;
  return {
    root: {
      display: 'block'
    },
    field: {
      display: 'block',
      margin: 0,
      width: '100%',
      outline: 'none',
      background: 'transparent',
      lineHeight: `${16 * 1.5}px`,
      fontSize: 16,
      fontWeight: 'bold',
      resize: 'none',

      // Since <TextareaAutoize /> removes the transition directly
      // on the element.
      transition: 'border-color 200ms ease-out !important',

      padding: props => (props.isTextarea ? '10px 14px' : '4px 14px'),
      minHeight: props => (props.isTextarea ? 16 * 3 : 'auto'),
      border: props => '2px solid ' + getColor(props),
      color: props => getColor(props),

      '&:focus': {
        borderColor: props => theme.palette[props.palette].base
      },

      // Remove browser/os appareance
      '-webkit-appearance': 'none',
      '-moz-appearance': 'none',
      appearance: 'none',

      // Placeholder color
      '&::-webkit-input-placeholder': {
        opacity: 1,
        color: props => getColor(props)
      },
      '&::-moz-placeholder': {
        opacity: 1,
        color: props => getColor(props)
      },
      '&:-ms-input-placeholder': {
        opacity: 1,
        color: props => getColor(props)
      },
      '&:-moz-placeholder': {
        opacity: 1,
        color: props => getColor(props)
      },

      // Autofill background color
      '&:-webkit-autofill': {
        '-webkit-box-shadow': '0 0 0 rgba(0, 0, 0, 0.001)'
      },

      // Input number arrows
      '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
        '-webkit-appearance': 'none',
        margin: 0
      },
      '&[type="number"]': {
        '-moz-appearance': 'textfield'
      }
    }
  };
};
