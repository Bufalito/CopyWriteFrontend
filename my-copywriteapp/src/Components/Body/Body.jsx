import React, { useEffect } from "react";
import "./Body.css";
import { useDispatch, useSelector } from "react-redux";
import { getTexts } from "../../Redux/Actions/Actions"


export default function Body() {
    const dispatch = useDispatch();
    const texts = useSelector((state) => state.texts)

    useEffect(() => {
        dispatch(getTexts())
    }, [])

    return (
        <section className="sectionGeneral">
            <div className="container">
                <p>Results:</p><br />
                <section className="sectionTexts">

                    {texts.length === 0 ?
                        <p>Response</p> :
                        texts.map((t) => {
                            return (
                                <p key={t.id} className={t.palindrome.toString()}>{t.content.charAt(0).toUpperCase() + t.content.slice(1)}</p>
                            )
                        })}
                    <span>Palindrome true:🟩</span>
                    <span>Palindrome false:🟥</span>

                </section>
            </div>
        </section>
    )
}