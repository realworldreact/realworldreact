export default theme => ({
  root: {
    width: '100%'
  },
  tabs: {
    //
  },
  tabsContent: {
    borderStyle: 'solid',
    borderColor: theme.palette.primary.base,
    borderWidth: '0 2px'
  },
  tabsItem: {
    //
  },
  tabsItemContent: {
    padding: 20
  },

  // Options
  options: {
    //
  },
  optionContainer: {
    position: 'relative',
    padding: [0, 10, 10],
    borderStyle: 'solid',
    borderColor: theme.palette.primary.base,
    borderWidth: '0 2px',
    cursor: 'pointer'
  },
  optionContainerDisabled: {
    border: 'none'
  },
  optionContainerActive: {
    '&:before, &:after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: 0,
      width: 12,
      height: 18,
      backgroundColor: '#fff',
      borderBottom: '2px solid ' + theme.palette.primary.base
    },
    '&:before': {
      left: -2
    },
    '&:after': {
      right: -2
    },
    '& $optionLink': {
      borderColor: 'transparent',
      backgroundColor: 'transparent',
      color: '#fff'
    },
    '& $option': {
      backgroundColor: theme.palette.primary.base
    }
  },
  option: {
    position: 'relative',
    transition: 'background-color 200ms ease-out'
  },
  optionLink: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  optionImage: {},

  // Buttons
  buttons: {
    //
  },
  buttonsItem: {
    width: '100%',
    padding: [0, 10]
  },
  buttonsEnter: {
    position: 'relative',
    '& $buttonsItem': {
      '&:before, &:after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        bottom: 0,
        width: 12,
        height: 18,
        backgroundColor: '#fff',
        borderTop: '2px solid ' + theme.palette.primary.base
      },
      '&:before': {
        left: -2
      },
      '&:after': {
        right: -2
      }
    }
  },
  buttonsNext: {
    position: 'relative',
    marginTop: 10,
    '& $buttonsItem': {
      '&:before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: -10,
        left: -2,
        right: -2,
        height: '130%',
        backgroundColor: '#fff'
      }
    }
  },

  // Utils
  onMedium: {
    display: 'none'
  },
  onSmall: {
    //
  },

  // small +
  '@media screen and (min-width: 48em)': {
    onMedium: {
      display: 'block'
    },
    onSmall: {
      display: 'none'
    },
    tabs: {
      paddingRight: 0,
      borderRight: '2px solid ' + theme.palette.primary.base
    },
    tabsContent: {
      borderStyle: 'solid',
      borderColor: '#ebebeb',
      borderWidth: props => (props.border ? '1px 1px 0 1px' : '0'),
      backgroundColor: '#fff'
    },
    tabsItemContent: {
      padding: 40
    },

    // Options
    options: {
      marginLeft: -2,
      border: 'none',
      paddingLeft: 0
    },
    optionContainer: {
      border: 'none',
      padding: [0, 0, 10]
    },
    optionContainerDisabled: {
      backgroundColor: '#fff'
    },
    optionContainerActive: {
      '&:before, &:after': {
        display: 'none'
      }
    },
    option: {
      paddingLeft: 20
    },
    optionWithImage: {
      // The padding right is the width/height of the option image.
      padding: [0, 34, 0, 20]
    },
    optionImage: {
      position: 'absolute',
      right: 0,
      top: 0,
      bottom: 0,
      width: 35,
      backgroundSize: 'cover',
      backgroundRepeat: 'none'
    },

    // Buttons
    buttons: {
      padding: 0
    },
    buttonsItem: {
      padding: 0
    }
  }
});
