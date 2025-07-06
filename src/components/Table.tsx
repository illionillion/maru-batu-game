import type { FC} from '@yamada-ui/react';
import { NativeTable, Tbody, Tr } from '@yamada-ui/react';
import { memo } from 'react';
import { Cell } from './Cell';

interface TableProps {
  cells: number[][];
  handleClick: (i: number, j: number) => void;
  isLargeScreen: boolean;
  isMediumScreen: boolean;
}

export const Table: FC<TableProps> = memo(
  ({ cells, handleClick, isLargeScreen, isMediumScreen }) => {
    return (
      <NativeTable
        withBorder
        withColumnBorders
        w={`calc(100vw * ${isLargeScreen ? 0.25 : isMediumScreen ? 0.5 : 0.75})`}
        h={`calc(100vw * ${isLargeScreen ? 0.25 : isMediumScreen ? 0.5 : 0.75})`}
      >
        <Tbody>
          {cells.map((r, i) => (
            <Tr key={i}>
              {r.map((c, j) => (
                <Cell {...{ c, i, j, handleClick, key: j }} />
              ))}
            </Tr>
          ))}
        </Tbody>
      </NativeTable>
    );
  },
);
