import React from 'react'

const data = [
    {
        title: "React",
    },
    {
        title: "Next.js",
    },
    {
        title: "Typescript",
    },
    {
        title: "Nest.js",
    },
    {
        title: "PostgreSQL",
    },
    {
        title: "Tailwindcss",
    },
    {
        title: "Figma",
    },
    {
        title: "Cypress",
    },
    {
        title: "Storybook",
    },
    {
        title: "Git",
    },
];

function Software() {
    return (
        <div className='py-1 px-5 flex flex-wrap'>
            {
                data.map(({ title }, index) => (
                    <div key={index} className='m-2 p-2 bg-[#374151] text-[#d1d5db] rounded'>
                        {title}
                    </div>
                ))
            }
        </div>
    )
}

export default Software

