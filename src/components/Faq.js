import React, { useEffect, useState } from "react";
import ReactTooltip from 'react-tooltip';
import logo from '../static/img/seawolf_Logo/seawolf_Logo-02.png';
import draft from '../static/img/draft.jpeg';
import telexi_logo from '../static/img/rsz_telexi_blue_transparent.png';

import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

function Faq(props) {


    return (

    <div>
        <div>

            <div>
                <img className="telexi_logo"
                src={telexi_logo}
                alt=""
                />
            </div>

            <div className="faq_container">
            <h4 className="question_headers">What is telexi?</h4>
                <p className="paragraph">A compound of telephone and lexigram,
                <em> telexi </em>
                is a communication platform which seeks to improve
                mutual understanding between humans and dogs. </p>

            <hr/>
            <h4 className="question_headers">What is it...exactly?</h4>
                <p className="paragraph">Physically, <em>telexi </em>
                 is a series of manufactured tiles with embedded touch sensors
                and a speaker.</p>

                <p className="paragraph">The sensors enable <em>telexi </em>
                to receive and process touch events from dogs. </p>

                <p className="paragraph">When a dog touches a
                tile with its nose or paw, <em>telexi</em> interprets this
                touch as an intent and vocalizes the intent with an associated
                audio clip.</p>

            <hr/>
            <h4 className="question_headers">How does it work?</h4>

                <p className="paragraph">Consider a dog who’s conditioned to
                associate the word “water” with the real thing. When
                its trainer speaks “water”, the dog receives water. </p>

                <p className="paragraph">Now let's equip the trainer with
                <em> telexi</em>'s terminal and app.</p>

                <div>
                    <img className="draft"
                    src={draft}
                    alt="draft"
                    height="auto"
                    width="375px"/>
                </div>

                <p className="paragraph">The trainer plugs in the terminal, and connects
                it to the internet with the local wifi. </p>

                <p className="paragraph">Then, he opens the <em>telexi </em> app,
                where the trainer speaks "water" as the app records the voice and uploads the audio clip into the
                <em> telexi</em> terminal, which can now speak "water" from
                its position on the floor or wall. </p>

                <p className="paragraph">Now, the trainer is ready to attach a tile. The tile
                will serve as a visual representation of the word --
                in this case, "water". </p>

                <p className="paragraph">We must use unique
                shapes to distinguish between words. So, the trainer selects a shape
                and connects the tile to the <em>telexi </em> terminal.
                 </p>


                <p className="paragraph">If we activate
                the speaker to say “water” when the dog touches the
                tile, the dog can request water! </p>

            <div>
                <p className="paragraph">The dog has telephoned a lexigram!</p>
            </div>
            <hr/>

            <h4 className="question_headers">
            Ok, so the dog can “talk” but isn’t this a novelty? </h4>

                <p className="paragraph">True -- touching a pad to speak a word isn’t exactly
                remarkable. Products like these already exist. </p>

                <p className="paragraph">What separates <em>telexi</em> from traditional
                training buttons is the integration of software.</p>

                <p className="paragraph"><em>telexi</em> tracks touch events over time to visualize patterns
                which emerge in data; data which is profiled and
                sourced as a point of reference for dogs of the same
                breed, age, gender, and other criteria.</p>

                <p className="paragraph"><em>telexi</em> aims to equip trainers and researchers
                with a tool to help improve understanding of
                dog cognition, sourced from touch events from best
                friends around the world.</p>
            </div>


        </div>
        <div className="developed_container">

            <img className="developed_by_logo"
                src={logo}
                alt="seawolf software logo"/>

            <div className="row">
                <TwitterIcon className="col"/>
                <InstagramIcon className="col"/>
                <YouTubeIcon className="col"/>
            </div>

        </div>
    </div>

    )
}

export default Faq
