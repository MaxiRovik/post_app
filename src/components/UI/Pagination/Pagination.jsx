import React from 'react';
import classes from './Pagination.module.css'

const Pagination = ({pagesSet}) => {
    return (
        <div  className={classes.wrapperBlock}>
            {pagesSet.map((e,i)=>
                <button className={classes.btn} key = {i}>{e}</button>
            )}
        </div>
    )
};
export default Pagination;