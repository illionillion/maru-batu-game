import { Icon, Ripple, Td, useRipple } from "@yamada-ui/react";
import { FC } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FaRegCircle } from "react-icons/fa";
import { ImCross } from "react-icons/im";

interface CellProps {
    i: number;
    j: number;
    c: number;
    handleClick: (i: number, j: number) => void;
}

export const Cell: FC<CellProps> = ({ i, j, c, handleClick }) => {
    const {
        onPointerDown,
        ...rippleProps
    } = useRipple();

    return <Td key={j} onClick={() => c === 0 ? handleClick(i, j) : undefined} w="33.33%" h="33.33%" position="relative" overflow="hidden" onPointerDown={onPointerDown}>{
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
    }
        <Ripple {...rippleProps} />
    </Td>
}