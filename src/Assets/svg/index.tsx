import * as React from "react"
import Svg, { SvgProps, Path, Circle } from "react-native-svg"

interface SVGRProps {
    title?: string;
    titleId?: string;
}

export const Home = (props: SvgProps) => (
    <Svg
        width={32}
        height={32}
        fill="none"
        stroke='#FF409A'
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        viewBox="0 0 24 24"
        {...props}
    >
        <Path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <Path d="M9 22V12h6v10" />
    </Svg>
)


export const Search = ({ title, titleId, ...props }: SvgProps & SVGRProps) => (
    <Svg
        width={32}
        height={32}
        fill="none"
        stroke="#FF409A"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        viewBox="0 0 24 24"
        aria-labelledby={titleId}
        {...props}
    >
        {title ? <title id={titleId}>{title}</title> : null}
        <Circle cx={11} cy={11} r={8} />
        <Path d="m21 21-4.35-4.35" />
    </Svg>
)


export const Wallet = ({ title, titleId, ...props }: SvgProps & SVGRProps) => (
    <Svg
        width={40}
        height={40}
        fill="none"
        stroke="#FF409A"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        viewBox="0 0 24 24"
        {...props}
    >
        {title ? <title id={titleId}>{title}</title> : null}
        <Path
            stroke="#FF409A"
            d="M19 20H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2Z"
        />
        <Path
            fill="#FF409A"
            stroke="#FF409A"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 14a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Z"
        />
        <Path
            stroke="#FF409A"
            d="M18 7V5.603a2 2 0 0 0-2.515-1.932l-11 2.933A2 2 0 0 0 3 8.537V9"
        />
    </Svg>

)