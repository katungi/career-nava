import React from 'react';
import SessionContents from '~/components/sections/session-content';
import SessionsHeader from '~/components/sections/session-header';

export default function Sessions() {
    
    return (
        <div className="p-4 mx-8">
            <SessionsHeader />
            <SessionContents />
        </div>
    )
}

