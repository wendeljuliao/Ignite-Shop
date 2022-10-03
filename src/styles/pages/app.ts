import { styled } from "..";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const Header = styled('header', {
  display: 'flex',
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  alignItems: 'center',

  img: {
    cursor: 'pointer',
  },

  div: {
    display: 'flex',
    padding: '0.75rem',
    backgroundColor: '$gray800',
    borderRadius: 6,
    position: 'relative',

  },

  variants: {
    pathnameIsSuccess: {
      true: {
        justifyContent: 'center'
      },
      false: {
        justifyContent: 'space-between'
      },

    },
    enabledBag: {
      false: {
        div: {
          cursor: 'not-allowed',
          svg: {
            color: '#8D8D99',
          }
        }
      },
      true: {
        div: {
          cursor: 'pointer',
          svg: {
            color: '$gray300',
          },
          div: {
            position: 'absolute',
            top: 0,
            right: 0,
            fontSize: '0.875rem',
            color: '$white',
            fontWeight: 'bold',

            backgroundColor: '$green500',
            width: '1.5rem',
            height: '1.5rem',
            alignItems: 'center',
            justifyContent: 'center',

            borderRadius: 999,
            marginTop: -7,
            marginRight: -7,
            outline: '3px solid $gray900',
          }
        },
      }
    }
  }

});

export const SideMenu = styled('aside', {
  position: 'fixed',
  right: 0,
  width: '30rem',
  height: '100vh',

  backgroundColor: '$gray800',

  display: 'flex',
  flexDirection: 'column',
  padding: '1.5rem 1.5rem 3rem 3rem',

  zIndex: 999,

  header: {
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-end',

    svg: {
      color: '#8D8D99',
      cursor: 'pointer',
    }
  },

  h3: {
    fontSize: '$lg',
    lineHeight: 1.6,
    color: '$gray100',
    marginTop: '1.5rem'
  },

  '.content-products': {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    paddingRight: '1.5rem',

    gap: '1.5rem',
    marginTop: '2rem'
  },
  '.product': {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',

    gap: '1.25rem',

    '.wrapper-image': {
      height: 96,
      width: 101.94,
      background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
      padding: '0.25rem',
      borderRadius: 8,

      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      img: {
        objectFit: 'cover'
      }
    }

  },
  '.info-product': {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',

    p: {
      fontSize: '1.125rem',
      lineHeight: 1.6,
      color: '$gray300'
    },

    strong: {
      fontSize: '1.125rem',
      lineHeight: 1.6,
      color: '$gray100',
      marginTop: '0.125rem',
      marginBottom: '0.5rem',
    },

    a: {
      fontSize: '1rem',
      lineHeight: 1.6,
      color: '$green500',

      cursor: 'pointer',

      '&:hover': {
        color: '$green300'
      }
    },
  },

  '.content-infos-buy': {
    display: 'flex',
    flexDirection: 'column',
    paddingRight: '1.5rem',

    flex: 1,

    justifyContent: 'flex-end',

    div: {
      display: 'flex',

      justifyContent: 'space-between',
    },

    'div:first-child': {
      alignItems: 'center',
      p: {
        color: '$gray100',
        lineHeight: 1.6,
      },
      span: {
        fontSize: '1.125rem',
        color: '$gray300',
        lineHeight: 1.6,
      }
    },
    'div:nth-child(2)': {
      alignItems: 'center',
      span: {
        color: '$gray100',
        lineHeight: 1.6,
        fontWeight: 'bold',
        fontSize: '1.125rem'
      },
      strong: {
        fontSize: '1.5rem',
        color: '$gray100',
        lineHeight: 1.6,
      }
    },

    button: {
      border: 0,
      marginTop: '3.43rem',

      backgroundColor: '$green500',
      color: '$white',

      padding: '1.25rem',
      width: '100%',

      fontSize: '1.125rem',
      fontWeight: 'bold',
      lineHeight: 1.6,

      borderRadius: 8,

      cursor: 'pointer',

      '&:disabled': {
        opacity: 0.6,
      },

      '&:not(:disabled):hover': {
        backgroundColor: '$green300',
      }
    }
  }

});