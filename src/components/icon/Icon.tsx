import spriteSocialNetwork from "../../assets/images/icons-sprite.svg"

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}
export const Icon = (props: IconPropsType) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={props.width || "39"} height={props.height || "38"} viewBox={props.viewBox || "0 0 39 38"} fill="none">
            <use xlinkHref={`${spriteSocialNetwork}#${props.iconId}`}/>
        </svg>
    )
}


