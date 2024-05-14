import * as React from "react"
import Svg, { SvgProps, Path, Circle, ClipPath, Defs, G } from "react-native-svg"


interface SVGRProps {
    title?: string;
    titleId?: string;
    color?: string;
}

export const Home = (props: SvgProps) => (
    <Svg
        width={30}
        height={30}
        fill="none"
        stroke={props.color}
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


export const Search = ({ title, titleId, color, ...props }: SvgProps & SVGRProps) => (
    <Svg
        width={30}
        height={30}
        fill="none"
        stroke={color}
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


export const CryptoGraphSvgLogo = ({ title, titleId, color, width, height, ...props }: SvgProps & SVGRProps) => (
    <Svg
        width={width}
        height={height}
        viewBox="0 0 375 375"
        {...props}
    >
        <Defs>
            <ClipPath id="a">
                <Path d="M93 171h38.332v33H93Zm0 0" />
            </ClipPath>
            <ClipPath id="b">
                <Path d="M79 151.262h32V183H79Zm0 0" />
            </ClipPath>
            <ClipPath id="c">
                <Path d="M58 151.262h32V183H58Zm0 0" />
            </ClipPath>
            <ClipPath id="d">
                <Path d="M37.582 171H70v33H37.582Zm0 0" />
            </ClipPath>
        </Defs>
        <Path fill="#fff" d="M-37.5-37.5h450v450h-450z" />
        <Path fill="#141827" d="M-37.5-37.5h450v450h-450z" />
        <G clipPath="url(#a)">
            <Path
                fill="#a2caff"
                d="m120.387 187.445-4.707-4.707-4.703 4.707 4.703 4.703Zm-4.707-15.652c.277 0 .55.105.761.316l14.575 14.575a1.076 1.076 0 0 1 0 1.523l-14.575 14.574a1.082 1.082 0 0 1-1.523 0l-9.637-9.64-.113.113a1.082 1.082 0 0 1-1.523 0 1.082 1.082 0 0 1 0-1.524l11.273-11.273a1.075 1.075 0 0 1 1.523 0l6.23 6.227c.2.203.313.476.313.761 0 .285-.113.559-.312.762l-6.23 6.227a1.075 1.075 0 0 1-1.524 0l-5.465-5.465-2.652 2.648 8.879 8.88 13.05-13.052-13.05-13.05-20.035 20.035a1.075 1.075 0 0 1-1.524 0 1.07 1.07 0 0 1 0-1.52l20.797-20.8c.21-.212.488-.317.762-.317"
            />
        </G>
        <G clipPath="url(#b)">
            <Path
                fill="#a2caff"
                d="M84.484 169.738c.274 0 .551.106.758.317l10.403 10.398a1.082 1.082 0 0 1 0 1.524 1.082 1.082 0 0 1-1.524 0l-10.398-10.403a1.07 1.07 0 0 1 0-1.52c.21-.21.484-.316.761-.316Zm15.102-3.097-4.703-4.707-4.707 4.707 4.707 4.703Zm-4.703-7.305c.285 0 .558.113.762.312l6.226 6.23a1.075 1.075 0 0 1 0 1.524l-6.226 6.227c-.407.402-1.122.402-1.524 0l-6.226-6.227a1.075 1.075 0 0 1 0-1.523l6.226-6.23c.203-.2.477-.313.762-.313Zm0-8.348c.285 0 .558.114.762.317l14.574 14.574a1.082 1.082 0 0 1 0 1.523l-10.395 10.399a1.082 1.082 0 0 1-1.523 0 1.075 1.075 0 0 1 0-1.524l9.633-9.636-13.051-13.051-13.813 13.812a1.082 1.082 0 0 1-1.523 0 1.075 1.075 0 0 1 0-1.523l14.574-14.574c.203-.203.477-.317.762-.317"
            />
        </G>
        <Path
            fill="#a2caff"
            d="M84.477 190.535c.277 0 .554.106.761.317l10.407 10.406a1.075 1.075 0 1 1-1.524 1.52L83.72 192.374a1.075 1.075 0 0 1 0-1.523c.207-.211.484-.317.758-.317Zm24.98-4.168c.277 0 .55.106.762.317a1.075 1.075 0 0 1 0 1.523l-10.406 10.402a1.07 1.07 0 0 1-1.52 0 1.075 1.075 0 0 1 0-1.523l10.402-10.402c.211-.211.489-.317.762-.317Zm-9.867 1.078-4.707-4.707-4.703 4.707 4.703 4.703Zm-4.707-7.304c.277 0 .55.101.762.312l6.23 6.23c.2.2.313.473.313.762 0 .285-.114.559-.313.762l-6.23 6.227a1.075 1.075 0 0 1-1.524 0l-6.226-6.23a1.07 1.07 0 0 1 0-1.52l6.226-6.23c.211-.212.488-.313.762-.313Zm-4.168-4.18c.277 0 .55.105.762.316a1.075 1.075 0 0 1 0 1.524L81.07 188.207a1.077 1.077 0 0 1-1.523-1.523l10.406-10.407c.211-.21.488-.316.762-.316Zm4.168-4.168c.277 0 .55.105.762.316l10.398 10.395a1.082 1.082 0 0 1 0 1.523 1.075 1.075 0 0 1-1.523 0L94.12 173.63a1.077 1.077 0 0 1 .762-1.836"
        />
        <Path
            fill="#a2caff"
            d="M94.883 180.137c.277 0 .55.105.762.316a1.075 1.075 0 0 1 0 1.524L85.25 192.375a1.082 1.082 0 0 1-1.523 0 1.075 1.075 0 0 1 0-1.523l10.394-10.399c.211-.21.488-.316.762-.316Zm-5.692-3.098-4.703-4.707-4.707 4.707 4.707 4.703Zm-4.703-7.305c.274 0 .551.106.762.313l6.227 6.23a1.076 1.076 0 0 1 0 1.523l-6.227 6.227a1.076 1.076 0 0 1-1.523 0l-6.23-6.226a1.082 1.082 0 0 1 0-1.524l6.23-6.23c.21-.207.484-.313.761-.313Zm4.172-4.175c.274 0 .55.105.762.316l6.742 6.742a1.075 1.075 0 0 1 0 1.524 1.082 1.082 0 0 1-1.523 0l-6.743-6.743a1.075 1.075 0 0 1 0-1.523c.211-.21.485-.316.762-.316Zm-4.172-4.172a1.077 1.077 0 0 1 .762 1.84l-10.223 10.218a1.075 1.075 0 0 1-1.523 0 1.075 1.075 0 0 1 0-1.523l10.223-10.219c.21-.21.484-.316.761-.316"
        />
        <G clipPath="url(#c)">
            <Path
                fill="#a2caff"
                d="m78.79 166.64-4.708-4.702-4.703 4.703 4.703 4.707Zm-4.708-7.304c.277 0 .55.105.762.316l6.226 6.227a1.075 1.075 0 0 1 0 1.523l-5.465 5.47 2.649 2.648 9.64-9.641a1.082 1.082 0 0 1 1.524 0 1.075 1.075 0 0 1 0 1.523l-10.395 10.399a.992.992 0 0 1-.175.14c-.418.278-.989.23-1.356-.136l-10.398-10.403a1.076 1.076 0 0 1 0-1.523l6.226-6.227c.211-.21.489-.316.762-.316Zm0-8.344c.277 0 .55.106.762.313l10.398 10.402a1.075 1.075 0 1 1-1.52 1.523l-9.64-9.64-13.05 13.05 13.812 13.813a1.075 1.075 0 0 1 0 1.524 1.075 1.075 0 0 1-1.524 0l-14.574-14.575a1.076 1.076 0 0 1 0-1.523l14.574-14.574a1.09 1.09 0 0 1 .762-.313"
            />
        </G>
        <Path
            fill="#a2caff"
            d="M84.477 202.992a1.075 1.075 0 0 1 .762 1.836l-4.177 4.18a1.082 1.082 0 0 1-1.523 0 1.082 1.082 0 0 1 0-1.524l4.18-4.18c.207-.21.484-.312.758-.312Zm15.105 5.254-4.707-4.707-4.703 4.707 4.703 4.703Zm-4.707-7.305c.285 0 .559.114.762.317l6.226 6.226a1.075 1.075 0 0 1 0 1.524l-6.226 6.226c-.403.403-1.121.403-1.524 0l-6.226-6.226a1.075 1.075 0 0 1 0-1.524l6.226-6.226c.203-.203.477-.317.762-.317Zm0-8.347c.277 0 .55.105.762.316l14.574 14.574a1.076 1.076 0 0 1 0 1.524l-14.574 14.574a1.082 1.082 0 0 1-1.524 0L83.711 213.18a1.082 1.082 0 0 1 0-1.524 1.075 1.075 0 0 1 1.523 0l9.641 9.64 13.05-13.05-13.812-13.812a1.075 1.075 0 0 1 0-1.524c.211-.21.485-.316.762-.316"
        />
        <Path
            fill="#a2caff"
            d="M94.879 200.938a1.075 1.075 0 0 1 .762 1.836l-10.403 10.402a1.075 1.075 0 1 1-1.52-1.523l10.4-10.403c.21-.207.484-.313.76-.313Zm-5.695-3.098-4.707-4.707-4.704 4.707 4.704 4.703Zm-4.707-7.305c.277 0 .554.106.761.313l6.23 6.23a1.082 1.082 0 0 1 0 1.524l-6.23 6.226c-.402.406-1.117.406-1.52 0l-6.23-6.226a1.082 1.082 0 0 1 0-1.524l6.23-6.23c.208-.207.485-.313.759-.313M63.652 190.52c.278 0 .551.105.762.316l10.422 10.422a1.07 1.07 0 0 1 0 1.52 1.075 1.075 0 0 1-1.523 0l-10.418-10.419a1.075 1.075 0 0 1 0-1.523c.207-.211.484-.316.757-.316Zm15.125-3.075-4.703-4.707-4.707 4.707 4.707 4.703Zm-4.703-7.308c.274 0 .551.105.762.316l6.227 6.23a1.07 1.07 0 0 1 0 1.52l-6.227 6.23c-.406.403-1.121.403-1.523 0l-6.227-6.23a1.06 1.06 0 0 1-.316-.758c0-.289.113-.562.316-.761l6.227-6.23c.21-.212.484-.317.761-.317Zm-4.164-4.18a1.077 1.077 0 0 1 .762 1.84l-10.41 10.406a1.075 1.075 0 0 1-1.524 0 1.07 1.07 0 0 1 0-1.52l10.41-10.41c.211-.21.485-.316.762-.316Zm4.164-4.164c.274 0 .551.105.762.316l10.402 10.403a1.075 1.075 0 0 1 0 1.523 1.07 1.07 0 0 1-1.52 0L73.313 173.63a1.07 1.07 0 0 1 0-1.52c.211-.21.485-.316.762-.316"
        />
        <Path
            fill="#a2caff"
            d="m78.766 208.223-4.707-4.707-4.704 4.707 4.704 4.703Zm-4.707-7.305c.285 0 .558.113.761.312l6.23 6.23a1.082 1.082 0 0 1 0 1.524l-6.23 6.227c-.402.406-1.117.406-1.523 0l-6.227-6.227a1.075 1.075 0 0 1 0-1.523l6.227-6.23c.203-.2.476-.313.762-.313Zm-4.172-4.176a1.077 1.077 0 0 1 .761 1.84l-9.64 9.64 13.05 13.051 13.813-13.812a1.075 1.075 0 0 1 1.524 0 1.075 1.075 0 0 1 0 1.523L74.82 223.56c-.402.402-1.117.402-1.523 0l-14.574-14.575a1.093 1.093 0 0 1-.317-.761c0-.286.117-.563.317-.762l10.402-10.402c.21-.211.484-.317.762-.317Zm4.172-4.172c.277 0 .55.106.761.317l10.422 10.418a1.082 1.082 0 0 1 0 1.523 1.075 1.075 0 0 1-1.523 0L73.297 194.41a1.077 1.077 0 0 1 .762-1.84"
        />
        <G clipPath="url(#d)">
            <Path
                fill="#a2caff"
                d="m57.965 187.418-4.707-4.703-4.703 4.703 4.703 4.707Zm-4.707-7.305c.277 0 .55.106.762.317l6.226 6.23a1.07 1.07 0 0 1 0 1.52l-6.226 6.23a1.082 1.082 0 0 1-1.524 0l-6.226-6.23a1.07 1.07 0 0 1 0-1.52l6.226-6.23c.211-.211.488-.317.762-.317Zm0-8.343c.277 0 .55.105.762.316l10.417 10.418a1.075 1.075 0 1 1-1.519 1.523l-9.66-9.66-13.051 13.051 13.05 13.05 14.65-14.648a1.082 1.082 0 0 1 1.523 0 1.075 1.075 0 0 1 0 1.524l-15.41 15.41a1.076 1.076 0 0 1-1.524 0L37.922 188.18a1.077 1.077 0 0 1 0-1.52l14.574-14.574c.211-.211.488-.316.762-.316"
            />
        </G>
        <Path
            fill="#fff"
            d="M150.752 198.039c-2.273 0-4.328-.469-6.171-1.406-1.836-.938-3.293-2.32-4.375-4.157-1.086-1.843-1.625-4.148-1.625-6.921.03-2.696.578-4.993 1.64-6.891 1.07-1.906 2.535-3.348 4.39-4.328 1.852-.977 3.946-1.469 6.282-1.469 2.238 0 4.149.406 5.734 1.219 1.582.805 2.852 1.898 3.813 3.281.969 1.375 1.598 2.93 1.89 4.656h-4.53c-.212-1.27-.684-2.27-1.423-3a6.207 6.207 0 0 0-2.562-1.547 9.82 9.82 0 0 0-2.922-.453c-2.562 0-4.531.72-5.906 2.157-1.367 1.437-2.047 3.464-2.047 6.078 0 2.793.664 4.937 2 6.437 1.344 1.492 3.297 2.235 5.86 2.235 1.062 0 2.097-.16 3.109-.485a6.162 6.162 0 0 0 2.593-1.64c.72-.77 1.176-1.801 1.375-3.094h4.579c-.325 1.762-.961 3.355-1.907 4.781-.949 1.418-2.234 2.531-3.859 3.344-1.625.8-3.606 1.203-5.938 1.203ZM165.555 197.601v-17.734h4.094l.343 5.172-.031 3.797v8.765Zm4.406-7.64-.14-3.922c0-.602.113-1.258.343-1.969a6.088 6.088 0 0 1 1.156-2c.532-.633 1.227-1.16 2.094-1.578.863-.414 1.926-.625 3.188-.625h.656v4.922h-.656c-1.243 0-2.293.094-3.157.281-.855.188-1.539.485-2.046.89-.5.4-.868.93-1.094 1.595-.23.656-.344 1.46-.344 2.406ZM178.232 205.851v-3.421h2.719c.437 0 .816-.043 1.14-.125.332-.086.657-.309.97-.672.32-.356.671-.938 1.046-1.75l1.172-2.578-6.906-17.438h4.53l4.532 12.906 4.875-12.906h4.531l-8.718 20.453c-.524 1.207-1.008 2.176-1.453 2.906-.438.739-.891 1.297-1.36 1.672-.46.375-.992.625-1.594.75a9.906 9.906 0 0 1-2.109.203ZM209.963 198.039c-1.094 0-2.012-.168-2.75-.5-.73-.332-1.32-.727-1.766-1.188-.45-.457-.781-.875-1-1.25a21.62 21.62 0 0 1-.36-.656h-.093v11.047h-4.531v-25.625h3.844l.734 3.875h.094c.02-.082.117-.32.297-.719.175-.406.476-.851.906-1.343.426-.489 1.015-.91 1.765-1.266.75-.363 1.688-.547 2.813-.547 1.781 0 3.207.39 4.281 1.172 1.082.773 1.875 1.852 2.375 3.234.508 1.375.766 2.97.766 4.782 0 1.843-.262 3.437-.781 4.78-.524 1.337-1.325 2.372-2.407 3.11-1.074.727-2.468 1.094-4.187 1.094Zm-1.344-3.719c1.207 0 2.133-.25 2.781-.75a3.866 3.866 0 0 0 1.328-1.984c.25-.82.375-1.68.375-2.578 0-.883-.132-1.727-.39-2.532a3.788 3.788 0 0 0-1.406-1.953c-.668-.488-1.594-.734-2.782-.734-1.062 0-1.93.227-2.593.672-.657.45-1.137 1.07-1.438 1.86-.305.792-.453 1.687-.453 2.687 0 1.043.156 1.96.469 2.75a4.01 4.01 0 0 0 1.5 1.875c.675.46 1.547.687 2.609.687ZM226.003 197.601c-1.406 0-2.464-.343-3.172-1.03-.71-.696-1.062-1.821-1.062-3.376v-10.703h4.11v11.656h4.14v3.453Zm-6.906-14.625v-3.109c.633 0 1.149-.039 1.547-.125.406-.094.727-.281.969-.562.25-.29.43-.739.547-1.344.113-.602.171-1.438.171-2.5h3.547v4.531h4.047v3.11ZM241.663 198.039c-1.96 0-3.605-.39-4.937-1.172-1.336-.781-2.336-1.851-3-3.219-.657-1.363-.985-2.922-.985-4.672 0-1.789.328-3.367.985-4.734.664-1.363 1.664-2.43 3-3.203 1.332-.781 2.992-1.172 4.984-1.172 2.906 0 5.113.836 6.625 2.5 1.508 1.668 2.266 3.871 2.266 6.61 0 1.699-.32 3.242-.954 4.624a7.276 7.276 0 0 1-2.937 3.25c-1.324.79-3.008 1.188-5.047 1.188Zm0-3.719c1.3 0 2.285-.27 2.953-.812a3.997 3.997 0 0 0 1.36-2.094c.238-.852.359-1.71.359-2.578a9.53 9.53 0 0 0-.36-2.625 4.09 4.09 0 0 0-1.359-2.094c-.668-.562-1.652-.844-2.953-.844-1.262 0-2.23.282-2.906.844a4.248 4.248 0 0 0-1.39 2.094 9.385 9.385 0 0 0-.36 2.625c0 .867.117 1.726.36 2.578.25.844.71 1.543 1.39 2.094.676.543 1.644.812 2.906.812ZM264.622 198.07c-2.367 0-4.434-.472-6.203-1.422-1.762-.945-3.121-2.351-4.078-4.218-.95-1.875-1.39-4.149-1.328-6.829.062-2.726.609-5.039 1.64-6.937 1.031-1.906 2.473-3.348 4.328-4.328 1.864-.977 3.989-1.469 6.375-1.469 3.313 0 5.88.715 7.703 2.14 1.82 1.43 3.024 3.524 3.61 6.282l-4.235.61c-.293-1.208-.793-2.173-1.5-2.891a5.9 5.9 0 0 0-2.515-1.532c-.98-.3-2-.453-3.063-.453-2.761 0-4.797.758-6.11 2.266-1.312 1.512-1.952 3.5-1.92 5.969 0 2.761.737 4.886 2.218 6.375 1.488 1.48 3.582 2.218 6.281 2.218a9.183 9.183 0 0 0 3.125-.53c1-.364 1.86-.91 2.578-1.641.719-.739 1.207-1.688 1.469-2.844h-5.36V185.6h9.5v12h-2.984l-.984-4.234h-.094c-.2.555-.527 1.106-.984 1.656-.461.543-1.04 1.043-1.735 1.5-.687.461-1.508.828-2.453 1.11-.949.289-2.043.437-3.281.437ZM280.8 197.601v-17.734h4.093l.344 5.172-.032 3.797v8.765Zm4.405-7.64-.14-3.922c0-.602.113-1.258.343-1.969a6.088 6.088 0 0 1 1.157-2c.53-.633 1.226-1.16 2.093-1.578.864-.414 1.926-.625 3.188-.625h.656v4.922h-.656c-1.242 0-2.293.094-3.156.281-.856.188-1.54.485-2.047.89-.5.4-.867.93-1.094 1.595-.23.656-.344 1.46-.344 2.406ZM301.258 198.039c-1.618 0-2.93-.383-3.938-1.14-1-.77-1.726-1.837-2.172-3.204-.449-1.363-.672-2.937-.672-4.719 0-1.812.227-3.41.688-4.796.457-1.383 1.18-2.457 2.172-3.22 1-.757 2.304-1.14 3.922-1.14 1.03 0 1.894.149 2.593.438.707.281 1.285.625 1.735 1.031.445.406.785.805 1.015 1.187.227.387.391.696.485.922h.078v-3.53h4.531V197.6h-3.797l-.734-2.89h-.078c-.063.2-.227.48-.485.844-.261.355-.617.73-1.062 1.125-.438.386-1.012.71-1.719.968-.71.258-1.562.391-2.562.391Zm1.812-3.719c1.063 0 1.895-.226 2.5-.687.602-.457 1.02-1.098 1.25-1.922.227-.82.344-1.723.344-2.703 0-1.063-.125-1.989-.375-2.782-.242-.789-.656-1.406-1.25-1.843-.586-.446-1.406-.672-2.469-.672-1.125 0-2 .246-2.625.734-.617.492-1.047 1.133-1.297 1.922-.242.781-.36 1.664-.36 2.64 0 .981.118 1.876.36 2.688.25.805.68 1.446 1.297 1.922.625.469 1.5.703 2.625.703ZM325.725 198.039c-1.094 0-2.012-.168-2.75-.5-.73-.332-1.32-.727-1.766-1.188-.449-.457-.781-.875-1-1.25a21.62 21.62 0 0 1-.36-.656h-.093v11.047h-4.531v-25.625h3.844l.734 3.875h.094c.02-.082.117-.32.297-.719.175-.406.476-.851.906-1.343.426-.489 1.015-.91 1.765-1.266.75-.363 1.688-.547 2.813-.547 1.781 0 3.207.39 4.281 1.172 1.082.773 1.875 1.852 2.375 3.234.508 1.375.766 2.97.766 4.782 0 1.843-.262 3.437-.781 4.78-.524 1.337-1.325 2.372-2.407 3.11-1.074.727-2.468 1.094-4.187 1.094Zm-1.344-3.719c1.207 0 2.133-.25 2.781-.75a3.866 3.866 0 0 0 1.328-1.984c.25-.82.375-1.68.375-2.578 0-.883-.132-1.727-.39-2.532a3.788 3.788 0 0 0-1.406-1.953c-.668-.488-1.594-.734-2.782-.734-1.062 0-1.93.227-2.593.672-.657.45-1.137 1.07-1.438 1.86-.305.792-.453 1.687-.453 2.687 0 1.043.156 1.96.469 2.75a4.01 4.01 0 0 0 1.5 1.875c.675.46 1.547.687 2.61.687ZM336.203 197.601v-24.296h4.531v10.406h.078c.032-.094.13-.332.297-.719.176-.383.477-.82.906-1.312.438-.489 1.02-.91 1.75-1.266.739-.363 1.672-.547 2.797-.547 1.227 0 2.242.219 3.047.656.813.43 1.453.985 1.922 1.672a7.22 7.22 0 0 1 1.047 2.266c.219.824.351 1.633.406 2.422.063.793.094 1.5.094 2.125v8.593h-4.281v-8.625c0-.957-.094-1.82-.282-2.593-.187-.782-.558-1.414-1.109-1.907-.543-.488-1.371-.734-2.484-.734-1.125 0-1.993.274-2.594.813a4.081 4.081 0 0 0-1.25 2 9.377 9.377 0 0 0-.344 2.593v8.453Zm0 0"
        />
    </Svg>

)

export const Wallet = ({ title, titleId, color, ...props }: SvgProps & SVGRProps) => (
    <Svg
        width={35}
        height={35}
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        viewBox="0 0 24 24"
        {...props}
    >
        {title ? <title id={titleId}>{title}</title> : null}
        <Path
            stroke={color}
            d="M19 20H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2Z"
        />
        <Path
            fill={color}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 14a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Z"
        />
        <Path
            stroke={color}
            d="M18 7V5.603a2 2 0 0 0-2.515-1.932l-11 2.933A2 2 0 0 0 3 8.537V9"
        />
    </Svg>

)
