import {
  Button,
  Center,
  Heading,
  Text,
  VStack,
  useColorMode,
  useMediaQuery,
} from '@yamada-ui/react';
import type { FC } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Table } from './components/Table';

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

  // 最新の状態を追跡するためのref
  const isPlayerRef = useRef<boolean>(false);
  const resultRef = useRef<resultType>(0);

  // refを最新の状態に同期
  useEffect(() => {
    isPlayerRef.current = isPlayer;
  }, [isPlayer]);

  useEffect(() => {
    resultRef.current = result;
  }, [result]);

  const handleClick = useCallback((i: number, j: number) => {
    // refを使って最新の状態をチェック
    if (resultRef.current !== 0) return;

    setCells((newCells) => {
      // セルが既に埋まっている場合は何もしない
      if (newCells[i][j] !== 0) return newCells;

      const updatedCells = newCells.map((cell, index) =>
        index === i
          ? cell.map((c, nj) =>
            nj === j ? (!isPlayerRef.current ? 1 : -1) : c,
          )
          : cell,
      );
      return updatedCells;
    });

    setIsPlayer(!isPlayerRef.current);
  }, []);

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
      <Table
        cells={cells}
        isLargeScreen={isLargeScreen}
        isMediumScreen={isMediumScreen}
        handleClick={handleClick}
      />
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
      <VStack
        w={`calc(100vw * ${isLargeScreen ? 0.25 : isMediumScreen ? 0.5 : 0.75})`}
      >
        <Button onClick={toggleColorMode}>テーマ切り替え</Button>
        {result !== 0 && <Button onClick={reStart}>もう一回</Button>}
      </VStack>
    </Center>
  );
};

export default App;
