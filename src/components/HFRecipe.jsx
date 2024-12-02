import Markdown from "react-markdown"

export default function HFRecipe(props){
    return (
        <section>   <h1>Chef's Response</h1>
                    <Markdown>{props.recipe}</Markdown>
        </section>
    )
}