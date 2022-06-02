type Props = {
    readonly text: string
}

export const Headline: React.FC<Props> = ({ text }) => {
    return  <h3 className="headline drop-shadow-xl text-2xl text-black text-left my-4 basis-full">{text}</h3>
}