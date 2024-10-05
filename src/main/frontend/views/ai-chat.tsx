import React, {useState} from 'react';
import {Button, TextField} from "@vaadin/react-components";
import {AiService } from "Frontend/generated/endpoints";
import Markdown from "react-markdown";

function AiChat() {
    const [prompt, setPrompt] = useState<string>("");
    const [response, setResponse] = useState<string>("")

    async function send() {

        // @ts-ignore
        setResponse(await AiService.getCompletion(prompt).onNext(token => setResponse(res  => res+token)))
    }
    return (
        <div>
            <h1>Ai chat</h1>

            <div>
                <TextField placeholder="Ask me anything" value={prompt} onInput={(e : any ) => setPrompt(e.target.value)}></TextField>
                <Button onClick={send}>Send</Button>
            </div>

            <Markdown>{response}</Markdown>
        </div>
    );
}

export default AiChat;