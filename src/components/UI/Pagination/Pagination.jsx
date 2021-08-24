import React from 'react';
import classes from './Pagination.module.css'

const Pagination = ({pagesSet, page, changePage}) => {
    return (
        <div  className={classes.wrapperBlock}>
            {pagesSet.map((p)=>
                <button
                    onClick={()=> changePage(p)}
                    className={page === p ? classes.btn__current : classes.btn}
                    key = {p}>{p}
                    </button>
            )}
        </div>
    )
};
export default Pagination;