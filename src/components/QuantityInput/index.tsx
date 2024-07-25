import { Minus, Plus } from "@phosphor-icons/react";
import { QuantityInputContainer } from "./styles";

interface QuantityInputContainer {
    quantity: number;
    handleIncrement: () => void;
    handleDecrement: () => void;
}

export function QuantityInput({quantity, handleIncrement, handleDecrement}: QuantityInputContainer) {
    return (
        <QuantityInputContainer>
            <button type="button" onClick={handleDecrement}>
                <Minus/>
            </button>
            <span>{quantity}</span>
            <button type="button" onClick={handleIncrement}>
                <Plus/>
            </button>
        </QuantityInputContainer>
    )
}