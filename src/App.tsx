import {
  Button,
  Center,
  Heading,
  NativeTable,
  Tbody,
  Text,
  Tr,
  VStack,
  useColorMode,
  useMediaQuery,
} from '@yamada-ui/react';
import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { Cell } from './components/Cell';

const defaultCells: number[][] = new Array(3).fill(new Array(3).fill(0));
/**
 * 0: 継続, 1: 勝ち, 2: 負け, 3: 引き分け
 */
type resultType = 0 | 1 | 2 | 3;
const App: FC = () => {
  const { toggleColorMode } = useColorMode();
  const [isLargeScreen] = useMediaQuery('(min-width: 1000px)');
  const [isMediumScreen] = useMediaQuery('(min-width: 500px)');
  const [cells, setCells] = useState<number[][]>(defaultCells);
  const [isPlayer, setIsPlayer] = useState<boolean>(false);
  const [result, setResult] = useState<resultType>(0);
  const handleClick = (i: number, j: number) => {
    if (result !== 0) return;
    setCells((newCells) =>
      newCells.map((cell, index) =>
        index === i ? cell.map((c, nj) => (nj === j ? (!isPlayer ? 1 : -1) : c)) : cell,
      ),
    );
    setIsPlayer(!isPlayer);
  };

  const winLoseCheck = () => {
    // 横判定
    if (cells.map((r) => r.every((c) => c === 1)).some((v) => v === true)) {
      console.log('1の勝ち');
      setResult(1);
      return;
    }
    if (cells.map((r) => r.every((c) => c === -1)).some((v) => v === true)) {
      console.log('-1の勝ち');
      setResult(2);
      return;
    }

    // 縦判定
    for (let i = 0; i < cells.length; i++) {
      if (cells.map((r) => r[i]).every((v) => v === 1)) {
        console.log('1の勝ち');
        setResult(1);
        return;
      }
      if (cells.map((r) => r[i]).every((v) => v === -1)) {
        console.log('-1の勝ち');
        setResult(2);
        return;
      }
    }

    // 斜めの判定
    if (cells.map((r, i) => r[i]).every((v) => v === 1)) {
      console.log('1の勝ち');
      setResult(1);
      return;
    }
    if (cells.map((r, i) => r[i]).every((v) => v === -1)) {
      console.log('-1の勝ち');
      setResult(2);
      return;
    }

    // 斜めの判定（反対）
    if (cells.map((r, i) => r[r.length - 1 - i]).every((v) => v === 1)) {
      console.log('1の勝ち');
      setResult(1);
      return;
    }
    if (cells.map((r, i) => r[r.length - 1 - i]).every((v) => v === -1)) {
      console.log('-1の勝ち');
      setResult(2);
      return;
    }

    // 引き分けの判定
    if (cells.map((e) => e.every((v) => v !== 0)).every((v) => v === true)) {
      console.log('引き分け');
      setResult(3);
      return;
    }

    // 継続
    setResult(0);
  };

  const reStart = () => {
    setIsPlayer(false);
    setResult(0);
    setCells(defaultCells);
  };

  useEffect(winLoseCheck, [cells]);

  return (
    <Center w='100vw' h='100dvh' flexDir='column' gap={3}>
      <Heading textAlign='center'>マルバツゲーム</Heading>
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
      <Text textAlign='center'>
        {(() => {
          switch (result) {
            case 1:
              return 'あなたの勝ち';
            case 2:
              return 'あいての勝ち';
            case 3:
              return '引き分け';
            default:
              return !isPlayer ? 'あなたの番' : 'あいての番';
          }
        })()}
      </Text>
      <VStack w={`calc(100vw * ${isLargeScreen ? 0.25 : isMediumScreen ? 0.5 : 0.75})`}>
        <Button onClick={toggleColorMode}>テーマ切り替え</Button>
        {result !== 0 && <Button onClick={reStart}>もう一回</Button>}
      </VStack>
    </Center>
  );
};

export default App;
