import type { FC} from '@yamada-ui/react';
import { Tr } from '@yamada-ui/react';
import { memo } from 'react';
import { Cell } from './Cell';

interface RowProps {
  r: number[];
  i: number;
  handleClick: (i: number, j: number) => void;
}

export const Row: FC<RowProps> = memo(({ r, i, handleClick }) => (
  <Tr>
    {r.map((c, j) => (
      <Cell {...{ c, i, j, handleClick, key: j }} />
    ))}
  </Tr>
));
