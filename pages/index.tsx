import React, { ReactNode } from "react";

export default function Homepage(): JSX.Element {
    return (
        <>
            <style jsx>{`
                .eezee{
                    color: #2A64DB;
                    font-size: 16px;
                }
            `}</style>

            <p className="eezee">
                Welcome to Eezee Take-home Assignment! Enjoy :)
            </p>
        </>
    )
}