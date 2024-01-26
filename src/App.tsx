import { Center, Icon, NativeTable, Tbody, Td, Tr } from "@yamada-ui/react"
import { FC, useEffect, useState } from "react"
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FaRegCircle } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const defaultArr: number[][] = new Array(3).fill(new Array(3).fill(0))
/**
 * 0: 継続, 1: 勝ち, 2: 負け, 3: 引き分け
 */
type resultType = 0 | 1 | 2 | 3
const App: FC = () => {
  const [arr, setArr] = useState<number[][]>(defaultArr)
  const [isPlayer, setIsPlayer] = useState<boolean>(false)
  const [result, setResult] = useState<resultType>(0)
  const handleClick = (i: number, j: number) => {
    if (result !== 0) return
    setArr(newArr => newArr.map((r, ni) => ni === i ?
      r.map((c, nj) => (nj === j && c === 0) ? !isPlayer ? 1 : -1 : c)
      : r))
    setIsPlayer(!isPlayer)
  }

  const winLoseCheck = () => {
    // 横判定
    if (arr.map(r => r.every(c => c === 1)).some((v) => v === true)) {
      console.log("1の勝ち");
      setResult(1)
    }
    if (arr.map(r => r.every(c => c === -1)).some((v) => v === true)) {
      console.log("-1の勝ち");
      setResult(2)
    }

    // 縦判定
    for (let i = 0; i < arr.length; i++) {
      if (arr.map((r) => r[i]).every(v => v === 1)) {
        console.log("1の勝ち");
        setResult(1)
      }
      if (arr.map((r) => r[i]).every(v => v === -1)) {
        console.log("-1の勝ち");
        setResult(2)
      }
    }

    // 斜めの判定
    if (arr.map((r, i) => r[i]).every(v => v === 1)) {
      console.log("1の勝ち");
      setResult(1)
    }
    if (arr.map((r, i) => r[i]).every(v => v === -1)) {
      console.log("-1の勝ち");
      setResult(2)
    }

    // 斜めの判定（反対）
    if (arr.map((r, i) => r[r.length - 1 - i]).every(v => v === 1)) {
      console.log("1の勝ち");
      setResult(1)
    }
    if (arr.map((r, i) => r[r.length - 1 - i]).every(v => v === -1)) {
      console.log("-1の勝ち");
      setResult(2)
    }

    if (arr.map((e) => e.every(v => v !== 0)).every(v => v === true)) {
      console.log("引き分け");
      setResult(3)
    }
  }

  useEffect(winLoseCheck, [arr])
  return (
    <Center w="100vw" h="100dvh">
      <NativeTable w="calc(100vw * 0.25)" h="calc(100vw * 0.25)" withBorder withColumnBorders>
        <Tbody>
          {arr.map((r, i) => <Tr key={i}>
            {r.map((c, j) => <Td key={j} onClick={() => handleClick(i, j)} w="33.33%" h="33.33%">{
              (() => {
                switch (c) {
                  case 0:

                    return <Icon w="full" h="full" as={AiOutlineQuestionCircle} />;
                  case 1:

                    return <Icon w="full" h="full" as={FaRegCircle} />;
                  case -1:

                    return <Icon w="full" h="full" as={ImCross} />;

                  default:
                    return ""
                }
              })()
            }</Td>)}
          </Tr>)}
        </Tbody>
      </NativeTable>
    </Center>
  )
}

export default App
