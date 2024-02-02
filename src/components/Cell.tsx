import { Icon, Ripple, Td, useColorMode, useRipple } from '@yamada-ui/react';
import type { FC } from 'react';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { FaRegCircle } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';

interface CellProps {
  i: number;
  j: number;
  c: number;
  handleClick: (i: number, j: number) => void;
}

export const Cell: FC<CellProps> = ({ i, j, c, handleClick }) => {
  const { onPointerDown, ...rippleProps } = useRipple();
  const { colorMode } = useColorMode();

  return (
    <Td
      key={j}
      w='33.33%'
      h='33.33%'
      position='relative'
      overflow='hidden'
      onClick={() => (c === 0 ? handleClick(i, j) : undefined)}
      onPointerDown={onPointerDown}
    >
      {(() => {
        switch (c) {
          case 0:
            return <Icon w='full' h='full' as={AiOutlineQuestionCircle} />;
          case 1:
            return (
              <Icon
                w='full'
                h='full'
                color={colorMode === 'light' ? 'primary' : 'success'}
                as={FaRegCircle}
              />
            );
          case -1:
            return (
              <Icon
                w='full'
                h='full'
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
};
