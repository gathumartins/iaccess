import React from 'react';
import { withPrefix } from 'gatsby';

export const onRenderBody = ({ setPostBodyComponents }) => {
    setPostBodyComponents([
    <script key={`Script001`} src="https://ibot.co.ke/assets/modules/channel-web/inject.js"></script>,
    <script key={`Script002`} src={withPrefix('js/script.js')} type="text/javascript" />
    ])
}