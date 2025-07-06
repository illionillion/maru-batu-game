import { Icon, Ripple, Td, useColorMode, useRipple } from '@yamada-ui/react';
import { memo, type FC, type MouseEvent, type TouchEvent } from 'react';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { FaRegCircle } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';

interface CellProps {
  i: number;
  j: number;
  c: number;
  handleClick: (i: number, j: number) => void;
}

export const Cell: FC<CellProps> = memo(({ i, j, c, handleClick }) => {
  const { onPointerDown, ...rippleProps } = useRipple();
  const { colorMode } = useColorMode();

  const handleMove = (e: MouseEvent | TouchEvent) => {
    const target = e.currentTarget as HTMLElement;

    let x, y;
    if ('touches' in e) {
      x = e.touches[0].pageX - target.offsetLeft;
      y = e.touches[0].pageY - target.offsetTop;
    } else {
      x = e.pageX - target.offsetLeft;
      y = e.pageY - target.offsetTop;
    }

    target.style.setProperty('--x', x + 'px');
    target.style.setProperty('--y', y + 'px');
  };

  return (
    <Td
      key={j}
      w='33.33%'
      h='33.33%'
      position='relative'
      overflow='hidden'
      p={0}
      vars={[
        {
          name: 'clr',
          token: 'colors',
          value: colorMode !== 'light' ? 'primary' : 'success',
        },
      ]}
      _before={{
        content: '\'\'',
        position: 'absolute',
        top: 'var(--y)',
        left: 'var(--x)',
        transform: 'translate(-50%, -50%)',
        background: 'radial-gradient(var(--ui-clr), transparent, transparent)',
        width: 'calc(100% * 2)',
        height: 'calc(100% * 2)',
        opacity: 0,
        transition: '0.5s, top 0s, left 0s',
      }}
      _after={{
        content: '\'\'',
        position: 'absolute',
        inset: '2px',
        background: colorMode === 'light' ? 'whiteAlpha.600' : 'blackAlpha.400',
      }}
      _hover={{
        _before: {
          opacity: 1,
        },
      }}
      onClick={() => (c === 0 ? handleClick(i, j) : undefined)}
      onPointerDown={onPointerDown}
      onMouseMove={handleMove}
      // onTouchMove={handleMove}
    >
      {(() => {
        switch (c) {
          case 0:
            return (
              <Icon
                p='md'
                w='full'
                h='full'
                position='absolute'
                zIndex={20}
                as={AiOutlineQuestionCircle}
              />
            );
          case 1:
            return (
              <Icon
                p='md'
                w='full'
                h='full'
                position='absolute'
                zIndex={20}
                color={colorMode === 'light' ? 'primary' : 'success'}
                as={FaRegCircle}
              />
            );
          case -1:
            return (
              <Icon
                p='md'
                w='full'
                h='full'
                position='absolute'
                zIndex={20}
                color={colorMode === 'light' ? 'danger' : 'warning'}
                as={ImCross}
              />
            );

          default:
            return '';
        }
      })()}
      <Ripple {...rippleProps} />
    </Td>
  );
});
