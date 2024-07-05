import { IconItem, ItemContainer } from "./styles";


interface BannerItemProps{
    text: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Icon: React.ForwardRefExoticComponent<any>
}

export function BannerItem({text, Icon}: BannerItemProps){
    return (
        <ItemContainer>
            <IconItem>
                <Icon/>
            </IconItem>
            {text}
        </ItemContainer>
    )
}