import React, { useEffect, useState } from "react";
import ReactTooltip from 'react-tooltip';



function Faq(props) {


    return (


        <div>
            <h2 className="faq_header">FAQ</h2>

            <div className="faq_container">
            <h4 className="faq_question_headers">What is telexi?</h4>
                <p className="faq_paragraph">A compound of telephone and lexigram,
                <em> telexi </em>
                is a communication platform which seeks to improve
                mutual understanding between humans and dogs. </p>

            <hr/>
            <h4 className="faq_question_headers">What is it...exactly?</h4>
                <p className="faq_paragraph">Physically, <em>telexi </em>
                 is a series of manufactured tiles with embedded touch sensors
                and a speaker.</p>

                <p className="faq_paragraph">The sensors enable <em>telexi </em>
                to receive and process touch events from dogs. </p>

                <p className="faq_paragraph">When a dog touches a
                tile with its nose or paw, <em>telexi</em> interprets this
                touch as an intent and vocalizes the intent with an associated
                audio clip.</p>

            <hr/>
            <h4 className="faq_question_headers">How does it work?</h4>

                <p className="faq_paragraph">Consider a dog who’s conditioned to
                associate the word “water” with the real thing. When
                its trainer speaks “water”, the dog receives water. </p>

                <p className="faq_paragraph">Now let's equip the trainer with a
                <em> telexi</em>-enabled device.</p>

                <p className="faq_paragraph">The trainer records their own voice saying
                “water” and uploads the audio to <em> telexi</em>, which can now speak
                the word "water" from its position on the floor or wall. </p>

                <p className="faq_paragraph">Now, the trainer connects a tile
                shaped like something unique, what
                linguists call a lexigram, into the <em> telexi</em>-enabled device to serve as a visual representation of the word "water".
                 </p>


                <p className="faq_paragraph">If we activate
                the speaker to say “water” when the dog touches the
                tile, the dog can request water! </p>

            <div>
                <p>The dog has telephoned a lexigram!</p>
            </div>
            <hr/>

            <h4 className="faq_question_headers">
            Ok, so the dog can “talk” but isn’t this a novelty? </h4>

                <p className="faq_paragraph">True -- touching a pad to speak a word isn’t exactly
                remarkable. Products like these already exist. </p>

                <p className="faq_paragraph">What separates <em>telexi</em> from traditional
                training buttons is the integration of software.</p>

                <p className="faq_paragraph"><em>telexi</em> tracks touch events over time to visualize patterns
                which emerge in data; data which is profiled and
                sourced as a point of reference for dogs of the same
                breed, age, gender, and other criteria.</p>

                <p className="faq_paragraph"><em>telexi</em> aims to equip trainers and researchers
                with a tool to help improve understanding of
                dog cognition, sourced from touch events from our own best
                friends around the world.</p>
            </div>
        </div>

    )
}

export default Faq
