import React from "react";

const Pagination=({totalJobs,JobsPerPage,clicking})=>{
    let pages=[];

    for (let i=1 ; i<=Math.ceil(totalJobs/JobsPerPage);i++){
        pages.push(i);
    }

    const onClickButton = (page) => {
        clicking(page)
    }
    return (
        <>
        {pages.map((page,index)=>{
            return <button key={index} onClick={onClickButton(page)}>{page}</button>
        })}</>
    )
}

export default Pagination