/* eslint no-magic-numbers: ["error", { "ignore": [2] }] */

import mirrorStyle from '../mirrorStyle';

export default function CarouselFilmStrip({
  avatarSize,
  bubbleMaxWidth,
  bubbleMinWidth,
  paddingRegular,
  transitionDuration
}) {
  return {
    '&.webchat__carousel-filmstrip': {
      // Browser quirks: Firefox has no way to hide scrollbar and while keeping it in function
      // https://developer.mozilla.org/en-US/docs/Web/CSS/overflow
      '@supports (-moz-appearance: none)': {
        marginBottom: -17
      },

      '& .webchat__carousel-filmstrip__attachment': {
        minWidth: bubbleMinWidth,
        maxWidth: bubbleMaxWidth,
        transitionDuration,
        transitionProperty: 'max-width, min-width'
      },

      '& .webchat__carousel-filmstrip__message': {
        maxWidth: bubbleMaxWidth,
        transitionDuration,
        transitionProperty: 'max-width'
      },

      '&.webchat__carousel-filmstrip--hide-nub, &.webchat__carousel-filmstrip--show-nub, &.webchat__carousel-filmstrip--hide-avatar, &.webchat__carousel-filmstrip--show-avatar': {
        '& .webchat__carousel-filmstrip__message': {
          maxWidth: bubbleMaxWidth + paddingRegular
        }
      },

      '& .webchat__carousel-filmstrip__alignment-pad': {
        transitionDuration,
        transitionProperty: 'width',
        width: paddingRegular
      },

      '&.webchat__carousel-filmstrip--extra-trailing .webchat__carousel-filmstrip__alignment-pad': {
        width: paddingRegular * 2
      },

      '&:not(.webchat__carousel-filmstrip--no-message) .webchat__carousel-filmstrip__attachments': {
        marginTop: paddingRegular
      },

      '& .webchat__carousel-filmstrip__avatar-gutter': {
        alignItems: 'flex-end',
        transitionDuration,
        transitionProperty: 'width'
      },

      '& .webchat__carousel-filmstrip__nub-pad': {
        transitionDuration,
        transitionProperty: 'width',
        width: 0
      },

      '&.webchat__carousel-filmstrip--hide-avatar, &.webchat__carousel-filmstrip--show-avatar': {
        '& .webchat__carousel-filmstrip__avatar-gutter': {
          width: avatarSize
        }
      },

      '&.webchat__carousel-filmstrip--hide-avatar, &.webchat__carousel-filmstrip--show-avatar, &.webchat__carousel-filmstrip--hide-nub, &.webchat__carousel-filmstrip--show-nub': {
        '& .webchat__carousel-filmstrip__nub-pad': {
          width: paddingRegular
        }
      },

      '&:not(.webchat__carousel-filmstrip--top-callout) .webchat__carousel-filmstrip__avatar-gutter': {
        justifyContent: 'flex-end'
      },

      ...mirrorStyle('&.webchat__carousel-filmstrip--rtl', {
        '& .webchat__carousel-filmstrip__avatar-gutter': {
          marginLeft: paddingRegular
        },

        '& .webchat__carousel-filmstrip__attachments': {
          marginLeft: -paddingRegular
        },

        '& .webchat__carousel-filmstrip__attachment': {
          paddingLeft: paddingRegular
        },

        '&.webchat__carousel-filmstrip--hide-avatar, &.webchat__carousel-filmstrip--show-avatar': {
          '& .webchat__carousel-filmstrip__attachments': {
            marginLeft: -(avatarSize + paddingRegular * 2)
          },

          '& .webchat__carousel-filmstrip__attachment:first-child': {
            paddingLeft: avatarSize + paddingRegular * 2
          }
        },

        '&.webchat__carousel-filmstrip--hide-nub, &.webchat__carousel-filmstrip--show-nub': {
          '&:not(.webchat__carousel-filmstrip--hide-avatar.webchat__carousel-filmstrip--show-avatar)': {
            '& .webchat__carousel-filmstrip__attachments': {
              marginLeft: -paddingRegular * 2
            },

            '& .webchat__carousel-filmstrip__attachment:first-child': {
              paddingLeft: paddingRegular * 2
            }
          }
        }
      })
    }
  };
}
